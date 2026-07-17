const mongoose = require("mongoose");

async function connectDatabase() {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connexion à MongoDB réussie.");

    } catch (error) {

        console.error("Erreur de connexion :", error);

        process.exit(1);

    }

}

module.exports = connectDatabase;