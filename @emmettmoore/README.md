# @emmettmoore

Each folder is an npm workspace

## npm Workspace Basics

### `npm install`

This will install a dependency in all workspaces.

### `npm install --save new-dependency`

```sh
npm install --save new-dependency -w @emmettmoore/<workspace>
```

### `npm run`

```sh
npm run <workspace-script> -w @emmettmoore/<workspace>
```

### Cross-workspace dependencies

In order to reference code from another workspace, run:

```sh
npm install "./@emmettmoore/<dependency workspace>" -w @emmettmoore/<target workspace>
```

This will install the dependent workspace in the target workspace. You can see this referenced in the package.json for the target workspace.

You'll need to update tsconfig.json

```json
"paths": {
  "@emmettmoore/dependency/*": ["../target/src/*"],
}
```

Then you can import like this:

```ts
import { foo } from '@emmettmoore/dependency/someModule';
```

## Creating a new workspace package

1. Create directory for package
2. Add a package.json

```json
{
  "name": "@emmettmoore/<package-name>",
  "version": "...",
  "scripts": {
    "types": "tsc --noEmit"
  }
}
```

3. Add a `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": ".",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "isolatedModules": true,
    "jsx": "react",
    "module": "CommonJS",
    "moduleResolution": "node",
    "outDir": ".build",
    "paths": {
      "@emmettmoore/package-name/*": ["./src/*"]
    },
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "ES2016"
  },
  "include": [
    ".eslintrc.js",
    "jest.config.js",
    "**/*.js",
    "**/*.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [".build", "node_modules"]
}
```

4. Create a `src/` directory, which is where the `paths` field in the `tsconfig.json` references as the root of the folder.

5. Create a `jest.config.js` file:

```ts
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('ts-jest').JestConfigWithTsJest} */

const { pathsToModuleNameMapper } = require(`ts-jest`);
const { compilerOptions } = require(`./tsconfig`);

module.exports = {
  preset: `ts-jest`,
  testEnvironment: `node`,
  testPathIgnorePatterns: [`<rootDir>/node_modules/`, `<rootDir>/.build/`],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: `<rootDir>/`,
  }),
};
```
