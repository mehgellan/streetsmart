db = require('../models');




// GET /api/pieces
function index(req, res) {
  db.Piece.find(function(err, allPieces) {
    if (err) { console.log('ERROR, CANNOT FIND ALL PIECES'); }
    res.json(allPieces);
  });
}

// GET /api/pieces/:id
function show(req, res) {
  var pieceId = req.params.id;
  db.Piece.findOne({_id: pieceId}, function(err, foundPiece) {
    if (err) { return console.log('SHOW ERROR'); }
    console.log('FOUND PIECE', foundPiece);
    res.json(foundPiece);
  });
}



module.exports = {
  index: index,
  show: show
};
