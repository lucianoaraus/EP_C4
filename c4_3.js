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

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  movieName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  director: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'movies'
});


/* crea peliculas*/
sequelize.sync()
  .then(() => Cars.create({
    movieName: 'Star Wars II',
    director: 'George Lucas',
    year: '2002'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

sequelize.sync()
.then(() => Cars.create({
  movieName: 'Star Wars III',
  director: 'George Lucas',
  year: '2005'
}))
.then(jane => {
  console.log(jane.toJSON());
});

sequelize.sync()
.then(() => Cars.create({
  movieName: 'Blade Runner 2049',
  director: 'Ridley Scott',
  year: '2017'
}))
.then(jane => {
  console.log(jane.toJSON());
});

sequelize.sync()
.then(() => Cars.create({
  movieName: 'Blade Runner',
  director: 'Ridley Scott',
  year: '1982'
}))
.then(jane => {
  console.log(jane.toJSON());
});

//actualiza registro
User.update({ movieName: 'Star Wars I', director: 'Jorge Lucas'}, {
  where: {
    director: 'Paul Thomas Anderson'
  }
}).then(() => {
  console.log("Done");
});

User.update({ director: 'George Lucas' }, {
  where: {
    director: 'Jorge Lucas'
  }
}).then(() => {
  console.log("Done");
});

