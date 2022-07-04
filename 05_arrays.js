// 1 Массивы

const cars = ["Ford", "Mazda", "Audi", "BMW"]
// const people = [
//     {name: "Legion", budget: 10000},
//     {name: "NotLynx", budget: 2000},
//     {name: "Anna", budget: 6000}]
const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push("Porsche") // add to the end of the array
// cars.unshift("Mazerati") // add to the start of the array
// cars.shift() // delete and return first element of the array
// const ford = cars.shift() // delete and return first element of the array
// const porsche = cars.pop() // delete and return last element of the array
//
//
// console.log(cars)
// console.log(ford)
// console.log(porsche)
// console.log(cars.reverse())

// const bmwIndex = cars.indexOf("BMW")
// cars[bmwIndex] = "Porsche"
// console.log(cars)
// const budgetIndex = people.findIndex(function (person){
//     return person.budget === 6000
// })
// let foundPerson
// for (const person of people){
//     if (person.budget === 6000){
//         foundPerson = person
//     }
// }

// const budgetIndex = people.find(person => person.budget === 6000)
//
// console.log(foundPerson)

//console.log(cars.includes("Audi"))

// const upperCars = cars.map(car => {  // map возвращает новый массив
//     return car.toUpperCase()
// })
//
const toPow = num => num ** 2
const sqrt = num => Math.sqrt(num) ///|///
//
// const pow2Fib = fib.map(toPow).map(Math.sqrt) // использование лямбда-стрелочной функции, return по умолчанию
// console.log(pow2Fib) // числа фиба в квадрате
//
// console.log(cars)
// console.log(upperCars)


// const pow2Fib = fib.map(toPow) // использование лямбда-стрелочной функции, return по умолчанию
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)

const people = [
    {name: "Legion", budget: 10000},
    {name: "NotLynx", budget: 2000},
    {name: "Anna", budget: 6000}]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
    acc+=person.budget
    return acc
}, 0)
console.log(allBudget)


// Ex 1

// const text = "Hello, we are learning JS"
// const reversedText = text.split("").reverse().join("")
// console.log(reversedText)




