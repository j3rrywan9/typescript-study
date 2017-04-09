# Eloquent JavaScript

## Value, Types, and Operators

### Numbers

Unlike many languages, JavaScript does not make a distinction between integer values and floating-point values.
All numbers in JavaScript are represented as floating-point values.

#### Special numbers

There are three special values in JavaScript that are considered numbers but don't behave like normal numbers.

The first two are `Infinity` and `-Infinity`, which represent the positive and negative infinities.
`Infinity - 1` is still `Infinity`, and so on.

`NaN` stands for "not a number", even though it is a value of the number type.

### Strings

Both single and double quotes can be used to mark strings as long as the quotes at the start and the end of the string match.

### Boolean values

JavaScript has a *Boolean* type, which has just two values: true and false.

#### Comparisons

Here is one way to produce Boolean values:
```javascript
console.log(3 > 2)

console.log(3 < 2)
```

### Undefined values

There are two special values, written `null` and `undefined`, that are used to denote the absence of a meaningful value.

### Automatic type conversion

Where you do *not* want any automatic type conversion to happen, there are two extra operators: `===` and `!==`.

## Program Structure

###

A fragment of code that produces a value is called an `expression`.

### Variables

To catch and hold values, JavaScript provides a thing called a `variable`.

