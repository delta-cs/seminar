# Denní rozvrh

<img src="cover.webp" height="200" alt="ilustrace"/>

Rozvrh vypadá takto:

| od (včetně) | do (včetně) | činnost            |
|-------------|-------------|--------------------|
| 6:00        | 6:59        | breakfast          |
| 7:30        | 9:14        | programming        |
| 9:15        | 11:29       | cycling            |
| 11:45       | 12:19       | lunch              |
| 12:20       | 13:04       | listening to music |
| 13:05       | 14:34       | school club        |
| 14:35       | 16:39       | programming        |
| 18:05       | 18:44       | dinner             |
| 18:45       | 19:09       | watching TV        |
| 19:10       | 19:24       | shower             |
| 19:35       | 20:59       | reading            |
| 21:00       | 5:59        | sleep              |

Na vstupu programu bude čas – dvě celá čísla:

- na 1. řádku hodiny (0 až 23),
- na 2. řádku minuty (0 až 59).

Pozn.: hodiny a minuty se formátují na dvě cifry. Např. 6:00 by tedy bylo

```
6
0
```

Úkolem je vypsat, jaká činnost se v tento čas podle rozvrhu provádí. V případě, že daný čas nespadá do žádné činnosti,
např. se nachází mezi jízdou na kole a obědem, vypíše program `none`.

## Příklad #1

### Vstup

```
11
56
```

### Výstup

```
lunch
```

### Vysvětlení

V 11:56 se podle rozvrhu obědvá.

## Příklad #2

### Vstup

```
19
34
```

### Výstup

```
none
```

### Vysvětlení

Na 19:34 není určena žádná činnost.

---

- [řešení](reseni)
- [testy](testy)
