# Reprezentace dat v počítači

Ačkoli to není pro řešení úloh naprosto nezbytné, bude se hodit znát způsob a formu, v jaké počítače zaznamenávají veškerá data. Budete-li informatiku dále studovat, jistě se s tím ještě mnohokrát sektáte.

Dnešní počítače jsou stroje založené na elektronických součástkách. Těmi buď proud prochází a nebo neprochází – mají pouze dva stavy, které mohou nastat. Často jsou označovány čísly 0 a 1. Jeden takový záznam, který drží buď 0 nebo 1, se nazývá **bit**. Máme-li jeden bit, můžeme reprezentovat pouze dva různé stavy – `0`, `1` – např. pravda nebo nepravda. Když přidáme druhý bit, jsme schopni reprezentovat čtyři různé stavy: `00`, `01`, `10`, `11`. Tím už by se dalo třeba počítat od 0 do 3. S každým přidaným bitem narůstá počet kombinací a tedy velikost dat, která můžeme pomocí těchto bitů reprezentovat. Pro osm bitů se používá zvláštní označení: **bajt** (angl. byte).

## Čísla

Při práci s bity si lze všimnout jisté podobnosti se způsobem, jakým počítají a reprezentují čísla lidé. Ti využívají takzvanou **desítkovou soustavu** – je 10 různých stavů, které číslice může nabýt: od 0 do 9. Když počítáme od 1 a dojdeme k 9, vynulujeme ji a před ni přidáme další číslici, zase začínající na 1, po 9 tedy následuje 10. Když píšeme čísla s nulami na začátku, je to ještě zřetelnější:

```
00
01
02
...
08
09
10
11
12
...
18
19
20
21
22
...
```

Vždy zvyšujeme poslední číslo a když už to nejde (jsme na 9), vynulujeme a zvýšíme to, které je vlevo od něj.

Počítače nemají pro číslici deset stavů, ale pouze dva – 0 a 1. Používají tedy **dvojkovou** (binární) **soustavu**, v té se však počítá úplně stejně. Příklad se čtyřmi bity:

```
0000
0001
0010
0011
0100
0101
0110
0111
1000
1001
1010
1011
1100
1101
1110
1111
```

Když můžeme, zvyšujeme číslo, které je nejvíc vpravo z 0 na 1. Když nemůžeme, zvýšíme číslo vlevo od něj. Když to také nejde, zvýšíme číslo o další pozici vlevo. A tak dále. Při zvýšení dalšího čísla vynulujeme pozice vpravo od něj. Stejně jako v desítkové soustavě.

Čtyři bity nám poskytují těchto 16 kombinací. Můžeme tedy například reprezentovat jedno číslo od 0 do 15.

Právě tento systém využívají počítače k reprezentaci celých čísel. Výše zmíněný bajt (osm bitů) dává 256 kombinací – číslo od 0 do 255. Takový rozsah je samozřejmě často nedostatečný. Celočíselné datové typy tak mívají často bajtů několik. Počet kombinací roste s počtem bitů velmi rychle (tzv. exponenciálně). Při 4 bajtech (32 bitech) je kombinací 4,294,967,296.

Ještě mnohé aspekty reprezentace čísel v počítači tato stránka nepokrývá. Jak zaznamenat záporná čísla? Nebo desetinná? Tady zájemce odkážeme na [článek z itnetwork.cz](https://www.itnetwork.cz/hardware-pc/principy-pocitacu/reprezentace-cisel-v-pocitaci).

Mimochodem, desetinná čísla jsou pro počítače trochu oříškem. Zkuste si ve svém programovacím jazyce sečíst `0.1 + 0.2` a nechte si výsledek vypsat. Nejspíš budete požadovat [vysvětlení](https://mirekbartl.cz/2021/04/04/desetinna-cisla/).

## Text

Čísla nejsou jediný druh údajů, který je potřeba uchovat. Běžným požadavkem je zaznamenat text. Řešení je poměrně prosté. Text se dělí na jednotlivé znaky. Každému znaku se přiřadí jeho jedinečné celé číslo – ta už počítačově reprezentovat umíme. Tímto způsobem vznikla třeba takzvaná ASCII tabulka:

```
 0 NUL    16 DLE    32      48 0    64 @    80 P    96 `   112 p
 1 SOH    17 DC1    33 !    49 1    65 A    81 Q    97 a   113 q
 2 STX    18 DC2    34 "    50 2    66 B    82 R    98 b   114 r
 3 ETX    19 DC3    35 #    51 3    67 C    83 S    99 c   115 s
 4 EOT    20 DC4    36 $    52 4    68 D    84 T   100 d   116 t
 5 ENQ    21 NAK    37 %    53 5    69 E    85 U   101 e   117 u
 6 ACK    22 SYN    38 &    54 6    70 F    86 V   102 f   118 v
 7 BEL    23 ETB    39 '    55 7    71 G    87 W   103 g   119 w
 8 BS     24 CAN    40 (    56 8    72 H    88 X   104 h   120 x
 9 HT     25 EM     41 )    57 9    73 I    89 Y   105 i   121 y
10 LF     26 SUB    42 *    58 :    74 J    90 Z   106 j   122 z
11 VT     27 ESC    43 +    59 ;    75 K    91 [   107 k   123 {
12 FF     28 FS     44 ,    60 <    76 L    92 \   108 l   124 |
13 CR     29 GS     45 -    61 =    77 M    93 ]   109 m   125 }
14 SO     30 RS     46 .    62 >    78 N    94 ^   110 n   126 ~
15 SI     31 US     47 /    63 ?    79 O    95 _   111 o   127 DEL
```

Obsahuje písmena anglické abecedy, čísla, interpunkce a další znaky. Na začátku tabulky se nacházejí tzv. řídící (netisknutelné) kódy, např. backspace (8), tabulátor (9) nebo znak nového řádku (10).

ASCII tabulka brzy přestane být dostatečná. Proto se dnes ve většině programů využívá znaková sada Unicode a kódování UTF-8, v němž je možné zapsat např. znaky z jiných jazyků a nebo emoji.

## Ostatní typy dat

Když je potřeba reprezentovat jiná média, třeba obrázek nebo zvukovou nahrávku, přistupuje se k nim v zásadě stejně, jako k textu. Nejdříve je nutné vynalézt způsob, jak je vyjádřit číselně (digitálně), a poté tento standard zavést do programu, jež má s daným médiem pracovat.