# Textový (de)komprimátor

<img src="cover.webp" height="200" alt="ilustrace"/>

Na vstupu programu bude (na samostatných řádcích)

- několik slov oddělených jednou mezerou (dohromady o délce nejvýše 10 000 znaků),
- požadovaná operace (`compress` nebo `decompress`).

Když bude zadaná operace `compress`, slova budou obsahovat pouze písmena anglické abecedy. Při operaci `decompress`
mohou obsahovat i čísla.

Komprimace probíhá následovně: Je-li ve slově jedno písmeno vícekrát v řadě za sebou, lze jej zapsat pouze jednou a za
něj vložit číslo, které značí, kolikrát se toto písmeno opakuje.

Dekomprimace je proces stejného principu, jen opačný – písmeno následované číslem se převede na daný počet těchto písmen
zapsaných za sebou.

Úkolem je na všech slovech v prvním řádku provést zadanou operaci a vypsat její výsledek.

## Příklad #1

### Vstup

```
crosssection need RossShire
compress
```

### Výstup

```
cros3ection ne2d Ros2Shire
```

<div style="page-break-after: always;"></div>

## Příklad #2

### Vstup

```
bo2k2e2per fe2
decompress
```

### Výstup

```
bookkeeper fee
```
