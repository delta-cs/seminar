# Průchod cyklem

Pravdou je, že pole samo o sobě nepřináší příliš převratné možnosti. Pokud jeho délku předem známe, v podstatě by se dalo nahradit vytvořením tolika jednotlivých proměnných, kolik má prvků.  Hlavní přínos polí je, že jejich délka **nemusí být stanovena pevně** v kódu programu, ale např. se načítá od uživatele. Příklad v C#:

```csharp
Console.WriteLine("Enter how many numbers to store:");
int numbersCount = int.Parse(Console.ReadLine());

int[] numbers = new int[numbersCount];
```

Program se nejprve zeptá na počet čísel, které chce uživatel uložit, a následně vytvoří pole s tolika prvky. Ani tento program však stále není příliš užitečný. Obrovská síla polí však přichází ve chvíli, kdy jsou použity **společně s cykly**:

```csharp
Console.WriteLine("Enter how many numbers to store:");
int numbersCount = int.Parse(Console.ReadLine());

int[] numbers = new int[numbersCount];

for (int i = 0; i < numbers.Length; i++) {
    Console.WriteLine("Enter a number:");
    int number = int.Parse(Console.ReadLine());
    numbers[i] = number;
}

Console.WriteLine("Enter a number to find:");
int numberToFind = int.Parse(Console.ReadLine());

for (int i = 0; i < numbers.Length; i++)
{
    if (numbers[i] == numberToFind)
    {
        Console.WriteLine("Number found at index: ");
        Console.WriteLine(i);
    }
}
```

Program po vytvoření pole začne vykonávat cyklus, ve kterém proměnná `i` začíná na 0 a roste až dokud není menší než délka pole. To znamená, že cyklus číslem `i` postupně **projde všechny indexy** pole. V každém průchodu se uživatele zeptá na číslo a následně jej uloží na index, který určuje aktuální hodnota `i`. Tedy v prvním průchodu na index 0, v druhém na index 1 a tak dále. Čísly zadanými od uživatele takto naplní celé pole.

Následuje výzva, aby uživatel zadal číslo, které se má mezi uloženými vyhledat. To se uloží do proměnné. Poté se pole znovu prochází dalším cyklem, který porovná hodnotu na každém indexu s hledaným číslem. A pokud se rovnají, vypíše aktuální `i`, tedy index, na němž se hledané číslo nachází.

Celý průběh programu by mohl vypadat takto (odsazená čísla jsou ta, která zadal uživatel):

```
Enter how many numbers to store:
  4
Enter a number:
  3
Enter a number:
  6
Enter a number:
  4
Enter a number:
  6
Enter a number to find:
  6
Number found at index: 
1
Number found at index: 
3
```

Uživatel napsal, že chce uložit 4 čísla a postupně je zadal: 3, 6, 4, 6. Pak nechal vyhledat číslo 6 a program vypsal, že se nachází na indexech 1 a 3.

## Foreach

Mnohé programovací jazyky mají také zkratku pro zapsání cyklu, který prochází pole. Např. v C# je to cyklus `foreach` (anglicky *pro každý*), který projde pole a každý prvek vždy rovnou poskytne v proměnné. Její název se uvádí v závorkach po slově `foreach`. V těch ještě následuje slovo `in` a poté pole, které se bude procházet:

```csharp
foreach (int number in numbers)
{
    // Zde lze použít `number`, např.:
    Console.WriteLine(number);
}
```

Cyklus postupně prochází všechna čísla z pole `numbers` a s každým z nich lze uvnitř těla cyklu pracovat pod názvem `number`. Jedinou limitací tohoto zkráceného přístupu je, že programátora zbavuje přístupu k indexu daného prvku. Tedy například by nebylo možné vypsat, na jakém indexu se právě cyklus nachází.

Ostatní jazyky obsahují obdobné konstrukty, které můžete najít např. vyhledáním názvu jazyka a za ním „for each“.