AJAX stands for Asynchronous JavaScript And XML In a nutshell `resumo`, it is the use of the XMLHttpRequest object to communicate with servers.
is not a programming language. AJAX is a technique for accessing web servers from a web page. AJAX stands for Asynchronous JavaScript And XML.

- [Getting started](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started#step_3_%E2%80%93_a_simple_exampleAJAX)
- AJAX is a developer's dream, because you can:
  [https://www.w3schools.com/js/js_ajax_intro.asp](https://www.w3schools.com/js/js_ajax_intro.asp)
- [MDN Synchronous and asynchronous requests ](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)

# Server Response Properties

- responseText
- responseXML

# Minimalist Ajax request

```js
const ajax = new XMLHttpRequest()
ajax.open('GET', '../db.json')
ajax.send()
ajax.onload = function () {
  console.log(this) //returns a object check consome
  console.log(this.response)
  console.log(this.responseText)
}
```

# onreadystatechange()

> encapsula o onload...

### Get Start from Scratch [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started#step_3_%E2%80%93_a_simple_example)

```js
const httpRequest = new XMLHttpRequest()
httpRequest.open('GET', '../src/ajax_info.txt')
httpRequest.send()
httpRequest.onreadystatechange = function () {
  console.log('ready', this.readyState)
  console.log('status', this.status)
  if (this.readyState == 4 && this.status == 200) {
    httpRequest.onload = function () {
      document.getElementById('root').innerHTML = this.responseText
    }
  }
}

// only status
const ajax = new XMLHttpRequest()
ajax.open('GET', '../db.json')
ajax.send()
ajax.onreadystatechange = function () {
  if (this.status == 200) {
    ajax.onload = function () {
      console.log(this.responseText)
    }
  } else {
    console.log(`error`)
  }
}
```

```js
  "this" ou "const" chamando o XMLHttpRequest()+ onreadystatechange = function () {
    console.log("ready", this.readyState);
    console.log("Status", this.status);
  };

  // comparar:
  httpRequest.readyState === XMLHttpRequest.DONE

  // mesmo que:
  this.readyState == 4
```

readyState e status [gist](https://gist.github.com/rafaelstz/5a4aa3584061131d714b709ba773c5f8)

## try catch

```js
function load() {
  const httpRequest = new XMLHttpRequest()
  try {
    httpRequest.open('GET', './ajax_info.txt')
    httpRequest.send()
    console.log(`DONE`, XMLHttpRequest.DONE)

    httpRequest.onreadystatechange = function () {
      console.log('ready', this.readyState)
      console.log('status', this.status)
      if (this.readyState == 4 && this.status == 200) {
        httpRequest.onload = function () {
          document.getElementById('root').innerHTML = this.responseText
        }
      } else {
        console.log(`There was a problem with request`)
      }
    }
  } catch (e) {
    console.log(e)
  }
}

load()
```

# getAllResponseHeaders()

function returns all the header information of a resource, like length, server-type, content-type, last-modified, etc:
[link](https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_header)

```js
const xhttp = new XMLHttpRequest()
console.log(xhttp) //check in console
xhttp.onload = function () {
  console.log(this.getAllResponseHeaders()) //check in console
}
xhttp.open('GET', './onclick.txt')
xhttp.send()
```

# Post Example:

[REF](https://wickedev.com/use-vanilla-javascript-to-make-ajax-request/)

```js
// Create the XMLHttpRequest object.
const xhr = new XMLHttpRequest()
// Initialize the request
xhr.open('POST', 'https://jsonplaceholder.typicode.com/users', true)
// Set content type
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
// Send the request with data to post
xhr.send(
  JSON.stringify({
    name: 'Jon Doe',
    username: 'jon-doe',
    email: 'jon-doe@unknown.com',
  })
)
// Fired once the request completes successfully
xhr.onload = function (e) {
  // Check if the request was a success
  if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
    // Get and convert the responseText into JSON
    var response = JSON.parse(xhr.responseText)
    console.log(response)
  }
}
```

- HTML Includes by W3 + onreadystatechange
  [https://www.w3schools.com/howto/howto_html_include.asp](https://www.w3schools.com/howto/howto_html_include.asp)

- Ajax form submit + Stringnify + fetch - great article
  [https://metamug.com/article/html5/ajax-form-submit.html](https://metamug.com/article/html5/ajax-form-submit.html)
