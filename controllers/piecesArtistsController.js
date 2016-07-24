db = require('../models');


// FIND ALL ARTISTS
function index(req, res) {
  db.Artist.find()
    .exec(function(err, pieces) {
      if (err) { return console.log('INDEX ERROR' + err); }
      res.json(pieces);
    });
}

function show(req, res) {
  
}


module.exports = {
  index: index
};
