const Sequelize = require("sequelize");

const sequelize = new Sequelize("clase_4", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

/* crea una tabla */
class Cars extends Sequelize.Model {}
Cars.init(
  {
    movieName: Sequelize.STRING,
    director: Sequelize.STRING,
    year: Sequelize.STRING,
  },
  { sequelize, modelName: "movies" }
); /*define nombre de la tabla */

const Model = Sequelize.Model;
class User extends Model {}
User.init(
  {
    movieName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    director: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    modelName: "movies",
  }
);

//elimina usuario con id =1 (se espera que se elimine star wars 1)
User.destroy({
  where: {
    id: 1,
  },
}).then(() => {
  console.log("Elimine Registro");
});
