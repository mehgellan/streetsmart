console.log('JS is linked');

$(document).on('ready', function() {


  $.get('/api/pieces', onSuccess);

  $('#piece-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/api/pieces', formData, function(piece) {
      console.log('POST NEW PIECE SUCCESS', piece.title);
      renderPiece(piece);
    });

  });


});

function onSuccess(json) {
  console.log('FOUND ALL PIECES');
  json.forEach(function(piece) {
    renderPiece(piece);
    console.log(piece);
  });
}


function renderPiece(piece) {
  var pieceHtml = $('#piece-template').html();
  var templateFunction = Handlebars.compile(pieceHtml);
  var templatedPieceHtml = templateFunction(piece);
  $('#pieces').prepend(templatedPieceHtml);
}
