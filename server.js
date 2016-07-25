var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var controllers = require('./controllers');


/******* ROUTES ********/


/* HTML ENDPOINTS */

app.get('/', function homepage(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

/* JSON API ENDPOINTS */

app.get('/api', controllers.api.index);

app.get('/api/artists', controllers.piecesArtists.index);

app.get('/api/artists/:id', controllers.piecesArtists.show);

app.post('/api/artists/', controllers.piecesArtists.create);

app.put('/api/artists/:id', controllers.piecesArtists.update);

app.delete('/api/artists/:id', controllers.piecesArtists.destroy);

app.get('/api/artists/:artist_id/pieces', controllers.pieces.index);

app.get('/api/artists/:artist_id/pieces/:piece_id', controllers.pieces.show);

app.post('/api/artists/:artist_id/pieces', controllers.pieces.create);

app.put('/api/artists/:artist_id/pieces/:piece_id', controllers.pieces.update);

app.delete('/api/artists/:artist_id/pieces/:piece_id', controllers.pieces.destroy);




// app.get('/api/pieces/:id', controllers.pieces.show);
//
// app.post('/api/pieces', controllers.pieces.create);
//
// app.put('/api/pieces/:id', controllers.pieces.update);
//
// app.get('/api/artists', controllers.piecesArtists.index);
//
// app.get('/api/artists/:artist_id/pieces/', controllers.pieces.index)


/******* SERVER ********/

// listen at port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
