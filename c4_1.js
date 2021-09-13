const Sequelize = require('sequelize');

const sequelize = new Sequelize('clase_4', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


/* crea una tabla */
class Cars extends Sequelize.Model {} 
Cars.init({
  movieName: Sequelize.STRING,
  director:Sequelize.STRING,
  year:Sequelize.STRING
}, { sequelize, modelName: 'movies' }); /*define nombre de la tabla */


/* crea una pelicula*/
sequelize.sync()
  .then(() => Cars.create({
    movieName: 'Star Wars',
    director: 'Cristopher Nolan',
    year: '1999'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

