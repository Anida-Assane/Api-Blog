const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const controllers = require("./controllers/controlers");
const express = require("express");
const port = 3000;
const app = express();
// ...

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Articles Api",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};
const openapiSpecification = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

/*EndPoints*/
app.get("/blog", controllers.getArticles);
app.get("/detail_article/:article", controllers.getDetailArticle);
app.post("/creation_article", controllers.postAricle);
app.put("/modifier_article/:article", controllers.putArticle);

app.listen(port, () => {
  console.log("hello");
});
