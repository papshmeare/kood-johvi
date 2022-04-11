# Vanilla javascript

Add IDs is to DOM elements if necessary.
Add your script to the script tag at the end of pulse-johvi-employees.html

# Cheat sheet

### Fetch info from another page
	const response = await fetch('https://...', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({'field': 'value'})
	});

### Convert HTTP response to JS object 
	const data = await response.json();

### Get params from URL
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('paramName');

### Manipulating DOM
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

### HTML string to DOM element using template element
    function htmlToElement(html) {
        var template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstChild;
    }

### Logging
    console.log(a, b, c)