import { gql } from "@apollo/client";

export const GET_CARROS = gql`
  query getCarros($duenoId: Int!) {
    getCarros(duenoId: $duenoId) {
      id
      marca
      modelo
      color
      placa
      active
      duenoId
    }
  }
`;
