const express = require('express');
const characterRouter = express.Router();

characterRouter.get('/', (req, res) => {
    res.json({
        message: 'Server is running on /',
    })
})

module.exports = characterRouter