db = require('../models');




// GET ALL PIECES + ARTIST
function index(req, res) {
  var artistId = req.params.artist_id;
  db.Piece.find({artist: artistId}, function(err, foundPieces) {
    if (err) { return console.log('ERROR', err); }
    console.log('FOUND PIECE', foundPieces);
    res.json(foundPieces);
  });
}

function show(req, res) {
  var pieceId = req.params.piece_id;
  db.Piece.findOne({_id: pieceId}, function(err, foundPiece) {
    if (err) { return console.log('ERROR', err); }
    console.log('FOUND PIECE', foundPiece);
    res.json(foundPiece);
  });
}

// req.body = {
//   title: 'A TITLE',
//   type: 'mural',
//   image: 'http://the-image.jpg'
// }
// artistId = '317fjd17f1lg8401k33'

// pieceData = {
//   title: 'A TITLE',
//   type: 'mural',
//   image: 'http://the-image.jpg',
//   artist: '317fjd17f1lg8401k33'
// }

// db.Piece.create(pieceData)

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
// function update(req, res) {
//   var pieceId = req.params.id;
//   db.Piece.findOne({_id: pieceId}, function(err, foundPiece) {
//     if (err) { return console.log('PIECE NOT FOUND'); }
//     console.log(foundPiece);
//     foundPiece.title = req.body.title;
//     foundPiece.type = req.body.type;
//     foundPiece.save(function(err, savedPiece) {
//       if (err) { return console.log('SAVE ERROR'); }
//       res.json(savedPiece);
//       console.log('SAVED UPDATED PIECE', savedPiece);
//     });
//   });
// }



module.exports = {
  index: index,
  show: show,
  create: create
};
