const resolvers = {
  Query: {
    async getPersonas(root, args, { models }) {
      return await models.persona.findAll({include: ["carros"]});
    },
    async getPersona(root, args, { models }) {
      return await models.persona.findByPk(args.id);
    },
  },
  Mutation: {
    async createPersona(root, { nombre, apellido, active }, { models }) {
      return await models.persona.create({ nombre, apellido, active });
    },
    async createCarro(root, { marca, modelo, color, placa, active, duenoId }, { models }) {
      return await models.carro.create({ marca, modelo, color, placa, active, duenoId });
    },
    async updatePersona(root, { id, nombre, apellido, active }, { models }) {
      await models.persona.update(
        { id, nombre, apellido, active },
        {
          where: {
            id: id,
          },
        }
      );
      return await models.persona.findByPk(id);
    },
    async updateCarro(root, { id, marca, modelo, color, placa, active }, { models }){
      await models.carro.update(
        { id, marca, modelo, color, placa, active },
        {
          where:{
            id:id,
          }
        },
      );
      return await models.carro.findByPk(id);
    }
  },
};

module.exports = resolvers;
