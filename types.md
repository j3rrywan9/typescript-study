# Types

TypeScript is a typed superset of JavaScript.
TypeScript added optional static type annotations to JavaScript in order to transform it into a strongly typed
programming language.

TypeScript's type analysis occurs entirely at compile time and adds no runtime overhead to program execution.

## Optional static type annotation

When no type annotations are available, TypeScript will try to guess the type of the variable by examining the assigned
value.

## Variables, basic types, and operators

| Data Type | Description |
| --- | --- |
| Boolean | var isDone: boolean = false; |
| Number | var height: number = 6; |
| String | |
| Array | |
| Enum | |
| Any | |
| Void | |

### Var, let, and const

When we declare a variable in TypeScript, we can use the `var`, `let`, or `const` keywords.

The `const` keyword creates a constant that can be global or local to the block in which it is declared.
This means that constants are block scoped.

### Union types

### Type guards

We can examine the type of an expression at runtime by using the `typeof` or `instanceof` operators.

### Type aliases

TypeScript allows us to declare type aliases by using the `type` keyword.

### Ambient declarations

### Functions

TypeScript function can be created either as a named function or as an anonymous function.

### Classes

When we declare a class in TypeScript, all the methods and properties are public by default.

When we refer to one of the members of the class (from within itself) we prepend the `this` operator.
The `this` operator denotes that it's a member access.
