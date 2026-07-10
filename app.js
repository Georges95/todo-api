const express = require("express");

const app = express();

const PORT = 3000;

// Permet de lire les données JSON envoyées par le client
app.use(express.json());

// Notre "base de données"
let tasks = [
    {
        id: 1,
        title: "Apprendre Node.js",
        done: false
    },
    {
        id: 2,
        title: "Créer une API",
        done: false
    }
];

app.get("/tasks", (req, res) => {

    res.json(tasks);

});

app.get("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {

        return res.status(404).json({
            message: "Tâche introuvable"
        });

    }

    res.json(task);

});

app.post("/tasks", (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        done: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);

});

app.put("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {

        return res.status(404).json({
            message: "Tâche introuvable"
        });

    }

    task.title = req.body.title;
    task.done = req.body.done;

    res.json(task);

});

app.delete("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: "Tâche supprimée"
    });

});

app.listen( PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});