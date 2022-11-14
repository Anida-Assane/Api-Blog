const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const controllers = require("./controllers/controlers");
const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
//Endpoint Liste Articles//

app.get("/blog", controllers.getArticles);
app.get("/detail_article/:article", controllers.getDetailArticle);
app.post("/creation_article", controllers.postAricle);
app.put("/modifier_article/:article", controllers.putArticle);

app.listen(port, () => {
  console.log("hello");
});
