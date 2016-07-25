console.log('JS is linked');
$(document).on('ready', function() {

  // GET ALL ARTISTS
  $.get('/api/artists', onSuccess);

  // ADD AN ARTIST
  $('#artist-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/api/artists', formData, handleNewArtist);
    $('form input').val('');
  });

  // DELETE AN ARTIST
  $('#artists').on('click', '.delete-artist', handleDeleteArtist);

  // ADD A PIECE
  $('#artists').on('click', '.show-pieces', handleShowPieces);
  $('#savePiece').on('click', handleNewPieceSave);

});

function onSuccess(artists) {
  console.log('FOUND AN ARTIST', artists);
  artists.forEach(function(artist) {
    renderArtist(artist);
  });
}

function renderArtist(artist) {
  console.log('RENDERING ARTIST', artist);
  console.log('GET NAME OFF ARTIST', artist.name);
  var artistHtml = $('#artist-template').html();
  var templateFunction = Handlebars.compile(artistHtml);
  var templatedArtistHtml = templateFunction(artist);
  $('#artists').prepend(templatedArtistHtml);
}

function handleNewArtist(artist) {
  console.log('NEW ARTIST POST', artist.name);
  renderArtist(artist);
}

function handleDeleteArtist(e) {
  var artistId = $(this).parents('.artist').data('artist-id');
  console.log(artistId);
  $.ajax({
    method: 'DELETE',
    url: '/api/artists/' + artistId,
    success: deleteArtistSuccess,
  });
}

function deleteArtistSuccess(data) {
  var deletedArtistId = data._id;
  console.log('DELETED ARTIST', deletedArtistId);
  $('div[data-artist-id=' + deletedArtistId + ']').remove();
}

function handleShowPieces() {
  console.log('SHOW PIECE CLICKED');
  var currentArtistId = $(this).closest('.artist').data('artist-id');
  console.log('ID', currentArtistId);
  $('#pieceModal').data('artist-id', currentArtistId);
  $.ajax({
    method: 'GET',
    url: '/api/artists/' + currentArtistId + '/pieces',
    success: handleShowAllPiecesSuccess
  });
  $('#pieceModal').modal();
}

function handleShowAllPiecesSuccess(pieces) {
  pieces.forEach(function(piece) {
    renderPiece(piece);
  });
}

function renderPiece(piece) {
  console.log(piece);
  var pieceHtml = $('#piece-template').html();
  var templateFunction = Handlebars.compile(pieceHtml);
  var templatedPieceHtml = templateFunction(piece);
  console.log(templatedPieceHtml);
  $('#pieces-list').prepend(templatedPieceHtml);
}

// function handleNewPieceSave(e) {
//   e.preventDefault();
//   var $modal = $('#pieceModal');
//   var $titleInput = $('#title');
//   var $typeInput = $('#type');
//   var $imageInput = $('#image');
//
//   var dataToPost = {
//     title: $titleInput.val(),
//     type: $typeInput.val(),
//     image: $imageInput.val()
//   };
//   var artistId = $modal.data('artist-id');
//   console.log('GOT TITLE: ', title, ' AND TYPE: ', type, ' FOR ALBUM W/ ID: ', artistId);
// }
