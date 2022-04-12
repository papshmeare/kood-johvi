# Vanilla JavaScript

[Back to main readme](../README.md)

Add IDs is to DOM elements if necessary.
Add your script to the script tag at the end of `pulse-johvi-employees.html`.

## Cheat sheet

### JS asynchronous code

Many JavaScript functions are asynchronous and return a Promise. The result value of the Promise can be retrieved using the `.then()` method. For example:

```js
fetch(...)                                    // returns a Promise
    .then(response => console.log(response))
```

In case `.then()` also returns a Promise, then methods need to be enqueued like:

```js
fetch(...)                              // returns a Promise
    .then(response => response.json())  // returns a Promise
    .then(json => console.log(json))    // Actual JSON object of the request response
```

Code dealing with Promises gets spaghetti-like fast. Thankfully, JS has the keywords `async` and `await` which basically allow us to write asynchronous code in a synchronous way.
`await` resolves the Promise and `async` indicates that a method is asynchronous. The previous example would look like:

```js
response = await fetch(...)             // Resolve the fetch Promise
json = await response.json()            // Resolve the .json Promise
console.log(json)
```

Note that `await` cannot be used in global namespace, so you'd have to put it into a method, like:

```js
async function main() {
    response = await fetch(...)
    obj = await response.json()
    ...
}
main()  // Asynchronously execute the main method (i.e. no await keyword)
```

### Fetch info from another page

The `fetch` function is asynchronous (i.e. returns a Promise)

```js
const response = await fetch('https://...', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({'field': 'value'})
});
```

### Convert HTTP response to JS object

The `.json()` function is asynchronous (i.e. returns a Promise)

```js
const data = await response.json();
```

### Get params from URL

```js
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get('paramName');
```

### Manipulating DOM

```js
// Get element by ID
document.getElementById('id')
// Change element text
elm.innerText = ''
// Change element HTML
elm.innerHTML = ''
// Create element
document.createElement("p")
// Add child element
elm.appendChild(child);
// Replace all child elements
elm.replaceChildren(...childElements);
```

### HTML string to DOM element using template element

```js
function htmlToElement(html) {
    var template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}
```

### Logging

```js
console.log(a, b, c)
```
