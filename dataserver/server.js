import express from "express";
import cors from "cors";

import Database from "./database.js";

import connectioninfo from "./connectioninfo.json" with { type: "json" };
import sql from "./sql.json" with { type: "json" };
import config from "./config.json" with { type: "json" };

const { port, host } = config;

// console.log(lauseet);

const database = new Database(connectioninfo);

const RESOURCE = "BAWAdb";

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("./public"));


app.get(`/${RESOURCE}/get_all/:taulu`, (req, res) => {
    varasto
        .suoritaKysely(lauseet[req.params.taulu].hae_kaikki.sql, [])
        .then((tulos) => res.json(tulos))
        .catch((tila) => res.json(tila));
});
/*
app.get(`/${RESURSSI}/haelista/:taulu/:hakuavain`, (req, res) => {
    const taulu = req.params.taulu;
    const avain = req.params.hakuavain;

    varasto
        .suoritaKysely(lauseet[taulu][avain].sql, [])
        .then((tulos) => res.json(tulos))
        .catch((tila) => res.json(tila));
});

app.get(`/${RESURSSI}/hae/:taulu/:hakuavain/:arvo`, (req, res) => {
    const taulu = req.params.taulu;
    const avain = req.params.hakuavain;
    const arvo = req.params.arvo;

    varasto
        .suoritaKysely(lauseet[taulu][avain].sql, [arvo])
        .then((tulos) => res.json(tulos))
        .catch((tila) => res.json(tila));
});

app.post(`/${RESURSSI}/lisaa/:taulu`, (req, res) => {
    const uusi = req.body;
    const taulu = req.params.taulu;

    varasto
        .suoritaKysely(
            lauseet[taulu].lisaa.sql,
            muunna(uusi, lauseet[taulu].lisaa.parametrijarjestys),
        )
        .then((tulos) => res.json(tulos))
        .catch((virhe) => res.json(virhe));
});

app.put(`/${RESURSSI}/paivita/:taulu/:avain`, (req, res) => {
    const uusi = req.body;
    const taulu = req.params.taulu;
    const avain = req.params.avain;
    varasto
        .suoritaKysely(
            lauseet[taulu][avain].sql,
            muunna(uusi, lauseet[taulu][avain].parametrijarjestys),
        )
        .then((tulos) => res.json(tulos))
        .catch((virhe) => res.json(virhe));
});
*/
app.listen(port, host, () => console.log(`${host}:${port} hosting`));
