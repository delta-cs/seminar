# Balení do krabice – řešení

Do proměnné se načte objem krabice a pak se bez uložení načte prázdný řádek. Následně se vytvoří proměnné pro

- celkový objem věcí již vložených do krabice a
- objem aktuálně načtené věci.

Obě se nastaví na nulu.

Úděl následného `do`-`while` cyklu je při každém průchodu

- načíst objem další věc na páse,
- zjistit, zda se do krabice ještě vejde.
    - Pokud ano, přičíst její objem do proměnné ukládající objem věcí v krabici.
    - Pokud ne, ukončit vykonávání cyklu.

Zjištění, že se do krabice aktuální věc vejde, se provádí jednoduchou podmínkou v podmínce cyklu: součet objemu věcí,
které v krabici již jsou, a aktuální věci je menší nebo roven objemu krabice.

Možná trochu překvapivě, cyklus nejdříve přičítá objem akutálně načtené věci a až poté poprvé načítá vstup. Je to nutné,
neboť po načtení vstupu je potřeba prvně zkontrolovat, zda se do krabice vejde. Tato kontrola se ale zároveň musí
nacházet v podmínce cyklu, tudíž čtení vstupu je poslední operace, která se v každém průchodu cyklem vykoná. A tento
načtený vstup je tedy možné přidat do krabice až v dalším průchodu. Ze začátku je proměnná aktuální věci nastavena na
nulový objem, takže její přičtení v prvním průchodu nic nenaruší.

Takto cyklus poběží, dokud bude v krabici místo. Je však nutné ošetřit situaci, kdy krabice ještě není plná, ale na páse
už nejsou žádné další předměty. Kvůli tomu se v podmínce cyklu nachází podmínka, která musí současně také platit:
načtený vstup se nerovná -1. Toto číslo totiž značí, že na páse žádné další předměty nejsou, a cyklus tak může skončit.

Nakonec se vypíše proměnná ukládající objem všech věcí vložených do krabice.
