# Karma

## Installation

Karma runs on Node.js and is available as an NPM package.

## Generating the config file

The configuration file can be generated using `karma init`:
```bash
npm install

./node_modules/karma/bin/karma init
```

## Starting Karma

When starting Karma, the configuration file path can be passed as the first argument.

By default, Karma will look for `karma.conf.js` or `karma.conf.coffee` in the current directory.
```bash
./node_modules/karma/bin/karma start --single-run
```
