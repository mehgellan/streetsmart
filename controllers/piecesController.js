db = require('../models');




// GET ALL PIECES + ARTIST
function index(req, res) {
  var artistId = req.params.artist_id;
  db.Piece.find({artist: artistId})
    .populate('artist')
    .exec(function(err, pieces) {
    if (err) { return console.log('ERROR', err); }
    console.log('FOUND PIECES', pieces);
    res.json(pieces);
  });
}

function show(req, res) {
  var artistId = req.params.artist_id;
  var pieceId = req.params.piece_id;
  db.Piece.findById(pieceId)
    .populate('artist')
    .exec(function(err, piece) {
      if (err) { return console.log('ERROR', err); }
      res.json(piece);
      console.log('UPDATED ARTIST NAME', piece);
    });
}

// function piecesByArtist(req, res) {
//   var artistId = req.params.artist_id;
//   db.Piece.find({artist: artistId})
//     .populate('artist')
//     .exec(function(err, pieces) {
//       if (err) { return console.log('ERROR', err); }
//       res.json(pieces);
//     });
// }

function create(req, res) {
  var artistId = req.params.artist_id;
  var pieceData = {
    title: req.body.title,
    type: req.body.type,
    image: req.body.image,
    artist: artistId
  };
  db.Piece.create(pieceData, function(err, newPiece) {
    if (err) { return console.log('ERROR', err); }
    res.json(newPiece);
    console.log('CREATED PIECE', newPiece);
  });
}

function update(req, res) {
  var pieceId = req.params.piece_id;
  db.Piece.findOne({_id: pieceId}, function(err, foundPiece) {
    if (err) { return console.log('ERROR', err); }
    foundPiece.title = req.body.title;
    foundPiece.type = req.body.type;
    foundPiece.image = req.body.image;
    foundPiece.save(function(err, savedPiece) {
      if (err) { return console.log('ERROR', err); }
      res.json(savedPiece);
      console.log('UPDATED PIECE', savedPiece);
    });
  });
}

function destroy(req, res) {
  var pieceId = req.params.piece_id;
  db.Piece.findOneAndRemove({_id: pieceId}, function(err, removedPiece) {
    if (err) { return console.log('ERROR', err); }
    res.json(removedPiece);
    console.log('REMOVED PIECE', removedPiece);
  });
}

// // GET ONE PIECE + ARTIST
// function show(req, res) {
//   var pieceId = req.params.piece_id;
//   var artistId = req.params.artist_id;
//
//   db.Piece.findOne({_id: pieceId})
//     .populate('artist')
//     .exec(function(err, piece) {
//       if (err) { return console.log('SHOW ERROR: ', err); }
//       res.json(piece);
//     });
// }
//
// // POST A PIECE WITH FORM
// function create(req, res) {
//   var newPiece = new db.Piece({
//     title: req.body.title,
//     type: req.body.type,
//     location: req.body.location,
//     image: req.body.image,
//     note: req.body.note
//   });
//   console.log('NEWPIECE=', newPiece);
//
//   // ONLY WORKS IF ARTIST ALREADY EXISTS
//   db.Artist.findOne({name: req.body.artist}, function(err, artist) {
//     newPiece.artist = artist;
//     newPiece.save(function(err, piece) {
//       if (err) { return console.log('SAVE ERROR', err); }
//       console.log('CREATED', piece.title, artist);
//       res.json(piece);
//     });
//   });
// }
//
function update(req, res) {
  var pieceId = req.params.id;
  db.Piece.findOne({_id: pieceId}, function(err, foundPiece) {
    if (err) { return console.log('PIECE NOT FOUND'); }
    console.log(foundPiece);
    foundPiece.title = req.body.title;
    foundPiece.type = req.body.type;
    foundPiece.save(function(err, savedPiece) {
      if (err) { return console.log('SAVE ERROR'); }
      res.json(savedPiece);
      console.log('SAVED UPDATED PIECE', savedPiece);
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
