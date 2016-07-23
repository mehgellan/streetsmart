db = require('../models');




// GET /api/pieces
function index(req, res) {
  db.Piece.find()
    .populate('artist')
    .exec(function(err, allPieces) {
      if (err) { return console.log('ERROR, CANNOT FIND ALL PEICES'); }
      res.json(allPieces);
    });
}
// function index(req, res) {
//   db.Piece.find(function(err, allPieces) {
//     if (err) { console.log('ERROR, CANNOT FIND ALL PIECES'); }
//     res.json(allPieces);
//   });
// }

// GET /api/pieces/:id
function show(req, res) {
  var pieceId = req.params.id;
  db.Piece.findOne({_id: pieceId}, function(err, foundPiece) {
    if (err) { return console.log('SHOW ERROR'); }
    console.log('FOUND PIECE', foundPiece);
    res.json(foundPiece);
  });
}

function create(req, res) {
  var newPiece = req.body;
  db.Piece.create(newPiece, function(err, piece) {
    if (err) { console.log('CREATE ERROR', err); }
    console.log('NEW PIECE', piece);
    res.json(piece);
  });
}



module.exports = {
  index: index,
  show: show,
  create: create,
};
