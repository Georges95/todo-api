const express = require("express");

const connectDatabase = require("./config/database");

const tasksRoutes = require("./routes/tasks");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/tasks", tasksRoutes);

app.get("/", (req, res) => {

    res.send("Bienvenue sur mon API.");

});

connectDatabase();

app.listen(PORT, () => {

    console.log(`Serveur lancé sur le port ${PORT}`);

});