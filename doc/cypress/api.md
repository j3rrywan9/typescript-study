# API

## Events

### Event Types

### Binding to Events

## Assertions

## Commands

### click

Click a DOM element.

### contains

Get the DOM element containing the text.
DOM elements can contain *more* than the desired text and still match.
Additionally, Cypress prefers some DOM elements over the deepest element found.

### debug

### find

Get the descendent DOM elements of a specific selector.
> The querying behavior of this command matches exactly how [`.find()`](https://api.jquery.com/find/) works in jQuery.

### get

### its

Get a property's value on the previously yielded subject.

### log

Print a message to the Cypress Command Log.

### then

Enables you to work with the subject yielded from the previous command.

### type

Type into a DOM element.

### within

Scopes all subsequent cy commands to within this element.
Useful when working within a particular group of elements such as a `<form>`.

### wrap

Yield the object passed into `.wrap()`.
If the object is a promise, yield its resolved value.
