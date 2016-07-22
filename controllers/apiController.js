function index(req, res) {
  res.json({
    message: "Welcome to streetsmart! A homemade full-stack app with personal API",
    documentation_url: 'https://github.com/mehgellan/streetsmart',
    base_url: 'https://hidden-citadel-79874.herokuapp.com/',
    endpoints: [
      {method: 'GET', path: '/api', description: 'Describes all endpoints available'},
      {method: 'GET', path: '/api/pieces', description: 'Route to index all Pieces of art'},
      {method: 'GET', path: '/api/pieces/:id', description: 'Route to show a Piece'},
      {method: 'POST', path: '/api/pieces', description: 'Route to create a Piece'},
      {method: 'PUT', path: '/api/pieces/:id', description: 'Route to update a Piece'},
      {method: 'DELETE', path: '/api/pieces/:id', description: 'Route to destory a Piece'}
    ]
  });
}

// export public methods here
module.exports = {
  index: index
};
