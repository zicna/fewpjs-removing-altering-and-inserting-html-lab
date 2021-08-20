// Write your code here!
// let element = document.createElement('div')

// document.body.appendChild(element)

// let ul = document.createElement('ul')

// for (let i = 0; i < 3; i++) {
//     let li = document.createElement('li')
//     li.innerHTML = (i + 1).toString()
//     ul.appendChild(li)
// }
// element.appendChild(ul)
// element.style.backgroundColor = "#27647B"
// element.style.textAlign = "center"
// ul.style.textAlign = "left"

// element.className = "dog"
// element.classList.add("this-is-fine")
// element.classList.remove("this-is-fine")

// ul.removeChild(ul.querySelector('li:ntn-child(2)'))


let main = document.getElementById("main");
main.remove()
let body = document.getElementsByTagName('body')[0]
let newHeader = document.createElement("h1")
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = `YOUR-NAME is the champion`

body.appendChild(newHeader)