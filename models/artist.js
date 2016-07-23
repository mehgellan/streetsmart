var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = new Schema ({
  name: String,
  contact: String
});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
