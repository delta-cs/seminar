# Kosodélník – řešení

Načtou se proměnné pro délku strany a výšku kosodélníku a jsou předány vypisovací funkci.

V té se nachází `for` cyklus s proměnnou `i` od 0 do výšky - 1. Každý průchod bude vypisovat jeden řádek.

Pro sklon kosodélníku je důležitá následující myšlenka: Na posledním řádku se znaky křížku (`#`) vypisují od samého
začátku – nepředcházejí je žádné mezery. Na předposledním řádku se znak vypíše po 1 mezeře. Na druhém řádku od konce se
znak vypíše po 2 mezerách a tak dále. To znamená, že počet mezer, které se mají na začátku daného řádku vypsat, se rovná
pořadí, kolikátý je řádek od konce.

To má na starosti zanořený `for` cyklus, který má pro každý řádek (průchod vnějšího cyklu) různý počet opakování:
výška - `i` - 1. Jednička se odečítá, aby na posledním řádku nebyla žádná mezera (místo jedné).

Účel následujícího `for` cyklu je vypsat samotné znaky stran kosodélníku. Bude se opakovat tolikrát, jaká je zadaná
délka strany. Pokud by znaky vypisoval bezpodmínečně, vznikl by plný „vybarvený“ kosodélník. Jenže zadání určuje
nevykreslit vnitřek, pouze strany. Proto je nutné znak vykreslit pod podmínkou, že se nachází na kraji. To lze zjistit
podle čísla řádku (`i`): ten musí být od 1 do výšky - 1. A zároveň podle čísla znaku na řádku (`j`): od 1 do délky
strany - 1. Tuto podmínku zajišťuje ternární operátor, který pro výpis vybírá buď křížek nebo mezeru.

Na konci vnějšího cyklu se vypíše zalomení řádku. Tímto postupem vznikne celý kosodélník.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
