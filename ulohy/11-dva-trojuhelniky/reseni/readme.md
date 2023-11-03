# Dva trojúhelníky – řešení

Strany obou trojúhelníků jsou načteny do proměnných a předány funkci `solve`. Ta postupně volá další tři funkce a podle nich vrací odpověď na zadání.

Nejprve `isValid`, která určuje, zda trojúhelník splňuje nerovnost a je vůbec možné ho sestrojit. Pro každou jeho stranu musí platit, že je kratší než součet zbylých dvou. Ve skutečnosti to stačí ověřit jen u nejdelší strany – u těch kratších to bude platit vždy. Nejdelší strana se získá pomocí funkce `max`, která vrací větší ze dvou předaných parametrů. Nejdříve se jí předá `b` a `c` a poté se vrácená hodnota znovu předá k porovnání s `a`. Poté je třeba spočítat součet zbylých dvou stran – to je jednoduše součet všech tří a od něj odečtena ta nejdelší. Funkce vrací, zda je nejdelší strana ostře menší (`<`) než tento součet. Pokud funkce `solve` zjistí, že buď ABC nebo KLM nelze sestrojit, vrátí `invalid`. Jinak pokračuje a volá další funkci.

Jako druhá je volána `areCongruent`. Ta vrací hodnotu logického výrazu, jež zjišťuje shodnost trojúhelníků. Aby platila, rozhodně se musí `a` rovnat `k` nebo `l` nebo `m`. První možnost (`a` rovno `k`) testuje první řádek výrazu. Zbylé dvě strany `b` a `c` pak musí v nějakém pořadí odpovídat `l` a `m`. Řádek vypadá takto:

- `a` se rovná `k`

a zároveň

- buď

  - `b` se rovná `l` a zároveň `c` se rovná `m`
  
  nebo naopak

  - `b` se rovná `m` a zároveň `c` se rovná `l`.

Takovéto řádky jsou ve výrazu tři, pro všechny možné varianty – kdyby byly strany trojúhelníků zadány v různých pořadích. Aby funkce vrátila `true`, stačí, aby platil jen jeden, a tak je mezi nimi `||` (nebo). Pokud je podmínka ve funkci `solve` splněna, vrací se `congruent`. Jinak se opět pokračuje.

Jako poslední se volá `areSimilar` testující podobnost trojúhelníků. Princip je takový, že se vypočítá poměr stran `a` ku `k` do proměnné `ratio` a v podmínce se porovnává s poměry zbylých dvou stran:

- `b` ku `l` a zároveň `c` ku `m` mají tento poměr

nebo naopak

- `c` ku `l` a zároveň `b` ku `m` mají tento poměr.

Je-li podmínka splněna, vrací se `true`. Jinak se, pro případ, že strany byly zadány v jiném pořadí, `ratio` změní na poměr `b` ku `k`. Opakuje se obdobná podmínka se zbylými stranami a stejně tak poté podmínka třetí. Když žádná neprojde, až pak se vrací `false`.

Ve funkci `solve` se podle návratové hodnoty vrací buď `similar` anebo až nakonec `different`. Je dobré si všimnout, že na pořadí podmínek v `solve` záleží: Pokud trojúhelníky nelze sestrojit, pak ani nesejde na tom, zda jsou shodné či podobné. Proto se nerovnost zjišťuje jako první. A také každé dva podobné trojúhelníky jsou zároveň shodné. Shodnost se tedy musí kontrolovat před podobností, jinak by na ni ani nedošlo.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
