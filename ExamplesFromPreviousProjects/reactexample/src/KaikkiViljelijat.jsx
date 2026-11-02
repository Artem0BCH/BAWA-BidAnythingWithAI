import { useState, useEffect } from "react";
import { haeKaikki } from "./kirjasto.js";

import "./KaikkiViljelijat.css";
import Viljelija from "./Viljelija";

export default function KaikkiViljelijat() {
  const [tulos, setTulos] = useState([]);

  useEffect(() => {
    haeKaikki("viljelija").then(setTulos).catch(setTulos);
  }, []);

  return (
    <div className="KaikkiViljelijat">
      {tulos?.length > 0 ? (
        <div className="viljelijat">
          {tulos.map((viljelija) => (
            <Viljelija key={viljelija.viljelijanro} tiedot={viljelija} />
          ))}
        </div>
      ) : (
        <div>
          <h2>Viljelijöitä ei löytynyt</h2>
        </div>
      )}
    </div>
  );
}
