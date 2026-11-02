import { useState, useEffect } from "react";
import { haeKaikki } from "./Kirjasto";

import "./Taulukko.css";

function TaulukkoOtsikko({ otsikot }) {
  return (
    <thead>
      <tr>
        {otsikot.map((otsikko, i) => (
          <th key={i}>{otsikko}</th>
        ))}
      </tr>
    </thead>
  );
}

function Rivi({ arvot }) {
  return (
    <tr>
      {arvot.map((arvo, i) => (
        <td key={i}>{arvo}</td>
      ))}
    </tr>
  );
}

function TaulukkoRunko({ tiedot }) {
  return (
    <tbody>
      {tiedot.map((data, i) => (
        <Rivi key={i} arvot={data} />
      ))}
    </tbody>
  );
}

export default function Taulukko({ taulu }) {
  const [tulos, setTulos] = useState([]);

  useEffect(() => {
    haeKaikki(taulu).then(setTulos).catch(setTulos);
  }, []);

  function muodostaTaulukkodata() {
    if (tulos.length > 0) {
      const otsikkotiedot = Object.keys(tulos[0]);
      const tauludata = [];
      for (const rivi of tulos) {
        tauludata.push(Object.values(rivi));
      }
      return (
        <table className="Taulukko">
          <TaulukkoOtsikko otsikot={otsikkotiedot} />
          <TaulukkoRunko tiedot={tauludata} />
        </table>
      );
    }
    return <h2>Ei löytynyt</h2>;
  }
  return <div className="Taulukko">{muodostaTaulukkodata()}</div>;
}
