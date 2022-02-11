const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Persona {
    id: Int!
    nombre: String!
    apellido: String!
    active: Boolean!
  }
  type Carro {
    id: Int!
    marca: String!
    modelo: String!
    color: String!
    placa: String!
    active: Boolean!
    PersonaId: Int!
  }
  type Query {
    getPersonas: [Persona]
    getPersona(id: Int!): Persona
  }
  type Mutation {
    createPersona(
      nombre: String!
      apellido: String!
      active: Boolean!
    ): Persona!
    createCarro(
      marca: String!
      modelo: String!
      color: String!
      placa: String!
      active: Boolean!
      PersonaId: Int!
    ): Carro!
    updatePersona(
      id: Int!
      nombre: String!
      apellido: String!
      active: Boolean!
    ): Persona!
    updateCarro(
      id: Int!
      marca: String!
      modelo: String!
      color: String!
      placa: String!
      active: Boolean!
      PersonaId: Int!
    ): Carro!
  }
`;
module.exports = typeDefs;
