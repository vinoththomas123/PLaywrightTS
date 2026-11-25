let json = {
    "name": "Smith",
    "code": 1000,
    "data": [
        {
            "emp": "John",
            "age": 25
        },
        {
            "emp": "James",
            "age": 27
        }
    ]
}

json.name = "Jerry";

console.log(json.name)

console.log(json.data)

json.data.forEach((ele) => {
    console.log(ele.age);
});

for (let item of json.data) {
    console.log(item.emp)
}

for (let item in json) {
    console.log(item)
}

enum directions {
    east,
    west,
    south,
    north
}

for (let item in directions) {
    console.log(item)
}

interface Emp {
    name: string,
    code: number
}

interface Emp {
    dept: string
}

const emp: Emp = {
    name: "Interface",
    code: 2000,
    dept: "demo"
}

console.log(emp.name);

for (let item in emp) {
    console.log(item)
}


interface emp1 extends Emp {
    role: string,
    age: number
}

let emp2:emp1 = {
    name: "Interface",
    code: 2000,
    dept: "demo",
    role: "extends",
    age: 55
}

console.log(emp2.code)

