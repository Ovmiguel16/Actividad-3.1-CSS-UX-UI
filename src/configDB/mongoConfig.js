const { connect } = require('mongoose');

const options = {
   useNewUrlParser: true,
}
// CONEXION AUTOMATICA A LA BASE DE DATOS.
module.exports = ( async() => {
   try {
      const URI = 'mongodb+srv://miguel:actividad@cluster0.vim6yta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
      await connect(URI, options);
      console.log('Base de datos conectada');
   } catch (error) {
        console.log('Mongo error connection: ', error.message);
   }
})();

