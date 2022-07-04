const person = {
    name: "Legion",
    age: 22,
    isDeveloper: true,
    language: ["ru", "eng", "ua"],
    // 'complex key': "Complex Value",
    // ["key_" + (1 + 3)]: "Computed key", // key_4
    greet(){
        console.log("Greet from person")
    },
    info () {
        //console.log("this:", this)
        console.info("Info about the person by name:", this.name)
    }
}

// console.log(person.name)
// console.log(person["age"])
// console.log(person["complex key"])
// console.log(person)
// person.greet()
//
// person.age++
// person.language.push("by")
// delete person["key_4"] // удаление части объекта по ключу
//
//
// console.log(person);

// const name = person.name
// const age = person.age
// const languages = person.languages
// const {name, age: personAge, language} = person
// console.log(name, personAge, language)
// console.log(person)
// for (let key in person){
//     if (person.hasOwnProperty(key)){
//         console.log("key: ",key)
//         console.log("value: ", person[key])
//     }
// }


// Object.keys(person).forEach((key) =>{
//     console.log("key: ",key)
//     console.log("value: ", person[key])
// })

// Context

// person.info()

const logger = {
    keys(){
        console.log("Object keys: ", Object.keys(this))
    },
    keysAndValues(){
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false) {
        if (top){
            console.log("------ start -------")
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1){
                console.log("-----------------")
            }
        })
        if (bottom){
            console.log("------- end --------")
        }
    }
}

// const bound = logger.keys.bind(logger)
// bound()

// logger.keys.call(person)
// logger.keysAndValues.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])

