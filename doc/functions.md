# Working with Functions

## JavaScript

The `function` keyword is used to define functions.
The function name is followed by a comma-separated list of parameter names in parentheses.

## Working with functions in TypeScript

Just as in JavaScript, TypeScript functions can be created either as a named function or as an anonymous function.

In TypeScript we can add types to each of the parameters and then to the function itself to add a return type.

There is an alternative function syntax, which uses the arrow (`=>`) operator after the function's return type and skips the usage of the `function` keyword.
The functions declared using this syntax are commonly known as **arrow functions**.

The interpreter can evaluate a function declaration as it is being parsed.
On the other hand, the function expression is part of an assignment and will not be evaluated until the the assignment has been completed.

### Function return types

Using the very simple "syntactic sugar" TypeScript syntax, we can also define the type of a variable that a function should return.

Placing a type annotation after the function definition means that we are defining the return type of the entire function.

### Anonymous function

The JavaScript language also has the concept of anonymous functions.
These are functions that are defined on the fly and don't specify a function name.
```typescript
var addFunction = function(a: number, b: number): number {
    return a + b;
}
```
Here, we see that TypeScript allows anonymous functions in the same way that JavaScript does, but also allows standard type annotations.

### Functions with optional parameters

TypeScript features optional parameters in functions to help us to increase the flexibility of our functions.
We can indicate to TypeScript that we want a function's parameter to be optional by appending the character `?` to its
name.
```typescript
function add(foo: number, bar: number, foobar?: number): number {}
```
It is important to note that the optional parameters must always be located after the required parameters in function's parameters list.

### Functions with default parameters

To indicate that a function parameter is optional, we just need to provide a default value using the `=` operator when declaring the function's signature.

### Functions with rest parameters

The JavaScript language also allows a function to be called with a variable number of arguments.
Every JavaScript function has access to a special variable, named `arguments`, that can be used to retrieve all arguments that have been passed into the function.

In order to express the equivalent function definition in TypeScript, we will need to use a syntax that is known as the rest parameter syntax.
Rest parameters use the TypeScript syntax of three dots (`...`) in the function declaration to express a variable number of function parameters.

We can also combine normal parameters along with rest parameters in a function definition, as long as the rest parameters are the last to be defined in the parameter list.

### Function callbacks

A callback function is a function that is passed into another function, and is then generally invoked inside the function.

### Function signatures

The TypeScript "syntactic sugar" that enforces strong typing on normal variables, can also be used with callback functions.
In order to do this, TypeScript introduces a new syntax, named the fat arrow syntax, `() =>`.
When the fat arrow syntax is used, it means that one of the parameters to a function needs to be another function.
```typescript
function callBackFunction(text: string) {
    console.log(`inside callBackFunction ${text}`);
}

function doSomethingWithACallback(
    initialText: string,
    callback: (initialText: string) => void
) {
    console.log(`inside doSomethingWithACallback ${initialText}`);
    callback(initialText);
}
```
