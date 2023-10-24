# Funkce

Vysvětlení funkcí a jejich syntaxe. Doporučené je chronologické čtení. Kódové příklady jsou psány v jazyce C#. Přesná syntaxe se v jiných jazycích liší – dohledat pro váš vybraný jazyk ji lze v jeho dokumentaci nebo v různých návodech.

Na stránce s příklady (poslední bod níže) nalezente v každém jazyce ukázku, jak může vypadat syntaxe funkce v řešení úlohy Pardubického hackera. Doporučeno je příklady prohlédnout buď když funkce již znáte, anebo až po pročtení všech předchozích stránek.

1. [Definice a volání](01-definice-a-volani)
2. [Parametry](02-parametry)
3. [Návratová hodnota](03-navratova-hodnota)
4. [Přístup k vnějším proměnným](04-pristup-k-vnejsim-promennym)
5. [Rekurze](05-rekurze)
6. [Příklady](06-priklady)

Funkce nejsou v Pardubickém hackerovi zvláštním tématem, kterému by byl přidělen celý měsíc. Důvodem je, že funkce ve skutečnosti neumožňují z hlediska fungování programu nic nového, čeho by se nedalo dosáhnout i bez nich. To třeba u podmínek rozhodně neplatí – bez těch není možné měnit průběh programu například na základě uživatelského vstupu. Jsou tedy úlohy a problémy, které bez použití podmínek vyřešit nikdy nelze. Toto se o funkcích říci nedá – každý program, který je využívá, se dá přepsat tak, aby je nepoužil a přitom fungoval stejně. A to tak, že se zkrátka tělo funkce v kódu nakopíruje na všechna místa, kde byla funkce volána. Žádná úloha ani problém tedy jejich použití přímo nevyžaduje.

V Pardubickém hackerovi tedy užití funkcí při řešení úloh nevynucujeme. Nemáme ani tak docela jak to provést – vaše řešení jsou testována pouze zvenčí: systém jim naservíruje vstup a poté porovnává správnost výstupu. Jakým způsobem k němu váš program došel není předmětem hodnocení. Znát jejich syntaxi a fungování však rozhodně přijde vhod, neboť se objeví v autorských řešeních.

I přesto, jak je snad z těchto stránek poznat, se jedná o nesmírně **užitečný nástroj**. Dovoluje nahradit kód, který by se několikrát opakoval, jednoduchým zavoláním a případnou úpravou parametrů. V případě, že je potom nutné kupříkladu upravit všechny výpisy, stačí to udělat na jednom místě – uvnitř vypisovací funkce. Zatímco když je (místo využití funkce) vypisování na mnoha místech v kódu, snadno se dá zapomenout některé z nich upravit. Vyhýbat se v komplexnějších programech použití funkcí je programátorovi k vlastní škodě. Jejich uplatnění se většinou nabízí velmi brzy poté, co se kód začne psát. Drtivá většina programů tak funkce využívá.

Pozn.: Pro funkce vzniklo několik různých názvů, třeba podprogramy, metody nebo procedury. Pozor, každý má trochu jiný význam. Dohledání rozdílů mezi nimi necháme na vás.
