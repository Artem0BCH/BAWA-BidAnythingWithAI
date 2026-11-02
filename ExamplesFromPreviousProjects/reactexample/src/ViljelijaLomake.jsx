import { useState } from "react";
import { lisaa } from "./kirjasto.js";

import "./ViljelijaLomake.css";

export default function ViljelijaLomake() {
    const [tila, setTila] = useState("");
    function laheta(e) {
        e.preventDefault();

        const lomakedata = new FormData(e.target);
        const dataJson = Object.fromEntries(lomakedata.entries());
        console.log(dataJson);
        lisaa("viljelija", dataJson).then(setTila).catch(setTila);
    }
    return (
        <div className="ViljelijaLomake">
            <h1>Lisättävä viljelijä</h1>
            <form onSubmit={laheta}>
                <div>
                    <label>
                        Viljelijänro: <input type="text" name="viljelijanro" />
                        Y-tunnus: <input type="text" name="ytunnus" />
                        Nimi: <input type="text" name="nimi" />
                        Osoite: <input type="text" name="osoite" />
                        Yhteys sukunimi:{" "}
                        <input type="text" name="yhteys_sukunimi" />
                        Yhteys etunimi:{" "}
                        <input type="text" name="yhteys_etunimi" />
                        Yhteys puhelin:{" "}
                        <input type="text" name="yhteys_puhelin" />
                        Yhteys email: <input type="text" name="yhteys_email" />
                    </label>
                </div>
                <button type="submit">Lähetä</button>
            </form>
            <p>{tila}</p>
        </div>
    );
}
