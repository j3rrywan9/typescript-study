# JavaScript: The Definitive Guide, 7th Edition

## Chapter 3. Types, Values, and Variables

### 3.1 Overview and Definitions

JavaScript types can be divided into two categories: *primitive types* and *object types*.

The special JavaScript values `null` and `undefined` are primitive values, but they are not numbers, strings, or booleans.
Each value is typically considered to be the sole member of its own special type.
ES6 adds a new special-purpose type, known as Symbol, that enables the definition of language extensions without harming backward compatibility.

Any JavaScript value that is not a number, a string, a boolean, a symbol, `null`, or `undefined` is an object.
An object (that is, a member of the type *object*) is a collection of *properties* where each property has a name and a value (either a primitive value or another object).

An ordinary JavaScript object is an unordered collection of named values.
The language also defines a special kind of object, known as an array, that represents an ordered collection of numbered values.
The JavaScript language includes special syntax for working with arrays, and arrays have some special behavior that distinguishes them from ordinary objects.

### 3.2 Numbers

### 3.3 Text

### 3.4 Boolean Values

### 3.5 `null` and `undefined`

### 3.6 Symbols

### 3.7 The Global Object

The *global object* is a regular JavaScript object that serves a very important purpose: the properties of this object are the globally defined identifiers that are available to a JavaScript program.
When the JavaScript interpreter starts (or whenever a web browser loads a new page), it creates a new global object and gives it an initial set of properties that define:
* Global constants like `undefined`, `Infinity`, and `NaN`

In Node, the global object has a property named `global` whose value is the global object itself, so you can always refer to the global object by the name `global` in Node programs.

In web browsers, the Window object serves as the global object for all JavaScript code contained in the browser window it represents.
This global Window object has a self-referential window property that can be used to refer to the global object.
The Window object defines the core global properties, but it also defines quite a few other globals that are specific to web browsers and client-side JavaScript.

### 3.8 Immutable Primitive Values and Mutable Object References

Primitives are also compared by value: two values are the same only if they have the same value.

### 3.9 Type Conversions

JavaScript is very flexible about the types of values it requires.
We've seen this for booleans: when JavaScript expects a boolean value, you may supply a value of any type, and JavaScript will convert it as needed.
Some values ("truthy" values) convert to `true` and others ("falsy" values) convert to `false`.

#### 3.9.2 Explicit Conversions

Although JavaScript performs many type conversions automatically, you may sometimes need to perform an explicit conversion, or you may prefer to make the conversions explicit to keep your code clearer.

### 3.10 Variable Declaration and Assignment

Before you can use a variable or constant in a JavaScript program, you must declare it.
In ES6 and later, this is done with the `let` and `const` keywords, which we explain next.
Prior to ES6, variables were declared with `var`, which is more idiosyncratic and is explained later on in this section.

#### Declarations with `let` and `const`

In modern JavaScript (ES6 and later), variables are declared with the `let` keyword, like this:
```js
let i;
let sum;
```
You can also declare multiple variables in a single `let` statement:
```js
let i, sum;
```
It is a good programming practice to assign an initial value to your variables when you declare them, when this is possible:
```js
let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x * x;
```
If you don't specify an initial value for a variable with the `let` statement, the variable is declared, but its value is `undefined` until your code assigns a value to it.

To declare a constant instead of a variable, use `const` instead of` let`.
`const` works just like `let` except that you must initialize the constant when you declare it:
```js
const H0 = 74;
const C = 299792.458;
const AU = 1.496E8;
```
As the name implies, constants cannot have their values changed, and any attempt to do so causes a TypeError to be thrown.

It may seem surprising, but you can also use `const` to declare the loop "variables" for `for/in` and `for/of` loops, as long as the body of the loop does not reassign a new value.
In this case, the `const` declaration is just saying that the value is constant for the duration of one loop iteration:
```js
for (const datum of data) console.log(datum);
for (const property in object) console.log(property);
```

##### Variable and constant scope

Roughly speaking, if a variable or constant is declared within a set of curly braces, then those curly braces delimit the region of code in which the variable or constant is defined (though of course it is not legal to reference a variable or constant from lines of code that execute before the let or const statement that declares thevariable).
Variables and constants declared as part of a `for`, `for/in`, or `for/of` loop have the loop body as their scope, even though they technically appear outside of the curly braces.

#### Variable Declarations with `var`

In versions of JavaScript before ES6, the only way to declare a variable is with the `var` keyword, and there is no way to declare constants.

#### Destructuring Assignment

ES6 implements a kind of compound declaration and assignment syntax known as *destructuring assignment*.
In a destructuring assignment, the value on the right-hand side of the equals sign is an array or object (a "structured" value), and the left-hand side specifies one or more variable names using a syntax that mimics array and object literal syntax.
When a destructuring assignment occurs, one or more values are extracted ("destructured") from the value on the right and stored into the variables named on the left.
Destructuring assignment is perhaps most commonly used to initialize variables as part of a `const`, `let`, or `var` declaration statement, but it can also be done in regular assignment expressions (with variables that have already been declared).

## Chapter 4. Expressions and Operators

An *expression* is a phrase of JavaScript that can be evaluated to produce a value.

### 4.1 Primary Expressions

The simplest expressions, known as *primary expressions*, are those that stand alone - they do not include any simpler expressions.
Primary expressions in JavaScript are constant or *literal* values, certain language keywords, and variable references.

### 4.2 Object and Array Initializers

### 4.3 Function Definition Expressions

A *function definition expression* defines a JavaScript function, and the value of such an expression is the newly defined function.
In a sense, a function definition expression is a "function literal" in the same way that an object initializer is an "object literal."
A function definition expression typically consists of the keyword `function` followed by a comma-separated list of zero or more identifiers (the parameter names) in parentheses and a block of JavaScript code (the function body) in curly braces.
For example:
```js
let sqaure = function (x) { return x * x; };
```
A function definition expression can also include a name for the function.
Functions can also be defined using a function statement rather than a function expression.
And in ES6 and later, function expressions can use a compact new "arrow function" syntax.

### 4.4 Property Access Expressions

A *property access expression* evaluates to the value of an object property or an array element.
JavaScript defines two syntaxes for property access:
```js
expression.identifier
expression[expression]
```
The first style of property access is an expression followed by a period and an identifier.
The expression specifies the object, and the identifier specifies the name of the desired property.
The second style of property access follows the first expression (the object or array) with another expression in square brackets.
This second expression specifies the name of the desired property or the index of the desired array element.

With either type of property access expression, the expression before the `.` or `[` is first evaluated.
If the value is `null` or `undefined`, the expression throws a `TypeError`, since these are the two JavaScript values that cannot have properties.
If the object expression is followed by a dot and an identifier, the value of the property named by that identifier is looked up and becomes the overall value of the expression.
If the object expression is followed by another expression in square brackets, that second expression is evaluated and converted to a string.
The overall value of the expression is then the value of the property named by that string.
In either case, if the named property does not exist, then the value of the property access expression is `undefined`.
The *.identifier* syntax is the simpler of the two property access options, but notice that it can only be used when the property you want to access has a name that is a legal identifier, and when you know the name when you write the program.
If the property name includes spaces or punctuation characters, or when it is a number (for arrays), you must use the square bracket notation.
Square brackets are also used when the property name is not static but is itself the result of a computation.

### 4.5 Invocation Expressions

### 4.6 Object Creation Expressions

### 4.7 Operator Overview

### 4.8 Arithmetic Expressions

### 4.9 Relational Expressions

## Chapter 5. Statements

Expressions are evaluated to produce a value, but statements are executed to make something happen.
One way to "make something happen" is to evaluate an expression that has side effects.
Expressions with side effects, such as assignments and function invocations, can stand alone as statements, and when used this way are known as expression statements.
A similar category of statements are the declaration statements that declare new variables and define new functions.
JavaScript programs are nothing more than a sequence of statements to execute.
By default, the JavaScript interpreter executes these statements one after another in the order they are written.

### 5.1 Expression Statements

## Chapter 6. Objects

### 6.1 Introduction to Objects

An object is a composite value: it aggregates multiple values (primitive values or other objects) and allows you to store and retrieve those values by name.

In addition to maintaining its own set of properties, a JavaScript object also inherits the properties of another object, known as its "prototype."
The methods of an object are typically inherited properties, and this "prototypal inheritance" is a key feature of JavaScript.

Any value in JavaScript that is not a string, a number, a Symbol, or `true`, `false`, `null`, or `undefined` is an object.
And even though strings, numbers, and booleans are not objects, they can behave like immutable objects.

### Creating Objects

#### Object Literals

The easiest way to create an object is to include an object literal in your JavaScript code.
In its simplest form, an *object literal* is a comma-separated list of colon-separated name: value pairs, enclosed within curly braces.
A property name is a JavaScript identifier or a string literal (the empty string is allowed).
A property value is anyJavaScript expression;
the value of the expression (it may be a primitive value or an object value) becomes the value of the property.

#### Prototypes

Almost every JavaScript object has a second JavaScript object associated with it.
This second object is known as a *prototype*, and the first object inherits properties from the prototype.

### Querying and Setting Properties

### Deleting Properties

The `delete` operator removes a property from an object.
Its single operand should be a property access expression.

### Testing Properties

### Enumerating Properties

Instead of testing for the existence of individual properties, we sometimes want to iterate through or obtain a list of all the properties of an object.
There are a few different ways to do this.

### 6.7 Extending Objects

A common operation in JavaScript programs is needing to copy the properties of one object to another object.

Finally, in ES6, this ability comes to the core JavaScript language in the form of `Object.assign()`.

One reason to assign properties from one object into another is when you have an object that defines default values for many properties and you want to copy those default properties into another object if a property by that name does not already exist in that object.
Using `Object.assign()` naively will not do what you want:
```javascript
Object.assign(o, defaults);  // overwrites everything in o with defaults
```
Instead, what you can do is to create a new object, copy the defaults into it, and then override those defaults with the properties in `o`:
```javascript
o = Object.assign({}, defaults, o);
```

### 6.8 Serializing Objects

Object *serialization* is the process of converting an object's state to a string from which it can later be restored.
The functions `JSON.stringify()` and `JSON.parse()` serialize and restore JavaScript objects.
These functions use the JSON data interchange format.

### 6.9 Object Methods

### 6.10 Extended Object Literal Syntax

#### 6.10.4 Spread Operator

In ES2018 and later, you can copy the properties of an existing object into a new object using the "spread operator"(`...`) inside an object literal:
```javascript
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height // => 175
```

## Chapter 7. Arrays

## Chapter 8. Functions

JavaScript function definitions can be nested within other functions,and they have access to any variables that are in scope where they are defined.
This means that JavaScript functions are closures, and it enables important and powerful programming techniques.

### 8.1 Defining Functions

The most straightforward way to define a JavaScript function is with the `function` keyword, which can be used as a declaration or as an expression.
ES6 defines an important new way to define functions without the function keyword: "arrow functions" have a particularly compact syntax and are useful when passing one function as an argument to another function.

#### 8.1.1 Function Declarations

One of the important things to understand about function declarations is that the name of the function becomes a variable whose value is the function itself.
Function declaration statements are "hoisted" to the top of the enclosing script, function, or block so that functions defined in this way may be invoked from code that appears before the definition.
Another way to say this is that all of the functions declared in a block of JavaScript code will be defined throughout that block, and they will be defined before the JavaScript interpreter begins to execute any of the code in that block.

#### 8.1.2 Function Expressions

Function expressions look a lot like function declarations, but they appear within the context of a larger expression or statement, and the name is optional.

Note that the function name is optional for functions defined as expressions, and most of the preceding function expressions we've shown omit it.
A function declaration actually declares a variable and assigns a function object to it.
A function expression, on the other hand, does not declare a variable: it is upto you to assign the newly defined function object to a constant or variable if you are going to need to refer to it multiple times.
It is a good practice to use `const` with function expressions so you don't accidentally overwrite your functions by assigning new values.

There is an important difference between defining a function `f()` with a function declaration and assigning a function to the variable `f` after creating it as an expression.
When you use the declaration form, the function objects are created before the code that contains them starts to run, and the definitions are hoisted so that you can call these functions from code that appears above the definition statement.
This is not true for functions defined as expressions, however: these functions do not exist until the expression that defines them are actually evaluated.
Furthermore, in order to invoke a function, you must be able to refer to it, and you can't refer to a function defined as an expression until it is assigned to a variable, so functions defined with expressions cannot be invoked before they are defined.

#### 8.1.3 Arrow Functions

In ES6, you can define functions using a particularly compact syntax known as "arrow functions."
This syntax is reminiscent of mathematical notation and uses an "arrow" (`=>`) to separate the function parameters from the function body.
The function keyword is not used, and, since arrow functions are expressions instead of statements, there is no need for a function name, either.
The general form of an arrow function is a comma-separated list of parameters in parentheses, followed by the `=>` arrow, followed by the function body in curly braces:
```js
const sum = (x, y) => { return x + y; };
```
But arrow functions support an even more compact syntax.
If the body of the function is a single return statement, you can omit the `return` keyword, the semicolon that goes with it, and the curly braces, and write the body of the function as the expression whose value is to be returned:
```js
const sum = (x, y) => x + y;
```
Furthermore, if an arrow function has exactly one parameter, you can omit the parentheses around the parameter list:
```js
const polynomial = x => x * x + 2 * x + 3;
```
Note, however, that an arrow function with no arguments at all must be written with an empty pair of parentheses:
```js
const constantFunc = () => 42;
```
Note that, when writing an arrow function, you must not put a new line between the function parameters and the `=>` arrow.

Also, if the body of your arrow function is a single `return` statement but the expression to be returned is an object literal, then you have to put the object literal inside parentheses to avoid syntactic ambiguity between the curly braces of a function body and the curly braces of an object literal:
```js
const f = x => { return { value: x }; };
const g = x => { { value: x } };
```

Arrow functions differ from functions defined in other ways in one critical way: they inherit the value of the `this` keyword from the environment in which they are defined rather than defining their own invocation context as functions defined in other ways do.
This is an important and very useful feature of arrow functions, and we'll return to it again later in this chapter.

#### 8.1.4 Nested Functions

In JavaScript, functions may be nested within other functions.

The interesting thing about nested functions is their variable scoping rules: they can access the parameters and variables of the function (or functions) they are nested within.

### 8.2 Invoking Functions

#### Function Invocation

#### Method Invocation

### Function Arguments and Parameters

JavaScript function definitions do not specify an expected type for the function parameters, and function invocations do not do any type checking on the argument values you pass.
In fact, JavaScript function invocations do not even check the number of arguments being passed.

#### Optional Parameters and Defaults

When a function is invoked with fewer arguments than declared parameters, the additional parameters are set to their default value, which is normally `undefined`.
It is often useful to write functions so that some arguments are optional.

Note that when designing functions with optional arguments, you should be sure to put the optional ones at the end of the argument list so that they can be omitted.
The programmer who calls your function cannot omit the first argument and pass the second: they would have to explicitly pass `undefined` as the first argument.

In ES6 and later, you can define a default value for each of your function parameters directly in the parameter list of your function.
Simply follow the parameter name with an equals sign and the default value to use when no argument is supplied for that parameter:
```js
function getPropertyNames(o, a = []) {
    for (let property in o) a.push(property);
    return a;
}
```

#### Rest Parameters and Variable-Length Argument Lists

Parameter defaults enable us to write functions that can be invoked with fewer arguments than parameters.
*Rest parameters* enable the opposite case: they allow us to write functions that can be invoked with arbitrarily more arguments than parameters.
Here is an example function that expects one or more numeric arguments and returns the largest one:
```js
function max(first=-Infinity, ...rest) {
    let maxValue = first;
    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    return maxValue;
}
```
A rest parameter is preceded by three periods, and it must be the last parameter in a function declaration.
When you invoke a function with a rest parameter, the arguments you pass are first assigned to the non-rest parameters, and then any remaining arguments (i.e., the "rest" of the arguments) are stored in an array that becomes the value of the rest parameter.
This last point is important: within the body of a function, the value of a rest parameter will always be an array.
The array may be empty, but a rest parameter will never be `undefined`.
(It follows from this that it is never useful - and not legal - to define a parameter default for a rest parameter.)

#### The Spread Operator for Function Calls

#### Destructuring Function Arguments into Parameters

When you invoke a function with a list of argument values, those values end up being assigned to the parameters declared in the function definition.
This initial phase of function invocation is a lot like variable assignment.
So it should not be surprising that we can use the techniques of destructuring assignment with functions.

## Chapter 9. Classes

## Chapter 10. Modules

Instead, ES6 defines modules using `import` and `export` keywords.
Although `import` and `export` have been part of the language for years, they were only implemented by web browsers and Node relatively recently.
And, as a practical matter, JavaScript modularity still depends on code-bundling tools.

### 10.1 Modules with Classes, Objects, and Closures

### 10.2 Modules in Node

In Node, each file is an independent module with a private namespace.
Constants, variables, functions, and classes defined in one file are private to that file unless the file exports them.
And values exported by one module are only visible in another module if that module explicitly imports them.

Node modules import other modules with the `require()` function and export their public API by setting properties of the `exports` object or by replacing the `module.exports` object entirely.

#### 10.2.1 Node Exports

Node defines a global exports object that is always defined.
If you are writing a Node module that exports multiple values, you can simply assign them to the properties of this object:
```javascript
const sum = (x, y) => x + y;
const square = x => x * x;

exports.mean = data => data.reduce(sum)/data.length;
exports.stddev = function(d) {
  let m = exports.mean(d);
  return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1));
};
```
Often, however, you want to define a module that exports only a single function or class rather than an object full of functions or classes.
To do this, you simply assign the single value you want to export to `module.exports`:
```javascript
module.exports = class BitSet extends AbstractWritableSet {
  // implementation omitted
};
```
The default value of `module.exports` is the same object that `exports` refers to.
In the previous stats module, we could have assigned the `mean` function to `module.exports.mean` instead of `exports.mean`.
Another approach with modules like the stats module is to export a single object at the end of the module rather than exporting functions one by one as you go:
```javascript
// Define all the functions, public and private
const sum = (x, y) => x + y;
const square = x => x * x;
const mean = data => data.reduce(sum)/data.length;
const stddev = d => {
  let m = mean(d);
  return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1));
};
// Now export only the public ones
module.exports = { mean, stddev };
```

#### 10.2.2 Node Imports

A Node module imports another module by calling the `require()` function.
The argument to this function is the name of the module to be imported, and the return value is whatever value (typically a function, class, or object) that module exports.
If you want to import a system module built in to Node or a module that you have installed on your system via a package manager, then you simply use the unqualified name of the module, without any "/" characters that would turn it into a filesystem path:
```javascript
// These modules are built in to Node
const fs = require("fs");           // The built-in filesystem module
const http = require("http");       // The built-in HTTP module
// The Express HTTP server framework is a third-party module.
// It is not part of Node but has been installed locally
const express = require("express");
```
When you want to import a module of your own code, the module name should be the path to the file that contains that code, relative to the current module's file.
It is legal to use absolute paths that begin with a `/` character, but typically, when importing modules that are part of your own program, the module names will begin with `./` or sometimes `../` to indicate that they are relative to the current directory or the parent directory.
For example:
```javascript
const stats = require('./stats.js');
const BitSet = require('./utils/bitset.js');
```
(You can also omit the `.js` suffix on the files you're importing and Node will still find the files, but it is common to see these file extensions explicitly included.)

When a module exports just a single function or class, all you have todo is require it.
When a module exports an object with multiple properties, you have a choice: you can import the entire object, or just import the specific properties (using destructuring assignment)of the object that you plan to use.
Compare these two approaches:
```javascript
// Import the entire stats object, with all of its functions
const stats = require('./stats.js');

// We've got more functions than we need, but they're neatly
// organized into a convenient "stats" namespace.
let average = stats.mean(data);

// Alternatively, we can use idiomatic destructuring assignment to import
// exactly the functions we want directly into the local namespace:
const { stddev } = require('./stats.js');

// This is nice and succinct, though we lose a bit of context
// without the 'stats' prefix as a namspace for the stddev() function.
let sd = stddev(data);
```

#### 10.2.3 Node-style Modules on the Web

Modules with an Exports object and a `require()` function are built in to Node.
But if you're willing to process your code with a bundling tool like webpack, then it is also possible to use this style of modules for code that is intended to run in web browsers.
Until recently, this was a very common thing to do, and you may see lots of web-based code that still does it.

Now that JavaScript has its own standard module syntax, however, developers who use bundlers are more likely to use the official JavaScript modules with `import` and `export` statements.

### 10.3 Modules in ES6

ES6 adds import and export keywords to JavaScript and finally supports real modularity as a core language feature.
ES6 modularity is conceptually the same as Node modularity: each file is its own module, and constants, variables, functions, and classes defined within a file are private to that module unless they are explicitly exported.
Values that are exported from one module are available for use in modules that explicitly import them.
ES6 modules differ from Node modules in the syntax used for exporting and importing and also in the way that modules are defined in web browsers.
The sections that follow explain these things in detail.

#### 10.3.1 ES6 Exports

To export a constant, variable, function, or class from an ES6 module, simply add the keyword `export` before the declaration:
```javascript
export const PI = Math.PI;

export function degreesToRadians(d) { return d * PI / 180; }

export class Circle {
  constructor(r) { this.r = r; }
  area() { return PI * this.r * this.r; }
}
```
As an alternative to scattering export keywords throughout your module, you can define your constants, variables, functions, and classes as you normally would, with no export statement, and then (typically at the end of your module) write a single `export` statement that declares exactly what is exported in a single place.
So instead of writing three individual exports in the preceding code, we could have equivalently written a single line at the end:
```javascript
export { Circle, degreesToRadians, PI };
```
This syntax looks like the `export` keyword followed by an object literal (using shorthand notation).
But in this case, the curly braces do not actually define an object literal.
This export syntax simply requires a comma-separated list of identifiers within curly braces.

It is common to write modules that export only one value (typically a function or class), and in this case, we usually use `export default` instead of `export`:
```javascript
export default class BitSet {
  // implementation omitted
}
```
Default exports are slightly easier to import than non-default exports, so when there is only one exported value, using `export default` makes things easier for the modules that use your exported value.

Regular exports with `export` can only be done on declarations that have a name.
Default exports with `export default` can export any expression including anonymous function expressions and anonymous class expressions.
This means that if you use export default, you can export object literals.
So unlike the export syntax, if you seecurly braces after export default, it really is an object literal that is being exported.

It is legal, but somewhat uncommon, for modules to have a set of regular exports and also a default export.
If a module has a default export, it can only have one.

Finally, note that the `export` keyword can only appear at the toplevel of your JavaScript code.
You may not export a value from within a class, function, loop, or conditional.
(This is an important feature of the ES6 module system and enables static analysis: a module's export will be the same on every run, and the symbols exported can be determined before the module is actually run.)

#### 10.3.2 ES6 Imports

You import values that have been exported by other modules with the `import` keyword.
The simplest form of import is used for modules that define a default export:
```javascript
import BitSet from './bitset.js';
```
This is the `import` keyword, followed by an identifier, followed by the `from` keyword, followed by a string literal that names the module`whose default export we are importing.
The default export value of the specified module becomes the value of the specified identifier in the current module.

The identifier to which the imported value is assigned is a constant, as if it had been declared with the `const` keyword.
Like exports, imports can only appear at the top level of a module and are not allowed within classes, functions, loops, or conditionals.
By near-universal convention, the imports needed by a module are placed at the start of the module.
Interestingly, however, this is not required: like function declarations, imports are "hoisted" to the top, and all imported values are available for any of the module's code runs.

#### 10.3.3 Imports and Exports with Renaming

#### 10.3.5 JavaScript Modules on the Web

As of early 2020, production code using ES6 modules is still generally bundled with a tool like webpack.
There are trade-offs to doing this,1but on the whole, code bundling tends to give better performance.
That may well change in the future as network speeds grow and browser vendors continue to optimize their ES6 module implementations.

## Chapter 11. The JavaScript Standard Library

### 11.3 Pattern Matching with Regular Expressions

A *regular expression* is an object that describes a textual pattern.
The JavaScript RegExp class represents regular expressions, and both String and RegExp define methods that use regular expressions to perform powerful pattern-matching and search-and-replace functions on text.
In order to use the RegExp API effectively, however, you must also learn how to describe patterns of text using the regular expression grammar, which is essentially a mini programming language of its own. Fortunately, the JavaScript regular expression grammar is quite similar to the grammar used by many other programming languages, so you may already be familiar with it.

#### 11.3.1 Defining Regular Expressions

In JavaScript, regular expressions are represented by RegExp objects.
RegExp objects may be created with the `RegExp()` constructor, of course, but they are more often created using a special literal syntax.
Just as string literals are specified as characters within quotation marks, regular expression literals are specified as characters within a pair of slash (`/`) characters.

Regular-expression pattern specifications consist of a series of characters.
Most characters, including all alphanumeric characters, simply describe characters to be matched literally.
Other characters in regular expressions are not matched literally but have special significance.

##### Literal characters

##### Character classes

Individual literal characters can be combined into *character classes* by placing them within square brackets.
A character class matches any one character that is contained within it.

Because certain character classes are commonly used, the JavaScript regular-expression syntax includes special characters and escape sequences to represent these common classes.

##### Repetition

Note that in all of these examples, the repetition specifiers apply to the single character or character class that precedes them.
If you want to match repetitions of more complicated expressions, you'll need to define a group with parentheses, which are explained in the following sections.

##### Non-greedy Repetition

##### Alternation, grouping, and references

The `|` character separates alternatives.
Note that alternatives are considered left to right until a match is found.
If the left alternative matches, the right alternative is ignored, even if it would have produced a "better" match.

Parentheses have several purposes in regular expressions.
One purpose is to group separate items into a single subexpression so that the items can be treated as a single unit by | , * , + , ?, and so on.

Another purpose of parentheses in regular expressions is to define subpatterns within the complete pattern.

## Chapter 13. Asynchronous JavaScript

JavaScript programs in a web browser are typically *event-driven*, meaning that they wait for the user to click or tap before they actually do anything.
And JavaScript-based servers typically wait for client requests to arrive over the network before they do anything.

### 13.1 Asynchronous Programming with Callbacks

At its most fundamental level, asynchronous programming in JavaScript is done with *callbacks*.
A callback is a function that you write and then pass to some other function.
That other function then invokes ("calls back") your function when some condition is met or some (asynchronous) event occurs.
The invocation of the callback function you provide notifies you of the condition or event, and sometimes, the invocation will include function arguments that provide additional details.

#### 13.1.1 Timers

#### 13.1.2 Events

Client-side JavaScript programs are almost universally event driven: rather than running some kind of predetermined computation, they typically wait for the user to do something and then respond to the user's actions.
The web browser generates an *event* when the user presses a key on the keyboard, moves the mouse, clicks a mouse button, or touches a touchscreen device.
Event-driven JavaScript programs register callback functions for specified types of events in specified contexts, and the web browser invokes those functions whenever the specified events occur.
These callback functions are called *event handlers* or *event listeners*, and they are registered with `addEventListener()`:
```js
let okay = document.querySelector('#confirmUpdateDialog button.okay');

okay.addEventListener('click', applyUpdate);
```

#### 13.1.3 Network Events

Another common source of asynchrony in JavaScript programming is network requests.

Client-side JavaScript code can use the `XMLHttpRequest` class plus callback functions to make HTTP requests and asynchronously handle the server's response when it arrives.

Typically, though, you can also register a single event listener by assigning it directly to a property of the object.
That is what we do in this example code, assigning functions to the `onload`, `onerror`, and `ontimeout` properties.
By convention, event listener properties like these always have names that begin with *on*.
`addEventListener()` is the more flexible technique because it allows for multiple event handlers.
But in cases where you are sure that no other code will need to register a listener for the same object and event type, it can be simpler to simply set the appropriate property to your callback.

#### 13.1.4 Callbacks and Events in Node

The Node.js server-side JavaScript environment is deeply asynchronous and defines many APIs that use callbacks and events.
The default API for reading the contents of a file, for example, is asynchronous and invokes a callback function when the contents of the file have been read:
```js
const fs = require("fs");

let option = {
  // default options would go here
}

// Read a configuration file, then call the callback function
fs.readFile("config.json", "utf-8", (err, text) => {
  if (err) {
    console.warn("Could not read config file:", err);
  } else {
    Object.assign(options, JSON.parse(text));
  }

  // In either case, we can now start running the program
  startProgram(options);
});
```
Node's `fs.readFile()` function takes a two-parameter callback as its last argument.
It reads the specified file asynchronously and then invokes the callback.
If the file was read successfully, it passes the file contents as the second callback argument.
If there was an error, it passes the error as the first callback argument.
In this example, we express the callback as an arrow function, which is a succinct and natural syntax for this kind of simple operation.

Node also defines a number of event-based APIs.
The following function shows how to make an HTTP request for the contents of a URL in Node.
It has two layers of asynchronous code handled with event listeners.
Notice that Node uses an `on()` method to register event listeners instead of `addEventListener()`:
```js
const https = require("https");

function getText(url, callback) {
  request = https.get(url);

  request.on("response", response => {
    let httpStatus = response.statusCode;

    response.setEncoding("utf-8");

    let body = "";

    response.on("data", chunk => { body += chunk; });

    response.on("end", () => {
      if (httpStatus === 200) {
        callback(null, body);
      } else {
        callback(httpStatus, null);
      }
    });
  });

  request.on("error", (err) => {
    callback(err, null);
  });
}
```

### 13.2 Promises

Now that we've seen examples of callback and event-based asynchronous programming in client-side and server-side JavaScript environments, we can introduce *Promises*, a core language feature designed to simplify asynchronous programming.

A Promise is an object that represents the result of an asynchronous computation.
That result may or may not be ready yet, and the Promise API is intentionally vague about this: there is no way to synchronously get the value of a Promise;
you can only ask the Promise to call a callback function when the value is ready.

Promises allow this kind of nested callback to be re-expressed as a more linear *Promise chain* that tends to be easier to read and easier to reason about. 

#### 13.2.1 Using Promises

You can think of the `then()` method as a callback registration method like the `addEventListener()` method used for registering event handlers in client-side JavaScript.
If you call the `then()` method of a Promise object multiple times, each of the functions you specify will be called when the promised computation is complete.

Unlike many event listeners, though, a Promise represents a single computation, and each function registered with `then()` will be invoked only once.

At a simple syntactical level, the `then()` method is the distinctive feature of Promises, and it is idiomatic to append `.then()` directly to the function invocation that returns the Promise, without the intermediate step of assigning the Promise object to a variable.

It is also idiomatic to name functions that return Promises and functions that use the results of Promises with verbs, and these idioms lead to code that is particularly easy to read:
```js
function displayUserProfile(profile) {}

getJSON("/api/user/profile").then(displayUserProfile);
```

##### Handling errors with Promises

A Promise represents the future result of an asynchronous computation that occurs after the Promise object is created.
Because the computation is performed after the Promise object is returned to us, there is no way that the computation can traditionally return a value or throw an exception that we can catch.
The functions that we pass to `then()` provide alternatives.
When a synchronous computation completes normally, it simply returns its result to its caller.
When a Promise-based asynchronous computation completes normally, it passes its result to the function that is the first argument to `then()`.

When something goes wrong in a synchronous computation, it throws an exception that propagates up the call stack until there is a `catch` clause to handle it.
When an asynchronous computation runs, its caller is no longer on the stack, so if something goes wrong, it is simply not possible to throw an exception back to the caller.

Instead, Promise-based asynchronous computations pass the exception (typically as an Error object of some kind, though this is not required) to the second function passed to `then()`.

In practice, it is rare to see two functions passed to `then()`.
There is a better and more idiomatic way of handling errors when working with Promises.

The more idiomatic way to handle errors in this code looks like this:
```js
getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError);
```
The `catch()` method is just a shorthand for calling `then()` with a `null` first argument and the specified error handler function as the second argument. 

#### 13.2.2 Chaining Promises

One of the most important benefits of Promises is that they provide a natural way to express a sequence of asynchronous operations as a linear chain of `then()` method invocations, without having to nest each operation within the callback of the previous one.

In its simplest form, this new HTTP API is just the function `fetch()`.
You pass it a URL, and it returns a Promise.
That promise is fulfilled when the HTTP response begins to arrive and the HTTP status and headers are available:
```js
fetch("/api/user/profile").then(response => {
  // When the promise resolves, we have status and headers
  if (response.ok && response.headers.get("Content-Type") === "application/json") {
  }
});
```
When the Promise returned by `fetch()` is fulfilled, it passes a Response object to the function you passed to its `then()` method.
This response object gives you access to request status and headers, and it also defines methods like `text()` and `json()`, which
give you access to the body of the response in text and JSON-parsed forms, respectively.
But although the initial Promise is fulfilled, the body of the response may not yet have arrived.
So these `text()` and `json()` methods for accessing the body of the response themselves return Promises.

The preferred idiom is to use Promises in a sequential chain with code like this:
```js
fetch("/api/user/profile")
  .then(response => {
    return response.json();
  })
  .then(profile => {
    displayUserProfile(profile);
  });
```
Let's look at the method invocations in this code, ignoring the arguments that are passed to the methods:
```js
fetch().then().then()
```
When more than one method is invoked in a single expression like this, we call it a *method chain*.

Sometimes, when an API is designed to use this kind of method chaining, there is just a single object, and each method of that object returns the object itself in order to facilitate chaining.
That is not how Promises work, however.
When we write a chain of `.then()` invocations, we are not registering multiple callbacks on a single Promise object.
Instead, each invocation of the `then()` method returns a new Promise object.
That new Promise object is not fulfilled until the function passed to `then()` is complete.

#### 13.2.3 Resolving Promises

When you pass a callback `c` to the `then()` method, `then()` returns a Promise `p` and arranges to asynchronously invoke `c` at some later time.
The callback performs some computation and returns a value `v`.
When the callback returns, `p` is resolved with the value `v`.
When a Promise is resolved with a value that is not itself a Promise, it is immediately fulfilled with that value.
So if `c` returns a non-Promise, that return value becomes the value of `p`, `p` is fulfilled and we are done.
But if the return value `v` is itself a Promise, then `p` is *resolved but not yet fulfilled*.
At this stage, `p` cannot settle until the Promise `v` settles.
If `v` is fulfilled, then `p` will be fulfilled to the same value.
If `v` is rejected, then `p` will be rejected for the same reason.
This is what the "resolved" state of a Promise means: the Promise has become associated with, or "locked onto," another Promise.
We don't know yet whether `p` will be fulfilled or rejected, but our callback `c` no longer has any control over that.
`p` is "resolved" in the sense that its fate now depends entirely on what happens to Promise `v`.

#### 13.2.4 More on Promises and Errors

#### 13.2.5 Promises in Parallel

#### 13.2.6 Making Promises

Functions written to return Promises really are quite useful, and this section shows how you can create your own Promise-based APIs.

##### Promises based on other Promises

It is easy to write a function that returns a Promise if you have some other Promise-returning function to start with.
Given a Promise, you can always create (and return) a new one by calling `.then()`.

##### Promises based on sychronous values

Sometimes, you may need to implement an existing Promise-based API and return a Promise from a function, even though the computation to be performed does not actually require any asynchronous operations.
In that case, the static methods `Promise.resolve()` and `Promise.reject()` will do what you want.
`Promise.resolve()` takes a value as its single argument and returns a Promise that will immediately (but asynchronously) be fulfilled to that value.

##### Promises from scratch

But what about writing a Promise-returning function when you can't use another Promise-returning function as the starting point?
In that case, you use the `Promise()` constructor to create a new Promise object that you have complete control over.
Here's how it works: you invoke the `Promise()` constructor and pass a function as its only argument.
The function you pass should be written to expect two parameters, which, by convention, should be named `resolve` and `reject`.
After calling your function, the `Promise()` constructor returns the newly created Promise.
That returned Promise is under the control of the function you passed to the constructor.
That function should perform some asynchronous operation and then call the `resolve` function to resolve or fulfill the returned Promise or call the `reject` function to reject the returned Promise.
Your function does not have to be asynchronous: it can call `resolve` or `reject` synchronously, but the Promise will still be resolved, fulfilled, or rejected asynchronously if you do this.

#### 13.2.7 Promises in Sequence

### 13.3 `async` and `await`

ES2017 introduces two new keywords - `async` and `await` - that represent a paradigm shift in asynchronous JavaScript programming.
These new keywords dramatically simplify the use of Promises and allow us to write Promise-based, asynchronous code that looks like synchronous code that blocks while waiting for network responses or other asynchronous events.
Although it is still important to understand how Promises work, much of their complexity (and sometimes even their very presence!) vanishes when you use them with `async` and `await`.

As we discussed earlier in the chapter, asynchronous code can't return a value or throw an exception the way that regular synchronous code can.
And this is why Promises are designed the way the are.
The value of a fulfilled Promise is like the return value of a synchronous function.
And the value of a rejected Promise is like a value thrown by a synchronous function.
This latter similarity is made explicit by the naming of the `.catch()` method.
`async` and `await` take efficient, Promise-based code and hide the Promises so that your asynchronous code can be easy to read and as easy to reason about as inefficient, blocking, synchronous code.

#### 13.3.1 `await` Expressions

The `await` keyword takes a Promise and turns it back into a return value or a thrown exception.
Given a Promise object `p`, the expression `await p` waits until `p` settles.
If `p` fulfills, then the value of `await p` is the fulfillment value of `p`.
On the other hand, if `p` is rejected, then the `await p` expression throws the rejection value of `p`.
We don't usually use `await` with a variable that holds a Promise; instead, we use it before the invocation of a function that returns a Promise:
```js
let response = await fetch("/api/user/profile");
let profile = await response.json();
```
It is critical to understand right away that the `await` keyword does not cause your program to block and literally do nothing until the specified Promise settles.
The code remains asynchronous, and the `await` simply disguises this fact.
This means that *any code that uses await is itself asynchronous*.

#### 13.3.2 `async` Functions

Because any code that uses `await` is asynchronous, there is one critical rule: you can only use the `await` keyword within functions that have been declared with the `async` keyword.
Here's a version of the `getHighScore()` function from earlier in the chapter, rewritten to use `async` and `await`:
```js
async function getHighScore() {
  let response = await fetch("/api/user/profile");
  let profile = await response.json();
  return profile.highScore;
}
```
Declaring a function `async` means that the return value of the function will be a Promise even if no Promise-related code appears in the body of the function.
If an `async` function appears to return normally, then the Promise object that is the real return value of the function will resolve to that apparent return value.
And if an `async` function appears to throw an exception, then the Promise object that it returns will be rejected with that exception.

But remember, that line of code will only work if it is inside another `async` function!
You can nest `await` expressions within `async` functions as deeply as you want.
But if you're at the top level or are inside a function that is not `async` for some reason, then you can't use `await` and have to deal with a returned Promise in the regular way:
```js
getHighScore().then(displayHighScore).catch(console.error);
```

#### 13.3.3 Awaiting Multiple Promises

In order to await a set of concurrently executing async functions, we use `Promise.all()` just as we would if working with Promises directly:
```js
let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);
```

#### 13.3.4 Implementation Details

Supppose you write an `async` function like this:
```js
async function f(x) { /* body */ }
```
You can think about this as a Promise-returning function wrapped around the body of your original function:
```js
function f(x) {
  return new Promise(function(resolve, reject) {
    try {
      resolve((function(x) { /* body */ })(x));
    }
    catch(e) {
      reject(e);
    }
  });
}
```

### 13.4 Asynchronous Iteration

## Chapter 14. Metaprogramming

## Chapter 15. JavaScript in Web Browsers

### 15.11 Networking

But in addition to being able to make network requests in response to user actions, web browsers also expose JavaScript APIs for networking as well.

This section covers three networking APIs:
* The `fetch()` method defines a Promise-based API for making HTTP and HTTPS requests.

#### 15.11.1 `fetch()`

## Chapter 16. Server-Side JavaScript with Node

Node is JavaScript with bindings to the underlying operating system, making it possible to write JavaScript programs that read and write files, execute child processes, and communicate over the network.

The defining feature of Node is its single-threaded event-based concurrency enabled by an asynchronous-by-default API.
