# Syntaxe řetězců v Pythonu

Některé funkce mají více různých parametrů, které mění jejich chování. Dohledání v dokumentaci či různých návodech
necháme na vás.

## Indexace

```python
greeting = "Hello, world!"

# výsledek: "l"
third_letter = greeting[2]

```

## Délka: `len`

```python
greeting = "Hello, world!"

# výsledek: 13
length = len(greeting)

```

## Procházení cyklem

```python
greeting = "Hello, world!"

# výstup: "!dlrow ,olleH"
for i in range(len(greeting) - 1, -1, -1):
    print(greeting[i])

```

## Načtení standardního vstupu

```python
input_text = input()
```

## Vypsání na standardní výstup

```python
# bez zalomení řádku
print("Hello, world!", end="")

# se zalomením řádku na konci
print("Hello, world!")
```

## Převod velikosti písmen: `lower` a `upper`

```python
original = "Dear mister Lewis"

# výsledek: "dear mister lewis"
lowercase = original.lower()
# výsledek: "DEAR MISTER LEWIS"
uppercase = original.upper()

```

## Ořezání bílých znaků: `strip`

```python
original = " Hello, world!  "

# výsledek: "Hello, world!"
stripped = original.strip()
```

## Spojování: `+`

```python
author = "C. S. Lewis"
book = "The Chronicles of Narnia"

# výsledek: "C. S. Lewis: The Chronicles of Narnia"
title1 = author + ": " + book
```

## Násobení: `*`

```python
syllable = "la"

# výsledek: "lalala"
lyrics = syllable * 3
```

## Podřetězec: `[:]`

Obdrží-li závorky jen jedno číslo, získá se podřetězec od tohoto indexu až do konce. Obrdží-li dva, získá se podřetězec
od prvního (vyjma) do druhého indexu (vyjma).

```python
original = "C. S. Lewis: The Chronicles of Narnia"

# výsledek: "The Chronicles of Narnia"
book = original[13:]

# výsledek: "Lewis"
last_name = original[6:11]
```

Tato syntaxe nabízí ještě více možností, jak získat podřetězec. Například lze dosadit záporná čísla anebo tři místo
dvou. Zjistit, jaké to má účinky, necháme na vás.

## Rozdělení: `split`

```python
original = "C. S. Lewis"

# výsledek: ["C", "S", "Lewis"]
split = original.split(". ")
```

## Hledání podřetězce: `find`

```python
quote = "Remember the signs and believe the signs."

# výsledek: 13
first_result_index = quote.find("signs")
```

## Nahrazení podřetězce jiným: `replace`

```python
title = "The Chronicles of the Rings"

# výsledek: "The Lord of the Rings"
correct = title.replace("Chronicles", "Lord")
```

## Zřetězení prvků pole: `join`

```python
title_parts = ["C", "S", "Lewis"]

# výsledek: "C. S. Lewis"
joined = ". ".join(title_parts)
```
