# Learning TypeScript

## Installation

Install Node.js v6.10.0 LTS
```bash
node --version
```

Upgrade npm
```bash
sudo npm install -g npm@4.4.1

npm --version
```

Install TypeScript
```bash
sudo npm install -g typescript@2.2

tsc --version
```

The `tsc` command is a console interface for the TypeScript compiler.
This command allows you to compile your TypeScript files into JavaScript files.

## Introduction to tsconfig.json

A TypeScript project does not have to contain a `tsconfig.json` file.
However, most editors rely on this file to recognize a TypeScript project with specified configurations and to provide related features.

A `tsconfig.json` file accepts three fields: `compilerOptions`, `files`, and `exclude`.

## Adding source map support

Source maps can help a lot while debugging, no matter for a debugger or for error stack traces from a log.

To have source map support, we need to enable the `sourceMap` compiler option in `tsconfig.json`.

## Downloading declarations using typings

JavaScript has a large and booming ecosystem.
As the bridge connecting TypeScript and other JavaScript libraries and frameworks, declaration files are playing a very important role.

With the help of declaration files, TypeScript developers can use existing JavaScript libraries with nearly the same experience as libraries written in TypeScript.

Thanks to the efforts of the TypeScript community, almost every popular JavaScript library or framework got its declaration files on a project called *DefinitelyTyped*.

### Installing typings

`typings` is just another Node.js package with a command-line interface like TypeScript compiler.

### Downloading declaration files

## Testing with Mocha and Istanbul

### Mocha and Chai

Mocha has been one of the most popular test frameworks for JavaScript, while Chai.js is a good choice as an assertion library.

## Testing in real browsers with Karma

