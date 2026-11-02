import { paivita } from "./kirjasto.js";

import "./ViljelijaLomake.css";

export default function ViljelijaPaivitysLomake({ viljelija, paivitaTila }) {
    function laheta(e) {
        e.preventDefault();

        const lomakedata = new FormData(e.target);
        const dataJson = Object.fromEntries(lomakedata.entries());

        paivita("viljelija", "paivita_viljelija", dataJson).then(paivitaTila);
    }
    return (
        <div className="ViljelijaLomake">
            <h1>Päivitä viljelijä</h1>
            <form onSubmit={laheta}>
                <div>
                    <label>
                        Viljelijänro:{" "}
                        <input
                            defaultValue={viljelija.viljelijanro}
                            name="viljelijanro"
                        />
                        Y-tunnus:{" "}
                        <input defaultValue={viljelija.ytunnus} name="ytunnus" />
                        Nimi: <input defaultValue={viljelija.nimi} name="nimi" />
                        Osoite:{" "}
                        <input defaultValue={viljelija.osoite} name="osoite" />
                        Yhteys sukunimi:{" "}
                        <input
                            defaultValue={viljelija.yhteys_sukunimi}
                            name="yhteys_sukunimi"
                        />
                        Yhteys etunimi:{" "}
                        <input
                            defaultValue={viljelija.yhteys_etunimi}
                            name="yhteys_etunimi"
                        />
                        Yhteys puhelin:{" "}
                        <input
                            defaultValue={viljelija.yhteys_puhelin}
                            name="yhteys_puhelin"
                        />
                        Yhteys email:{" "}
                        <input
                            defaultValue={viljelija.yhteys_email}
                            name="yhteys_email"
                        />
                    </label>
                </div>
                <button type="submit">Lähetä</button>
            </form>
        </div>
    );
}
