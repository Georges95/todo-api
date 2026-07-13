const tasks = require("../data/tasks");

function getAllTasks(req, res) {
    res.json(tasks);
}

function getTaskById(req, res) {

    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Tâche introuvable"
        });
    }

    res.json(task);
}

function createTask(req, res) {

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        done: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
}

function updateTask(req, res) {

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
}

function deleteTask(req, res) {

    const id = Number(req.params.id);

    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Tâche introuvable"
        });
    }

    tasks.splice(index, 1);

    res.json({
        message: "Tâche supprimée"
    });
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};