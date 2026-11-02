import { useState } from "react";

import Syottokentta from "./Syottokentta";
import KukkaPaivitysLomake from "./KukkaPaivitysLomake";

import { hae } from "./Kirjasto.js";

export default function Paivitys() {
    const [hakutulos, setHakutulos] = useState([]);
    const [tila, setTila] = useState("");

    async function haeKukka(hakuarvo) {
        const tulos = await hae("kukka", "hae_perusavaimella", hakuarvo);
        setHakutulos(tulos);
    }

    function muutaTila(uusiTila) {
        setTila(uusiTila);
    }

    function valitseKomponentti() {
        if (hakutulos.length > 0) {
            return (
                <KukkaPaivitysLomake
                    key={hakutulos[0].kukkanro}
                    kukka={hakutulos[0]}
                    paivitaTila={muutaTila}
                />
            );
        }

        return "";
    }

    return (
        <div className="Paivitys">
            <Syottokentta toiminto={haeKukka} />
            {valitseKomponentti()}
            <p>{tila}</p>
        </div>
    );
}
