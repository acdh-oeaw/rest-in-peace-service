/**
 * Install git hooks, except in CI or outside a git repository (e.g. in docker builds).
 */

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

import isCI from "is-in-ci";

if (!isCI && existsSync(".git")) {
	execSync("lefthook install", { stdio: "inherit" });
}
