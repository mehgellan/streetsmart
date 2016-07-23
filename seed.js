var db = require('./models');

var piecesList = [
  {
    title: 'Honey Bears',
    type: 'Painting',
    location: 'Duboce Dog Park, Duboce Ave, SF',
    image: 'http://67.media.tumblr.com/4e3b8075457766516209c96c212b575b/tumblr_nyacm3tLg21sc86jyo1_1280.jpg',
    active: true,
    note: 'Seein these all over da city!'
  },
  {
    title: 'Wildcat',
    type: 'Mural',
    location: 'Nopa, SF',
    image: 'http://i.imgur.com/0ymjSbV.jpg',
    active: true,
    note: 'Love the geometry here'
  },
  {
    title: 'Butterflies',
    type: 'Painting',
    location: 'Lower Haight, SF',
    image: 'http://i.imgur.com/rPUoooH.jpg',
    active: true,
    note: 'Looks more like chalk than paint'
  }
];

var artistsList = [
  {
    name: 'Brendan the Blob',
    contact: 'https://www.instagram.com/brendantheblob/'
  },
  {
    name: 'lx1One',
    contact: 'https://www.instagram.com/lx1one/'
  },
  {
    name: 'Fnnch',
    contact: 'https://www.instagram.com/fnnch/'
  },
  {
    name: 'Moneyless1980',
    contact: 'https://www.instagram.com/moneyless1980/'
  },
  { name: 'Low Bros',
    contact: 'https://www.instagram.com/low_bros/'
  },
  {
    name: 'Alessandro Etnik',
    contact: 'https://www.instagram.com/alessandroetnik/'
  }
];

db.Piece.remove({}, function(err, pieces) {
  console.log('REMOVED ALL PIECES');
  db.Piece.create(piecesList, function(err, savedPiece) {
    if (err) {
      return console.log('ERROR: ', err);
    }
    console.log('CREATED PIECES' + savedPiece);
    console.log('CREATED', savedPiece.length, 'PIECES');
    process.exit();
  });
});
