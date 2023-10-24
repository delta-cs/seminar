# Vysvědčení

<img src="cover.webp" height="200" alt="ilustrace"/>

Nadešel konec školního roku a je potřeba vyhodnotit, zda žák prošel do dalšího ročníku. Program dostane na vstupu
informace o jeho výsledcích v předmětu (na samostatných řádcích):

- známka – celé číslo od 1 do 5,
- reprezentace školy na olympiádách – `attended` (účastnil se) nebo `did not attend` (neúčastnil se),
- procento zameškaných hodin – desetinné číslo od 0 do 100,
- zda zdraví učitele na chodbách – `polite` (slušný) nebo `impolite` (neslušný).

Základní kritérium pro úspešné dokončení ročínku je, že známka musí být 4 nebo lepší. S pětkou žádný student projít
nemůže. Zároveň s tím je vyžadováno buď

- nemít zameškaných více než 20 % hodin

a nebo

- reprezentovat školu na olympiádách.

Pokud žák má větší než 20procentní absenci a ani se neúčastnil soutěží, má ještě poslední možnost záchrany. A to tehdy,
když o něm platí obě následující tvrzení:

- má jako známku jedničku

a zároveň

- zdraví na chodbách učitele.

Úkolem je vypsat `passed`, pokud student prošel a `failed`, pokud nikoli.

## Příklad #1

### Vstup

```
2
did not attend
5
polite
```

### Výstup

```
passed
```

### Vysvětlení

Dvojka na průchod stačí a absence je pod 20 procenty, žák tudíž prošel.

## Příklad #2

### Vstup

```
4
did not attend
24.5
impolite
```

### Výstup

```
failed
```

### Vysvětlení

Ačkoli má žák dostatečnou známku, jeho absence je větší než 20 % a ani nesoutěžil na olympiádách. A protože nemá
jedničku a k učitelům je nezdvořilý, neprošel.

---

- [řešení](reseni)
- [testy](testy)
