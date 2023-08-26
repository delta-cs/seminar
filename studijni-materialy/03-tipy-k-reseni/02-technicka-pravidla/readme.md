# Technická pravidla

Ve všech úlohách platí tato sada pravidel:

1. Vstup programu je vždy směrován do standardního vstupu (stdin).
2. Výstup je kontrolován na standardním výstupu (stdout).
3. Jako znak nového řádku se ve vstupech i při kontrole používá `\n`, nikoli `\r` ani `\r\n`.
4. Každý vstup a výstup, který **není prázdný**, je zakončen jedním zalomením řádku (`\n`). Tedy, všechny řádky, i ten
   poslední, končí tímto znakem. Dbejte na to, vypisujete-li text na řádek postupně, bez automatického odřádkování. S
   tím se nejspíš setkáte pouze v jazycích C a C++.
5. Jako desetinná značka se používá tečka. Je dobré dát pozor zejména při použití C# na českých Windows.
6. Při vypisování desetinných čísel v Pythonu, Javě a C++ nedochází k ořezávání nul. Při kontrole výstupu by však
   přebytečné nuly vyústily v chybu. Řešení lze najít
   například [zde pro Python](https://stackoverflow.com/questions/2440692/formatting-floats-without-trailing-zeros),
   [zde pro Javu](https://stackoverflow.com/questions/14204905/how-to-remove-trailing-zeros-from-a-double)
   a [zde pro C++](https://stackoverflow.com/questions/13686482/c11-stdto-stringdouble-no-trailing-zeros).

Vaše řešení spouštíme na těchto verzích jazyků/kompilátorů:

- C++ a C: GCC 9.4.0
- C# 8.0 (Mono 6.8.0)
- Java 11
- Node.js 10.19
- Python 3.6

Funkce z pozdějších verzí nemusí být dostupné. V případě, že byste takovou funkci použili, dozvíte se to po
odevzdání chybovou hláškou a nahlédnutím do diff output (viz předchozí sekce nápovědy).
