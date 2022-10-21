const express = require("express");
const router = express.Router();

var path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
});

router.get('/teste', (req, res) => {
    res.send({data: "teste"});
});

router.get('/table', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../table.html'));
});

module.exports = router;
