import {FetchWrapper} from "./fetchWrapper.js"

let API = new FetchWrapper("https://intra.proekspert.ee/pulse-johvi")

API.post("/auth", {"username":"user", "password":"user"}).then(data=>{
API.token = data.token
console.log(API.token)

let employeeData
API.get("/api/employees/9", data.token).then(data => {
    console.log(data)
    employeeData = data
    SetEmployeeData()
})

function SetEmployeeData() {
    document.getElementById("person_name").innerHTML = employeeData.name
    document.getElementById("title").innerHTML = employeeData.title
    document.getElementById("about_me").innerHTML = employeeData.about    
    document.getElementById("skills").innerHTML = employeeData.skills    
}
})

