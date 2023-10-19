# Definice a volání

Funkce se dá popsat tak, že to je část kódu, která je nějak **pojmenována** a lze ji pod tímto jménem využít **opakovaně**. Vytvoření funkce se v C#, Javě, C++ a C provádí slovem `void`. V JavaScriptu je to `function`, v Pythonu `def`. Po něm následuje její název a hned za ním kulaté závorky. Po nich přijdou složené závorky ohraničující tělo metody, podobně jako u podmínek. Do nich patří kód, který se má ve funkci vykonat. Příklad definice funkce:

```csharp
void Greet()
{
    Console.WriteLine("Hello, world!");
}
```

Vytváříme funkci nazvanou `Greet`, tedy *pozdravit*. Zvykem je pojmenovávat funkci nejlépe slovesem, a případně dalšími přidanými slovy, které vystihují její účel. V těle této funkce je kód, který na výstup vypíše klasický známý pozdrav.

Tento program by po spuštění ale nevypsal nic. Tím, že jsme funkci v kódu vytvořili, se její obsah **ještě neprovede**. K tomu je potřeba funkci použít, takzvaně **zavolat**. Tam, kde chceme vykonat kód, který je uvnitř funkce, jednoduše napíšeme její název a za něj opět kulaté závorky. A nakonec středník, jako na konci každého příkazu. Volat funkci lze v kódu i nad místem, kde je definována. Tedy například:

```csharp
Greet();

void Greet()
{
    Console.WriteLine("Hello, world!");
}
```

Na prvním řádku je zavolána funkce `Greet`. Když se program na tento řádek dostane, **přejde** k vykonávání kódu, který je v jejím těle a vypíše tedy pozdrav. Jakmile dojde na konec funkce, **vrátí se** ve vykonávání zpět na řádek, kde byla volána a pokračuje dál. Mějme takovýto program:

```csharp
Console.WriteLine("start");
Greet();
Console.WriteLine("middle");
Greet();
Greet();
Console.WriteLine("end");

void Greet()
{
    Console.WriteLine("Hello, world!");
}
```

Nejdříve vypisuje `start`, poté volá `Greet`. Když se funkce dokončí, pokračuje dál a vypíše `middle`. Poté volá funkci dvakrát za sebou. Nejdříve se provede první volání, to skončí, a provede se druhé. Nakonec se ještě vypíše `end`. Výstupem je tedy

```
start
Hello, world!
middle
Hello, world!
Hello, world!
end
```

Vytváří-li funkce ve svém těle nějaké proměnné, po jejím skončení jsou **odstraněny**. Následující kód je tudíž chybný a nespustí se.

```csharp
CreateNumber();

// Chyba - proměnná `number` neexistuje.
Console.WriteLine(number);

void CreateNumber()
{
    int number = 5;
}
```

Podobně tomu je když se ve funkci vytvoří proměnná se stejným názvem, jako nějaká již existující v kódu, který ji zavolal. Tyto proměnné spolu nemají nic společného – každá má svou oddělenou hodnotu. Příklad:

```csharp
int number = 10;

PrintNumber();

Console.WriteLine(number);

void PrintNumber()
{
    int number = 5;
    Console.WriteLine(number);
}
```

Výstupem bude

```
5
10
```

Nejdříve se vytvoří proměnná `number` s hodnotou 10. Funkce si ve svém těle vytvoří jinou proměnnou se stejným názvem a hodnotou 5. Ta nijak neovlivní tu původní. Tuto novou proměnnou vypíše a skončí – tím je proměnná zahozena a pokračuje se dál. Program pak vypíše svou původní hodnotu v `number`.
