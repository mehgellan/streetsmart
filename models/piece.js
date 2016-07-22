var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PieceSchema = new Schema({
  title: String,
  type: String,
  location: String,
  image: String,
  active: Boolean,
  note: String
});

var Piece = mongoose.model('Piece', PieceSchema);

module.exports = Piece;
