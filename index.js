const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/mydb'
const Character = require('./models/Character')

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connectionn

const character = new Character({
  name: 'Ryu',
  ultimate: 'Shinku Hadoken',
})

const ken = new Character({
  name: 'Ken',
  ultimate: 'Guren Enjinkyaku',
})

ken.save()

character.save()
  .then(savedCharacter => {
    console.log('Character saved successfully:', savedCharacter);
  })
  .catch(error => {
    console.error('Error saving character:', error);
  });