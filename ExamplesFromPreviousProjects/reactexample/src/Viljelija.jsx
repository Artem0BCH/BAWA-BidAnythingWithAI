import "./Viljelija.css";

export default function Viljelija({ tiedot }) {
  return (
    <div className="Viljelija">
      <p>
        <span className="selite">Viljelijänro: </span>
        {tiedot.viljelijanro}
      </p>
      <p>
        <span className="selite">Y-tunnus: </span>
        {tiedot.ytunnus}
      </p>
      <p>
        <span className="selite">Nimi: </span>
        {tiedot.nimi}
      </p>
      <p>
        <span className="selite">Osoite: </span>
        {tiedot.osoite}
      </p>
      <p>
        <span className="selite">Yhteyshenkilö: </span>
        {tiedot.yhteys_etunimi} {tiedot.yhteys_sukunimi}
      </p>
      <p>
        <span className="selite">Puhelin: </span>
        {tiedot.yhteys_puhelin}
      </p>
      <p>
        <span className="selite">Email: </span>
        {tiedot.yhteys_email}
      </p>
    </div>
  );
}
