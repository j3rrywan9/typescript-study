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

Whenever we are inside a class instance, we must use the `this` keyword in order to access any property or function available on the class definition.

### Implementing interfaces

This allows us to use interfaces to describe some common behaviors of a group of classes.

### Class constructors

Classes can accept parameters during their initial construction.
This allows us to combine the creation of a class and setting its parameters into a single line of code.

### Class functions

All functions within a class adhere to the syntax and rules that we covered in the previous chapter on functions.

### Interface function definitions

Interfaces, like classes, follow the same rules when dealing with functions.

Interfaces cannot include signatures for a constructor function.

### Class modifiers

TypeScript introduces the `public` and `private` access modifiers to mark class variables and functions as either `public` or `private`.
Additionally, we can also use the `protected` access modifier.

Class functions are `public` by default.

## Constructor access modifiers

TypeScript also introduces a shorthand version of the constructor function, allowing you to specify parameters with access modifiers directly in the constructor.

### Readonly properties

In addition to the `public`, `private`, and `protected` access modifiers, we can also mark a class property as `readonly`.
There is only one place where a `readonly` property can be set, and this is within the constructor function itself.

### Class property accessors

ECMAScript 5 introduces the concept of property accessors.
An accessor is simply a function that is called when a user of our class either sets a property, or retrieves a property.
To use accessors, we create a pair of `get`a nd `set` functions (with the same function name) in order to access an internal property.

### Static functions

Static functions are functions that can be called on a class without having to create an instance of the class first.
These functions are almost global in their nature, but must be called by prefixing the function name with the class name.

### Static properties

Similar to static functions, classes can also have static properties.

### Namespaces

When using namespaces, a class definition will not be visible outside of the namespace, unless we specifically allow this using the `export` keyword.
To create instances of classes that are defined within a namespace, we must reference the class using the full namespace name.

## Inheritance

Both interfaces and classes can use inheritance.
TypeScript implements inheritance using the `extends` keyword.

### Interface inheritance

### Class inheritance

TypeScript does not support the concept of multiple inheritance.
A class can, however, implement multiple interfaces.

### The `super` keyword

TypeScript includes the `super` keyword to enable calling a base class's function with the same name.
