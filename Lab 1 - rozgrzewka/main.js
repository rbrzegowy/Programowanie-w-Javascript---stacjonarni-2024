// notatnik z zajęć
const liczba1 = document.querySelector('#liczba1')
const btnPrzelicz = document.querySelector('#przelicz')
const wynikiPojemnik = document.querySelector('#wyniki')

btnPrzelicz.addEventListener('click', () => {
    wynikiPojemnik.innerHTML = liczba1.value
    console.log(liczba1.value)
})
