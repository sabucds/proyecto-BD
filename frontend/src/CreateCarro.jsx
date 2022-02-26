import React, { Component } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useState } from "react";

function CreateCarro(props) {
    const [Carro, setCarro] = useState({
      marca: "",
      modelo: "",
      color: "",
      placa: "",
      duenoId: 0,
    });
    
  
    const AGREGAR_CARRO = gql`
      mutation ($marca: String!, $modelo: String!, $color: String!, $placa: String!, $active: Boolean!, $duenoId: Int!) {
      createCarro(marca: $marca, modelo: $modelo, color: $color, placa: $placa, active: $active, duenoId: $duenoId) {
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
  
    const [creCarro, { loading, error, data }] = useMutation(AGREGAR_CARRO);
  
    const actualizarDatos = (event) => {
      setCarro({
        ...Carro,
        [event.target.name]: event.target.value, //????
      });
    };
  
    if (loading) return <p>Cargando</p>;
    if (error) {
      console.log("CreateCarro error.");
      console.log(error);
      return <p>Error</p>
    };
    return (
      <div>
        <form className="col-start-2 col-end-8">
          <a className="text-gris">Marca:</a>
          <input
            type="text"
            name="marca"
            value={Carro.marca}
            onChange={actualizarDatos}
            className="w-24 mb-1 mt-1 ml-2"
          ></input>
          <div></div>
  
          <a className="text-gris">Modelo:</a>
          <input
            type="text"
            name="modelo"
            value={Carro.modelo}
            onChange={actualizarDatos}
            className="w-24 mb-1 mt-1 ml-2"
          ></input>
          <div></div>

          <a className="text-gris">Color:</a>
          <input
            type="text"
            name="color"
            value={Carro.color}
            onChange={actualizarDatos}
            className="w-24 mb-1 mt-1 ml-2"
          ></input>
          <div></div>

          <a className="text-gris">Placa:</a>
          <input
            type="text"
            name="placa"
            value={Carro.placa}
            onChange={actualizarDatos}
            className="w-24 mb-1 mt-1 ml-2"
          ></input>
          <div></div>


          <button
            className="text-gray-200 my-3 
                          rounded-lg font-normal
                          w-20 bg-pink-600"
            onClick={(e) => {
              creCarro({
                variables: {
                  marca: Carro.marca,
                  modelo: Carro.modelo,
                  color: Carro.color,
                  placa: Carro.placa,
                  active: true,
                  duenoId: props.id,
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
  
  export default CreateCarro;
  