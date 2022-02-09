const resolvers = {
  Query: {
    async getPersonas(root, args, { models }) {
      return await models.persona.findAll();
    },
    async getPersona(root, args, { models }) {
      return await models.persona.findByPk(args.id);
    },
  },
  Mutation: {
    async createPersona(root, { nombre, apellido, active }, { models }) {
      return await models.persona.create({ nombre, apellido, active });
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
  },
};

module.exports = resolvers;
