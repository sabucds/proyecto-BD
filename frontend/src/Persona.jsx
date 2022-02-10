import React from "react";

class Persona extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.props.nombre,
      apellido: this.props.apellido,
    };
  }

  render() {
    const nombre = this.state.nombre;
    const apellido = this.state.apellido;
    const nombre_completo = nombre + " " + apellido + " ";

    return <div>
      <div>{nombre_completo}</div>
    </div>;
  }
}

export default Persona;
