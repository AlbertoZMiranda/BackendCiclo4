const express = require("express");

const datafull = require("../data.json");
const cors = require("cors");

const app = express();
app.use(cors());

//Configuraciones

app.set("port", process.env.PORT || 3030);

// Routes
app.get("/api/mascotas", (req, res) => {
  res.send(datafull.mascotas);
});

app.get("/api/mascotas/slug/:slug", (req, res) => {
  const mascota = datafull.mascotas.find((x) => x.slug === req.params.slug);
  if (mascota) {
    res.send(mascota);
  } else {
    res.status(404).send({ message: "mascota no encontrada" });
  }
});
// http://localhost:3030/api/mascotas/slug/firulais

module.exports = app;
