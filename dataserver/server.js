import express from "express";
import cors from "cors";
/* js imports */
import connectioninfo from "./connectioninfo.json" with {type:"json"};
/* sql import */
import config from "./config.json" with {type: "json"};
const { prot, host } = config;
/* const lauseet = muodostaSql(sql); ==  import muodostaSql from "./muodostaSql.js";*/

const varasto = new Database(connectioninfo);
const RECOURSE = "BAWAdb";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));


app.listen(port, host, () => console.log(`${host}:${port} serves...`));