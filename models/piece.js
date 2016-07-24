var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Artist = require('./piece');

var PieceSchema = new Schema({
  title: String,
  type: String,
  location: String,
  image: String,
  active: Boolean,
  note: String,
  artist: { type: Schema.Types.ObjectId, ref: 'Artist'}
});

var Piece = mongoose.model('Piece', PieceSchema);

module.exports = Piece;
