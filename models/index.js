var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/streetsmart');

module.exports.Piece = require('./piece.js');
module.exports.Artist = require('./artist.js');
