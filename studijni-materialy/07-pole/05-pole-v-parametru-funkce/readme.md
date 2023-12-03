# Pole v parametru funkce

Pole mohou být, jako i ostatní proměnné, předány parametrem do funkce. Jejich chování je pak ovšem oproti jiným typům proměnných v jednom aspektu odlišné. Příklad v C#:

```csharp
int a = 4;

ChangeInt(a);
Console.WriteLine(a);

int[] numbers = new int[3];
numbers[0] = 2;
numbers[1] = 4;
numbers[2] = 6;

ChangeArray(numbers);
Console.WriteLine(numbers[1]);

void ChangeInt(int number)
{
    number = 10;
}

void ChangeArray(int[] array)
{
    array[1] = 10;
}
```

První z funkcí dostává v parametru celé číslo a nastavuje tuto proměnnou na hodnotu 10. Druhá dostává pole celých čísel a v něm nastavuje hodnotu na indexu 1 na 10. Obě hodnoty po proběhnutí funkcí jsou vypsány. Jak bylo zmíněno v [kapitole o funkcích](/studijni-materialy/), proměnné předané dovnitř funkcí se navenek nezmění, i když jim funkce ve svém těle přiřadí novou hodnotu – poté, co funkce skončí, hodnota vnější proměnné zůstává stejná. Jenže výstup tohoto programu je

```csharp
4
10
```

První proměnná skutečně zůstala beze změny – funkce jí nastavila na 10, ale vypsalo se původní 4. Ovšem druhá vypsaná hodnota je 10, což znamená, že funkce skutečně přepsala hodnotu pole na indexu 1. Chcete-li, můžete stejný pokus provést ve svém jazyce (kromě C++, tam je tento jev složitější). Proč samostatná proměnná změněna nebyla, ale prvek v poli ano? Odpověď se nachází mimo rozsah Pardubického hackera. Poradíme ale, že má co dočinění s takzvanými hodnotovými a referenčními typy (angl. *value types* a *reference types*). Důležité je si pamatovat (kromě C++ prográmátorů): **Když je pole předané do parametru funkce v jejím těle změněno, změna se projeví i po skončení funkce.**
