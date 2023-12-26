# Kroužky

<img src="cover.webp" height="200" alt="ilustrace"/>

Na škole jsou dva kroužky: matematický a přírodopisný.

Na vstupu programu bude

- počet účastníků matematického kroužku `m`,
- prázdný řádek,
- `m` příjmení těchto účastníků,
- prázdný řádek,
- počet účastníků přírodopisného kroužku `b`,
- prázdný řádek,
- `b` příjmení těchto účastníků.

`m` a `b` jsou čísla od 0 do 10 000.

Příjmení budou jednoslovná. V jednom kroužku nikdy nebude jedno příjmení vícekrát – vždy nejvýše jednou.

Úkolem je vypsat příjmení žáků, kteří chodí na oba kroužky. Příjmení musí být vypsána v pořadí, v jakém jsou uvedena u matematického kroužku.

## Příklad #1

### Vstup

```
3

Lewis
Harris
Bonke

3

Strobel
Bonke
Lewis
```

### Výstup

```
Lewis
Bonke
```

### Vysvětlení

Na oba kroužky chodí Lewis a Bonke. Harris a Strobel chodí jen na jeden. Na výstupu jsou jména vypsána v pořadí stejném jako u matematického kroužku – nejdříve Lewis a pod ním Bonke.

### Příklad #2

### Vstup

```
2

Pascal
Newton

2

Einstein
Feynman
```

### Výstup

```

```

### Vysvětlení

Nejsou žádní žáci, kteří by chodili do obou kroužků.

---

- [řešení](reseni)
- [testy](testy)
