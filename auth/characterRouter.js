const express = require('express');
const characterRouter = express.Router();
// const Characters = require('./characterModel.js');

characterRouter.get('/', (req, res) => {
    res.json({
        message: "Server is running on 'http:localhost:/api/' \t",
    })
})

module.exports = characterRouter