# Syntaxe polí v Pythonu

Pozn.: Python nemá nativní podporu pro pole, ale má takzvaný *list*, který lze použít stejně. Slovo „pole“ na této stránce ve skutečnosti formálně označuje právě list.

Pozn.: Pole v Pythonu dovolují ukládat i prvky různých datových typů. Zda je ale dobré tuto skutečnost využívat je otázka. Každopádně tato možnost se stejně hodí jen vyjímečně.

## Vytvoření

Vytvoření pole se provádí pouhými hranatými závorkami:

```python
numbers = []
```

Vytvoření 2D pole s rozměry 4 × 3 naplněného nulami:

```python
numbers = [[False for _ in range(3)] for _ in range(4)]
```

## Přidání prvku

Prvek se do pole přidá zavoláním funkce `append` (mezi názvem pole a funkcí je tečka). Příklad:

```python
numbers = []

numbers.append(5)
numbers.append(8)
numbers.append(3)
```

Do prázdného pole jsou postupně přidány prvky:

<table>
<tr><th>index</th><td>0</td><td>1</td><td>2</td></tr>
<tr><th>hodnota</th><td>5</td><td>8</td><td>3</td></tr>
</table>

## Přístup k prvku

K nastavení nebo přečtení hodnoty konkrétního prvku na daném indexu se využívají hranaté závorky za názvem pole. Mezi ně patří index tohoto prvku. Příklad:

```python
numbers = []

numbers.append(5)
numbers.append(8)
numbers.append(3)

print(numbers[1])

numbers[1] = 6

print(numbers[1])
```

Je vypsána hodnota na indexu 1, tedy 8. Následně je změněna na 6 a vypsána znovu. Výstup programu by tedy byl

```
8
6
```

## Délka

Ke zjištění aktuální délky pole slouží funkce `len`, do které se pole předá:

```python
numbers = []

numbers.append(7)
numbers.append(4)

numbersCount = len(numbers)

print(numbersCount)
```

Výstup:

```
2
```
