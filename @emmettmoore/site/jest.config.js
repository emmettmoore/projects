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
