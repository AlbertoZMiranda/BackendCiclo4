const mongoose = require('mongoose');

// Cadena de conexion
// si la encuentra, usala, sino que se valla a otra base de dato
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/db_test';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexion a la base de datos con éxito!!!')
});

module.exports = connection;
