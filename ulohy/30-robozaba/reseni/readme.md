# Robožába – řešení

Načte se všechen vstup. Dostupné délky skoků jsou uloženy v poli.

Založí se také pole nazvané `memo` (název je objasněn
na konci stránky). To má velikost tolik prvků, jaká je vzdálenost, na níž se žába má dostat. Takže každý index je jedna
pozice po cestě od start do konce. Pole bude na každém indexu ukládat celé číslo: počet všech možných způsobů, jak z
této pozice (tohoto index, tedy vzdálenosti od startu) lze dostat na konec. Poslední prvek se nastaví na 1, protože když
je žába na konci, je právě jeden způsob, jak se na něj (totiž na konec) dostat – nedělat žádné skoky.

Pak se pole odzadu projde `for` cyklem, který jej postupně vyplňuje, a to voláním funkce. Ta přijímá cílovou pozici,
aktuální pozici, dostupné skoky a `memo` pole. Jejím úkolem je vrátit počet všech možných způsobů, jak se z aktuální
pozice dostat na cílovou. Založí si proměnnou na součet a pak prochází všechny možné skoky. Vždy si vypočítá, na jakou
pozici by vedl takto dlouhý skok z té aktuální. Když je vyšší než cíl, průchod se přeskočí. Jinak se k součtu počtu
možností přičte hodnota, jaká je v `memo` poli právě na nové pozici. Myšlenka je taková, že skok na tuto novou pozici
tedy žábě dá právě tolik dalších možností dostat se k cíli, kolika způsoby se z nové pozice lze dostat do cíle.

Například: K dispozici jsou skoky o 1 a 2 metry.

- Z pozice vzdálené 1 metr od cíle se lze dostat do cíle 1 způsobem – skokem o 1 metr.
- Z pozice vzdálené 2 metry od cíle se lze dostat do cíle
    - 1 způsobem rovnou do cíle – skokem o 2 metry – ale také
    - ještě 1 způsobem: skokem o 1 metr na další pozici (první bod) a o ní už víme, že se z ní lze dostat do cíle 1
      způsobem – ten lze tedy k součtu přičíst.

Z pozice vzdálené 3 metry se jde do cíle dostat tolika způsoby, kolika se do něj lze dostat ze dvou výše zmíněných. Když
je sečteme (1 + 2), dostáváme 3.

Cyklus voláním funkce postupně vyplní celé `memo` pole. Nakonec stačí vypsat, kolika způsoby se lze dostat do cíle z
úplně prvního indexu – protože právě na něm žába zpočátku sedí.

Úlohu by bylo možné řešit i bez `memo` pole, protože funkce by se mohla volat rekurizvně (rekurze je vysvětlena
v [této kapitole](/studijni-materialy/05-funkce/05-rekurze)). Pak by ale program na větších vstupech (třeba i jen 100
metrová vzdálenost a 5 možných skoků) trval strašlivě dlouho – i několik let. Technika nutná k efektivnímu řešení se
nazývá dynamické programování. Je postavena na snaze rozdělit velký problém na sadu menších podproblémů a výsledky
jejich vyřešení si postupně zaznamenávat – takzvaně memoizovat (od toho název pole `memo`). Tyto výsledky je pak možné
rychle načíst z paměti namísto toho, aby bylo nutné je znovu vypočítávat – to stačí udělat jednou.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
