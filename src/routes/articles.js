const express = require("express");

const app = express();

/**
 *@swagger
 * components:
 *  schemas:
 *     Article:
 *      required:
 *        - title
 *        - contenu
 *        - auteur
 *        - datecreated
 *        -dateedited
 *    properties:
 *     id:
 *      description: The auto-generated id of the book.
 *     title:
 *      description: Le titre de l'article.
 *     auteur:
 *      description: Qui a ecrit le livre?
 *     datecreated:
 *      description: Date de creation?
 *     dateedited:
 *      description: date de modification.
 *     example:
 *     title: The Pragmatic Programmer
 *      auteur: Andy Hunt / Dave Thomas
 *      datecreated: 2022/02/18
 *      dateedited: 2022/02/18
 */

/**
 /**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});
