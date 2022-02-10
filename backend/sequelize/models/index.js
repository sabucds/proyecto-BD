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
//Relaciones entre modelos
models.carro.belongsTo(models.persona, {
    name: 'owner',
    field: 'id',
})
models.persona.hasMany(models.carro, {
  name: 'cars',
  field: 'id',
})

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
