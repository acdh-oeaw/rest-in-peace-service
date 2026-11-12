#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Resolve the installed version so browser binaries match the locked test runner.
playwright_version=$(node -p 'require("@playwright/test/package.json").version')
pnpm_version=$(node -p 'require("./package.json").packageManager.slice("pnpm@".length).split("+")[0]')
image="rest-in-peace-playwright:${playwright_version}-resolute"

docker build --file Dockerfile.playwright \
	--build-arg "PNPM_VERSION=$pnpm_version" \
	--build-arg "PLAYWRIGHT_VERSION=$playwright_version" --tag "$image" .

# Work in a disposable copy to avoid replacing host dependencies or build output.
# Only the snapshots are written back, owned by the invoking user.
docker run --rm --init --ipc=host \
	--user "$(id -u):$(id -g)" \
	--mount "type=bind,src=$PWD,dst=/source,readonly" \
	--mount "type=bind,src=$PWD/e2e/snapshots,dst=/snapshots" \
	"$image" bash -euo pipefail -c '
		cd "$(mktemp -d)"
		tar -C /source --exclude=./node_modules --exclude=./.git \
			--exclude=./dist --exclude=./.astro --exclude=./test-results \
			--exclude=./playwright-report -cf - . | tar -xf -
		export PUBLIC_APP_BASE_URL=http://localhost:3000
		pnpm install --frozen-lockfile
		pnpm run build
		pnpm run test:e2e:update-snapshots "$@"
		cp -R e2e/snapshots/. /snapshots/
	' bash "$@"
