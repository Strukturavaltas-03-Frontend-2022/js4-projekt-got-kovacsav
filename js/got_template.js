/* 
A DIZĂJN TERVĂNEK FELVĂZOLĂSA

1. A HTML- ĂŠs CSS-kĂłd nagy vonalakkal tĂśrtĂŠnĹ megtervezĂŠse 
- container tulajdonsĂĄgai
- a legnagyobb mezĹ a karakterekkel (grid vagy flexbox)
- a sidebar elemeinek ĂśsszegyĹąjtĂŠse
- mĂĄr ekkor Ăźgyelni arra, hogy reszponzĂ­v mĂłdszerekkel dolgozzunk

ADATOK LEKĂRĂSE, RENDSZEREZĂSE

2.  SzĂźksĂŠgĂźnk van az adatokra, amelyekkel dolgozunk.   
Milyen mĂłdon kĂŠrjĂźk le Ĺket?
- A got.json fĂĄjlbĂłl az URL ĂŠs a fetch segĂ­tsĂŠgĂŠvel 
- FigyelĂźnk az aszinkronitĂĄsra
- MegvalĂłsĂ­tjuk a hibakezelĂŠst (try/catch)

3. RĂśgtĂśn szĹąrnĂźnk is kell az adatokat, Ă­gy egy filterrel 
eltĂĄvolĂ­tjuk a JSON tanulmĂĄnyozĂĄsa utĂĄn/segĂ­tsĂŠgĂŠvel a nem ĂŠlĹ karaktereket

4. A karaktereket abc-sorrendben kell felsorakoztatni:
rĂśgtĂśn ezt a metĂłdust is megĂ­rjuk: ezt tĂśbb mĂłdszerrel is lehet, esetleg
figyeljĂźnk arra, hogy az angol karakterkĂŠszletet hasznĂĄljuk (Intl.Collator)

ADATOK VIZUĂLIS FORMĂBAN TĂRTĂNĹ MEGJELENĂTĂSE

5. A cellĂĄk lĂŠtrehozĂĄsa (Ăśtletek)
- template literal
- appendChild
- osztĂĄlylista hozzĂĄadĂĄsa
- setAttribute
- innerHTML

6. MenjĂźnk vĂŠgig a karakterek listĂĄjĂĄn egy metĂłdus segĂ­tsĂŠgĂŠvel, 
ĂŠs Ă­rassuk ki a szĂźksĂŠges adatokat a dinamikusan generĂĄlt mezĹkbe

SIDEBAR

(A kĂśvetkezĹ pontokat egy vagy tĂśbb fĂźggvĂŠnnyel ĂŠrdemes megvalĂłsĂ­tani?
MiĂŠrt?)

7. Ide a cellĂĄk lĂŠtrehozĂĄsĂĄhoz (4.) hasonlĂł mĂłdszerrel beolvassuk a kĂŠpet 

8. A leĂ­rĂĄs megjelenĂ­tĂŠsĂŠhez az elĹzĹhĂśz hasonlĂł mĂłdszert alkalmazunk

9. A hĂĄzak megjelenĂ­tĂŠsĂŠhez az elĹzĹhĂśz hasonlĂł mĂłdszert alkalmazunk
- Ha hiĂĄnyzik a hĂĄz ikonja (feltĂŠtelvizsgĂĄlat), 
placeholder image elhelyezĂŠsĂŠre lesz szĂźksĂŠg

10. A sidebar-ban akkor jelennek meg az adatok, ha adott kĂŠpre kattintunk, 
tehĂĄt egy esemĂŠnykezelĹ segĂ­tsĂŠgĂŠvel hĂ­vjuk meg a fenti fĂźggvĂŠnyeket
(az aszinkronitĂĄsra figyeljĂźnk)

KERESĂS A KARAKTEREK KĂZĂTT

11. Le kell hozzĂĄ kĂŠrni a karakterek listĂĄjĂĄt

12. Hogyan tudjuk megvizsgĂĄlni, hogy az input mezĹ tartalmĂĄval megegyezĹ karakternĂŠv
szerepel a listĂĄban?
- VĂŠgigiterĂĄlunk az Ăśsszes elemen, ĂŠs elrejtjĂźk azokat, 
amelyek nem felelnek meg a feltĂŠteleknek (keressĂźnk metĂłdust, amely segĂ­t ebben)/
ĂŠs azokat jelenĂ­tjĂźk meg, amelyek megfelelnek a feltĂŠtelnek
- AlakĂ­tsuk kisbetĹąssĂŠ, majd hasonlĂ­tsuk Ăśssze Ĺket (vagy)
- HasznĂĄlhatjuk a new RegExp-et, nĂŠzzĂźnk utĂĄna

+ ReszponzivitĂĄs kivitelezĂŠse

*/
