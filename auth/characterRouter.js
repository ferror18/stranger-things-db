const express = require('express');
const characterRouter = express.Router();
const Characters = require('./characterModel.js');

characterRouter.get('/characters', (req, res) => {
    Characters.find()
    .then(response => {
        res.json(response)
    })
    .catch(err => res.json({error: err, message: err.message}))
})

// characterRouter.post('/', (req, res) => {
//     res.json({
//         message: "Server is running on 'http:localhost:/api/' \t",
//     })
// })

module.exports = characterRouter