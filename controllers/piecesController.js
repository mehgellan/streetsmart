db = require('../models');




// GET ALL PIECES + ARTIST
function index(req, res) {
  db.Piece.find()
    .populate('artist')
    .exec(function(err, allPieces) {
      if (err) { return console.log('ERROR, CANNOT FIND ALL PEICES'); }
      res.json(allPieces);
    });
}

// GET ONE PIECE + ARTIST
function show(req, res) {
  var pieceId = req.params.id;
  db.Piece.findOne({_id: pieceId})
    .populate('artist')
    .exec(function(err, piece) {
      if (err) { return console.log('SHOW ERROR: ', err); }
      res.json(piece);
    });
}

// POST A PIECE WITH FORM
function create(req, res) {
  var newPiece = new db.Piece({
    title: req.body.title,
    type: req.body.type,
    artist: req.body.artist,
    location: req.body.location,
    image: req.body.image,
    note: req.body.note
  });

  db.Artist.findOne({name: req.body.artist}, function(err, artist) {
    newPiece.artist = artist;
    newPiece.save(function(err, piece) {
      if (err) { return console.log('SAVE ERROR', err); }
      console.log('CREATED', piece.title, piece.artist);
      res.json(piece);
    });
  });
}



module.exports = {
  index: index,
  show: show,
  create: create,
};
