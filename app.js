const express = require("express");

const app = express();

const PORT = 3000;

const tasksRoutes = require("./routes/tasks");

app.use(express.json());

app.use("/tasks", tasksRoutes);

app.get("/", (req, res) => {
    res.send("Bienvenue sur mon API Node !");
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});