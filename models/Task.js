const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    title: {

        type: String,

        required: [true, "Le titre est obligatoire."],

        minlength: [3, "Le titre doit contenir au moins 3 caractères."],

        maxlength: [100, "Le titre ne peut pas dépasser 100 caractères."],

        trim: true

    },

    done: {

        type: Boolean,

        default: false

    }

});

module.exports = mongoose.model("Task", taskSchema);