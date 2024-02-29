## Rozgrzewka, praca z DOM i zdarzeniami dokumentu

### Wersja shame:
- Utwórz w html cztery pola tekstowe i przycisk "Przelicz"
- Po naciśnięciu "Przelicz" pokaż na stronie sumę, średnią, min i max z wartości wpisanych do pól tekstowych.

### Wersja zieew:
- Wyliczone wartości pokazuj live gdy tylko użytkownik zmieni wartość w polu tekstowym

### Wersja normal:
- Pola tekstowe powinny być dodawane dynamicznie. Na początku są widoczne trzy, kolejne użytkownik może dodać klikając w przycisk "Dodaj pole"
- Nieużywane pola tekstowe można usunąć

### Przydatne
> Pobieranie elementu ze struktury DOM:
> ```document.querySelector(selektor)```
> ``` document.querySelectorAll(selektor) ```  
>
> Nasłuchiwanie na zdarzenia:
> ```document.addEventListener(nazwaZdarzenia, callback)```  
>
> Tworzenie nowego elementu HTML
> ```document.createElement(element)```  
>
> Dodawanie elementu HTML do struktury dokumentu
> ```parentElement.appendChild(child), element.insertBefore(newElement), [...]```  
>
> Usuwanie elementu HTML ze struktury dokumentu
> ```parentElement.removeChild(child), [...]```  