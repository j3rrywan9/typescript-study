# Automating Your Development Workflow

##

## Package management tools

### npm

npm uses a configuration file, called `package.json`, to store references to all the dependencies in our application.
It is important to remember that we will normally use npm to install dependencies that we will use on the server side,
in a desktop application, or with development tools.

The `npm install` command takes the name of one or multiple dependencies separated by a single space as an argument and
a second argument to indicate the scope of the installation.

The scope can be:
* A dependency at development time (testing frameworks, compilers, and so on)
* A dependency at runtime (a Web framework, database ORMs, and so on)

To install a global dependency, we will use the `-g` argument:
```bash
sudo npm install -g typescript
```

All the npm packages will saved under the `node_modules` directory.
We should add the `node_modules` directory to our `.gitignore` file as it is recommended to avoid saving the
application's dependencies into source control.

The next time we clone our repository, we will need to download all our dependencies again, but to do so, we will only
need to execute the `npm install` command without any parameters:
```bash
npm install
```
The package manager will then search for the `package.json` file and install all the declared dependencies.

### Bower

Bower is another package management tool.

### Typings

The type definition files usually contian the type declarations of third-party libraries.
These files facilitate the integration between the existing JavaScript libraries and TypeScript.

If we want to invoke the jQuery in a TypeScript file, we need to add a reference to the jQuery type definition file in our TypeScript code, as shown in
the following line of code:
```typescript
/// <reference path="jquery.d.ts">
```

A declaration file is a special type of file used by the TypeScript compiler.
It is marked with a `.d.ts` extension, and is then used by the TypeScript compiler within compilation step.
Declaration files are similar to header files used in other language; they simply describe the syntax and structure of
available functions and properties, but do not provide an implementation.

[Typings](https://github.com/typings/typings) is the simple way to manage and install TypeScript definitions.
It uses `typings.json`, which can resolve to the Typings Registry, GitHub, npm, Bower, HTTP and local files.

```bash
typings init

typings install debug --save
```

## Task runners

A task runner is a tool used to automate tasks in the development process.
The two most popular JavaScript task runners these days are Grunt and Gulp.
