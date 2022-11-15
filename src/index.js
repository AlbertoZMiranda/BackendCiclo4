require("dotenv").config();

const app = require("./app");
require("./database");

// Promesa para correr mi servidor

app.get("/", (req, res) => {
  res.send("Hi My server is in express!!!");
});

app.get("/new-route", (req, res) => {
  res.send("This is a new route...");
});

app.get("/mascotas", (req, res) => {
  res.json([
    {
      name: "Firulais",
      slug: "firulais",
      tipo: "Perro",
      raza: "Pitbull americano",
      sexo: "Masculino",
    },
    {
      name: "Sandy",
      slug: "sandy",
      tipo: "Gato",
      raza: "Angora",
      sexo: "Femenino",
    },
    {
      name: "Sombra",
      slug: "sombra",
      tipo: "Gato",
      raza: "Persa",
      sexo: "Masculino",
    },
  ]);
});

app.get("/mascotas/:name", (req, res) => {
  const { name } = req.params.name;
  res.json({
    name,
    name: "sombra",
    tipo: "Gato",
  });
});

async function main() {
  await app.listen(app.get("port"));
  console.log("Served run port " + app.get("port"));
}

main();
