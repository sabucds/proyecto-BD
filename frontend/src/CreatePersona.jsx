import React, { Component } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useState } from "react";

function CreatePersona() {
  const [Persona, setPersona] = useState({
    nombre: "",
    apellido: "",
  });

  const AGREGAR_PERSONA = gql`
    mutation ($nombre: String!, $apellido: String!, $active: Boolean!) {
      createPersona(nombre: $nombre, apellido: $apellido, active: $active) {
        id
        nombre
        apellido
        active
      }
    }
  `;

  const [crePersona, { loading, error, data }] = useMutation(AGREGAR_PERSONA);

  const actualizarDatos = (event) => {
    setPersona({
      ...Persona,
      [event.target.name]: event.target.value,
    });
  };

  if (loading) return <p>Cargando</p>;
  if (error) return <p>Error</p>;
  console.log(error);
  return (
    <div>
      <form className="col-start-2 col-end-8">
        <a className="text-gris">Nombre:  </a>
        <input
          type="text"
          name="nombre"
          value={Persona.nombre}
          onChange={actualizarDatos}
          className="w-24 mb-1 mt-1 ml-2"
        ></input>
        <br />

        <a className="text-gris">Apellido:  </a>
        <input
          type="text"
          name="apellido"
          value={Persona.apellido}
          onChange={actualizarDatos}
          className="w-24 mb-1 mt-1 ml-2"
        ></input>
        <br />

        <button
          className="text-gray-200 my-3 
                        rounded-lg font-normal
                        w-20 bg-pink-600"
          onClick={(e) => {
            crePersona({
              variables: {
                nombre: Persona.nombre,
                apellido: Persona.apellido,
                active: true,
              },
            });
          }}
        >
          {" "}
          Guardar{" "}
        </button>
      </form>
    </div>
  );
}

export default CreatePersona;
