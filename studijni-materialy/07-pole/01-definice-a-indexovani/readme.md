# Definice a indexování

Pole (angl. *array*) je v informatice označení pro jednu z takzvaných datových struktur. Datová struktura je nějaký konkrétní způsob, jak organizovaně ukládat data v paměti počítače.

Pole je struktura, která uchovává několik prvků (proměnných) stejného datového typu. Každý prvek má přiděleno své jedinečné celé číslo, takvaný **index**. Indexy jsou číslovány od 0, tudíž první prvek v poli má index 0, druhý prvek má index 1, třetí prvek má index 2 a tak dále. Každý další prvek má tedy o 1 větší index než ten předchozí. Každé pole má svou takzvanou velikost (popř. délku) – počet prvků, které v něm jsou uloženy. Tedy např. pole s délkou 5 obsahuje 5 prvků číslovaných pomocí indexů od 0 do 4. Takové pole se dá zobrazit třeba takto:

<table>
<tr><th>index</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
<tr><th>hodnota</th><td>13</td><td>7</td><td>2</td><td>9</td><td>7</td></tr>
</table>

Toto pole ukládá celá čísla. Konkrétně:

- Na indexu 0 je číslo 13.
- Na indexu 1 je číslo 7.
- Na indexu 2 je číslo 2.
- Na indexu 3 je číslo 9.
- Na indexu 4 je číslo 7.

Pokud by se program pokusil získat hodnotu na indexu 5, došlo by k chybě, neboť takový index se v poli nenachází.

Indexy v poli musí být vždy unikátní (žádné dva nesmí být stejné), ale jak je vidět, o uložených hodnotách toto platit nemusí – číslo 7 se nachází na indexech 1 i 4.

Hodnoty na daných indexech se dají změnit, stejně jako hodnoty proměnných. Např. po změně hodnoty uložené na indexu 3 na číslo 4 bude pole vypadat takto:

<table>
<tr><th>index</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
<tr><th>hodnota</th><td>13</td><td>7</td><td>2</td><td>4</td><td>7</td></tr>
</table>

Do polí je také možné další prvky přidávat. Nový prvek bude mít vždy index o 1 větší než ten poslední. Přidání čísla 10 do tohoto pole tedy vypadá takto:

<table>
<tr><th>index</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><th>hodnota</th><td>13</td><td>7</td><td>2</td><td>4</td><td>7</td><td>10</td></tr>
</table>

Na konci vznikl nový prvek s indexem 5 a do něj byla uložena hodnota 10.

Prvky se z polí dají i odebírat. Co se potom s hodnotami a indexy děje, to necháme na vašem vyzkoušení nebo dohledání.
