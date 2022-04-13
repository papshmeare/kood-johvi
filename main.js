import {FetchWrapper} from "./fetchWrapper.js"

let API = new FetchWrapper("https://intra.proekspert.ee/pulse-johvi")

API.post("/auth", {"username":"user", "password":"user"}).then(data=>{
console.log(data)
})

console.log("hello")