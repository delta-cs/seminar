# Vlaječka – řešení

Načtou se tři vstupní proměnné pro délku žerdi, šířku vlaječky a vzdálenost od země. Poté se předají funkci pro vypsání.

Ta nejprve z šířky vlaječky vypočte její výšku: Vlaječka se vlastně skládá ze dvou trojúhelníků (horní a spodní
poloviny), které mají stejnou šířku jako ona. A jejich výška je stejná jako šířka, takže výška celé vlaječky je součet
výšek těchto dvou trojúhelníku, a tedy dvojnásobek její šířky. Ovšem, prostřední řádek je ve výpisu pouze jeden (
trojúhelníky jej jakoby sdílí), takže je nutné odečíst 1.

Aby se vlajka dala zavěsit, musí být součet její výšky a výšky zavěšení nad zemí menší nebo roven délce žerdi. Když to
neplatí, funkce vypisuje `invalid` a je ukončena.

V opačném případě se začne vykreslovat. V prvním cyklu se vypíše tolik řádků žerdi (znaku `|`), kolik jich přečnívá nad
vlajkou (od délky žerdi odečtena výška vlajky a výška zavěšění).

Druhý cyklus vypíše první část vlajky – od prvního do prostředního (nejdelšího) řádku, včetně. Princip je totožný jako v
úloze [Trojúhelník](13-trojuhelnik).

Třetí cyklus se postará o spodní část vlajky – zbylé řádky pod prostředním řádkem. Princip je v podstatě neměnný, ale
proměnná `i` vnějšího cyklu musí klesat.

Nakonec se vykreslí spodek žerdi pod vlajkou – to už je snadné, protože počet těchto řádků byl zadán na vstupu.
