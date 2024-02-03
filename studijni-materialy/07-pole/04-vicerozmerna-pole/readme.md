# Vícerozměrná pole

Často se programu hodí možnost uchovávat data ve struktuře, která nemá jen jednu souřadnici (index), ale má jich více. Typickým příkladem využití je výšková mapa. Ta má souřadnice x a y popisující bod na ní. Na každém bodě této mapy je uloženo číslo znamenající nadmořskou výšku. Pro uložení takové mapy je ideální použít takzvané **2D pole**. Narozdíl od normálního pole v něm polohu prvku určuje ne jeden index, ale dva. Mohlo by vypadat např. takto:

<table>
<tr><th></th><th>0</th><th>1</th><th>2</th><th>3</th></tr>
<tr><th>0</th><td>12</td><td>13</td><td>14</td><td>13</td></tr>
<tr><th>1</th><td>11</td><td>12</td><td>13</td><td>12</td></tr>
<tr><th>2</th><td>10</td><td>10</td><td>11</td><td>11</td></tr>
</table>

První index 2D pole označuje souřadnici sloupce a druhý souřadnici řádku. Tedy např. hodnota na indexech 1; 2 je 10.

Ve většině jazyků se 2D pole vytváří jako „pole polí“, tedy normální pole, jehož prvky jsou další pole. Příklad v C#:

```csharp
int width = 4;
int height = 3;

int[][] map = new int[width][];

for (int i = 0; i < map.Length; i++)
{
    map[i] = new int[height];
}
```

Vytvoří se pole, které obsahuje 4 pole celých čísel. Pak je ještě nutné toto pole projít a na každém indexu vytvořit pole s délkou 3. Takto vznikne 2D pole celých čísel s rozměry 4 × 3 prvky. Jeho procházení cyklem by vypadalo takto:

```csharp
for (int i = 0; i < width; i++)
{
    for (int j = 0; j < height; j++)
    {
        Console.WriteLine(map[i][j]);
    }
}
```

Vnější cyklus s proměnnou `i` prochází indexy hlavního pole. Vnitřní cyklus pak s proměnnou `j` prochází indexy všech vnitřních polí. Ke každému prvku se přistupuje pomocí těchto dvou indexů (`i` a `j`).

---

V C# (narozdíl od jiných jazyků) lze 2D pole vytvořit ještě zkráceným zápisem: zapsáním čárky mezi první hranaté závorky a následné uvedení rozměrů mezi druhé:

```csharp
int[,] map = new int[4, 3];
```

K prvkům se pak také přistupuje indexy oddělenými čárkou:

```csharp
int number = map[1, 2];
```

A rozměry na jednotlivých osách lze zjistit pomocí funkce `GetLength`:

```csharp
int width = map.GetLength(0); // 4
int height = map.GetLength(1); // 3
```

---

Pole mohou být i více než 2rozměrná – lze jich do sebe zanořit v podstatě libovolné množství (na které vystačí paměť).
