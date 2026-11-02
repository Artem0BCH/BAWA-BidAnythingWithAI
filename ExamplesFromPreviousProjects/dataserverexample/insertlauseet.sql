use kukkatukkudb;

--HUOM! delete vaarallinen ilman where-osaa

delete from viljelijan_kukat;
delete from kukka;
delete from viljelija;

INSERT into kukka (kukkanro,nimi,kuvaus,hoito_ohje)
values (1,"Ruusu","kaunis kukka","vettä maljakkoon");

INSERT into kukka (kukkanro,nimi,kuvaus,hoito_ohje)
values (2,"Tulppaani","helppohoitoinen","vettä maljakkoon");

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