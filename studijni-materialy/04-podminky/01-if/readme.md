# If

Podmínky jsou naprosto klíčovou součástí programu. Dovolují rozdělit kód na části, které se buď vykonají, anebo
nevykonají. To je určeno tím, zda platí určité tvrzení, tedy zda je příslušná podmínka splněna. Z podstaty věci musí
toto tvrzení být nějaký logický výraz, jehož výsledkem je buď pravda nebo nepravda – nic jiného – podmínka buď splněna
je, nebo není.

Ve většině jazyků se podmínka značí klíčovým slovem `if` (anglicky *pokud*, případně *když*). Po něm následuje
logický výraz, podle kterého se podmínka splní, nebo ne. Za tímto výrazem, nejčastěji na dalším řádku, se nachází další
kód, takzvané tělo podmínky. Ten se v případě, že podmínka je splněna, vykoná. Jinak, když podmínka splněna není, se kód
nevykoná.

```csharp
if (10 > 5)
{
    Console.WriteLine("Ten is greater than five.");
}
```

V kódu je zapsána podmínka s výrazem `10 > 5` – zda je 10 větší než 5. Tento výraz je roven logické hodnotě – `true` (
pravda) nebo `false` (nepravda). V tomto případě je samozřejmě výraz pravdivý a kód ve složených závorkách se provede –
program do konzole vypíše zprávu.

Po změně znaménka na `<`, tedy úpravě podmínky tak, že se „ptáme“, zda je 10 menší než 5, se výraz vyhodnotí
jako `false` a tělo podmínky se nevykoná – program nevypíše nic.

```csharp
if (10 < 5)
{
    Console.WriteLine("Ten is less than five.");
}
```

Místo pevně zadaných hodnot je do podmínky možné vložit také proměnnou:

```csharp
int number = 10;

if (number > 5)
{
    Console.WriteLine("Ten is greater than five.");
}
```

V tomto případě ses bude hodnota výrazu odvíjet od hodnoty uložené v proměnné `number` – zda je nebo není větší než 5.

I přes využití proměnné není tento program stále příliš užitečný. Vykonání podmínky závisí na hodnotě, kterou v kódu
pevně zadáváme. Pokaždé, když se spustí, dopadne stejně, dokud někdo proměnnou nepřepíše. Do proměnné ale můžeme
samozřejmě uložit cokoli, třeba vstup od uživatele:

```csharp
int number = int.Parse(Console.ReadLine());

if (number > 5)
{
    Console.WriteLine("You entered a number greater than five.");
}
```

`Console.ReadLine()` vrací text zadaný uživatelem do konzole. Tento text je nutné (ne ve všech jazycích) převést na celé
číslo použitím `int.Parse()`. Teď už je program zajímavější. Po spuštění uživatel zadá číslo a když to je větší než 5,
program mu to oznámí. Jinak neudělá nic. To můžeme změnit a přidat pod složené závorky podmínky rozloučení s uživatelem:

```csharp
int number = int.Parse(Console.ReadLine());

if (number > 5)
{
    Console.WriteLine("You entered a number greater than five.");
}

Console.WriteLine("Bye, user.");
```

Program po podmínce pokračuje dál, ať už byla nebo nebyla splněna. To znamená, že rozloučení se vypíše vždy, nehledě na
zadané číslo.

Pozn.: složené závorky se v případě jednořádkových těl podmínek mohou vynechat. Takovou syntaxi můžete zkusit a případně
si ji dohledat.
