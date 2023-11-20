let nav = document.querySelector("nav")
let li = document.querySelector("li")


function scrolling () {
    console.log(window.scrollY)
    if(window.scrollY > 10) {
        nav.style.background = "DARKVIOLET"
    } else {
        nav.style.background = "transparent"
    }
}
function scrolling () {
    console.log(window.scrollY)
    if(window.scrollY > 10) {
        li.style.background = "white"
    } else {
        li.style.background = ""
    }
}
window.addEventListener('scroll' , scrolling)
console.log(nav)