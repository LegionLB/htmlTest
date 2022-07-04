// Number

// const num = 88
// const num_float = 8.8
// const pow = 10e3 // 10*10*10*10
//
// console.log("MAX_SAFE_INTEGER ", Number.MAX_SAFE_INTEGER)
// console.log("Math.pow 53", Math.pow(2, 53) - 1)
// console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER)
// console.log("MAX_VALUE", Number.MAX_VALUE)
// console.log("MIN_VALUE", Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log("2/0", 2/0)
// console.log(Number.NaN) // Not a Number
//
// const weird = 2 / undefined
// console.log(isNaN(weird)) // is Not a Number - true or false as a response
//
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(88))
//
// const stringInt = "88"
// const stringFloat = "8.8"
// console.log(Number.parseInt(stringInt) + 2) //data type changing
// console.log(+stringInt + 2) //data type changing
// console.log(parseInt(stringInt) + 2) //data type changing
// console.log(parseFloat(+stringFloat + 2))

//
// console.log(0.4 + 0.2)
// console.log(+(0.4 + 0.2).toFixed(2)) // cut the number of numbers

// Big INT

//console.log(10n - 4) // ошибка

// console.log(parseInt(10n) - 4)
//
// console.log(10n / 5n)


// Math

console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.pow(5,3))
console.log(Math.max(45,33,443,123,4444,8888)) // определяет максимальное число
console.log(Math.min(45,555,444534,34343,3333,88888)) // определяет минимальное число
console.log(Math.floor(4.10)) // округляет число в меньшую сторону
console.log(Math.ceil(4.10)) // округляет в большую сторору
console.log(Math.round(4.10)) // округляет к ближайшему целому
console.log(Math.trunc(4.10)) // удаляет всю дробную часть
console.log(Math.random())

// Example Random

function getRandomNumberBetween(min, max){
    return Math.trunc(Math.random() * (max - min + 1) + min)
}

console.log(getRandomNumberBetween(10, 45));






