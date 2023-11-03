# Léky

<img src="cover.webp" height="200" alt="ilustrace"/>

Tonda je nemocný a musí užívat léky.

Každé tři hodiny, počínaje 6:00 a konče 21:00, si bere bílou pilulku.

Každé dvě hodiny, od 8:00 do 22:00, červenou.

Každých 45 minut, od 12:45 do 22:30, žlutou.

Léky si bere vždy přesně po daném intervalu – ne dříve nebo déle – např. bílé v 6:00, poté až v 9:00 a tak dále.

Na vstupu programu bude čas – dvě celá čísla:

- na 1. řádku hodiny (0 až 23),
- na 2. řádku minuty (0 až 59).

Pozn.: hodiny a minuty se neformátují na dvě cifry. Např. 6:00 by tedy bylo

```
6
0
```

Úkolem je vypsat, jaké pilulky si Tonda v tento čas musí vzít (`white`, `red`, `yellow`).

Pilulky vypisujte v zadaném pořadí (bílá, červená, žlutá) na samostatné řádky.

Nebude-li čas na žádnou pilulku, nevypisujte nic.

## Příklad

### Vstup

```
15
0
```

### Výstup

```
white
yellow
```

### Vysvětlení

V 15:00 je čas, aby si Tonda vzal bílou i žlutou pilulku, červenou ale nikoli.

---

- [řešení](reseni)
- [testy](testy)
