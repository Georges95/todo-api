const Task = require("../models/Task");

async function getTasks() {

    return await Task.find();

}

async function createTask(title) {

    const task = new Task({

        title

    });

    return await task.save();

}

module.exports = {

    getTasks,

    createTask

};