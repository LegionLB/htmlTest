// 1 Переменные

const firstName = "John"
//const lastName = "Dou" //str
//let age = 22           // num
const isDeveloper = true //bool

// 2 Мутирование

//console.log("Name: " + firstName + "\n Age: " + age)
//alert("Name: " + firstName + "\n Age: " + age)

// const lastName = prompt("Input lastName: ")
//
// alert(firstName + " " +lastName)

// 3 Операторы

// let currentYear = 2022
// const birthYear = 1999

// let age = currentYear - birthYear
// console.log(age)

// const a = 10
// const b = 20
//
// let c = 32

// c += a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a - b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)


// 4 Типы данных

// let x
// console.log(typeof isDeveloper)
// console.log(typeof firstName)
// console.log(x)
// console.log(null)

// 5 Приоритет операторов

// const fullAge = 22
// const birthYear = 1999
// const currentYear = 2022
//
// const isFullYear = currentYear - birthYear >= fullAge

// 6 Условные операторы

const courseStatus = "Pending" // ready, fail, pending

if (courseStatus === "Ready") {
    console.log("Course is ready!")
}else if(courseStatus === "Pending"){
    console.log("Course is pending")
}else{
    console.log("Course failed")
}

const isReady = true

// if (isReady){
//     console.log("Everything is ready!")
// }else{
//     console.log("Nothing is ready!")
// }

// Тернарное выражение
//isReady ? console.log("Everything is ready!") : console.log("Nothing is ready!")

// const num1 = 20
// const num2 = "20"
//
// console.log(num1 === num2) // === - доп проверка на тип данных


// 7 Бул логика

// 8 Функции

// function ageCalculate(year){
//     return 2022 - year
// }
//
// // console.log(ageCalculate(1999))
//
// function manInfo(name, year){
//     const manAge = ageCalculate(year)
//
//     if (manAge > 0){
//         console.log("Name: " + name)
//         console.log("Age: " + manAge)
//     }else {
//         console.log(null)
//     }
// }
//
// manInfo("John", "1999 ")


// 9 Массивы

// const cars = ["Audi", "BMW", "Ford"]
// //const cars = new Array("Audi", "BMW", "Ford")
// console.log(cars)
// console.log(cars[0])
// console.log(cars.length)
// cars[0] = "Porsche"
// console.log(cars)
//
// cars[3] = "Nissan"
//
// console.log(cars)

// 10 Циклы
// const cars = ["Audi", "BMW", "Ford"]
//
// // for (let car = 0; car < cars.length; car++){
// //     console.log(car)
// // }
//
// for(let car of cars){
//     console.log(car)
// }


// 11 Objects

//const person = new Object()

const person = {
    firstName: "John",
    LastName: "Constantine",
    year: 2005,
    languages: ["ENG", "DE", "RU"],
    hasWife: false,
    greet: function (){
        console.log("Greet from person")
    }
}

console.log(person)
console.log(person["LastName"])
const key = "languages"
console.log(person[key])
person.hasWife = true
console.log(person)
person.isDeveloper = true
console.log(person)
person.greet()
