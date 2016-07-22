console.log('JS is linked');

var templateFunction;
var allPieces = [];

$(document).on('ready', function() {
  var pieceHtml = $('#piece-template').html();
  templateFunction = Handlebars.compile(pieceHtml);


  $.get('/api/pieces', onSuccess);


});

function onSuccess(json) {
  console.log('FOUND ALL PIECES');
  json.forEach(function(piece) {
    renderPiece(piece);
  });
}


function renderPiece(piece) {
  // var context = {pieces: piece};
  var templatedPieceHtml = templateFunction(piece);
  $('#pieces').prepend(templatedPieceHtml);
}
