# Nabíjení akumulátoru – řešení

Do proměnné se načte počet měření. Pak se založí dvě logické proměnné: první, zda byl akumulátor alespoň jednou nabíjen,
a druhá, zda alespoň jednou vybíjen. Zároveň se založí proměnná uchovávající poslední úroveň nabití.

Následující cyklus postupně načte všechna měření na vstupu. Každé z nich porovná s hodnotou posledního měření uloženou v
proměnné. Pokud je vyšší, znamená to, že akumulátor byl nabíjen, a tak je příslušná logická proměnná nastavena
na `true`. Je-li naopak nižší, nastaví se na `true` proměnná označující vybíjení. Jinak nejsou logické proměnné
ovlivněny. Pozor, toto porovnání se neprovádí během prvního průchodu (když `i` je rovno 0), protože ještě nebylo načteno
žádné poslední měření. Na konci cyklu se proměnná pro poslední měření nastaví na to, které bylo v průchodu načteno.

Po skončení cyklu je v logických proměnných správně uloženo, zda byl akumulátor nabíjen a vybíjen. Zbývá pouze vypsat
příslušnou odpověď. Ta má výchozí hodnotu `unused` a případně se změní v sérii podmínek:

- Byl nabíjen?
    - Ano: Byl i vybíjen?
        - Ano: `both`
        - Ne: `charging`
    - Ne: Byl vybíjen?
        - Ano: `discharging`

Odpověď je nakonec vypsána.
