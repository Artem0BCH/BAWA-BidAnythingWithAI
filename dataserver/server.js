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

// Get all user profiles
app.get(`/${RESOURCE}/user_profiles`, async (req, res) => {
    try{
        const result = await storage.runQuery(
            "SELECT * FROM user_profiles",
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

// Get all item images
app.get(`/${RESOURCE}/item_images`, async(req, res) => {
    try{
        const result = await storage.runQuery(
            "SELECT * FROM item_images",
            []
        );
        res.json(result.queryResult);
    } catch(error){
        console.error("Database error:", error);
        res.status(500).json({
            error: "Failed to rerieve item_images"
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

// Get all bids
app.get(`/${RESOURCE}/bids`, async(req, res) => {
    try{
        const result = await storage.runQuery(
            "SELECT * FROM bids",
            []
        );
        res.json(result.queryResult);
    } catch(error){
        console.error("Database error:", error);
        res.status(500).json({
            error:"Failed to retrieve bids"
        });
    }
});

// Get all watchlist entries
app.get(`/${RESOURCE}/watchlist`, async(req, res) => {
    try{
        const result = await storage.runQuery(
            "SELECT * FROM watchlist",
            []
        );
        res.json(result.queryResult);
    } catch(error){
        console.error("Database error:", error);
        res.status(500).json({
            error: "Failed to retrieve watchlist"
        });
    }
});

// Get all ai configuration
app.get(`/${RESOURCE}/ai_configuration`, async(req, res) => {
    try{
        const result = await storage.runQuery(
            "SELECT * FROM ai_configuration",
            []
        );
        res.json(result.queryResult);
    } catch(error){
        console.error("Database error:", error);
        res.status(500).json({
            error: "Failed to retrieve ai_configuration"
        });
    }
});

// Get all ai_conversation
app.get(`/${RESOURCE}/ai_conversations`, async(req, res) => {
    try{
        const result = await storage.runQuery(
            "SELECT * FROM ai_conversations",
            []
        );
        res.json(result.queryResult);
    } catch(error){
        console.error("Database error:", error);
        res.status(500).json({
            error: "Failed to retrieve ai_conversations"
        });
    }
});

// Get all ai_messages
app.get(`/${RESOURCE}/ai_messages`, async(req, res) => {
    try{
        const result = await storage.runQuery(
            "SELECT * FROM ai_messages",
            []
        );
        res.json(result.queryResult);
    } catch(error){
        console.error("Database error:", error);
        res.status(500).json({
            error: "Failed to retrieve ai_messages"
        });
    }
});

// Get all notifications
app.get(`/${RESOURCE}/notifications`, async(req, res) => {
    try{
        const result = await storage.runQuery(
            "SELECT * FROM notifications",
            []
        );
        res.json(result.queryResult);
    } catch(error){
        console.error("Database error", error);
        res.status(500).json({
            error: "Failed to retrieve notifications"
        });
    }
});

// Get all transactions
app.get(`/${RESOURCE}/transactions`, async(req, res) => {
    try{
        const result = await storage.runQuery(
            "SELECT * FROM transactions",
            []
        );
        res.json(result.queryResult);
    } catch(error){
        console.error("Database error", error);
        res.status(500).json({
            error: "Failed to retrieve transactions"
        });
    }
});

app.listen(port, host, () => console.log(`${host}:${port} hosting...`));
