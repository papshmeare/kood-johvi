# jQuery based example

JS code can be added to the `script.js` in the project folder to keep everything in one place.
This example includes a few functions to get you started:
* a function to fetch the auth token on page load. This token expires in 30 minutes, so regular refetching the token and updating headers is necessary (can either compare timestamps or refetch when requests fail)
* a basic example of fetching projects technologies and populating them into the UI, based on provided project ID
For basic JS hints, refer to the README.md in the `vanilla-variant` folder.
Also, see https://api.jquery.com/ for jQuery-specific stuff.