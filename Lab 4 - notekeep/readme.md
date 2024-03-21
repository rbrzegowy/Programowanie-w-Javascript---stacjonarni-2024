## NotePocket

### Wersja hobbit
Aplikacja pozwala na tworzenie, edycję przechowywanie i usuwanie notatek. Każda notatka musi w minimalnej formie posiadać:

> Tytuł  
> Treść  
> Kolor notatki  
> Pin (boolean) - możliwość przypięcia do góry na liście notatek  
> Datę utworzenia

Notatki powinny być zapisywane w localStorage i wyświetlane w formie tablicy notatek na stronie głównej aplikacji.

### Wersja elf
- Tagowanie notatek  
- Wyszukiwarka notatek (po wszystkich dostępnych pola notatki oraz tagach)  


### Wersja ork
- Zapisywanie daty przypomnień (i wyświetlanie przypomnienia jeśli user jest na stronie lub ma pominięte przypomnienia)  
- Notatka może posiadać listę wypunktowaną (kliknięcie w punkt przenosi go do listy "done" - coś jak lista zakupów/todo)  

Przykłady: Google Keep, Evernote, Onenote

### Przydatne
> Obsługa localStorage:  
> ```localStorage.getItem(key)```
> ```localStorage.setItem(key, stringValue)```
> ```localStorage.removeItem(key)```
> ```localStorage.clear()```

> Zapisywanie dat (timestamp lub ISO string):   
> ``` Date.now() //timestamp ```  
> ``` new Date().toISOString() //format ISO ```  
> Wyświetlanie daty  
> ``` dateObject.toLocaleString() ```  
> ``` dateObject.get*() ```
