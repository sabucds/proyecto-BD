//conexion con base de datos
import Sequelize from "sequelize";

const sequelize = new Sequelize("ejercicioORM", "postgres", "Sabucds11", {
  host: "localhost",
  dialect: "postgres",
});

const models = {
  persona: sequelize.import("./persona.js"),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
