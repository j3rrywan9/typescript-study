# Classes

## Classes

Since TypeScript is based on ES6, developers are allowed to use class-based object orientation today, and compile them down to JavaScript that works across all major browsers and platforms, without having to wait for the next version of JavaScript.

Note that the TypeScript compiler will take care of generating compatible ECMAScript 3 or ECMAScript 5 JavaScript code when we use these language features.
In this way, TypeScript programmers have the benefit of using these advanced object-oriented techniques in their code today.

A class is a definition of an object, what data it holds, and what operations it can perform.
Classes and interfaces form the cornerstone of the principles of object-oriented programming, and often work together in design patterns.
```typescript
class SimpleClass {
  id: number;
  print(): void {
    console.log(`SimpleClass.print() called`);
  }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.print();
```

## Interfaces

An interface provides us with a mechanism to define what properties and methods an object must implement, and is, therefore, a way of defining a custom type.

## Class modifiers

TypeScript introduces the `public` and `private` access modifiers to mark class variables and functions and functions as either `public` or `private`.
Additionally, we can also use the `protected` access modifier.

## Constructor access modifiers

TypeScript also introduces a shorthand version of the constructor function, allowing you to specify parameters with access modifiers directory in the constructor.

