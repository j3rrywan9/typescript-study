# Promises

Starting with ECMAScript2015, JavaScript gains support for Promise objects allowing you to control the flow of deferred and asynchronous operations.

A `Promise` is in one of these states:
* *pending*: initial state, not fulfilled or rejected.
* *fulfilled*: successful operation.
* *rejected*: failed operation.
* *settled*: the Promise is either fulfilled or rejected, but not pending.

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is an object representing the eventual completion or failure of an asynchronous operation.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

E.g., instead of an old-style function that expects two callbacks, and calls one of them on eventual completion or failure:
```javascript
function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

doSomething(successCallback, failureCallback);
```
...modern functions return a promise you can attach your callbacks to instead:
```javascript
let promise = doSomething();
promise.then(successCallback, failureCallback);
```
...or simply:
```javascript
doSomething().then(successCallback, failureCallback);
```
We call this *an asynchronous function call*.
