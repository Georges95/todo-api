const taskService = require("../services/taskService");
const asyncHandler = require("../middlewares/asyncHandler");

const getAllTasks = asyncHandler(async (req, res) => {

    const tasks = await taskService.getTasks();

    res.json(tasks);

});

const getTaskById = asyncHandler(async (req, res) => {

    const task = await taskService.getTaskById(req.params.id);

    if (!task) {

        return res.status(404).json({

            message: "Tâche introuvable."

        });

    }

    res.json(task);

});

const createTask = asyncHandler(async (req, res) => {

    const task = await taskService.createTask(req.body.title);

    res.status(201).json(task);

});

const updateTask = asyncHandler(async (req, res) => {

    const task = await taskService.updateTask(

        req.params.id,

        req.body

    );

    if (!task) {

        return res.status(404).json({

            message: "Tâche introuvable."

        });

    }

    res.json(task);

});

const deleteTask = asyncHandler(async (req, res) => {

    const deleted = await taskService.deleteTask(req.params.id);

    if (!deleted) {

        return res.status(404).json({

            message: "Tâche introuvable."

        });

    }

    res.json({

        message: "Suppression réussie."

    });

});

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};