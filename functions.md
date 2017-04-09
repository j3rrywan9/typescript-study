# Working with Functions

## JavaScript

The `function` keyword is used to define functions.
The function name is followed by a comma-separated list of parameter names in parentheses.

## Working with functions in TypeScript

The interpreter can evaluate a function declaration as it is being parsed.
On the other hand, the function expression is part of an assignment and will not be evaluated until the the assignment
has been completed.

### Functions with optional parameters

TypeScript features optional parameters in functions to help us to increase the flexibility of our functions.
We can indicate to TypeScript that we want a function's parameter to be optional by appending the character `?` to its
name.

```typescript
function add(foo: number, bar: number, foobar?: number): number {}
```

It is important to note that the optional parameters must always be located after the required parameters in function's
parameters list.

### Functions with default parameters

To indicate that a function parameter is optional, we just need to provide a default value using the `=` operator when
declaring the function's signature.

### Functions with rest parameters

