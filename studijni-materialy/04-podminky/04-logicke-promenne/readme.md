# Logické proměnné

Hodnota logického výrazu se dá uložit i do proměnné. Takový datový typ, který ukládá buď `true` anebo `false` nazýváme anglickým slovem *boolean,* zkráceně **bool**. Ukázka uložení do proměnné:

```csharp
bool isGreater = number > 5;

if (isGreater == true)
{
    Console.WriteLine("The number is greater than five.");
}
```

Do proměnné `isGreater` se uloží hodnota výrazu, zda je `number` větší než 5. Tuto proměnnou následně testuje podmínka, konkrétně, zda se rovná `true`. V případě logických proměnných je však zbytečné používat `==`. Obsah proměnné je sám o sobě logickou hodnotou `true` nebo `false` a není tak nutné ho s nimi porovnávat, stejně jako se nepoužívá např. `(number > 5) == true`. Zkrácený zápis tedy `== true` vynechává a program funguje stejně:

```csharp
bool isGreater = number > 5;

if (isGreater)
{
    Console.WriteLine("The number is greater than five.");
}
```
