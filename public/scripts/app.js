console.log('JS is linked');
$(document).on('ready', function() {

  // GET ALL ARTISTS
  $.get('/api/artists/579541fb1fa37ba22ae79990/pieces', onSuccess);

  // POST NEW PIECE
  // $('#piece-form form').on('submit', function(e) {
  //   e.preventDefault();
  //   var formData = $(this).serialize();
  //   console.log('FORM DATA =', formData);
  //   $.ajax({
  //     method: 'POST',
  //     url: '/api/pieces',
  //     data: formData,
  //     success: newPieceSuccess,
  //     error: newPieceError
  //   });
  //   $('form input').val('');
  // });

  // EDIT PIECE ON CLICK

  // SAVE EDITED PIECE ON CLICK


});

function onSuccess(pieces) {
  console.log('FOUND A PIECE', pieces);
  pieces.forEach(function(piece) {
    renderPiece(piece);
  });
}


function renderPiece(piece) {
  console.log('RENDERING PIECE', piece);
  console.log('GET TITLE OFF PIECE', piece.title);
  var pieceHtml = $('#piece-template').html();
  var templateFunction = Handlebars.compile(pieceHtml);
  var templatedPieceHtml = templateFunction(piece);
  $('#pieces').prepend(templatedPieceHtml);
}
