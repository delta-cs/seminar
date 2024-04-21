# Souborový systém

<img src="cover.webp" height="200" alt="ilustrace"/>

Na vstupu programu bude (na samostatných řádcích)

- absolutní cesta (řetězec dlouhý 1 až 10 000 znaků),
- absolutní nebo relativní cesta (řetězec dlouhý 0 až 10 000 znaků).

Cesty odkazují na adresáře (složky) v souborovém systému. Oddělovačem je lomítko (`/`). Cesty jsou vždy oddělovačem
zakončeny. Nebudou obsahovat mezery ani jiné bílé znaky.

Absolutní cesta se od relativní cesty pozná tím, že začíná lomítkem.

V cestách se pomocí sekvence dvou teček (`..`) lze dostat do nadřazeného adresáře. Když se tato sekvence použije v
kořenovém adresáři (`/`) – který nadřazenou složku nemá – nedojde k žádné změně; cesta zůstává v něm. Jinými slovy,
cesta `/..` vede na cestu `/`. Vizte příklad #2.

V systému se nepoužívá tečka (`.` nebo `./`) pro označení aktuální složky.

Bude-li druhá cesta absolutní, úkolem je vypsat nejkratší relativní cestu, po níž je možné se dostat z první cesty do
druhé. Když budou cesty stejné, nevypisovat nic.

Bude-li druhá cesta relativní, úkolem je vypsat absolutní cestu, která vznikne spojením první s druhou. Tedy, na jakou
cestu se dostaneme, když začneme na té první a z ní budeme procházet pomocí druhé. Když bude druhá cesta prázdná
(prázdný řádek), znamená to, že se z první cesty nikam neposuneme.

## Příklad #1

### Vstup

```
/home/hacker/documents/code/
/home/hacker/pictures/icons/
```

### Výstup

```
../../pictures/icons/
```

<div style="page-break-after: always;"></div>

### Vysvětlení

Druhá cesta je absolutní, program tedy vypíše, jakou relativní cestou se do ní lze dostat. První sekvence `..` nás
přesune ze složky `code` do její nadřazené, čili `documents`. Druhá sekvence nás zase přesune o složku výš, tedy
do `hacker`. V té už stačí přejít do `pictures` a pak do `icons`.

## Příklad #2

### Vstup

```
/usr/
bin/../../../../dev/null/
```

### Výstup

```
/dev/null/
```

### Vysvětlení

Druhá cesta je relativní, program tedy vypíše, na jakou cestu se dostaneme, když po ní půjdeme. Nejprve se přesuneme
do `/usr/bin/`. Následně nás `..` přesune zpět do `/usr/`. Druhé `..` nás přesune do kořenové složky (`/`). Další `..`
už nás tedy nemůže přesunout do žádného nadřazeného adresáře, a tak zůstáváme v `/`. Poslední `..` jakbysmet. Pak už
přecházíme do složky `dev` a v ní poté do podsložky `null`.

## Příklad #3

### Vstup

```
/Earth/Europe/Czechia/../Russia/Moscow/
/Earth/Asia/Russia/
```

### Výstup

```
../../../Asia/Russia/
```
