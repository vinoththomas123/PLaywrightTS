//Object - Json type

let emp: {
    name: string,
    age: number,
    id: number,
    company?: string
} = {
    name: "Jessica",
    age: 27,
    id: 100

}
emp.name = "Jerusha"

emp.company = "Oracle"

console.log(emp["name"]);

delete emp.company;

console.log(emp)

interface Interface {
    name: string,
    age: number,
    id: number,
    company?: string
} 

let inter1: Interface = {
    name: "Jessica",
    age: 27,
    id: 100

}

let inter2: Interface = {
    name: "Jerusha",
    age: 25,
    id: 110
}

console.log(inter2.age);

console.log(inter1.id);

console.log(Object.keys(inter1))

console.log(Object.keys(inter1))


console.log(Object.values(inter1))

console.log(Object.values(inter2))


let keys: string [] = Object.keys(inter1)

let values: unknown [] = Object.values(inter1)      // values data type varies so using unknown data type

let entries = Object.entries(inter1)  

console.log(entries);

for (let item in inter1){
    console.log(item);
}

for (let [key, value] of entries){
    console.log(key, value);
}

for (let [key, value] of Object.entries(inter2)){
    console.log(key, value);
}

for (let item of keys){
    console.log(item);
}

console.log(keys)

