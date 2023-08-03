const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat app docs",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes*.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
  app.get("docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(openapiSpecification);
  });
};

module.exports = swaggerDocs;
