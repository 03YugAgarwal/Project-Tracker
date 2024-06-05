const User = require("../models/userSchema");

const test = (req, res) => {
    res.send("Hello World");
}

module.exports = {test}