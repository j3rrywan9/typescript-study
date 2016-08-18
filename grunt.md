# Grunt

Grunt is a JavaScript task runner.
Almost any task can be automated with Grunt and many plugins (tasks) already exist that can be installed and used in
your project.

### Installing Grunt CLI

```bash
sudo npm install -g grunt
```


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
