# MSB

## Hogyan másold be a teljes kódot VS Code-ba

1. **Projekt megnyitása mappaként**  
   - VS Code-ban válaszd a *File → Open Folder...* menüt, és nyisd meg azt a mappát, ahol az `index.html`, `styles.css` és `script.js` található.  
   - Így minden fájlt egyben látsz, nem kell külön-külön kimásolni.

2. **Git használata (ha a gépeden van Git):**  
   - Futtasd a következőt a terminálban:  
     ```bash
     git clone <ezt-a-repot-URL>
     cd MSB
     code .
     ```  
   - A `code .` parancs megnyitja a teljes projektet VS Code-ban azonnal.

3. **Zip-ként másolás:**  
   - Csomagold be a mappát (`index.html`, `styles.css`, `script.js`, `README.md`) ZIP-be, másold át a gépedre, majd bontsd ki és nyisd meg VS Code-ban mappaként.

4. **Egész fájl másolása kézzel:**  
   - Ha mégis másolnod kell, jelöld ki az adott fájl teljes tartalmát (pl. `index.html`), másold ki, majd illeszd be a saját VS Code projektedben lévő azonos nevű fájlba.  
   - Ügyelj rá, hogy a három fő fájl tartalma együtt adja ki a teljes oldalt, ezért mindhármat érdemes átmásolni.

5. **VS Code szinkronizálás távoli környezetből:**  
   - Használhatod a *Remote - SSH* vagy *Dev Containers* bővítményt, hogy közvetlenül egy távoli gépen lévő mappát nyiss meg VS Code-ban, így nem kell kézzel másolgatni a kódot.

Ezekkel a lépésekkel mindig egyben, hibamentesen tudod átvinni a teljes kódot VS Code-ba.
