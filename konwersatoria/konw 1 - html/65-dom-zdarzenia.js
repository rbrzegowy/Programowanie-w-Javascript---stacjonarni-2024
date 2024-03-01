"use strict"
// nasłuchiwanie na eventy z DOM: .addEVentListener
document.addEventListener("DOMContentLoaded", start)
// koniec nasłuchiwania: .removeEventListener("DOMContentLoaded", start)

//event może przekazać do callback-a obiekt Event

// wcześniej:
// element.onclick = () => { } //Brrr
// element.onclick = () => { } //Brrr
// inline: <button onclick="console.log()"> Brrr^2

let kulka, przycisk, mouseX, mouseY
const select = selector => document.querySelector(selector)
function start() {
    select('#plotno').addEventListener("touchmove", bTM)

    select("#btn")
        .addEventListener('click', () => {
            kulka.style.top = 200 + "px"
            kulka.style.left = 100 + "px"
        })

    kulka = select("#kulka")
    kulka.addEventListener('touchstart', onKulkaTouchStart)
    kulka.addEventListener('touchmove', onKulkaTouchMove)
    kulka.addEventListener('touchend', onKulkaTouchEnd)
}
function onKulkaTouchStart(ev) {
    console.log("Touch start")
    console.log(ev)
    this.classList.add('red')
    mouseX = ev.touches[0].screenX
    mouseY = ev.touches[0].screenY
    console.log()
}
function onKulkaTouchEnd() {
    console.log("Touch end")
    this.classList.remove('red')
}

function onKulkaTouchMove(ev) {
    mouseX = ev.touches["0"].pageX - this.offsetWidth / 2
    mouseY = ev.touches["0"].pageY - this.offsetHeight / 2
    this.style.top = mouseY + 'px'
    this.style.left = mouseX + 'px'
    console.log(ev.touches[0])
}
let licznik = 0

function bTM(e) {
    console.log(e)
    let p = document.createElement('div')
    p.classList.add('pedzel')
    let top = e.touches["0"].pageY
    let left = e.touches["0"].pageX
    p.style.top = top + 'px'
    p.style.left = left + 'px'
    console.log(licznik++)
    select('#plotno').appendChild(p)
}