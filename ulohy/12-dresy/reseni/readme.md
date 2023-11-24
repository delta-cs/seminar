# Dresy – řešení

Do proměnné `n` se načte počet hráčů týmu. Poté je potřeba ze vstupu načíst prázdný řádek, který se samozřejmě nikam
neukládá. Pak jsou vytvořeny dvě proměnné pro počet sudých a počet lichých čísel, zpočátku nastavené na nulu.

Následný `for` cyklus začíná s proměnnou `i` na nule a pokaždé ji zvyšuje o 1, dokud je nižší než `n`. Jakmile je
rovna `n`, cyklus končí. To znamená, že cyklus se provede `n`-krát, což zajišťuje, že se načte přesně tolik čísel dresů,
kolik jich na vstup přijde. Žádné nebude vynecháno a zároveň se jich program nepokusí načíst více.

U načteného čísla je potřeba určit, zda je sudé či liché. K tomu je využit operátor % (modulo) – zbytek po dělení. Např.
7 % 3 je 1, protože 1 je zbytek po dělení 7 / 3. V tomto případě se zjišťuje zbytek po dělení čísla dresu dvěma, jelikož
pro všechna sudá čísla bude roven 0. Naopak u všech lichých vyjde 1. Zda se zbytek rovná 0, zjišťuje podmínka uvnitř
cyklu. Pokud ano, zvýší se proměnná pro počet sudých, jinak se zvýší proměnná pro počet lichých čísel.

Po skončení cyklu je vytvořena podmínka pro výpis s výchozí hodnotou `equal`. Pokud je ovšem sudých čísel více než
lichých nebo naopak, v podmínce se proměnná změní na příslušnou odpověď.
