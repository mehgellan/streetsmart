console.log('JS is linked');

$(document).on('ready', function() {

  $.get('/api/pieces', onSuccess);

  $('#piece-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/api/pieces', formData, newPieceSuccess);
  });


});

function onSuccess(json) {
  console.log('FOUND ALL PIECES');
  json.forEach(function(piece) {
    renderPiece(piece);
    console.log(piece);
  });
}

function newPieceSuccess(json) {
  console.log('POST NEW PIECE SUCCESS', json.piece);
  var allPieces = [];
  allPieces.push(json);
  console.log(allPieces);
  renderPiece(json);
}

function renderPiece(piece) {
  var pieceHtml = $('#piece-template').html();
  var templateFunction = Handlebars.compile(pieceHtml);
  var templatedPieceHtml = templateFunction(piece);
  $('#pieces').prepend(templatedPieceHtml);
}
