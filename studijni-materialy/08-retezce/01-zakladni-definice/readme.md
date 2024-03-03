# Základní definice

Řetězec (angl. *string*) je v programování šikovným datovým typem, který slouží k ukládání a manipulaci s textovými
daty. Jedná se o klíčový prvek, ať už jde o jednoduché výpisy do konzole, práci s uživatelským vstupem, nebo pokročilé
operace zpracování dat v textové podobě.

Text je ve své podstatě sekvence jednotlivých znaků v daném pořadí. A přesně na tom jsou postaveny i řetězce. Každý
řetězec v sobě zkrátka ukládá několik znaků, kterými mohou být písmena, číslice, interpunkce i všelijaké speciální
symboly či emoji. Způsob, jakým se znaky v paměti počítače ukládají, je popsán
v [této kapitole](/studijni-materialy/01-reprezentace-dat-v-pocitaci#text).

Jelikož je řetězec obyčejným datovým typem, jeho vytvoření je otázkou vytvoření proměnné. V typovaných jazycích (v
Pardubickém hackerovi C, C++, C#, Java) se datový typ proměnné nazývá (z angličtiny) `string` (popř. velké `String`).
Nejjednodušší a hojně využívaný způsob vytvoření řetězce je pomocí uvozovek. Ve většině programovacích jazyků (a ve
všech z Pardubického hackera) lze použít uvozovky dvojité (`"`). Některé jazyky (JavaScript, Python aj.) podporují pro
stejný účel i jednoduché (`'`). Text, který se má do řetězcové proměnné uložit, jednoduše vepíšeme do kódu právě mezi
dvojici uvozovek. Ty vyhrazují, kde řetězec začíná a kde končí.

Příklad v C#:

```csharp
string greeting = "Hello, world!";
```

## Souvislost s polem

Tím, že řetězec uchovává skupinu znaků, je svou podstatou velice podobný poli, které taktéž uchovává několik hodnot
stejného datového typu. Tato analogie je velmi užitečná, jelikož poskytuje možnost pracovat s řetězci na úrovni
jednotlivých znaků, stejně jako s prvky pole.

Každý znak v řetězci je identifikován indexem, který určuje jeho pozici – naprosto totožně, jako jsou indexována pole.
Podobně mají řetězce také délku – počet znaků, které obsahují. Velmi užitečné je také možnost procházet jednotlivé znaky
řetězce cyklem, stejným způsobem jako pole.

V některých jazycích však významným rozdílem oproti poli může být, že v řetězci nelze přímo upravit znak na daném
indexu.

Jak tyto operace provádět, je ukázáno v konkrétních jazycích
na [stránce o syntaxi](/studijni-materialy/08-retezce/03-syntaxe).
