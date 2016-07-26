function index(req, res) {
  res.json({
    message: "Welcome to streetsmart! A homemade full-stack app with personal API",
    documentation_url: 'https://github.com/mehgellan/streetsmart',
    base_url: 'https://hidden-citadel-79874.herokuapp.com/',
    endpoints: [
      {method: 'GET', path: '/api', description: 'Describes all endpoints available'},
      {method: 'GET', path: '/api/artists', description: 'Route to index all Artists'},
      {method: 'GET', path: '/api/artists/:id', description: 'Route to show an Artist'},
      {method: 'POST', path: '/api/artists', description: 'Route to create an Artist'},
      {method: 'PUT', path: '/api/artists/:id', description: 'Route to update an Artist'},
      {method: 'DELETE', path: '/api/artists/:id', description: 'Route to destory an Artist'},
      {method: 'GET', path: '/api/artists/:artist_id/pieces', description: 'Route to read all pieces for an artist'},
      {method: 'GET', path: '/api/artists/:artist_id/pieces/:piece_id', description: 'Route to read one piece for an artist'},
      {method: 'POST', path: '/api/artists/:artist_id/pieces', description: 'Route to create a new piece for an artist'}
    ]
  });
}

// export public methods here
module.exports = {
  index: index
};
