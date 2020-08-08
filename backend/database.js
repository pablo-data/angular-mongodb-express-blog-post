const mongoose = require('mongoose');

//direccion de la base de datos
const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('database is connected'))
    .catch(e => console.error(e));

module.exports = mongoose;