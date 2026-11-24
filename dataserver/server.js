import express from "express";
import cors from "cors";
/* js imports */
import connectioninfo from "./connectioninfo.json" with { type: "json" };
import Database from "./database.js";
import formsql from "./formsql.js";
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

//get all users
app.get(`/${RESOURCE}/users`, async (req, res) => {
    try{
        const result = await storage.runQuery(
            "SELECT * FROM users",
            []
        );
        res.json(result.queryResult);
    } catch(error) {
        console.error("Database error:", error);

        res.status(500).json({
            error: "Failed to retrieve users"
        });
    }
});

// Get all categories
app.get(`/${RESOURCE}/categories`, async (req, res) => {
    try {
        const result = await storage.runQuery(
            "SELECT * FROM categories",
            []
        );
        res.json(result.queryResult);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({
            error: "Failed to retrieve categories"
        });
    }
});

// Get all items
app.get(`/${RESOURCE}/items`, async(req, res) =>{
    try{
        const result = await storage.runQuery(
            "SELECT * FROM items",
            []
        );
        res.json(result.queryResult);
    } catch(error){
        console.error("Database error:", error);
        res.status(500).json({
            error: "Failed to retrieve items"
        });
    }
});

// Get all auctions
app.get(`/${RESOURCE}/auctions`, async(req, res) =>{
    try{
        const result = await storage.runQuery(
            "SELECT * FROM auctions",
            []
        );
        res.json(result.queryResult);
    } catch(error){
        console.error("Database error", error);
        res.status(500).json({
            error: "Failed to retrieve auctions"
        });
    }
});

app.listen(port, host, () => console.log(`${host}:${port} hosting...`));
