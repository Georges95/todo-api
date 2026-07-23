const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(username, password) {

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        password: hashedPassword
    });

    return await user.save();

}

async function login(username, password) {

    const user = await User.findOne({ username });

    if (!user) {
        throw new Error("Utilisateur inconnu");
    }

    const validPassword = await bcrypt.compare(
        password,
        user.password
    );

    if (!validPassword) {
        throw new Error("Mot de passe incorrect");
    }

    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    return token;
}

module.exports = {
    register,
    login
};