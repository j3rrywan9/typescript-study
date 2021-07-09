# Guides

## Overview

### Why Cypress?

### Key Differences

## Getting Started

### Installing Cypress

### Writing Your First Test

### Testing Your App

## Core Concepts

### Introduction to Cypress

#### Cypress Can Be Simple (Sometimes)

Simplicity is all about getting more done with less typing.

### Querying Elements

#### Cypress is Like jQuery
If you've used [jQuery](https://jquery.com/) before, you may be used to querying for elements like this:
```javascript
$('.my-selector')
```
In Cypress, querying elements is the same:
```javascript
cy.get('.my-selector')
```
In fact, Cypress bundles jQuery and exposes many of its DOM traversal methods to you so you can work with complex HTML structures with ease using APIs you're already familiar with.
```javascript
// Each method is equivalent to its jQuery counterpart. Use what you know!
cy.get('#main-content')
  .find('.article')
  .children('img[src^="/static"]')
  .first()
```

#### Cypress is *Not* Like jQuery

Question: What happens when Cypress can't find any matching DOM elements from its selector?

Answer: No big deal!
Cypress automatically retries the query until either:
1. The element is found
1. A set timeout is reached

This makes Cypress robust and immune to dozens of common problems that occur in other testing tools.
Consider all the circumstances that could cause querying a DOM element to fail:
* The DOM has not loaded yet.
* Your framework hasn't finished bootstrapping.
* An XHR request hasn't responded.
* An animation hasn't completed.
* and on and on…

Before, you'd be forced to write custom code to protect against any and all of these issues: a nasty mashup of arbitrary waits, conditional retries, and null checks littering your tests.
Not in Cypress!
With built-in retrying and customizable timeouts, Cypress sidesteps all of these flaky issues.

#### Querying by Text Content

#### When Elements Are Missing

### Chain of Commands

It's very important to understand the mechanism Cypress uses to chain commands together.
It manages a Promise chain on your behalf, with each command yielding a "subject" to the next command, until the chain ends or an error is encountered.
The developer should not need to use Promises directly, but understanding how they work is helpful!

#### Interacting With Elements

As we saw in the initial example, Cypress allows you to click on and type into elements on the page by using `.click()` and `.type()` commands with a `cy.get()` or `cy.contains()` command.
This is a great example of chaining in action.
Let’s see it again:
```javascript
cy.get('textarea.post-body')
  .type('This is an execllent post.')
```
We're chaining the `.type()` onto the `cy.get()`, telling it to type into the subject yielded from the `cy.get()` command, which will be a DOM element.

#### Asserting About Elements

Assertions let you do things like ensuring an element is visible or has a particular attribute, CSS class, or state.
Assertions are commands that enable you to describe the *desired* state of your application.
Cypress will automatically wait until your elements reach this state, or fail the test if the assertions don't pass.
Here's a quick look at assertions in action:
```javascript
cy.get(':checkbox').should('be.disabled')

cy.get('form').should('have.class', 'form-horizontal')

cy.get('input').should('not.have.value', 'US')
```

#### Subject Management

A new Cypress chain always starts with `cy.[command]`, where what is yielded by the command establishes what other commands can be called next (chained).

Some methods yield `null` and thus cannot be chained, such as `cy.clearCookies()`.

Some methods, such as `cy.get()` or `cy.contains()`, yield a DOM element, allowing further commands to be chained onto them (assuming they expect a DOM subject) like `.click()` or even `cy.contains()` again.

##### Some commands can be chained from...

* `cy` only, meaning they do not operate on a subject: `cy.clearCaches()`.

##### Some commands yield...

##### Using `.then()` To Act On A Subject

Want to jump into the command flow and get your hands on the subject directly?
No problem, add a `.then()` to your command chain.
When the previous command resolves, it will call your callback function with the yielded subject as the first argument.

##### Using Aliases to Refer to Previous Subjects

#### Commands Are Asynchronous

It is very important to understand that Cypress commands don’t do anything at the moment they are invoked, but rather enqueue themselves to be run later.
This is what we mean when we say Cypress commands are asynchronous.
