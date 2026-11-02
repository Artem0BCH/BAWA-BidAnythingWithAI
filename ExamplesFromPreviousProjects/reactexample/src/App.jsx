import { useState } from "react";
import "./App.css";

import Kukkavalikko from "./Kukkavalikko";
import Viljelijavalikko from "./Viljelijavalikko";

export default function App() {
    const [tila, setTila] = useState(0);

    function vaihda() {
        switch (tila) {
            case 1:
                return <Kukkavalikko />;
            case 2:
                return <Viljelijavalikko />;
            case 3:
                return <h2>valinta 3</h2>;
        }
    }

    return (
        <div className="App">
            <div className="valikko">
                <button onClick={() => setTila(1)}>Kukka</button>
                <button onClick={() => setTila(2)}>Viljelijä</button>
                <button onClick={() => setTila(3)}>Varasto</button>
            </div>
            <div className="valittu">{vaihda()}</div>
        </div>
    );
}
