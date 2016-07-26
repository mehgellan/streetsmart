db = require('../models');


// FIND ALL ARTISTS
function index(req, res) {
  db.Artist.find(function(err, allArtists) {
    if (err) { return console.log('ERROR', err); }
    res.json(allArtists);
    console.log('FOUND ALL ARTISTS');
  });
}

function show(req, res) {
  var artistId = req.params.id;
  db.Artist.findOne({_id: artistId}, function(err, foundArtistId) {
    if (err) { res.sendStatus(404); }
    res.json(foundArtistId);
  });
}

function create(req, res) {
  var newArtist = req.body;
  db.Artist.create(newArtist, function(err, artist) {
    if (err) { res.sendStatus(404); }
    res.json(artist);
  });
}

function update(req, res) {
  var artistId = req.params.id;
  db.Artist.findOne({_id: artistId}, function(err, foundArtist) {
    if (err) { res.sendStatus(404); }
    foundArtist.name = req.body.name;
    foundArtist.contact = req.body.contact;
    foundArtist.save(function(err, savedArtist) {
      if (err) { res.sendStatus(404); }
      res.json(savedArtist);
    });

  });
}

function destroy(req, res) {
  var artistId = req.params.id;
  db.Artist.findOneAndRemove({_id: artistId}, function(err, removedArtist) {
    if (err) { res.sendStatus(404); }
    res.json(removedArtist);
  });
}

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
