# Grunt

Grunt is a JavaScript task runner.
Almost any task can be automated with Grunt and many plugins (tasks) already exist that can be installed and used in your project.

## Installing the CLI

In order to get started, you'll want to install Grunt's CLI globally.
```bash
sudo npm install -g grunt-cli
```
Note that installing `grunt-cli` does not install the Grunt task runner!
The job of the Grunt CLI is simple: run the version of Grunt which has been installed next a `Gruntfile`.
This allows multiple versions of Grunt to be installed on the same machine simultaneously.

## How the CLI works

Each time `grunt` is run, it looks for a locally installed Grunt using node's `require()` system.
Because of this, you can run `grunt` from any subfolder in your project.

If a locally installed Grunt is found, the CLI loads the local installation of the Grunt library, applies the configuration from your `Gruntfile`, and executes any tasks you've requested for it to run.

## The Gruntfile

The `Gruntfile.js` or `Gruntfile.coffee` file is a valid JavaScript or CoffeeScript file that belongs in the root directory of your project, next to the `package.json` file, and should be committed with your project source.

A `Gruntfile` is comprised of the following parts:
* The "wrapper" function
* Project and task configuration
* Loading Grunt plugins and tasks
* Custom tasks

### Common Grunt plugins and their purposes

#### Minifying JavaScript

Compression and minification is important to reduce file sizes and contribute to better loading times to improve
performance.
```bash
npm install grunt-contrib-uglify --save-dev
```

#### The minificaiton of CSS

The `contrib-cssmin` is a plugin to minify CSS files in order to reduce file size and increase performance.
It parses CSS files to remove whitespace, comments, empty style declarations, and blocks.
The parsed files are then output to minified destination files.
```bash
npm install grunt-contrib-cssmin --save-dev
```

```bash
npm install grunt-contrib-clean --save-dev
```

