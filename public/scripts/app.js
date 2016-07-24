console.log('JS is linked');
$(document).on('ready', function() {

  // GET ALL ARTISTS
  $.get('/api/artists/579511ef2db45ae32167d63f/pieces', onSuccess);

  // POST NEW PIECE
  $('#piece-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('FORM DATA =', formData);
    $.ajax({
      method: 'POST',
      url: '/api/pieces',
      data: formData,
      success: newPieceSuccess,
      error: newPieceError
    });
    $('form input').val('');
  });

  // EDIT PIECE ON CLICK

  // SAVE EDITED PIECE ON CLICK


});

function onSuccess(pieces) {
  console.log('FOUND ALL PIECES');
  pieces.forEach(function(piece) {
    renderPiece(piece);
  });
}

function newPieceSuccess(piece) {
  console.log('POST NEW PIECE SUCCESS', piece);
  renderPiece(piece);
}
function newPieceError() {
  console.log('NEW PIECE ERROR');
}


function renderPiece(piece) {
  console.log('RENDERING PIECE');
  var pieceHtml = $('#piece-template').html();
  var templateFunction = Handlebars.compile(pieceHtml);
  var templatedPieceHtml = templateFunction(piece);
  $('#pieces').prepend(templatedPieceHtml);
}
