import Tietokanta from "./tietokanta.js";
import muunna from "./muunnosfunktio.js";

import yhteystiedot from "./yhteystiedot.json" with { type: "json" };

const varasto = new Tietokanta(yhteystiedot);

varasto
  .suoritaKysely("select * from kukka", [])
  .then(console.log)
  .catch(console.log);

const apu = {
  kukkanro: 100,
  nimi: "ruusu",
  kuvaus: "kaunis kukka",
  hoito_ohje: "kastele hyvin",
};

varasto
  .suoritaKysely(
    "insert into kukka (kukkanro,nimi,kuvaus,hoito_ohje) values(?,?,?,?)",
    muunna(apu, ["kukkanro", "nimi", "kuvaus", "hoito_ohje"]),
  )
  .then(console.log)
  .catch(console.log);

varasto
  .suoritaKysely("delete from kukka where kukkanro=?", [100])
  .then(console.log)
  .catch(console.log);
