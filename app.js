const express = require('express');
const _ = require('underscore');

var port = process.env.PORT || 3000;
var animals = {
    "cat": "meow",
    "dog": "bark",
    "eel": "hiss",
    "bear": "growl",
    "frog": "croak",
    "lion": "roar"
}

function getAnimal() {
  return animal = _.sample(Object.entries(animals));
}

const app = express();

app.get('/', function(req, res){
  const [animal_name, sound] = getAnimal();
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`George Orwell had a farm.<br />
E-I-E-I-O<br />
And on his farm he had a ${ animal_name }.<br />
E-I-E-I-O<br />
With a ${ sound }-${ sound } here.<br />
And a ${ sound }-${ sound } there.<br />
Here a ${ sound }, there a ${ sound }.<br />
Everywhere a ${ sound }-${ sound }.<br />`);
  res.end();
});

// Ruta API necesaria para que pasen los tests 3 y 4
app.get('/api', function(req, res){
  res.status(200).json(animals);
});

app.listen(port, '0.0.0.0', function() {
  console.log('Listening on port ' + port);
});

module.exports = app;

