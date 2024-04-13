# Syntaxe asociativních polí v Pythonu

## Vytvoření

```python
word_frequencies = {}
```

## Vložení prvku: `[]`

```python
word_frequencies["book"] = 10
```

## Změna hodnoty: `[]`

```python
word_frequencies["book"] = 15
```

## Vyhledání klíče: `in`

```python
if "book" in word_frequencies:
    # klíč nalezen
```

## Vyhledání hodnoty: `in` `values`

```python
if 10 in word_frequencies.values():
    # hodnota nalezena
```

## Odstranění prvku: `del`

```python
del word_frequencies["book"]
```

## Délka: `len`

```python
words_count = len(word_frequencies)
```
