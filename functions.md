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

