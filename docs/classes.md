# Interfaces, Classes, and Inheritance

TypeScript also introduces object-oriented features that are similar to other languages, including interfaces, classes, and inheritance.
These object-oriented language constructs are part of the ECMAScript 6 standard, and as such will be included in future versions of JavaScript.
TypeScript allows us, therefore, to use these new object-oriented features from upcoming JavaScript versions in our code base.

Note that the TypeScript compiler will take care of generating compatible ECMAScript 3 or ECMAScript 5 JavaScript code when we use these language features.
In this way, TypeScript programmers have the benefit of using these advanced object-oriented techniques in their code today.

## Interfaces

An interface provides us with a mechanism to define what properties and methods an object must implement, and is, therefore, a way of defining a custom type.

Using this syntax, we can also strongly type a variable to be of an interface type.
This means that the variable must have the same properties as described in the interface.
If an object adheres to an interface, it is said that the object implements the interface.
Interfaces are defined by using the `interface` keyword.

### Optional properties

Interface definitions may also include optional properties, similar to the way that functions may have optional properties.
```typescript
interface IOptionalProp {
    id: number;
    name?: string;
}
```
The `?` character after the `name` property is used to specify that this property is optional.

### Interface compilation

Interfaces are a compile-time language feature of TypeScript, and the compiler does not generate any JavaScript code from interface that you include in your TypeScript projects.
Interfaces are only used by the compiler for type checking during the compilation step.

## Classes

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

### Class properties

In order to access the properties of a class from within a class itself, we need to use the `this` keyword.

## Public, private, and protected modifiers

### Public by default

In TypeScript, each member is `public` by default.

You may still mark a member `public` explicitly.

TypeScript introduces the `public` and `private` access modifiers to mark class variables and functions and functions as either `public` or `private`.
Additionally, we can also use the `protected` access modifier.

## Readonly modifier

You can make properties readonly by using the `readonly` keyword.
Readonly properties must be initialized at their declaration or in the constructor.

## Constructor access modifiers

TypeScript also introduces a shorthand version of the constructor function, allowing you to specify parameters with access modifiers directory in the constructor.

