# rest-in-peace-service

tombstone service for deprecated services. deployed at <https://rip.acdh.oeaw.ac.at>.

## how to edit content

use the admin ui at <https://rip.acdh.oeaw.ac.at/admin> (this will commit changes to the github
repository), or at <http://localhost:3000/admin> when developing locally (this will save changes to
the filesystem).

## visual snapshots

Generate snapshots in Ubuntu 26.04 with Node 26 and the installed Playwright version:

```sh
pnpm install --frozen-lockfile
pnpm run test:e2e:update-snapshots:docker --grep 'should not have visible changes'
```

Docker must be running. The command uses your local environment files, installs dependencies and
builds the app in a disposable container, then copies successful snapshot updates into
`e2e/snapshots/` for review. Host dependencies and build output are untouched. Additional Playwright
arguments, such as `--project chromium`, can be passed through the command.

CI also uses Ubuntu 26.04. Container and runner fonts can still differ; inspect any remaining
screenshot diffs in the `playwright-test-results` artifact before accepting baseline changes.
