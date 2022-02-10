import React from "react";

class Persona extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.props.nombre,
      apellido: this.props.apellido,
      nacionalidad: this.props.nacionalidad,
      ci: this.props.ci,
    };
  }

  render() {
    const nombre = this.state.nombre;
    const apellido = this.state.apellido;
    const nombre_completo = nombre + " " + apellido + " ";
    const nacionalidad = this.state.nacionalidad;
    const ci = this.state.ci;

    return <div style="border: 1px solid black">
      <div>{nombre_completo}</div>
      <div>{nacionalidad}</div>
      <div>{ci}</div>
    </div>;
  }
}

export default Persona;
