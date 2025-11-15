require("dotenv").config();;
const swaggerAutogen = require("swagger-autogen")();
const env = process.env.DEV_FIELD || "development";

const doc = {
    info: {
        title: "Week 03 & 04 Project",
        description: "API", 
    },

    // host: "localhost:1910",
    host: env === "production" ? "localhost:1910" : "localhost:1910",

    //schemes: ["http", "https"],
    schemes: env === "production" ? ["https"] : ["http"],
    basePath: "/"
};

const outputFile = "./swagger.json";
const endpointsFile = ["./app.js"];

swaggerAutogen(outputFile, endpointsFile, doc);


    