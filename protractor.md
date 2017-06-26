# Protractor

Protractor is a Node.js program.
To run, you will need to have Node.js installed.
You will download Protractor package using npm, which comes with Node.js.

By default, Protractor uses the Jasmine test framework for its testing interface.

## Setup

```bash
sudo npm install -g protractor
```
This will install two command line tools, `protractor` and `webdriver-manager`.

The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running.
Use it to download the necessary binaries with:
```bash
sudo webdriver-manager update
```
Now start up a server with
```bash
webdriver-manager start
```
This will start up a Selenium Server and will output a bunch of info logs.

Protractor needs two files to run, a **spec file** and a **configuration file**.

## Setting Up the Selenium Server

When working with Protractor, you need to specify how to connect to the browser drivers which will start up and control the browsers you are testing on.

## Setting Up the Browser

Protractor works with Selenium WebDriver, a browser automation framework.

### Configuring Browsers

In your Protractor configuration file, all browser setup is done within the `capabilities` object.
This object is passed directly to the WebDriver builder.

## Choosing a Framework

Protractor supports two BDD test frameworks out of the box: Jasmine and Mocha.
These frameworks are based on JavaScript and Node.js and provide the syntax, scaffolding, and reporting tools you will use to write and manage your tests.

### Using Cucumber

If you would like to use the Cucumber test framework, download the dependencies with npm.

Set the `framework` property to `custom` by adding `framework: 'custom'` and `frameworkPath: 'node_modules/protractor-cucumber-framework'` to the configuration file.

