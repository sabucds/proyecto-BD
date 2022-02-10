import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import Personas from "./Personas";
import { GET_PERSONAS } from "./QuerysGraphql/GET_PERSONAS";
import UpdatePersona from "./UpdatePersona";
import CreatePersona from "./CreatePersona";
import Popup from "./Popup";

function Inicio(props) {
  const { loading, error, data } = useQuery(GET_PERSONAS);
  const [PersonToModify, setPersonToModify] = useState(false);
  const [DisplayForm, setDisplayForm] = useState(false);

  const DELETE_PERSONA = gql`
    mutation (
      $updatePersonaId: Int!
      $updatePersonaNombre2: String!
      $updatePersonaApellido2: String!
      $updatePersonaActive2: Boolean!
    ) {
      updatePersona(
        id: $updatePersonaId
        nombre: $updatePersonaNombre2
        apellido: $updatePersonaApellido2
        active: $updatePersonaActive2
      ) {
        id
        nombre
        apellido
        active
      }
    }
  `;

  const [delPersona, { loading1, error1, data1 }] = useMutation(DELETE_PERSONA);

  const childToParent = (childdata) => {
    //comunicacion entre este componente y el VideoFCE.js para saber si video termino
    setPersonToModify(childdata);

    console.log("AAA", childdata);
  };
  const childToParentDelete = (childdata) => {
    //comunicacion entre este componente y el VideoFCE.js para saber si video termino
    console.log("AAA", childdata.id);
    delPersona({
      variables: {
        updatePersonaId: childdata.id,
        updatePersonaNombre2: childdata.nombre,
        updatePersonaApellido2: childdata.apellido,
        updatePersonaActive2: false,
      },
    });
  };

  const togglePopup = () => {
    setPersonToModify(false);
    console.log("AAAAAAA");
  };

  if (loading) return <p>Cargando</p>;
  if (error) return <p>Error</p>;
  if (loading1) return <p>Cargando</p>;
  if (error1) return <p>Error</p>;
  return (
    <div>
      <Personas
        datos={data.getPersonas}
        childToParent={childToParent}
        childToParentDelete={childToParentDelete}
      />
      <div>
        <button onClick={() => setDisplayForm(!DisplayForm)}>Agregar</button>
      </div>
      {DisplayForm ? <CreatePersona /> : <div></div>}
      <div>
        {PersonToModify ? (
          <Popup
            content={
              <UpdatePersona
                Persona={PersonToModify}
                togglePopup={togglePopup}
              />
            }
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Inicio;
