JavaScript is often considered a multi-paradigm language, meaning it supports multiple programming paradigms, including procedural, object-oriented, and functional programming.

While JavaScript is not strictly procedural like languages such as C or Pascal, you can certainly write procedural code in JavaScript. Procedural programming involves writing code in a step-by-step manner, focusing on procedures or functions to accomplish tasks.

In JavaScript, you can define functions and execute them sequentially, which aligns with procedural programming principles. Here's an example of a simple procedural-style JavaScript code:

- https://dev.to/jjablonskiit/functional-vs-object-oriented-vs-procedural-programming-2lc5
- https://hashnode.com/post/procedural-oop-and-functional-programming-with-javascript-ckzzxcttl05ixl0nvac9i4tyu


## Procedural Style:

In procedural programming, we'll simply define a function to print "Hello, World!" to the console.

```js
function helloWorld() {
    console.log("Hello, World!");
}

helloWorld();
```


## Object-Oriented Style:

In object-oriented programming (OOP), we'll create a class or object that encapsulates the behavior of printing "Hello, World!".

```js
class Greeter {
    constructor(message) {
        this.message = message;
    }
    
    greet() {
        console.log(this.message);
    }
}

let greeter = new Greeter("Hello, World!");
greeter.greet();

```

## Functional Style:

In functional programming, we'll define a function that returns "Hello, World!" as its result.

```js
function hello() {
    return "Hello, World!";
}

console.log(hello());
```