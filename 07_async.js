// Event Loop

// const timeOut = setTimeout(() => {
//     console.log("After Timeout")
// }, 2500)
//
// clearTimeout(2500)
//
// const interval = setInterval(() => {
//     console.log("After Timeout")
// }, 1000)
//
// clearInterval(1000)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
//
// delay(() => {
//     console.log("After 2 seconds")
// }, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            //reject("Something got wrong")
        }, wait)
    })
    return promise
}

// delay(2500)
//     .then(() => {   // if OK
//         console.log("After 2 seconds")
//     })
//     .catch(err => console.error("Error:", err)) // if ERROR
//     .finally(() => console.log("Finally")) // in any case at the end


const getData = () => new Promise(resolve => resolve([1,1,2,3,5,8,13]))
getData().then(data => console.log(data))

async function asyncEx() {
    try{
        await delay(3000)
        const data = await getData()
        console.log("Data:", data)
    }
    catch (e){
        console.error(e)
    }
    finally {
        console.log("Finally")
    }
}

asyncEx()

