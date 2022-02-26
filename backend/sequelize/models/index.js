//conexion con base de datos
import Sequelize from "sequelize";

const sequelize = new Sequelize("ejercicioORM", "postgres", "AYUDA", {
  host: "localhost",
  dialect: "postgres",
});

const models = {
  persona: sequelize.import("./persona.js"),
  carro: sequelize.import("./carro.js"),
};

//Relaciones entre modelos
models.carro.belongsTo(models.persona, {
  as: "dueno",
})
models.persona.hasMany(models.carro, {
  as: "carros",
})

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
