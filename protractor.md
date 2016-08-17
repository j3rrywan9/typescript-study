# Protractor

Protractor is a Node.js program.
To run, you will need to have Node.js installed.
You will download Protractor package using npm, which comes with Node.js.

By default, Protractor uses the Jasmine test framework for its testing interface.

## Setup

```bash
sudo npm install -g protractor
```

The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running.

```bash
sudo webdriver-manager update
```

Now start up a server with

```bash
webdriver-manager start
```

Protractor needs two files to run, a **spec file** and a **configuration file**.
