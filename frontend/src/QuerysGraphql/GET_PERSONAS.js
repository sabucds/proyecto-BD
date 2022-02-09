import { gql } from "@apollo/client";

export const GET_PERSONAS = gql`
  query getPersonas {
    getPersonas {
      id
      nombre
      apellido
      active
    }
  }
`;
