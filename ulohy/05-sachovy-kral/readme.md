# Šachový král

<img src="cover.webp" height="200" alt="ilustrace"/>

Na šachovnici se odehrává samotný konec partie. Bílý, doufající v remízu, přišel o všechny figury a zbývá mu jen král.
Černý právě odehrál a na tahu je bílý. Na vstupu programu budou (na samostatných řádcích) údaje o aktuální pozici:

- zda je bílý v šachu (`check` nebo `no check`),
- zda bílý král má nějaké políčko, na které může vstoupit (`can move` nebo `cannot move`).

Na základě pravidel šachu je úkolem vypsat stav, ve kterém se partie nyní nachází, tedy jeden z těchto:

- `continuing` – nic zvláštního, hra pokračuje.
- `check` (šach) – bílý je v šachu, ale má, kam s králem uhnout a hra tak pokračuje.
- `checkmate` (mat) – bílý má šach a žádná volná políčka – prohrál.
- `stalemate` (pat) – bílý není v šachu, ale nemá, kam táhnout – remíza.

## Příklad

### Vstup

```
check
can move
```

### Výstup

```
check
```

---

- [řešení](reseni)
- [testy](testy)
