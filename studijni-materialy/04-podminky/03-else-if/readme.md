# Else if

Ještě se nabízí upravit program tak, aby v případě zadání přesně 5 vypsal ještě jinou zprávu. To je ideální situace pro
použití `else if` (*jinak pokud*). Stejně jako `else` patří za existující podmínku, ale následuje po
něm logický výraz, tak jako po `if`. V případě, že tento předcházející `if` je splněn, provede se kód v jeho těle a nic
dalšího se nestane. Ale není-li splněn, přejde program k `else if`, který jej následuje, a vyhodnotí jeho logický výraz.
Pokud je splněn, provede se kód uvedený ve složených závorkách za tímto `else if`. Ukázka:

```csharp
int number = int.Parse(Console.ReadLine());

if (number > 5)
{
    Console.WriteLine("You entered a number greater than five.");
}
else if (number < 5)
{
    Console.WriteLine("You entered a number less than five.");
}

Console.WriteLine("Bye, user.");
```

Program nyní reaguje na čísla větší než 5 a menší než 5. Při zadání přesně 5 však vypíše jen rozloučení. Za `else if` se
tedy hodí přidat `else`. Ten se vykoná až tehdy, pokud první ani druhá podmínka nebyla splněna. Je-li číslo větší než 5,
zachytil ho první `if`. Je-li menší než 5, zachytil ho `else if`. Pokud ani jednou z podmínek neprošlo, je jisté, že to
musí být právě 5.

```csharp
int number = int.Parse(Console.ReadLine());

if (number > 5)
{
    Console.WriteLine("You entered a number greater than five.");
}
else if (number < 5)
{
    Console.WriteLine("You entered a number less than five.");
}
else
{
    Console.WriteLine("You entered five.");
}

Console.WriteLine("Bye, user.");
```

Kód se dá i docela dobře číst: *Pokud je `number` větší než 5, vypiš A. Jinak pokud je menší než 5, vypiš B.
Jinak vypiš C.*
