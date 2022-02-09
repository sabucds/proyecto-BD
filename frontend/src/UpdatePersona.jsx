import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

function UpdatePersona(props) {
  //Estado proveniente de las props:

  const [Persona, setPersona] = useState({
    id: props.Persona.id,
    nombre: props.Persona.nombre,
    apellido: props.Persona.apellido,
  });
  console.log(Persona);

  const UPDATE_PERSONA = gql`
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

  const [upPersona, { loading, error, data }] = useMutation(UPDATE_PERSONA);

  const actualizarDatos = (event) => {
    setPersona({
      ...Persona,
      [event.target.name]: event.target.value,
    });
  };

  const actualizarEnteros = (event) => {
    setPersona({
      ...Persona,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  if (loading) return <p>Cargando</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <form className="col-start-2 col-end-8">
        <a className="text-gris">Nombre:</a>
        <input
          type="text"
          name="nombre"
          value={Persona.nombre}
          onChange={actualizarDatos}
          className="w-24 mb-1 mt-1 ml-2"
        ></input>
        <div></div>

        <a className="text-gris">Apellido:</a>
        <input
          type="text"
          name="apellido"
          value={Persona.apellido}
          onChange={actualizarDatos}
          className="w-24 mb-1 mt-1 ml-2"
        ></input>
        <div></div>

        <button
          className="text-gray-200 my-3 
                        rounded-lg font-normal
                        w-20 bg-pink-600"
          onClick={(e) => {
            upPersona({
              variables: {
                updatePersonaId: Persona.id,
                updatePersonaNombre2: Persona.nombre,
                updatePersonaApellido2: Persona.apellido,
                updatePersonaActive2: true,
              },
            });
          }}
        >
          {" "}
          Actualizar{" "}
        </button>
      </form>
      )
    </div>
  );
}

export default UpdatePersona;
