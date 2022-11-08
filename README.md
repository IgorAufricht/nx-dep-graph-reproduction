# nx-dep-graph-reproduction

This repository shows a problem in the [nx](https://github.com/nrwl/nx) with the import path / npm package
misalignment and dependency graph generation.

The [main.ts](apps/test-app/src/main.ts) file contains imports of all 4 libraries,
but when `npm run dep-graph` is executed, the dependency graph only contains `lib1` and `lib2`.

Reproduction repo for https://github.com/nrwl/nx/issues/1843
