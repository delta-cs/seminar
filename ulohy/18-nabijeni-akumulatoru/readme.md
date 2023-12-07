# Nabíjení akumulátoru

<img src="cover.webp" height="200" alt="ilustrace"/>

Je potřeba napsat program pro analýzu dat o nabití akumulátoru.

Na vstupu programu bude

- celé číslo `n` (od 1 do 10 000),
- prázdný řádek,
- `n` desetinných čísel (od 0 do 100). Jsou to výsledky měření úrovně nabití postupem času – každé z nich je
  procentuální nabití akumulátoru v danou chvíli.

Akumulátor může být připojen buď ke zdroji, který jej nabíjí (úroveň nabití stoupá), nebo ke spotřebiči, který jej
vybíjí (úroveň nabití klesá). Nikoli však k oběma naráz. Také nemusí být připojen k ničemu – pak se jeho úroveň nabití
nemění.

Úkolem je vypsat jednu ze čtyř možností podle toho, jestli akumulátor

- nebyl v celé době měření nabíjen ani vybíjen: `unused`,
- byl nějakou dobu nabíjen, ale za celou dobu nebyl vybíjen: `charging`,
- byl nějakou dobu vybíjen, ale za celou dobu nebyl nabíjen: `discharging`,
- byl nějakou dobu nabíjen, ale v jinou dobu byl také vybíjen: `both`.

## Příklad #1

### Vstup

```
7

50
50
50
52.5
54
54
54
```

### Výstup

```
charging
```

### Vysvětlení

Při čtvrté a páté naměřené hodnotě došlo k nabití. Za celou dobu ale nedošlo k vybíjení, proto `charging`.

## Příklad #2

### Vstup

```
8

10
10
8
7.5
8.2
9.4
10.6
12
```

### Výstup

```
both
```

### Vysvětlení

Ze třetího na čtvrté měření byl akumulátor vybíjen, hned poté ale začalo nabíjení. Došlo k oběma možným změnám,
tudíž `both`.

---

- [řešení](reseni)
- [testy](testy)
