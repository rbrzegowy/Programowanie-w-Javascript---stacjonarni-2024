var name = 'janek'
var nazwisko = 'kos'
// globalne śmieci: window.name - z każdego pliku .js


// strict mode: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// "use strict"

/* Do zapamiętania
1. wywołanie niezadeklarowanej zmiennej zwraca: is not defined lub Cannot access varName before initialization
2. wywołanie zmiennej bez wartości: undefined
3. zasięg zmiennych var vs let/const
4. redeklaracja zmiennych var i let
5. zasięg globalny zmiennych var
*/

// Podwójna deklaracja zmiennej
function varTest() {
    var x = 1
    if (true) {
        var x = 2 // ta sama zmienna
        log(x) // 2
    }
    log(x) // 2
}
varTest()

/** Brak deklaracji zmiennej */
var a = 1
var b = 1
function varNotDeclared() {
    a = 2 // ta sama zmienna - brak var!
    var b = 110 // inna zmienna - jest deklarowana wewnątrz funkcji
    log(b)
}
log("Before a: " + a) // 1
log("Before b: " + b) // 1
varNotDeclared()
log("After a: " + a) // 2
log("After b: " + b) // 1


/** Hoisting var - wynoszenie zmiennej na top */

// użycie zmiennej przed deklaracją - hoisting (undefined)
// var - wynosi deklarację i domyślna inicjalizację (undefined)
function hoistTest() {
    log('h:', h) // "undefined"! zamiast 'h is not defined'
    var h = 1
}
hoistTest()

// Let, const
let x = 10
log(x)
/** let - 'następca' var, przypisane do funkcji, bloku, konstrukcji */
function letTest() {
    let x = 1
    if (true) {
        let x = 2 // different variable
        for (let x = 1; x < 11; x++) { //yet another variable
            log(x)
        }
        log(x) // 2
    }
    log(x) // 1
}

// let, const - wynosi jedynie deklarację! (błąd cannot access someVar before initialization
// console.log(PI)
const PI = 3.14

// let i const podlegają tzw. Temporal Dead Zone
// TDZ - kod od początku zakresu leksykalnego (tzw. scope, np. funkcja, ogólnie: {}) do deklaracj let/const
// 
// z MDN
{ // początek TDZ dla letVar
    const func = () => console.log(letVar); // 'użyte' przed let-em

    func(); // wewnątrz TDZ
    let letVar = 3; // koniec TDZ
    func(); // już za TDZ
}


// tools
function log(...msgs) {
    let ret = msgs.join(', ')
    console.log(...msgs)
    return ret
}



let empty = undefined
let empty2 = null
const user = {
    name: 'rychu',
    email: undefined
}
const json = JSON.stringify(user)
json
let name2 = null
// name2 = undefined
console.log(name2.length)

console.log(typeof name2)