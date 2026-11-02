import { useState, useEffect } from "react";
import { haeKaikki } from "./kirjasto.js";

import "./KaikkiKukat.css";
import Kukka from "./Kukka";

export default function KaikkiKukat() {
  const [tulos, setTulos] = useState([]);

  useEffect(() => {
    haeKaikki("kukka").then(setTulos).catch(setTulos);
  }, []);

  return (
    <div className="KaikkiKukat">
      {tulos?.length > 0 ? (
        <div className="kukat">
          {tulos.map((kukka) => (
            <Kukka key={kukka.kukkanro} tiedot={kukka} />
          ))}
        </div>
      ) : (
        <div>
          <h2>Kukkia ei löytynyt</h2>
        </div>
      )}
    </div>
  );
}
