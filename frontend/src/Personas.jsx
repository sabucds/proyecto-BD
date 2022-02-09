import React from "react";
import Persona from "./Persona";
import "./Personas.css";
class Personas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.datos,
    };
    this.childToParent = props.childToParent;
    this.depuracionData = this.depuracionData.bind(this);
  }

  componentDidMount() {}

  depuracionData() {
    this.state.data = (persona) => {
      console.log(persona);
    };
  }

  render() {
    const { datos } = this.state;
    return (
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {datos.map((data) =>
          data.active ? (
            <div className="personBox">
              <Persona nombre={data.nombre} apellido={data.apellido}></Persona>

              <div onClick={() => this.childToParent(data)}>
                &nbsp; Modificar
              </div>
            </div>
          ) : (
            <div></div>
          )
        )}
      </div>
    );
  }
}

export default Personas;
