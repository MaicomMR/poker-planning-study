const path = require('path');

exports.index = (req, res) => {
    res.render('index');
}

exports.checkRoom = (req, res) => {
    res.render('room');
}