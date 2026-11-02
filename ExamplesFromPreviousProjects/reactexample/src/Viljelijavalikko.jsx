import { useState } from "react";
import Taulukko from "./Taulukko";
import ViljelijaLomake from "./ViljelijaLomake";
import ViljelijaPaivitys from "./ViljelijaPaivitys";
import KaikkiViljelijat from "./KaikkiViljelijat";

export default function Viljelijavalikko() {
    const [tila, setTila] = useState(0);

    function vaihda() {
        switch (tila) {
            case 1:
                return <Taulukko taulu={"viljelija"} />;
            case 2:
                return <KaikkiViljelijat />;
            case 3:
                return <ViljelijaLomake />;
            case 4:
                return <ViljelijaPaivitys />;
            case 5:
                return <h2>muut</h2>;
        }
    }

    return (
        <div className="App">
            <div className="valikko">
                <button onClick={() => setTila(1)}>Kaikki viljelijät</button>
                <button onClick={() => setTila(2)}>
                    Kaikki viljelijät kortteina
                </button>
                <button onClick={() => setTila(3)}>Lisää viljelijä</button>
                <button onClick={() => setTila(4)}>Päivitä viljelijä</button>
                <button onClick={() => setTila(5)}>Muut</button>
            </div>
            <div className="valittu">{vaihda()}</div>
        </div>
    );
}
