# Else

Co kdybychom chtěli uživateli oznámit i případ, že zadal číslo menší nebo rovné 5? K tomu poslouží klíčové
slovo `else` (anglicky *jinak*). Umisťuje se za existující podmínku a za ním nenásleduje logický výraz, nýbrž
rovnou kód, který se má vykonat, nebyla-li podmínka splněna.

```csharp
int number = int.Parse(Console.ReadLine());

if (number > 5)
{
    Console.WriteLine("You entered a number greater than five.");
}
else
{
    Console.WriteLine("You entered a number less or equal to five.");
}

Console.WriteLine("Bye, user.");
```

Po této úpravě program vždy vypíše informaci o zadaném čísle. Poté opět v každém případě přijde rozloučení.
