# Types

TypeScript is a typed superset of JavaScript.
TypeScript added optional static type annotations to JavaScript in order to transform it into a strongly typed programming language.

TypeScript's type analysis occurs entirely at compile time and adds no runtime overhead to program execution.

## Optional static type annotation

When no type annotations are available, TypeScript will try to guess the type of the variable by examining the assigned values.
This process in which types are automatically detected is known as **type inference**.

## Variables, basic types, and operators

| Data Type | Description |
| --- | --- |
| Boolean | var isDone: boolean = false; |
| Number | As in JavaScript, all numbers in TypeScript are floating point values. var height: number = 6; |
| String | You use the string data type to represent text in TypeScript. |
| Array | |
| Enum | An enum is a way of giving more friendly names to sets of numeric values. |
| Any | The any type is used to represent any JavaScript value. |
| Void | The opposite in some ways to any is `void`, the absence of having any type at all. |

In TypeScript, we will not be able to use `null` or `undefined` as types.

### Var, let, and const

When we declare a variable in TypeScript, we can use the `var`, `let`, or `const` keywords.

Variables declared with `var` are scoped to the nearest function block (or global, if outside a function block).

Variables declared with `let` are scoped to the nearest enclosing block (or global, if outside any block), which can be smaller than a function block.

The `const` keyword creates a constant that can be global or local to the block in which it is declared.
This means that constants are block scoped.

### Union types

Union types are used to declare a variable that is able to store a value of two or more types.

### Type guards

We can examine the type of an expression at runtime by using the `typeof` or `instanceof` operators.

### Type aliases

TypeScript allows us to declare type aliases by using the `type` keyword.
```typescript
type MyNumber = number;
```

### Ambient declarations

Ambient declaration allows you to create a variable in your TypeScript code that will not be translated into JavaScript at compilation time.
This feature was designed to facilitate integration with the existing JavaScript code, the **DOM**, and **BOM**.

When we access DOM or BOM objects, we don't get an error because these objects have already been declared in a special TypeScript file known as **declaration files**.
You can use the declare operator to create an ambient declaration.

TypeScript includes, by default, a file named `lib.d.ts` that provides interface declarations for the built-in JavaScript library as well as the DOM.

Declaration files use file extension `.d.ts` and are used to increase the TypeScript compatibility with third-party libraries and runtime environments such as Node.js or a Web browser.

### Functions

TypeScript function can be created either as a named function or as an anonymous function.

### Classes

When we declare a class in TypeScript, all the methods and properties are public by default.

When we refer to one of the members of the class (from within itself) we prepend the `this` operator.
The `this` operator denotes that it's a member access.
