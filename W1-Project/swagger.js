require("dotenv").config();
const swaggerAutogen = require("swagger-autogen")();
const env = process.env.NODE_ENV || "development";
console.log(`Current Env - ${env}`)

const doc = {
    info: {
        title: "Contacts Api",
        description: "Contacts Api"
    },
    //host: "localhost:4000",
    host: env === "production" ? "cse341-project01-t6b1.onrender.com" : "localhost:4000",
    //schemes: ["http", "https"],
    schemes: env === "production" ? ["https"] : ["http"],
    basePath: "/",
};

const outputFile = "./swagger.json";
const endpointsFile = ["./server.js"];

swaggerAutogen(outputFile, endpointsFile, doc);