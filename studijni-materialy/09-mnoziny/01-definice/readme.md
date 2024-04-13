# Definice

Množina (angl. *set*) je v informatice datová struktura, která uchovává několik prvků. Tyto prvky se v množině nemohou
opakovat – každý je uložen nejvýše jednou.

Narozdíl od pole množina nemá indexy – pouze hodnoty. Při vkládání prvku se tak neudává index, ale samotná hodnota.
Prvky kvůli tomu nejsou uspořádány v žádném daném pořadí.

Když se má nějaký prvek přečíst, nepřistupuje se k němu indexem, nýbrž právě hodnotou. To znamená, že pro přečtení prvku
je nutné hodnotu tohoto prvku předem znát. Z toho důvodu se množina nejčastěji využívá pouze ke zjištění, zda se v ní
nějaký prvek nachází, či nikoli.

Funkcionalitu množiny může samozřejmě plně pokrýt obyčejné pole, rozdílná bude ovšem rychlost prováděných operací. Např.
právě hledání prvku v poli vyžaduje projít celé pole a u každého prvku ověřit, zda je to onen hledaný. To znamená, že
čím delší pole je, tím v něm bude vyhledávání časově nákladnější. Podobně je na tom i vložení a odstranění prvku.
Provádění právě těchto operací je na množinách velmi rychlá záležitost.
