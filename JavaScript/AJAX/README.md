AJAX is not a programming language. AJAX is a technique for accessing web servers from a web page. AJAX stands for Asynchronous JavaScript And XML.

AJAX is a developer's dream, because you can:
[https://www.w3schools.com/js/js_ajax_intro.asp](https://www.w3schools.com/js/js_ajax_intro.asp)

[MDN Synchronous and asynchronous requests ](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)

# Server Response Properties

- responseText
- responseXML

# logs

readyState e status [gist](https://gist.github.com/rafaelstz/5a4aa3584061131d714b709ba773c5f8)

# getAllResponseHeaders()

function returns all the header information of a resource, like length, server-type, content-type, last-modified, etc:
[link](https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_header)

```js
const xhttp = new XMLHttpRequest();
console.log(xhttp); //check in console
xhttp.onload = function () {
  console.log(this.getAllResponseHeaders()); //check in console
};
xhttp.open("GET", "./onclick.txt");
xhttp.send();
```
