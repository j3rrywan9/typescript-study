# Learn JavaScript

## Introduction

## Lesson 1: What is JavaScript?

### 1.1 Learn what you can do with JavaScript

### 1.2 Take a look at JavaScript's features

### 1.3

### 1.4 Learn the JavaScript dialects and browser compatibility

The ECMAScript Specification defines different sets of language features that a runtime must support in order to be "ES5", "ES6", "ES7", etc.

The ECMAScript Specification provides a "guarantee" of what features a given JavaScript runtime will support.

ES5 is fully supported by most modern browsers.

But ES6+ provides a greatly improved developer experience.

And the nice thing in this case, is that there are tools such as a tool called Babel, that enable us to write JavaScript with more modern JavaScript syntax, say ES6 and beyond and transpile our more modern code which is more developer friendly into older JavaScript syntax, that all modern JavaScript runtime support.

#### JavaScript "Dialects"

### 1.5 Running code using a REPL

## Lesson 2: Learn the 8 JavaScript Data Types

### 2.1 Learn the 8 data types

Defining variables in JavaScript is done with one of two keywords `var` or `let`.
Both of these keywords define a new variable.
The difference is that variables defined with `var` are function scoped, while variables defined with `let` are block scoped.
My guess is that no matter what language you're coming from, you're probably used to block scoped variables.
So I'd recommend that for now you just stick to using `let`, I'm including `var` here just because you'll see it used so often in example code.
So that's how we define variables.

Now before we go into more detail about each of the data types, one important thing to keep in mind when working with JavaScript is that the variables and constants themselves don't have any inherent type.
They have the type of whatever value they happen to contain at a given moment.

Let me introduce you to a very helpful operator in JavaScript and this is the `typeof` operator.
We can use this operator with any variable or value, and it will tell us what data type it is.

### 2.2 Learn about JavaScript's "Number" type

The second special value that numbers can take in JavaScript is `Infinity`, 

All number values in JavaScript are stored as 64-bit floating point.
Now, since that alone might not mean much to you, let me put it in a different way.
Depending on how you're using numbers in JavaScript, they may or may not be as precise as you need them to be.
Big numbers, for example, are only accurate to about 15 digits.
So if we define some big 16-digit number like this, the actual value of the variable might not even be what we defined it as.
And furthermore, when working with decimal numbers, the results might be off very slightly from what we'd expect them to be.
It's important to keep these things in mind for a number of reasons.
First and foremost, it's usually not a good idea to compare two decimal numbers for equality in JavaScript, since two numbers that should in fact be equal might not be seen as such by JavaScript.
And there are several ways around this of course, one possible way is to multiply our decimal numbers by some power of 10 and then use `math.round` to get rid of the rest of the digits like this.
Now, this may be a little ugly, but it works.
Don't worry if it doesn't quite make sense to you at this point.
Honestly, this is just one of those things that you get used to after working with JavaScript for a while.

### 2.3 Learn about JavaScript's "String" type

And backticks actually have a bit of a special use case in JavaScript ES6 and later.
They allow us to do easy string interpolation.
That is, they allow us to insert the values of variables into our strings.

As in some other languages, strings in JavaScript have properties that we can access to get information about the string itself.
So for example, all strings have a `length` property that tells us the length of the string.
They also have a `charAt` property, which is a function that allows us to get the character in the string at a given position.
And additionally, they have `toUpperCase` and `toLowerCase` properties, which return the string with all the characters in it, switch to the corresponding case.
And of course, they have many other properties and functions, which we'll run into at various points throughout the course.

### 2.4 Learn about JavaScript's "Boolean" type

### Converting Other Types to Booleans

Now for the most part, Boolean is a pretty straightforward, but one of the places, where they can get a little tricky in JavaScript, is that, while there are only two possible values for Booleans, again, these are true and false.
All the other values in JavaScript, strings, numbers, objects, and the rest that we'll learn about in this course, can be converted to Boolean values.

### 2.5 Learn about JavaScript's "Object" type

#### The "object" Type

But more frequently, when we say object in the context of JavaScript, we're usually referring to what in other languages are referred to as hashes or key value maps.

#### References vs. Copying

So moving on, something to keep in mind when working with objects is that objects in JavaScript are assigned by reference.
This means that if we assign an object to a variable, the variable doesn't actually contain the entire object.
The object is defined in memory and then the variable simply contains a reference to it.

### 2.6 Learn about arrays in JavaScript

#### JavaScript Arrays

In JavaScript arrays are ordered collections of values, usually defined using square brackets like this.
```javascript
let myArray = [
  1,
  2,
  "Three",
  { message: "Hello" },
  [1, 2, 3],
];
```
The values in an array can be any of the basic data types, and the values that any individual array contains don't all have to be the same data type as some other statically typed languages require.

#### Accessing Array Elements

Anyway, once we've defined an array, we can access the individual items that it contains by using square brackets and an index.

### 2.7 Learn about JavaScript's "Function" type

#### The "function" type

The main difference, if you're coming from a language like Java, is that functions in JavaScript can be defined independently of any class or object.
So we can just define a function all on its own, like this.
```javascript
function add(x, y) {
  return x + y;
}
```
More generally, just as in other languages, functions in JavaScript are reusable blocks of code that take some number of arguments and can return some value using the `return` key word.
Although whether or not a function actually takes any arguments or returns anything is optional and really depends on the use case.

#### Function Syntax

Now there are actually a number of different possible syntaxes for defining functions in JavaScript.
Besides this one, which starts with the `function` key word, we can define functions like this, with a syntax that looks much more like how we would define variables of other types.
```javascript
let add = function (x, y) {
  return x + y;
};
```
And in JavaScript ES6 and later, we have something called arrow function syntax which is a sort of abbreviated syntax for functions that we'll talk about later on.
```javascript
let add = (x, y) => {
  return x + y;
};
```
Now there is one somewhat subtle difference between the three main ways of defining functions.
Functions defined by saying the `function` keyword first, for example `function myFunction() {}`, and only functions defined this way, are hoisted.
What "hoisted" means is that if we define a function in this way we're able to use it earlier in the code than where we defined it.
And this is not true with functions defined using the other variable-like syntax.

### 2.8 Learn about JavaScript's "Undefined" type

### 2.9 Learn about JavaScript's "Bigint" type

### 2.10 Learn about JavaScript's "Symbol" type

#### The "Symbol" Type

The main way to define a symbol is like this using the symbol constructor.
```javascript
let mySymbol = Symbol("myFirstSymbol");
```
The string that we pass to the constructor is called the description of the symbol.
And we can always just leave that argument out entirely if we want to.

Now the whole idea of symbols is that no two distinct symbols will ever be equal to each other.
So even if we create two symbols with the exact same description, when we test if they're equal, and equality testing, by the way, is something we'll talk about shortly.
JavaScript will tell us that they're not equal.
In fact, the only way that two symbols will ever be equal is if we either compare the same symbol to itself, or if we have a reference to the same symbol.

#### Using Symbols

There are certain cases in programming where we specifically want to avoid "value clashes".

If you remember one thing from this, just remember that symbols exist for when you need to ensure uniqueness internally in your code.

## Lesson 3: Learn Basic JavaScript Control Flow

### 3.1 Learn about equality in JavaScript

#### Equality in JavaScript

You see equality isn't quite as straightforward in JavaScript as you might think.

#### `==` vs.`===`

So let's start off our discussion of equality with the fact that in JavaScript there actually two different equality operators, the `==` and the `===`.
Now take a good hard look a these because this has to be the number one error that I encounter with JavaScript beginners; they use the wrong equal sign.

So the point of all of this is that you should really just stick to using the `===` operator which behaves more like you'd expect in equal operator to work in any other programming language.
And in cases where you think you might have a reason to use a `==`; there's almost always a more predictable way to go about it.

#### Object Equality

However this doesn't really work as you'd expect, both the `==` and `===` operators would always return `false` for two distinct objects or arrays.
The exception to this of course is if they're not actually two distinct objects but just two references to the same object.
So since the `==` and `===` signs won't work for comparing objects and arrays in JavaScript if we wanna actually check the two objects are equal in the sense that they both have the same keys and values, we have to actually check each of these keys and values individually to see if they're the same between the two objects.
This is called checking for deep equality and if two objects are equal in this way we see that they're "deep equal".
Now checking all the keys and values for two objects might sound like a little bit of a pain and it definitely would be if we had to do it all manually but fortunately there are much easier ways.
None of which were quite ready to look at it at this point.
For now just remember that two distinct objects would never be considered equal by the regular equality operators in JavaScript.
And as I already said, this equality stuff goes for arrays too.
Two arrays would only be considered equal by the double and triple equals operators if they're not actually two distinct arrays but references to the same array.

### 3.2 Learn about `if` statements in JavaScript

#### `if` statement in JavaScript

The only thing that might be a little different is that in JavaScript, the condition has to be surrounded by parentheses.
In other words, we can't leave the parentheses off like we can in languages such as Python.

#### "Truthy" vs. "Falsy"

However, as I mentioned back in the section about booleans, the problem that many beginners and even a lot of intermediate JavaScript developers run into is that it's not always obvious which values JavaScript treats as truthy and which values it treats as falsy. 

#### The 7 "Falsy" Values

So really the only way to know whether a given value in JavaScript is falsy or not is by memorizing the list of falsy values in JavaScript that we saw back in the boolean section.
Now this list is definitely worth taking a look again if you don't remember it.
1. `""`
1. `0`
1. `0n`
1. `NaN`
1. `undefined`
1. `null`
1. `false`

These are the seven values that JavaScript treats as falsy.
The rest of the possible values in JavaScript are treated as truthy.

## Lesson 4: OOP in JavaScript

### 4.1 Learn about JavaScript classes

#### Classes in JavaScript

The main difference is that instead of class-based inheritance which is most likely what you're used to working with, JavaScript uses something called prototypical inheritance.

First, let's take a look at how to define classes and create instances of them.
The most basic way of defining a class is by using the class keyword.

#### Defining Classes

#### Creating Instances

#### Private Variables

So currently, the main way to denote that a given variable should be treated as private, and again this might make some of you cringe a little bit, is by putting an underscore before the variable name as we see here.
```javascript
class Person {
  constructor() {
    this._createdAt = Date.now();
  }
}
```

#### Class Methods

#### Static Methods

#### Subclasses & Inheritance

If we have a class such as our `Person` class and we wanna create a subclass, or more specific version of that class, we can do that by using the `extends` keyword.

#### `instanceof`

### 4.2 Learn about Prototype-based Inheritance

## Lesson 5: Working with Objects, Arrays, and Functions in JavaScript

### 5.1 Use Built-in Object Functions

In addition to all the other details we've covered about Objects, JavaScript provides us with some nice utility functions that we can use to work with Objects more easily.
These functions are found on JavaScript's Built-in Object, with a capital O, Object, that can be accessed from anywhere inside our JavaScript programs.
Let's take a look at a few of these functions and how we can make use of them in our programs.

The first utility function we're gonna to look at is `Object.keys`.
What this function does, is when we call it on an Object, it returns an array of all the Object's keys, or property names.

### 5.2 Use Built-in Array Functions

## Lesson 6: Learn JavaScript ES6+ Syntax

### 6.1 Write functions using arrow syntax

#### Arrow Functions

So ES6 came along with a much more simplistic way of defining functions and that's by using something called the arrow function syntax.
Basically, the arrow function syntax is a sort of shorthand way of writing functions.
Instead of requiring the `function` keyword every time we want to define a function, arrow functions can simply be defined using parentheses followed by an arrow (`=>`) and then brackets with function body as we see here.

With the arrow syntax, as I said, we're forced to define our functions using the `var`, `let`, or `const` keywords.
And for this reason, we also have to keep in mind that functions defined this way are not hoisted like functions defined by simply using the `function` keyword.
In other words, we can't use them until after they're defined in the code, and this is a slight inconvenience, but it's more than made for by the reduction in characters and the increase readability.

### 6.2 Set default values for function arguments

#### Default Arguments

In order to define default values for arguments in ES6 all we have to do is add an equals sign after the argument and then the default value that we want for that argument, and it's as simple as that.
```javascript
let myFunc = (x = "default!", y = 100) => {
  // ...
}
```

### 6.3 Learn about the "spread operator"

#### The Spread Operator

So what ES6 has provided us with in order to make these kinds of operations easier, is something called the spread operator.
And it looks something like this.
```javascript
let combined = {
  ...obj1,
  ...obj2,
};
```
If we wanted to combine our two objects like we did before, we could simply use a spread operator, which is three dots before the object name, to sort of spread the properties and values of each object into the new object that we're defining.

As I mentioned a little earlier, the spread operator can also be used with arrays.
The syntax for this is very similar to the syntax for objects.
If we have two arrays that we want to combine, we can create a new array and use the spread operator to spread the elements from both arrays inside the new one.
```javascript
let combined = [
  ...arr1,
  ...arr2,
];
```
And similarly to objects, if we want to add new elements in along with our spread out arrays, we can simply put them in wherever we want in between the spread operators.
Oh, and just as a side note, arrays don't carry the same concerns with them about overriding keys like objects did.
Since the array just makes space for whatever new elements we add, nothing is ever overwritten when using the spread operator with arrays.

The third and final use for the spread operator is when working with function arguments.
The spread operator allows us to both get all the arguments passed to a function as an array, and also pass an array of values to a function as arguments.
```javascript
let myFunc = (...args) => {};

someOtherFunction(...myArray);
```

### 6.4 Use object destructuring to get object properties

#### Object Destructuring

The next syntax improvement that ES6 offers over older JavaScript versions is something called Object Destructuring.
Despite its rather long winded name, it has a very straight forward purpose, to make it easier to extract variables from an object's properties.

### 6.5 Use Interpolation to insert data into strings

### 6.6 Learn the Import and Export code in JavaScript

#### Import and Export Syntax
