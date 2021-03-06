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

  // SHOW PIECES
  $('#artists').on('click', '.show-pieces', handleShowPieces);

  // ADD AN ARTIST
  $('#savePiece').on('click', handleNewPieceSubmit);

  // EDIT A PIECE
  $('body').on('click', '.thumbnail', handleShowPieceClick);


});

function onSuccess(artists) {
  artists.forEach(function(artist) {
    renderArtist(artist);
    getAllImages(artist);

  });
}

function renderArtist(artist) {
  var artistHtml = $('#artist-template').html();
  var templateFunction = Handlebars.compile(artistHtml);
  var templatedArtistHtml = templateFunction(artist);
  $('#artists').prepend(templatedArtistHtml);
}

function handleNewArtist(artist) {
  renderArtist(artist);
}

function handleDeleteArtist(e) {
  e.preventDefault();
  var artistId = $(this).parents('.artist').data('artist-id');
  $.ajax({
    method: 'DELETE',
    url: '/api/artists/' + artistId,
    success: deleteArtistSuccess,
  });
}

function deleteArtistSuccess(data) {
  var deletedArtistId = data._id;
  $('div[data-artist-id=' + deletedArtistId + ']').remove();
}

function handleShowPieces(e) {
  e.preventDefault();
  var currentArtistId = $(this).closest('.artist').data('artist-id');
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
  var pieceHtml = $('#piece-template').html();
  var templateFunction = Handlebars.compile(pieceHtml);
  var templatedPieceHtml = templateFunction(piece);
  $('#pieces-list').prepend(templatedPieceHtml);
}

// ADD NEW PIECE ON SUBMIT
function handleNewPieceSubmit(e) {
  e.preventDefault();
  var $modal = $('#pieceModal');
  var $titleInput = $modal.find('#title');
  var $typeInput = $modal.find('#type');
  var $imageInput = $modal.find('#image');
  var dataToPost = {
    title: $titleInput.val(),
    type: $typeInput.val(),
    image: $imageInput.val()
  };
  var artistId = $modal.data('artist-id');
  var pieceUrl = ('/api/artists/' + artistId + '/pieces');
  $.post(pieceUrl, dataToPost, function(piece) {
    renderPiece(piece);
  });
  $titleInput.val('');
  $typeInput.val('');
  $imageInput.val('');
}

function getAllImages(artist) {
  $.get('/api/artists/' + artist._id, function(artist) {
    var artistId = artist._id;
    $.get('/api/artists/' + artistId + '/pieces', function(pieces) {
      pieces.forEach(function(piece) {
       renderImages(piece);
      });
    });
  });
 }

 function renderImages(image) {
   var imageHtml = $('#gallery-template').html();
   var templateFunction = Handlebars.compile(imageHtml);
   var templatedImagesHtml = templateFunction(image);
   $('#gallery').prepend(templatedImagesHtml);
 }

 function handleShowPieceClick(e) {
   e.preventDefault();
   var pieceId = $(this).closest('.piece-image').data('piece-id');
   var artistId = $(this).closest('.piece-image').data('artist-id');
  $.get('/api/artists/' + artistId + '/pieces/' + pieceId, function(piece) {
    renderOnePiece(piece);
  });
  $('#singlePiece').html('');
  $('#singlePieceModal').modal();
 }

 function renderOnePiece(piece) {
    var singlePieceHtml = $('#single-piece-template').html();
    var templateFunction = Handlebars.compile(singlePieceHtml);
    var templatedPieceHtml = templateFunction(piece);
    $('#singlePiece').prepend(templatedPieceHtml);
 }
