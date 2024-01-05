# Poklad v řece

<img src="cover.webp" height="200" alt="ilustrace"/>

Na dně řeky, která protéká několika městy, je ukryta truhla se zlatým pokladem. Franta se rozluštěním šifry dozvěděl
její přesné umístění a teď spěchá, aby se k ní co nejrychleji dostal.

Na vstupu programu bude

- celé číslo (od 1 do 10 000) `n`,
- prázdný řádek
- `n` měst, každé zabírající dva řádky:
    - název města,
    - celé číslo (od 0 do 10 000) – poloha města na řece: vzdálenost od pramene po proudu (v kilometrech),
- prázdný řádek,
- celé číslo `t` – vzdálenost pokladu od pramene řeky (v kilometrech).

Města nejsou na vstupu nijak seřazena, protože vznikala podél řeky postupem času v různém pořadí. Zároveň platí, že
každé město je od pramene řeky jinak vzdálené, tedy, že žádná dvě města nemají stejnou polohu. Názvy měst budou
jednoslovné.

Od pramene řeky brzy vypluje loď, která v každém městě staví. Franta se na ni chystá nalodit, jenže neví, ve kterém
městě by měl vystoupit, aby byl pokladu nejblíž.

Úkolem je vypsat názvy měst ve vzestupném pořadí podle vzdálenosti od pokladu. Pokud by měla dvě města od pokladu
stejnou vzdálenost, přednost má to, které je blíže pramenu řeky (blíže po proudu).

## Příklad

### Vstup

```
5

Eldoria
3
Novastead
10
Astorium
8
Sirenvelle
6
Emberlyn
4

7
```

### Výstup

```
Sirenvelle
Astorium
Emberlyn
Novastead
Eldoria
```

### Vysvětlení

Na řece se nachází města různě vzdálená od pramene:

| název      | vzdálenost od pramene [km] | vzdálenost od pokladu [km] |
|------------|----------------------------|----------------------------|
| Eldoria    | 3                          | 4                          |
| Novastead  | 10                         | 3                          |
| Astorium   | 8                          | 1                          |
| Sirenvelle | 6                          | 1                          |
| Emberlyn   | 4                          | 3                          |

Truhla s pokladem je od pramene vzdálená 7 km. Nejblíže jí tedy je Sirenvelle a Astorium – obě města jsou od ní vzdálena
1 km. První je Sirenvelle, protože je blíže k prameni (6 je méně než 8). Stejná logika platí u Emberlyn a Novastead.

---

- [řešení](reseni)
- [testy](testy)
