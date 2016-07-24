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
    if (err) { return console.log('ERROR', err); }
    console.log('FOUND ARTIST ID', foundArtistId);
    res.json(foundArtistId);
  });
}

function create(req, res) {
  var newArtist = req.body;
  db.Artist.create(newArtist, function(err, artist) {
    if (err) { return console.log('ERROR', err); }
    console.log('NEW ARTIST', artist);
    res.json(artist);
  });
}

function update(req, res) {
  var artistId = req.params.id;
  db.Artist.findOne({_id: artistId}, function(err, foundArtist) {
    if (err) { return console.log('ERROR', err); }
    console.log('FOUND ARTIST', foundArtist);
    foundArtist.name = req.body.name;
    foundArtist.contact = req.body.contact;
    foundArtist.save(function(err, savedArtist) {
      if (err) { return console.log('ERROR', err); }
      res.json(savedArtist);
      console.log('UPDATED ARTIST', savedArtist);
    });

  });
}

function destroy(req, res) {
  var artistId = req.params.id;
  db.Artist.findOneAndRemove({_id: artistId}, function(err, removedArtist) {
    if (err) { return console.log('ERROR', err); }
    res.json(removedArtist);
    console.log('REMOVED ARTIST', removedArtist);
  });
}




module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
