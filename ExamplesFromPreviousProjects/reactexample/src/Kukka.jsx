import "./Kukka.css";

export default function Kukka({ tiedot }) {
  return (
    <div className="Kukka">
      <p>
        <span className="selite">Kukkanro: </span>
        {tiedot.kukkanro}
      </p>
      <p>
        <span className="selite">Nimi: </span>
        {tiedot.nimi}
      </p>
      <p>
        <span className="selite">Kuvaus: </span>
        {tiedot.kuvaus}
      </p>
      <p>
        <span className="selite">Hoito ohje: </span>
        {tiedot.hoito_ohje}
      </p>
    </div>
  );
}
