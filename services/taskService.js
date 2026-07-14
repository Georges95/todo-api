const fs = require("fs");

const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

function getTasks() {

    const data = fs.readFileSync(filePath, "utf8");

    return JSON.parse(data);

}

function saveTasks(tasks) {

    fs.writeFileSync(
        filePath,
        JSON.stringify(tasks, null, 4)
    );

}

module.exports = {
    getTasks,
    saveTasks
};