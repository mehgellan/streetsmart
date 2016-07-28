db = require('../models');




// GET ALL PIECES + ARTIST
function index(req, res) {
  var artistId = req.params.artist_id;
  db.Piece.find({artist: artistId})
    .populate('artist')
    .exec(function(err, pieces) {
      if (err) { res.sendStatus(404); }
    res.json(pieces);
  });
}

function show(req, res) {
  var artistId = req.params.artist_id;
  var pieceId = req.params.piece_id;
  db.Piece.findById(pieceId)
    .populate('artist')
    .exec(function(err, piece) {
      if (err) { res.sendStatus(404); }
    res.json(piece);
    });
}

function create(req, res) {
  var artistId = req.params.artist_id;
  var pieceData = {
    title: req.body.title,
    type: req.body.type,
    image: req.body.image,
    artist: artistId
  };
  db.Piece.create(pieceData, function(err, newPiece) {
    if (err) { res.sendStatus(404); }
    res.json(newPiece);
  });
}

function update(req, res) {
  var pieceId = req.params.piece_id;
  db.Piece.findOne({_id: pieceId}, function(err, foundPiece) {
    if (err) { res.sendStatus(404); }
    foundPiece.title = req.body.title;
    foundPiece.type = req.body.type;
    foundPiece.image = req.body.image;
    foundPiece.save(function(err, savedPiece) {
      if (err) { res.sendStatus(404); }
      res.json(savedPiece);
    });
  });
}

function destroy(req, res) {
  var pieceId = req.params.piece_id;
  db.Piece.findOneAndRemove({_id: pieceId}, function(err, removedPiece) {
    if (err) { res.sendStatus(404); }
    res.json(removedPiece);
  });
}


function update(req, res) {
  var pieceId = req.params.id;
  db.Piece.findOne({_id: pieceId}, function(err, foundPiece) {
    if (err) { res.sendStatus(404); }
    foundPiece.title = req.body.title;
    foundPiece.type = req.body.type;
    foundPiece.save(function(err, savedPiece) {
      if (err) { res.sendStatus(404); }
      res.json(savedPiece);
    });
  });
}



module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy,
};
