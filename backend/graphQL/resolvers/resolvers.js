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
    async createPersona(root, { nombre, apellido, nacionalidad, ci, active }, { models }) {
      return await models.persona.create({ nombre, apellido, nacionalidad, ci, active });
    },
    async updatePersona(root, { id, nombre, apellido, nacionalidad, ci, active }, { models }) {
      await models.persona.update(
        { id, nombre, apellido, nacionalidad, ci, active },
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
