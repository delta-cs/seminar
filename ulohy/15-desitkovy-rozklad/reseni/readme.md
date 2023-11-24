# Desítkový rozklad – řešení

Načte se číslo a následně je předáno funkci pro výpis násobků.

Prvním krokem funkce je zjistit a uložit si (do proměnné `size`) počet cifer tohoto čísla. K tomuto účelu je zavedena dočasná proměnná `temp` (zkratka anglického *temporary* – dočasný), která se ve `while` cyklu opakovaně dělí deseti. Tuto proměnnou bylo nutné založit, protože původní hodnota čísla se musí zachovat pro pozdější výpis. Jakmile je `temp` menší než deset, cyklus končí.

Následuje druhý cyklus, který:

1. Vypočítává a ukládá do proměnné `power` aktuální mocninu deseti pomocí umocnění 10 na `size`. Např. při `size` = 3 (což znamená, že `number` má 3 cifry) vyjde `power` = 10 ^ 3 = 1000.

2. Zjišťuje násobek vypočítané mocniny, tedy „kolikrát se daná mocnina 10 v `number` nachází“. K tomu stačí jednoduše `number` podělit vypočítanou mocninou `power`. Např. 3741 / 1000 = 3.741. Toto číslo je ještě nutné v JavaScriptu a Pythonu zaokrouhlit na celé číslo dolů funkcí `floor`. V C++, C# a Javě se to stane automaticky, jelikož proměnné jsou celočíselného typu (`int`).

3. Vypisuje tento násobek spolu s mocninou 10 podle formátu definovaném v zadání. Ovšem jen tehdy, není-li roven nule.

4. Aktualizuje `number` na zbytek po dělení vypočítanou mocninou 10. Např. 3714 % 1000 = 714. Tím je `number` připravena na výpočet v dalším průchodu. A protože se jí sníží počet cifer, sníží se také hodnota `size`.

Cyklus se opakuje, dokud number neklesne na nulu.
