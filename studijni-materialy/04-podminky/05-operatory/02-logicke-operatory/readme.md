# Logické operátory

Často se hodí složit více logických výrazů do jedné podmínky. Například má-li se podmínka vykonat tehdy, když platí oba
ze dvou výrazů. Na to je určen logický operátor `&&` (v Pythonu `and`) nazvaný *a zároveň*. Vkládá se
mezi dva výrazy, u nichž obou je požadována pravdivost. Příklad:

```csharp
int numberOfLegs = 4;
bool isFriendly = true;

if (numberOfLegs == 4 && isFriendly)
{
    Console.WriteLine("It is a dog.");
}
```

Aby program vypsal zprávu, je nutné, aby platilo, že `numberOfLegs` je roven 4 a zároveň `isFriendly` bylo `true`.
Operátory je možné používat v řadě, výrazů může být libovolné množství:

```csharp
if (numberOfLegs == 4 && isFriendly && hasBrownFur && !eatsHoney && ...)
```

Podmínka projde pouze, budou-li platit všechny uvedené výrazy.

Druhým logickým operátorem je `||` (v Pythonu `or`) zvaný *nebo*. Opět patří mezi dva výrazy. K tomu, aby podmínka
prošla, však stačí pravdivost pouze jednoho z nich. Příklad:

```csharp
int numberOfLives = 9;
bool catchesMice = false;

if (numberOfLives == 9 || catchesMice)
{
    Console.WriteLine("It is a cat.");
}
```

V tomto případě se zpráva vypíše, protože `catchesMice` je sice `false`, `numberOfLives` se ale rovná 9. Kdyby platily
oba výrazy, podmínka by prošla také. Stejně tak se tento operátor dá řetězit:

```csharp
if (numberOfLives == 9 || catchesMice || !isLoud || hasNightVision ||  ...)
```

Bude-li kterýkoli z výrazů platný, podmínka se splní.

Logické operátory se dají kombinovat. Např. u tohoto příkladu:

```csharp
bool x = false;
bool y = false;
bool z = true;

if (x && y || z)
{
    ...
}
```

však nastává otázka: který operátor má přednost? Tedy, pokud by se nejdříve vyhodnotilo `x && y` jako `false` a poté by
se tento výsledek dosadil do `||`, vzniklo by `false || z`, a protože `z` je `true`, podmínka by se splnila. Naopak,
kdyby se jako první vyhodnotilo `y || z` jako `true` a poté dosadilo do `&&`, vzniklo by `x && false` a podmínka by se
nikdy nesplnila.

Pravda je taková, že přednost má vždy `&&`. Platil by tedy první případ. Pokud by bylo žádoucí chování změnit, dá se
operátor obalit do závorek:

```csharp
if (x && (y || z))
```

Tím, že je `(y || z)` v závorkách, se vyhodnotí jako první. Výsledek se dosadí k `&&` a nastane druhý zmíněný scénář.