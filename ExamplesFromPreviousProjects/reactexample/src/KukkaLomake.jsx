import { useState } from "react";
import { lisaa } from "./kirjasto.js";

import "./KukkaLomake.css";

export default function KukkaLomake() {
  const [tila, setTila] = useState("");
  function laheta(e) {
    e.preventDefault();

    const lomakedata = new FormData(e.target);
    const dataJson = Object.fromEntries(lomakedata.entries());
    console.log(dataJson);
    lisaa("kukka", dataJson).then(setTila).catch(setTila);
  }
  return (
    <div className="KukkaLomake">
      <h1>Lisättävä kukka</h1>
      <form onSubmit={laheta}>
        <div>
          <label>
            KukkaNro: <input type="text" name="kukkanro" />
            Nimi: <input type="text" name="nimi" />
            Kuvaus: <input type="text" name="kuvaus" />
            Hoitoohje: <input type="text" name="hoito_ohje" />
          </label>
        </div>
        <button type="submit">Lähetä</button>
      </form>
      <p>{tila}</p>
    </div>
  );
}
