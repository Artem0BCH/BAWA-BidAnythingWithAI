import { paivita } from "./kirjasto.js";

import "./KukkaLomake.css";

export default function KukkaPaivitysLomake({ kukka, paivitaTila }) {
    function laheta(e) {
        e.preventDefault();

        const lomakedata = new FormData(e.target);
        const dataJson = Object.fromEntries(lomakedata.entries());

        paivita("kukka", "paivita_kukka", dataJson).then(paivitaTila);
    }
    return (
        <div className="KukkaLomake">
            <h1>Päivitä kukka</h1>
            <form onSubmit={laheta}>
                <div>
                    <label>
                        KukkaNro:{" "}
                        <input defaultValue={kukka.kukkanro} name="kukkanro" />
                        Nimi: <input defaultValue={kukka.nimi} name="nimi" />
                        Kuvaus:{" "}
                        <input defaultValue={kukka.kuvaus} name="kuvaus" />
                        Hoitoohje:{" "}
                        <input
                            defaultValue={kukka.hoito_ohje}
                            name="hoito_ohje"
                        />
                    </label>
                </div>
                <button type="submit">Lähetä</button>
            </form>
        </div>
    );
}
