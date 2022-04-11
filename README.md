# Kood/Jõhvi workshop project

Choose your poison!

| Variant | Directory |
| ------- | --------- |
| jQuery | jquery-variant |
| React.js | react-variant |
| Plain old JavaScript | vanilla-variant |

## Table of contents

- [Task](#task)
- [Links](#links)
- [Authorisation](#authorisation)
- [API requests](#api-requests)

## Task

### Backstory

We have an application that allows us to manage Employees and Projects within our company. Both Employees and Projects have their own profile pages, where all the known information about a respective Employee or Project is shown. This information includes the usual suspects (e.g. for an Employee: name, start date at the company, last profile modification date; for a Project: name, start date, last modification date; other metadata) as well as relational data. Relational data can include e.g. all the Projects where a given Employee is included in, or all the Employees that are currently in the team for a given Project. We are interested in bringing Employees together with Projects.

This task is to add a new section (Suggestions) to the Employee profile page. The section will suggest Projects that the Employee could participate in.
Description

### Description

Every Project has Technologies, which are either required or needed to carry out the project. Every Employee has Skills, which an Employee can contribute to a Project.

Note that a Project's Technologies are a vetted list of items that are agreed upon beforehand. An Employee's Skills list is a mix of handpicked and freely added items (as in every Employee can list whatever skills they have).

### Acceptance criteria

Given an Employee with eid=\<id\>, find and list the Projects which have Technologies that match with the Skills defined for the Employee (i.e. at least one case where skill=technology), meaning the Employee is potentially suited for these Projects.

## Links

| Link | URL |
| ---- | --- |
| Jira | https://intra.proekspert.ee/jira/ |
| Demo UI | https://intra.proekspert.ee/pulse-johvi |
| API location | https://intra.proekspert.ee/pulse-johvi/api/ |
| API documentation | https://intra.proekspert.ee/pulse-johvi/swagger-ui.html |

Access: user:user

## Authorisation

The endpoint is:
```
POST https://intra.proekspert.ee/pulse-johvi/auth
```

Headers:
```http
"Content-type: application/json"
```

Body:
```json
{"username":"<username>", "password":"<password>"}
```

The response is a JSON object containing a token. For example:
```json
{"token": "ab079ba2b10d4d97b8c3fcb0aa8ca847b501efc1faa22b8f69edf121ac2996be"}
```

For any subsequent queries, this token needs to be included in the header. For example:
```http
"Authorization: Bearer ab079ba2b10d4d97b8c3fcb0aa8ca847b501efc1faa22b8f69edf121ac2996be"
```

Token lifetime: 30 mins.

## API requests

Requesting all employees:
```
GET https://intra.proekspert.ee/pulse-johvi/api/employees
```

Requesting a single employee with ID \<eid\>:
```
GET https://intra.proekspert.ee/pulse-johvi/api/employees/<eid>
```

Requesting all projects:
```
GET https://intra.proekspert.ee/pulse-johvi/api/projects
```

Requesting a single project with ID \<pid\>:
```
GET https://intra.proekspert.ee/pulse-johvi/api/projects/<pid>
```

Additionally, the GET requests support Query Refinement functionality, which means we can manipulate the result of the request via additional URL parameters. For the given tasks we mostly use expansion, which instructs the request to return fully populated subobjects.

For example, requesting Employee info while also populating the contact info:
```
GET https://intra.proekspert.ee/pulse-johvi/api/employees/<eid>?expand=contacts
```
