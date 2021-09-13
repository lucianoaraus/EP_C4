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


/* insercion y actualizacion de registro */
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

//actualiza registro
User.update({ movieName: "Star Wars I", director: "Jorge Lucas" }, {
  where: {
    director: 'Cristopher Nolan'
  }
}).then(() => {
  console.log("Done");
});





