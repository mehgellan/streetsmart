console.log('JS is linked');
$(document).on('ready', function() {

  // GET ALL ARTISTS
  $.get('/api/artists', onSuccess);

  // GET ALL PIECES
  $.get();

  // ADD AN ARTIST
  $('#artist-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/api/artists', formData, handleNewArtist);
    $('form input').val('');
  });

  // DELETE AN ARTIST
  $('#artists').on('click', '.delete-artist', handleDeleteArtist);

  // SHOW PIECES
  $('#artists').on('click', '.show-pieces', handleShowPieces);

  // ADD AN ARTIST
  $('#savePiece').on('click', handleNewPieceSubmit);

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
  e.preventDefault();
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

function handleShowPieces(e) {
  e.preventDefault();
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
  $('.list').remove();
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

function handleNewPieceSubmit(e) {
  e.preventDefault();
  console.log('ADD PIECE BUTTON CLICKED');
  // get data from form
  var $modal = $('#pieceModal');
  var $titleInput = $modal.find('#title');
  var $typeInput = $modal.find('#type');
  var $imageInput = $modal.find('#image');
  var dataToPost = {
    title: $titleInput.val(),
    type: $typeInput.val(),
    image: $imageInput.val()
  };
  // get current artist id
  var artistId = $modal.data('artist-id');
  // find url
  var pieceUrl = ('/api/artists/' + artistId + '/pieces');
  console.log('GOT TITLE: ', title, ' AND TYPE: ', type, ' FOR ARTIST W/ ID: ', artistId);
  $.post(pieceUrl, dataToPost, handleNewPieceSubmitSuccess);
}

function handleNewPieceSubmitSuccess(piece) {
  var $modal = $('#pieceModal');
  var artistId = $modal.data('artist-id');
  $.get('/api/artists/' + artistId, function(data) {
    $('[data-artist-id=' + artistId + ']').remove();
    renderPiece(data);
  });
  console.log('NEW PIECE POSTED', piece);
}










// function handleNewPieceSave(e) {
