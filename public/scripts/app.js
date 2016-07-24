console.log('JS is linked');
var allPieces = [];
var templateFunction;
$(document).on('ready', function() {
  var pieceHtml = $('#piece-template').html();
  templateFunction = Handlebars.compile(pieceHtml);

  $.get('/api/pieces', onSuccess);

  $('#piece-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log(formData);
    // $.post('/api/pieces', formData, newPieceSuccess);
    $.ajax({
      method: 'POST',
      url: '/api/pieces',
      data: formData,
      success: newPieceSuccess,
      error: newPieceError
    });
  });


});

function onSuccess(json) {
  console.log('FOUND ALL PIECES');
  allPieces = json;
  renderPiece();
}

function newPieceSuccess(json) {
  console.log('POST NEW PIECE SUCCESS', json);
  allPieces.push(json);
  renderPiece();
}
function newPieceError() {
  console.log('NEW PIECE ERROR');
}

function renderPiece() {
  $('#pieces').empty();

  // templateFunction = Handlebars.compile(pieceHtml);
  var templatedPieceHtml = templateFunction({pieces: allPieces});
  $('#pieces').prepend(templatedPieceHtml);
}
