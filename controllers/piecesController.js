db = require('../models');




// GET /api/pieces
function index(req, res) {
  db.Piece.find(function(err, allPieces) {
    if (err) { console.log('ERROR, CANNOT FIND ALL PIECES'); }
    res.json(allPieces);
  });
}



module.exports = {
  index: index
};
