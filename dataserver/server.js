import express from "express";
import cors from "cors";
/* js imports */
import connectioninfo from "./connectioninfo.json" with { type: "json" };
import Database from "./database.js";
import formSql from "./formSql.js";
/* sql import */
import config from "./config.json" with { type: "json" };
import sql from "./sql.json" with { type: "json" };

const { port, host } = config;

// const sentences = formSql(sql);

const storage = new Database(connectioninfo);
const RESOURCE = "BAWAdb";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.listen(port, host, () => console.log(`${host}:${port} hosting...`));
