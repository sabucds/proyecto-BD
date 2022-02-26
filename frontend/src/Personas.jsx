import React from "react";
import CreateCarro from "./CreateCarro";
import Persona from "./Persona";
import "./Personas.css";

class Personas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.datos,
      displayForm: false,
    };
    this.childToParent = props.childToParent;
    this.childToParentDelete = props.childToParentDelete;
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
          data.active && (
            <li key={data.id}>
              <div className="personBox">
                <Persona nombre={data.nombre} apellido={data.apellido} id={data.id}></Persona>
                &nbsp; &nbsp;
                <button onClick={() => this.childToParent(data)}>
                  Modificar
                </button>
                &nbsp; &nbsp;
                <button onClick={() => this.childToParentDelete(data)}>
                  Eliminar
                </button>
                &nbsp; &nbsp;
                <button onClick={() => this.setState((state) => {return {displayForm: !state.displayForm}})}>
                  Registrar carro
                </button>
                {this.state.displayForm && <CreateCarro id={data.id}/>}
              </div>
            </li>
          ) 
        )}
      </div>
    );
  }
}

export default Personas;
