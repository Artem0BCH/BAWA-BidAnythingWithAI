drop DATABASE IF EXISTS kukkatukkudb;
CREATE DATABASE kukkatukkudb;

use kukkatukkudb;

CREATE table kukka(
    kukkanro integer not null primary key,
    nimi varchar(50) not null,
    kuvaus varchar(200),
    hoito_ohje varchar(200)
);

CREATE TABLE viljelija(
    viljelijanro integer not null primary key,
    ytunnus varchar(9) not null,
    nimi varchar(100) not null,
    osoite varchar(100) not null,
    yhteys_sukunimi varchar(30) not null,
    yhteys_etunimi varchar(20) not null,
    yhteys_puhelin varchar(20) not null,
    yhteys_email varchar(100)
);

CREATE TABLE viljelijan_kukat(
    numero integer auto_increment primary key,
    viljelijanro integer not null,
    kukkanro integer not null,
    kuvaus varchar(50) not null,
    varastosaldo integer not null,
    yksikkohinta integer not null,
    foreign key(viljelijanro) references viljelija(viljelijanro),
    foreign key(kukkanro) references kukka(kukkanro)
);

drop user if exists "tukkuri"@"localhost";
CREATE user "tukkuri"@"localhost" identified by "1234";
GRANT all privileges on kukkatukkudb.* to "tukkuri"@"localhost"