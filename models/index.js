var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/streetsmart");

module.exports.Piece = require('./piece.js');
module.exports.Artist = require('./artist.js');
