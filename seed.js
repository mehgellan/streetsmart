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
    image: 'http://67.media.tumblr.com/4e3b8075457766516209c96c212b575b/tumblr_nyacm3tLg21sc86jyo1_1280.jpg',
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
  // {
  //   title: null,
  //   type: null,
  //   location: null,
  //   image: null,
  //   active: null,
  //   note: null,
  //   artist: null
  // },
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


// db.Artist.remove({}, function(err, removedArtists) {
//   console.log('REMOVED ALL ARTISTS');
//   db.Artist.create(artistsList, function(err, createdArtists) {
//     if (err) {return console.log('create error', err);}
//     console.log('CREATED ALL ARTISTS', createdArtists);
//     db.Artist.findOne({name: piece.artist}, function(err, foundArtist) {
//       console.log(foundArtist);
//       db.Piece.create(piece, function(err, createdPiece) {
//         console.log('Found created piece:', creatdPicreatedPieceece);
//         db.Artist.findOne({name: piece.artist}, function(err, foundArtist) {
//           console.log('Found updated artist:', foundArtist);
//         });
//       });
//     });
//   });
// });

// piecesList.push(new db.Piece({
//   title: 'Wildcat',
//   type: 'Mural',
//   location: 'Nopa, SF',
//   image: 'http://i.imgur.com/0ymjSbV.jpg',
//   active: true,
//   note: 'Love the geometry here',
//   artist: 'Unknown'
// }));
//   {
//     title: 'Wildcat',
//     type: 'Mural',
//     location: 'Nopa, SF',
//     image: 'http://i.imgur.com/0ymjSbV.jpg',
//     active: true,
//     note: 'Love the geometry here',
//     artist: 'Unknown'
//   },
//   {
//     title: 'Butterflies',
//     type: 'Painting',
//     location: 'Lower Haight, SF',
//     image: 'http://i.imgur.com/rPUoooH.jpg',
//     active: true,
//     note: 'Looks more like chalk than paint',
//     artist: 'Unknown'
//   }



// db.Artist.remove({}, function(err, artists) {
//   console.log('REMOVED ALL ARTISTS');
//   db.Artist.create(artistsList, function(err, artists) {
//     if (err) { return console.log(err); }
//     console.log('RECREATED ALL ARTISTS');
//     console.log('CREATED ', artists.length, ' ARTISTS');
//
//     db.Piece.remove({}, function(err, pieces) {
//       console.log('REMOVED ALL PIECES');
//       piecesList.forEach(function(pieceData) {
//         var piece = new db.Piece({
//           title: pieceData.title,
//           type: pieceData.type,
//           location: pieceData.location,
//           image: pieceData.image,
//           active: pieceData.active,
//           note: pieceData.note
//         });
//         db.Artist.findOne({name: pieceData.artist}, function(err, foundArtist) {
//           console.log('FOUND ARTIST ' + foundArtist.name + ' FOR PIECE ' + piece.title);
//           if (err) { return console.log('ERROR', err); }
//           piece.artist = foundArtist;
//           piece.save(function(err, savedPiece) {
//             if (err) { return console.log('ERROR', err); }
//             console.log('SAVED ' + savedPiece.title + ' by ' + foundArtist);
//           });
//         });
//       });
//     });
//
//   });
// });
