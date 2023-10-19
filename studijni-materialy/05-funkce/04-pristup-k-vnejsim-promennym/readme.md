# Přístup k vnějším proměnným

Funkce mohou kromě parametrů pracovat i s vnějšími proměnnými. Těm dokonce může, narozdíl od parametrů, měnit hodnotu. V každém jazyce toho lze dosáhnout trochu jinak. JavaScript a Python umožňují přístup k jakýmkoli proměnným v hlavní části kódu. V C# a Javě musí být proměnné i funkce umístěny uvnitř `class`. C a C++ dovolují přistupovat k takzvaným globálním proměnným vytvořeným mimo funkci `main`. Ukázky naleznete na [stránce s příklady](/studijni-materialy/05-funkce/06-priklady).

Mějte však na paměti, že přístup k vnějším hodnotám jinak, než skrze parametry, není vždy nejlepší praktika. V každé situaci je nutné zvážit, zda je přístup k jiným proměnným skutečně nezbytný, a zamyslet se, jaké bude mít takzvané [vedlejší účinky](https://cs.wikipedia.org/wiki/Vedlej%C5%A1%C3%AD_%C3%BA%C4%8Dinek_(programov%C3%A1n%C3%AD)). Často bývá nejlepší volba předat hodnoty, které funkce potřebuje, skrze parametry.
