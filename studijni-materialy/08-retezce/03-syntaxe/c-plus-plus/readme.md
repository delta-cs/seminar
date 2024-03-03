# Syntaxe řetězců v C++

Některé funkce mají více různých parametrů, které mění jejich chování. Dohledání v dokumentaci či různých návodech
necháme na vás. Funkcím, které v parametru přijímají další řetězec, lze předat i samotný jeden znak.

## Indexace

```cpp
std::string greeting = "Hello, world!";

// výsledek: 'l'
char thirdLetter = greeting[2];
```

## Délka: `length`

```cpp
std::string greeting = "Hello, world!";

// výsledek: 13
int length = greeting.length();
```

## Procházení cyklem

```cpp
std::string greeting = "Hello, world!";

// výstup: "!dlrow ,olleH"
for (int i = greeting.length() - 1; i >= 0; i--) {
    std::cout << greeting[i];
}
```

## Načtení standardního vstupu

```cpp
std::string input;
std::getline(std::cin, input);
```

## Vypsání na standardní výstup

```cpp
// bez zalomení řádku
std::cout << "Hello, world!" << std::endl;

// se zalomením řádku na konci
std::cout << "Hello, world!" << std::endl;
```

## Převod velikosti písmen: `transform` a `tolower` nebo `toupper`

```cpp
#include <algorithm>
#include <string>

std::string original = "Dear mister Lewis";

// výsledek: "dear mister lewis"
std::transform(original.begin(), original.end(), original.begin(), ::tolower);
// výsledek: "DEAR MISTER LEWIS"
std::transform(original.begin(), original.end(), original.begin(), ::toupper);

```

## Ořezání bílých znaků: `find_first_not_of`, `find_last_not_of` a `erase`

```cpp
std::string original = " Hello, world!  ";

// výsledek: "Hello, world!"
original.erase(0, original.find_first_not_of(" "));
original.erase(original.find_last_not_of(" ") + 1);
```

## Spojování řetězců: `+`

```cpp
std::string author = "C. S. Lewis";
std::string book = "The Chronicles of Narnia";

// výsledek: "C. S. Lewis: The Chronicles of Narnia"
std::string title = author + ": " + book;
```

## Podřetězec: `substr`

Přijme-li funkce jen jeden parametr, získá se podřetězec od tohoto indexu až do konce. Přijme-li dva, získá se
podřetězec od prvního s délkou druhého.

```cpp
std::string original = "C. S. Lewis: The Chronicles of Narnia";

// výsledek: "The Chronicles of Narnia"
std::string book = original.substr(13);

// výsledek: "Lewis"
std::string lastName = original.substr(6, 5);
```

## Hledání podřetězce: `find`

```cpp
std::string quote = "Remember the signs and believe the signs.";

// výsledek: 13
size_t firstResultIndex = quote.find("signs");
```

## Rozdělení řetězce: `find` a `substr`

```cpp
std::string title = "The Chronicles of the Rings";

// výsledek: "The Lord of the Rings"
size_t pos = title.find("Chronicles");
title.replace(pos, 9, "Lord");

std::string original = "C. S. Lewis";

// výsledek: ["C", "S", "Lewis"]
std::vector<std::string> split;
size_t pos = 0;
std::string delimiter = ". ";
while ((pos = original.find(delimiter)) != std::string::npos) {
    split.push_back(original.substr(0, pos));
    original.erase(0, pos + delimiter.length());
}
split.push_back(original);
```

## Nahrazení podřetězce jiným: `replace`

```cpp
std::string title = "The Chronicles of the Rings";

std::string search = "Chronicles";
size_t findIndex = title.find(search);

// výsledek: "The Lord of the Rings"
title.replace(findIndex, search.length(), "Lord");
```
