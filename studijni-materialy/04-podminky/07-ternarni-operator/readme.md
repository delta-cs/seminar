# Ternární operátor

Šikovnou drobností umožňující elegantní vyhodnocení výrazu je takzvaný ternární operátor (angl. *
*ternary operator*). Platí o něm, že vždy **vrací nějakou hodnotu** – jednu ze dvou. Která
bude vrácena, záleží na podmínce uvedené v ternárním operátoru. Jeho syntaxe je tedy

```
<podmínka> ? <hodnota1> : <hodnota2>
```

Například:

```csharp
bool isABird = true;

int numberOfWings = isABird ? 2 : 0;
```

Do proměnné `numberOfWings` se uloží hodnota, jakou vrátí ternární operátor. To závisí na proměnné `isABird`. Když
je `true`, vrátí se 2, a když `false`, vrátí se 0.

Hodnota vrácená z ternárního operátoru se nemusí nutně ukládat do proměnné:

```csharp
bool isABird = true;

Console.WriteLine(isABird ? "a bird" : "a plane");
```

Ternární operátory se dají dokonce řetězit:

```csharp
bool canFly = true;
bool isABird = false;
        
int numberOfWings = canFly ? isABird ? 2 : 4 : 0;
```

Pozn.: v Pythonu má ternární operátor jinou syntaxi než u většiny jazyků:

```
<hodnota1> if <podmínka> else <hodnota2>
```
