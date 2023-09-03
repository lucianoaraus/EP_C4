const Sequelize = require("sequelize");

const sequelize = new Sequelize("prueba", "root", "root", {
  host: "localhost",
  dialect: "mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

class Items extends Sequelize.Model {}
Items.init(
  {
    itemId: Sequelize.INTEGER,
    nombre: Sequelize.STRING,
    cantidad: Sequelize.INTEGER,
  },
  { sequelize, modelName: "ejer1" }
);

sequelize
  .sync()
  .then(() =>
    Items.create({
      itemId: "1",
      nombre: "heladera",
      cantidad: "125",
    })
  )
  .then((jane) => {
    console.log(jane.toJSON());
  })
  .then(() => {
    Items.destroy({
      where: {
        itemId: "1",
      },
    });
  })
  .then(() => {
    console.log("Elimine el registro insertado");
  });
