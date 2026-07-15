const mongoose = require("mongoose");

async function connectDatabase() {

    try {

        await mongoose.connect("mongodb://127.0.0.1:27017/todo-api");

        console.log("Connexion à MongoDB réussie.");

    } catch (error) {

        console.error("Erreur de connexion :", error);

        process.exit(1);

    }

}

module.exports = connectDatabase;