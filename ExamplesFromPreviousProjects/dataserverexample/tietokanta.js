import { createConnection } from "mariadb";

export default class Tietokanta {
  #yhteystiedot;

  constructor(yhteystiedot) {
    this.#yhteystiedot = Object.freeze(yhteystiedot);
  }

  get yhteys() {
    try {
      return createConnection(this.#yhteystiedot);
    } catch (virhe) {
      console.log(virhe.message);
      return null;
    }
  }

  suljeYhteys(yhteys) {
    try {
      if (yhteys) yhteys.end();
      return;
    } catch (virhe) {
      return false;
    }
  }

  suoritaKysely(sql, parametrit, yhteys) {
    return new Promise(async (resolve, reject) => {
      let uusiYhteys = false;
      try {
        if (!yhteys) {
          yhteys = await this.yhteys;
          if (yhteys) {
            uusiYhteys = true;
          } else {
            return reject({ viesti: "yhteys ei onnistunut" });
          }
        }

        const kyselynTulos = await yhteys.query(sql, parametrit);

        if (typeof kyselynTulos.affectedRows === "undefined") {
          resolve({ kyselynTulos, tulosjoukko: true });
        } else {
          resolve({
            kyselynTulos: {
              muutetutRivitLkm: Number(kyselynTulos.affectedRows),
              lisattyNro: Number(kyselynTulos.insertId),
              status: Number(kyselynTulos.warningStatus),
            },
            tulosjoukko: false,
          });
        }
      } catch (virhe) {
        reject({ viesti: `SQL-virhe ${virhe.message}` }); //debug
      } finally {
        if (yhteys && uusiYhteys) yhteys.end();
      }
    });
  }
}
