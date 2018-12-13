const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const controller = require("./products_controller");
require("dotenv").config();

const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/api/products", controller.getAll);
app.get("/api/products/:id", controller.getOne);
app.put("/api/products/:id", controller.update);
app.post("/api/products", controller.create);
app.delete("/api/products", controller.deleted);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
