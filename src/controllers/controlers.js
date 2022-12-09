const dbcConnection = require("../dbConnection/dbConnection");
const conn = dbcConnection.conn;
getArticles = (req, res) => {
  conn.query("SELECT * FROM article", function (err, data, fields) {
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};
getDetailArticle = (req, res) => {
  conn.query(
    `SELECT * FROM article WHERE id = ${req.params.article}`,
    function (err, data, fields) {
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};
postArticle = (req, res) => {
  const valeurs = [
    req.body.titre,
    req.body.contenu,
    req.body.auteur,
    
    req.body.datecreated,
    req.body.dateedited,
  ];
  console.log(valeurs);
  conn.query(
    "INSERT INTO article(titre,contenu,auteur,datecreated,dateedited) VALUES(?)",
    [valeurs],
    function (err, data, fields) {
      res.status(201).json({
        status: "success",
        message: "article cree",
      });
    }
  );
};
putArticle = (req, res) => {
  conn.query(
    `UPDATE article SET auteur="Saknkara Mbaye" WHERE id=${req.params.article}`,
    function (err, data, fields) {
      res.status(200).json({
        status: "success",
        message: "Modification avec succées",
      });
    }
  );
};
exports.getArticles = getArticles;
exports.getDetailArticle = getDetailArticle;
exports.postAricle = postArticle;
exports.putArticle = putArticle;
