const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Persona {
    id: Int!
    nombre: String!
    apellido: String!
    nacionalidad: String!
    ci: Int!
    active: Boolean!
  }
  type Query {
    getPersonas: [Persona]
    getPersona(id: Int!): Persona
  }
  type Mutation {
    createPersona(
      nombre: String!
      apellido: String!
      nacionalidad: String!
      ci: Int!
      active: Boolean!
    ): Persona!
    
    updatePersona(
      id: Int!
      nombre: String!
      apellido: String!
      nacionalidad: String!
      ci: Int!
      active: Boolean!
    ): Persona!
  }
`;
module.exports = typeDefs;
