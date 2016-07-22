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

app.get('/api/pieces', controllers.pieces.index);



/******* SERVER ********/

// listen at port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
