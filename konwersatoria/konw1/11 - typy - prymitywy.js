// typy proste
// number, string, boolean, undefined, symbol
// nie ma osobnych float dla liczb, char dla znaków
// dla wielkich liczb jest bigint

// ciekawostka co do typów na przykładzie number
const wiek = 10.4
console.log(typeof wiek)

const wiek2 = new Number(10)
console.log(typeof wiek2)

const wiek3 = Number(10)
console.log(typeof wiek3)

// string
const string1 = 'abc'
const string2 = new String('abc')
const string3 = String('abc')

// boolean
const boolean1 = true
const boolean2 = new Boolean(true)
const boolean3 = Boolean(true)
// szybka konwersja poprzez negację - truthy/falsy values
const boolean4 = !string1
// lub podwójną negację
const boolean5 = !!string1

// obiekty -  cała reszta. Null:D, Function, Array, Object, Date, Error, RegEx, Symbol
