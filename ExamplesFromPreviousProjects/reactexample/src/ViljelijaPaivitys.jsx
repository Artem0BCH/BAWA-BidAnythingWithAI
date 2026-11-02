import { useState } from "react";

import Syottokentta from "./Syottokentta";
import ViljelijaPaivitysLomake from "./ViljelijaPaivitysLomake";

import { hae } from "./kirjasto.js";

export default function ViljelijaPaivitys() {
    const [hakutulos, setHakutulos] = useState([]);
    const [tila, setTila] = useState("");

    async function haeViljelija(hakuarvo) {
        const tulos = await hae("viljelija", "hae_perusavaimella", hakuarvo);
        setHakutulos(tulos);
    }

    function muutaTila(uusiTila) {
        setTila(uusiTila);
    }

    function valitseKomponentti() {
        if (hakutulos.length > 0) {
            return (
                <ViljelijaPaivitysLomake
                    key={hakutulos[0].viljelijanro}
                    viljelija={hakutulos[0]}
                    paivitaTila={muutaTila}
                />
            );
        }

        return "";
    }

    return (
        <div className="Paivitys">
            <Syottokentta toiminto={haeViljelija} />
            {valitseKomponentti()}
            <p>{tila}</p>
        </div>
    );
}
