# Negace

Někdy je potřeba logický výraz tzv. znegovat, tedy obrátit jeho hodnotu: `true` změnit na `false` a naopak. K tomu
slouží operátor `!`. Ukázka:

```csharp
bool isGreater = number > 5;

if (!isGreater)
{
    Console.WriteLine("The number is not greater than five.");
}
```

Cokoli se bude nacházet v proměnné se v podmínce zneguje. Pozor, toto původní proměnnou nezmění, pouze podmínka se bude
„ptát“ na opačnou hodnotu, než je v proměnné uložena. Je-li proměnná `true`, podmínka se tedy nevykoná, zato při `false`
ano.