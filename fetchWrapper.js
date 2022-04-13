var token;
var username = "user";
var password = "password";

function getKey(api){
  api.post("/auth", {"username":username, "password":password}).then(data=>{
  console.log(data)
})
}



export class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;

        if (token == ''){
          getKey(baseURL)
        }
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }

    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + token,
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}