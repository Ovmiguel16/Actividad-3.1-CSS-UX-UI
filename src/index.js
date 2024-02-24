const express = require('express');
const cors = require('cors');
const app = express();
require('./configDB/mongoConfig');


const sorteoRutas = require('./route/usuarioRutas');

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use('/api', sorteoRutas);


app.listen(3000, () => console.log(`Server corriendo en el puerto 3000`)); 