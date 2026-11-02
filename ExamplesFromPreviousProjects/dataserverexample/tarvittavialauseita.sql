use kukkatukkudb;

--HUOM! delete vaarallinen ilman where-osaa

delete from viljelijan_kukat;
delete from kukka;
delete from viljelija;

-- #### KUKKA ####

-- lisätään kukka

INSERT into kukka (kukkanro,nimi,kuvaus,hoito_ohje)
values (1,"Ruusu","kaunis kukka","vettä maljakkoon");

INSERT into kukka (kukkanro,nimi,kuvaus,hoito_ohje)
values (2,"Tulppaani","helppohoitoinen","vettä maljakkoon");

INSERT into kukka (kukkanro,nimi,kuvaus,hoito_ohje)
values (3,"tuntematon","x","x");

SELECT * FROM kukka;

-- päivitetää kukan tiedot

UPDATE kukka set nimi="Alppiruusu",kuvaus="iso",hoito_ohje="hoitovapaa"
where kukkanro=3;

-- haetaan kaikkien kukkien tiedot

SELECT kukkanro,nimi,kuvaus,hoito_ohje from kukka;

-- haetaan availemlla
SELECT kukkanro,nimi,kuvaus,hoito_ohje from kukka
WHERE kukkanro=1;

SELECT kukkanro,nimi,kuvaus,hoito_ohje from kukka
where nimi="Ruusu";

-- lista kukkien nimistä (nimi ja kukkanro) alasvetolistaa tms. varten

SELECT nimi, kukkanro from kukka;

-- nimen mukaan aakkostettuna

SELECT nimi, kukkanro from kukka order by nimi asc;

-- #### VILJELIJA ####

INSERT into viljelija (viljelijanro,
    ytunnus,
    nimi,
    osoite,
    yhteys_sukunimi,
    yhteys_etunimi,
    yhteys_puhelin,
    yhteys_email)
values (1,"2323232-9","Taunon tulppaanit", "Kukkakumpu 2", "Puro","Pirkko","123456789","pirkko@tanentulppaanit.fi");

INSERT into viljelija (viljelijanro,
    ytunnus,
    nimi,
    osoite,
    yhteys_sukunimi,
    yhteys_etunimi,
    yhteys_puhelin,
    yhteys_email)
values (2,"1234567-9","Ruusutarha Oy", "Puutarhurinkuja 39", "Virta","Matti","43434343","matti@ruusutarha.fi");

INSERT into viljelija (viljelijanro,
    ytunnus,
    nimi,
    osoite,
    yhteys_sukunimi,
    yhteys_etunimi,
    yhteys_puhelin,
    yhteys_email)
values (3,"4444444-9","uusi Oy", "tuntematon", "Virta","Matti","0","x@x");

SELECT * FROM viljelija;

UPDATE viljelija set ytunnus="1111111,1",
    nimi="Vanhanen Oy",
    osoite="Alppitie 33",
    yhteys_sukunimi="Virta",
    yhteys_etunimi="Matti",
    yhteys_puhelin="123456543",
    yhteys_email="matti@vanhanen.fi" where viljelijanro=3;

-- haetaan kaikkien viljelijöiden tiedot listana/taulukkona

SELECT  viljelijanro,
    ytunnus,
    nimi,
    osoite,
    yhteys_sukunimi,
    yhteys_etunimi,
    yhteys_puhelin,
    yhteys_email FROM viljelija;

-- haetaan yhden viljelijän tiedot (viljelijanro tai ytunnus tai nimi)
-- ja haetaan yhteystiedot (viljelijanro tai ytunnus tai nimi)

-- hakuehto vilejalijanro

SELECT  viljelijanro,
    ytunnus,
    nimi,
    osoite,
    yhteys_sukunimi,
    yhteys_etunimi,
    yhteys_puhelin,
    yhteys_email from viljelija WHERE viljelijanro=1;

-- hakuehto ytunnus

SELECT  viljelijanro,
    ytunnus,
    nimi,
    osoite,
    yhteys_sukunimi,
    yhteys_etunimi,
    yhteys_puhelin,
    yhteys_email from viljelija WHERE ytunnus="4444444-9";

-- hakuehto nimi

SELECT  viljelijanro,
    ytunnus,
    nimi,
    osoite,
    yhteys_sukunimi,
    yhteys_etunimi,
    yhteys_puhelin,
    yhteys_email from viljelija WHERE nimi="Ruusutarha Oy";

-- haetaan osoitetiedot (viljelijanro tai ytunnus tai nimi)

SELECT nimi, osoite from viljelija WHERE viljelijanro=1;
SELECT nimi, osoite from viljelija WHERE ytunnus="4444444-9";
SELECT nimi, osoite from viljelija WHERE nimi="Ruusutarha Oy";

-- lista nimistä (nimi ja viljelijanro) alasvetolistaa tms. varten
SELECT nimi, viljelijanro from viljelija ORDER BY nimi ASC;



-- #### VARASTO ####

INSERT INTO viljelijan_kukat (viljelijanro,
    kukkanro,
    kuvaus,
    varastosaldo,
    yksikkohinta)
values (1,1,"erä 10 kpl",120,100);

INSERT INTO viljelijan_kukat (viljelijanro,
    kukkanro,
    kuvaus,
    varastosaldo,
    yksikkohinta)
values (1,2,"erä 100 kpl",70,50);

INSERT INTO viljelijan_kukat (viljelijanro,
    kukkanro,
    kuvaus,
    varastosaldo,
    yksikkohinta)
values (2,1,"erä 15 kpl",80,90);

INSERT INTO viljelijan_kukat (viljelijanro,
    kukkanro,
    kuvaus,
    varastosaldo,
    yksikkohinta)
values (2,1,"erä 50 kpl",50,300);

-- tietojen päivittäminen (varsinkin varastosaldo ja yksikköhinta)

UPDATE viljelijan_kukat SET kuvaus="uusi määrä 20", varastosaldo=5, yksikkohinta=10
WHERE numero=4;

SELECT * FROM viljelijan_kukat;

-- Päivitä saldo

UPDATE viljelijan_kukat SET varastosaldo=15
WHERE numero=4;

SELECT * FROM viljelijan_kukat;

-- kaikkien viljelijöiden kukat taulukkona

SELECT kukka.kukkanro, kukka.nimi AS kukkanimi,
 viljelija.viljelijanro, viljelija.nimi AS viljelijanimi, 
 viljelijan_kukat.kuvaus, varastosaldo, yksikkohinta from kukka
INNER JOIN viljelijan_kukat on kukka.kukkanro=viljelijan_kukat.kukkanro
INNER JOIN viljelija on viljelija.viljelijanro=viljelijan_kukat.viljelijanro;

-- kaikkien viljelijöiden kukat taulukkona lajiteltuna

SELECT numero, kukka.kukkanro, kukka.nimi AS kukkanimi,
 viljelija.viljelijanro, viljelija.nimi AS viljelijanimi,viljelijan_kukat.kuvaus,
  varastosaldo, yksikkohinta from kukka
INNER JOIN viljelijan_kukat on kukka.kukkanro=viljelijan_kukat.kukkanro
INNER JOIN viljelija on viljelija.viljelijanro=viljelijan_kukat.viljelijanro
ORDER BY viljelija.nimi ASC, kukka.nimi ASC;

-- yhden viljelijän kukat taulukkona

SELECT numero, viljelija.viljelijanro, viljelija.nimi AS viljelijanimi,
 kukka.kukkanro, kukka.nimi AS kukkanimi, 
 viljelijan_kukat.kuvaus, varastosaldo, yksikkohinta from kukka
INNER JOIN viljelijan_kukat on kukka.kukkanro=viljelijan_kukat.kukkanro
INNER JOIN viljelija on viljelija.viljelijanro=viljelijan_kukat.viljelijanro
WHERE viljelija.nimi="Ruusutarha Oy"
ORDER BY kukka.nimi ASC;

SELECT numero, viljelija.viljelijanro, viljelija.nimi AS viljelijanimi,
 kukka.kukkanro, kukka.nimi AS kukkanimi, 
 viljelijan_kukat.kuvaus, varastosaldo, yksikkohinta from kukka
INNER JOIN viljelijan_kukat on kukka.kukkanro=viljelijan_kukat.kukkanro
INNER JOIN viljelija on viljelija.viljelijanro=viljelijan_kukat.viljelijanro
WHERE viljelija.viljelijanro=1
ORDER BY kukka.nimi ASC;