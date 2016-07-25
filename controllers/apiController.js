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
      {method: 'PUT', path: '/api/pieces/:id', description: 'Route to update an Artist'},
      {method: 'DELETE', path: '/api/pieces/:id', description: 'Route to destory an Artist'}
    ]
  });
}

// export public methods here
module.exports = {
  index: index
};
