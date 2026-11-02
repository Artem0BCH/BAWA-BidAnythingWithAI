import { useState } from "react";
import Taulukko from "./Taulukko";
import KukkaLomake from "./KukkaLomake";
import Paivitys from "./Paivitys";
import KaikkiKukat from "./KaikkiKukat";

export default function Kukkavalikko() {
    const [tila, setTila] = useState(0);

    function vaihda() {
        switch (tila) {
            case 1:
                return <Taulukko taulu={"kukka"} />;
            case 2:
                return <KaikkiKukat />;
            case 3:
                return <KukkaLomake />;
            case 4:
                return <Paivitys />;
            case 5:
                return <h2>muut</h2>;
        }
    }

    return (
        <div className="App">
            <div className="valikko">
                <button onClick={() => setTila(1)}>Kaikki kukat</button>
                <button onClick={() => setTila(2)}>
                    Kaikki kukat kortteina
                </button>
                <button onClick={() => setTila(3)}>Lisää kukka</button>
                <button onClick={() => setTila(4)}>Päivitä kukka</button>
                <button onClick={() => setTila(5)}>Muut</button>
            </div>
            <div className="valittu">{vaihda()}</div>
        </div>
    );
}
