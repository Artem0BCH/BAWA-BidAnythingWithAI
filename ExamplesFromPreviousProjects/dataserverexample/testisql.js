import sql from "./sql.json" with { type: "json" };

/*
console.log(sql);
console.log(
  "--------------------------------------------------------------------------------------------------",
);
console.log(JSON.stringify(sql, null, 2));
*/

// import muodostaSql from "./muodostaSql.js";

/*
console.log(muodostaSql(sql));

console.log(JSON.stringify(muodostaSql(sql), null, 2));
*/

import muunna from "./muunnosfunktio.js";

const apu = {
  kukkanro: 1,
  nimi: "ruusu",
  kuvaus: "kaunis kukka",
  hoito_ohje: "kastele hyvin",
};

console.log(sql.kukka.lisaa.parametrijarjestys);
console.log(muunna(apu, sql.kukka.lisaa.parametrijarjestys));

console.log(sql.kukka.paivita_kukka.parametrijarjestys);
console.log(muunna(apu, sql.kukka.paivita_kukka.parametrijarjestys));

console.log(muunna(apu, ["nimi", "kuvaus", "hoito_ohje", "kukkanro"]));
