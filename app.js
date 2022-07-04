const header = document.getElementById('hi')
// const headerH2 = document.getElementsByTagName("h2")[0]
// const headerH2 = document.getElementsByClassName("h2-class")
const headerH2 = document.querySelector('h2') // возвращает всегда только 1 элемент
// const anotherHeaderH2 = headerH2.nextElementSibling
// console.log(anotherHeaderH2)

const h2List = document.querySelectorAll("h2")
const header3 = h2List[h2List.length - 1]

setTimeout(() => {
    addStylesTo(header, 'LegionSoftware')
}, 1500)

setTimeout(() => {
    addStylesTo(headerH2, "This is H2", 'red', '3rem')
}, 3000)

const aLink = header3.querySelector('a')

aLink.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("Click", event.target.getAttribute('href'))
    const urlDev = event.target.getAttribute('href')

    window.location = urlDev
})

setTimeout(() => {
    addStylesTo(aLink, "Another H2 text", 'blue')
}, 4500)

function addStylesTo(node, text, color = 'yellow', fontSize) {
    node .textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.background = 'black'
    node.style.padding = '2rem'
    node.style.display =  'block'
    node.style.width = '100%'
    // falsy: 0, false, undefined, '', null
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

header.onclick = () => {
    if (header.style.color === 'yellow'){
        header.style.color = '#000'
        header.style.background = '#fff'
    }else {
        header.style.color = 'yellow'
        header.style.background = '#000'
    }
}

headerH2.addEventListener('dblclick', () => {
    if (headerH2.style.color === 'red'){
        headerH2.style.color = '#000'
        headerH2.style.background = '#fff'
    }else {
        headerH2.style.color = 'red'
        headerH2.style.background = '#000'
    }
})
