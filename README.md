#Streetsmart
A full-stack single-page app featuring street art across San Francisco. Contains a homebrewed personal API with RESTful routes and easy CRUD capabilities.

Heroku link to project : <https://hidden-citadel-79874.herokuapp.com/>

### Technologies Used
* JavaScript
* jQuery
* AJAX, Express
* Mongoose/MongoDB
* HandlebarsJS
* HTML/CSS: app architecture, modals, styling
* Bootstrap: grid system, responsive styling, buttons
* Google font: 'Permanent Marker', cursive

### Existing Features
+ list of REST routes can be found '/api'
+ Used Mongoose to create database of artist Models and pieces of art Models using reference relationship
+ Many event listeners to handle button clicks and AJAX requests
+ Made use of forms and POSTS to add new features to database
+ Lots of Handlebars templating to render new data to the page
+ Kept app to single page using modals
+ List of images can be found in the public/images folder

#### Planned Features
- Google Maps API to show location of art pieces around San Francisco
- Auth admin to handle Update and Delete
- Full CRUD for both databases
- Cleaner, more professional styling
- More complete database of art pieces
- Default Unknown artist state

### Screenshots

![Gallery:](http://i.imgur.com/z683T9C.png "Gallery")
![Single Piece:](http://i.imgur.com/BaKeqqu.png "Single Piece Modal")
![Artists:](http://i.imgur.com/M6ajuFr.png "Artists")
![Artist pieces:](http://i.imgur.com/fhdHbL9.png "Artist Pieces")
