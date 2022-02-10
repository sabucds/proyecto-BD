//conexion con base de datos
import Sequelize from "sequelize";

const sequelize = new Sequelize("ejercicioORM", "postgres", "a9455334z", {
  host: "localhost",
  dialect: "postgres",
});

const models = {
  persona: sequelize.import("./persona.js"),
  carro: sequelize.import("./carro.js"),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
