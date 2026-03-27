const express = require("express")
const app = express();
const cors = require("cors");

const corsConfig = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
    );

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();

    
    app
        .use(cors({methods: ["GET", "POTS", "DELETE", "UPDATE", "PUT", "PATH"]}))
        .use(cors({origin: "*"}))
        .use("/", require("../routes/index"));
};

module.exports = corsConfig;