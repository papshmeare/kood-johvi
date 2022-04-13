import {FetchWrapper} from "./fetchWrapper.js"

let API = new FetchWrapper("https://intra.proekspert.ee/pulse-johvi")

API.post("/auth", {"username":"user", "password":"user"}).then(data=>{
console.log("TOKEN:", data.token)

const employee = API.get("/api/employees/9/?expand=skills", data.token)

const projects = API.get("/api/projects/?expand=technologies", data.token)

Promise.all([employee, projects]).then((values) => {
    console.log(values)
    SetEmployeeData(values[0])

})


function SetEmployeeData(employeeData) {
    let employeeSkills = [];
    employeeData.skills.forEach(element => {
        employeeSkills.push(element.name)
    });

    document.getElementById("person_name").innerHTML = employeeData.name
    document.getElementById("title").innerHTML = employeeData.title
    document.getElementById("about_me").innerHTML = employeeData.about    
    document.getElementById("skills").innerHTML = employeeSkills
}
})

