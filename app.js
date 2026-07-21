require("dotenv").config();

const express = require("express");

const connectDatabase = require("./config/database");

const tasksRoutes = require("./routes/tasks");

const errorHandler = require("./middlewares/errorHandler");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/tasks", tasksRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {

    res.send("Bienvenue sur mon API.");

});

connectDatabase();

app.listen(PORT, () => {

    console.log(`Serveur lancé sur le port ${PORT}`);

});