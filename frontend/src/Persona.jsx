import React from "react";
import Carros from "./Carros";

class Persona extends React.Component 
  {
    constructor(props) {
      super(props);
      this.state = {
        nombre: this.props.nombre,
        apellido: this.props.apellido,
        id: this.props.id,
      };
    }

    render() 
      {
        const nombre = this.state.nombre;
        const apellido = this.state.apellido;
        const nombre_completo = nombre + " " + apellido + " ";
        const duenoId = this.state.id;
        return (
          <div>
            <div>{nombre_completo}</div>
            <Carros duenoId={duenoId} />
          </div>
        )
      }
  }

export default Persona;
