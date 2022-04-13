import {FetchWrapper} from "./fetchWrapper.js"

var token;
var username = "user";
var password = "password";


let API = new FetchWrapper("https://intra.proekspert.ee/pulse-johvi")

API.post("/auth", {"username":username, "password":password}).then(data => {
  token = data
  console.log(data)})