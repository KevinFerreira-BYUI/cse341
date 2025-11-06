const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Contacts Api",
        description: "Contacts Api"
    },
    host: "localhost:4000",
    schemes: ["http", "https"],
    basePath: "/",
};

const outputFile = "./swagger.json";
const endpointsFile = ["./server.js"];

swaggerAutogen(outputFile, endpointsFile, doc);