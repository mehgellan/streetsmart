var db = require('./models');

var artistsList = [
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
    name: 'Zio Ziegler',
    contact: 'https://www.instagram.com/zioziegler/'
  },
  {
    name: 'Unknown',
    contact: null
  }
];

var piecesList = [
  {
    title: 'Honey Bears',
    type: 'Painting',
    location: 'Duboce Dog Park, Duboce Ave, SF',
    image: 'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/12479568_1797222580505210_815189406_n.jpg',
    active: true,
    note: 'Seein these all over da city!',
    artist: 'Fnnch'
  },
  {
    title: 'Butterflies',
    type: 'Painting',
    location: 'the Haight',
    image: '/images/butterflies.jpg',
    active: false,
    note: 'Pretty',
    artist: 'Unknown'
  },
  {
    title: 'Cloudy Day',
    type: 'Mural',
    location: 'the Mission, SF',
    image: '/images/cloudy-day.jpg',
    active: true,
    note: 'Close up of larger mural',
    artist: 'Unknown'
  },
  {
    title: 'Tiger',
    type: 'Mural',
    location: 'Lower Haight, SF',
    image: '/images/zio.png',
    active: false,
    note: 'Love this guys work',
    artist: 'Zio Ziegler'
  },
  {
    title: 'Tree Spirit',
    type: 'Sticker',
    location: null,
    image: '/images/tree-spirit.jpg',
    active: false,
    note: 'From princess mononoke!',
    artist: 'Unknown'
  },
  {
    title: 'Unfinished',
    type: 'Mural',
    location: 'Berlin',
    image: '/images/low-bros.JPG',
    active: false,
    note: null,
    artist: 'Low Bros'
  },
  {
    title: 'Dog Park',
    type: 'Painting',
    location: 'Lower Haight, SF',
    image: '/images/fnnch.png',
    active: true,
    note: 'He also has a Welsh Corgi one',
    artist: 'Fnnch'
  },
  {
    title: 'Toobs',
    type: 'Mural',
    location: null,
    image: '/images/toobs.png',
    active: false,
    note: null,
    artist: 'Moneyless1980'
  },
  {
    title: 'Steeple',
    type: 'Sculpture',
    location: 'Hayes Valley',
    image: '/images/sculpture.png',
    active: true,
    note: null,
    artist: 'Unknown'
  },
  {
    title: 'Houses',
    type: 'Mural',
    location: 'the Mission, SF',
    image: '/images/houses.JPG',
    active: true,
    note: 'Look at all the happy little houses, such a delicate piece',
    artist: 'Unknown'
  },
  {
    title: 'Dangerous',
    type: 'Mural',
    location: 'Clarion Alley, the Mission, SF',
    image: '/images/dangerous.JPG',
    active: true,
    note: 'Be dangerous!',
    artist: 'Unknown'
  },
  {
    title: 'Doodles',
    type: 'Mural',
    location: 'Clarion Alley, the Mission, SF',
    image: '/images/doodles.JPG',
    active: false,
    note: null,
    artist: 'Unknown'
  },
];


db.Artist.remove({}, function(err, removedArtists) {
  console.log('REMOVED ARTISTS');
  db.Artist.create(artistsList, function(err, createdArtists) {
    console.log('CREATED ARTISTS', createdArtists);
    db.Piece.remove({}, function(err, pieces) {
      console.log('REMOVED ALL PIECES');
      piecesList.forEach(function(pieceData) {
        console.log('PIECE DATA:', pieceData);
        var piece = new db.Piece(pieceData);
        db.Artist.findOne({name: pieceData.artist}, function(err, foundArtist) {
          console.log('FOUND ARTIST' + foundArtist + ' FOR ' + piece.title);
          piece.artist = foundArtist._id;
          piece.save(function(err, savedPiece) {
            console.log('SAVED PIECE', savedPiece.title);
          });
        });
      });
    });
  });
});
