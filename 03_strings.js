// const name = "Legion"
const age = 22
//
// function getAge(){
//     return age
// }

//const output = "Hi, i'm " + name + " and " + age + " years old"

// const output = `Hi, i'm ${name} and ${getAge()} years old`
// console.log(output)

// const output = `
// <div>This is div</div>
// <p>this is p</p>
// `

const name = "Legion"
// console.log(name.length)
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())
// console.log(name.charAt(0))
// console.log(name.indexOf("Leg"))
// console.log(name.startsWith("Le"))
// console.log(name.startsWith("le"))
// console.log(name.toLowerCase().startsWith("le"))
// console.log(name.repeat(3))
//
// const string = "     password    "
// console.log(string.trim())
// console.log(string.trimStart())
// console.log(string.trimEnd())

function logPerson(s, name, age){
    if (age < 0){
        age = "Wrong age"
    }
    return `${s[0]}${name}${s[1]}${age}`
}

const output = logPerson`Name: ${name}, Age: ${age}` // такая строка позволяет создавать валидацию полей

console.log(output)
