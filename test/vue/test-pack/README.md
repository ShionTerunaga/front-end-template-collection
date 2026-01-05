## Test pack — running the local template generator end-to-end

This folder contains convenience scripts to exercise the local
`create-react-template` generator and verify generated projects build and test
successfully. The scripts create temporary example projects, install
dependencies, build them, and run their tests so you can validate templates on
your machine or CI.

Prerequisites

- Node.js (recommended LTS) and `pnpm` installed.
- `npx`/`tsx` are used to run the local generator; `npx` will fetch `tsx` if
  needed.

Where to run

- Run the commands from this directory (project root:
  `../create-react-template/test-pack`).

Scripts

- `pnpm run test:next-app` — generate a `next-app-test` project using the
  `next/app` template, install dependencies, build the project, and run its
  tests.

- `pnpm run test:next-pages` — generate a `next-pages-test` project using the
  `next/pages` template, install dependencies, build, and run tests.

- `pnpm run test:tanstack` — generate a `tanstack-test` project using the
  `tanstack-router` template, install dependencies, build, and run tests.

Implementation notes

- Each script removes any previous test folder before generating a fresh
  project.
- The generator is invoked with `npx tsx ../src/create-template/index.ts` so the
  local TypeScript entry is executed directly. This lets you validate the
  generator without publishing it.

Quick manual run

- If you only want to inspect output without installing deps, run the generator
  directly:

```bash
npx tsx ../src/create-template/index.ts -n my-test-project -f next/app
# then inspect the generated folder:
cd my-test-project
```

Troubleshooting

- If a test fails during `pnpm install` or `pnpm build`, check the generated
  project's `package.json` and `pnpm-lock.yaml` for incompatible versions and
  ensure your Node.js / pnpm versions are compatible.
- If automated cleanup fails, remove the generated folder manually and re-run
  the script.
- If `tsx` is not available, install it globally (`pnpm add -g tsx`) or run via
  `npx tsx` as shown above.

CI integration

- These scripts are suitable for CI validation of the generator; ensure the CI
  runner has sufficient disk space and a recent Node.js + pnpm environment.

Contact

- If you hit environment-specific issues, collect the failing script output and
  attach it when requesting help.

---

Happy testing!
