# Adresářový strom

<img src="cover.webp" height="200" alt="ilustrace"/>

Na vstupu programu bude absolutní cesta ke složce.

Úkolem je vypsat soubory a složky umístěné v této složce a jejích podsložkách. Výpis začíná názvem hlavní složky.
Soubory a složky, které obsahuje, jsou vypsány na jednotlivých řádcích pod ní a odsazeny spojovníkem a mezerou. Soubory
a složky v podsložkách jsou navíc před spojovníkem odsazeny dvěma mezerami.

Položky v dané složce jsou řazeny tak, že nejprve se vypíšou všechny soubory (v abecedním pořadí) a po nich všechny
složky (v abecedním pořadí). Názvy položek budou obsahovat pouze malá písmena anglické abecedy a podtržítka.

Pakliže složka neexistuje,vypíše se `not found`.

<div style="page-break-after: always;"></div>

## Příklad

### Vstup

```
/home/hacker
```

### Výstup

```
hacker
hacker
- documents
  - driving_license.pdf
  - letter.txt
  - program.cs
  - agreements
    - non_disclosure.pdf
  - school
    - assignment.pdf
    - solution.pdf
  - taxes
    - 2024
      - may.csv
    - 2025
- pictures
  - landscape.jpg
  - screenshot.png
  - edited
    - img_2024_04_29.jpg
  - raw
    - img_2024_04_29.nef
```
