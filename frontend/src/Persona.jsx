import React from "react";

class Persona extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.props.nombre,
      apellido: this.props.apellido,
      carros: this.props.carros,
    };
  }

  render() {
    const nombre = this.state.nombre;
    const apellido = this.state.apellido;
    const nombre_completo = nombre + " " + apellido + " ";
    const cars = this.state.carros;

    return (
    <div>
      <div>{nombre_completo}</div>
      <div className="carros-info">
          
          {
          cars.length === 0 ? 
            null : (cars.map((data) => {
              data.active ? (
                <div className="carBox">
                  <div className="carro">
                    <pre>
                      Marca: {data.marca} 
                      Modelo: {data.modelo} 
                      Color: {data.color} 
                      Placa: {data.placa}
                    </pre>
                  </div>
                  <br />
                  <button onClick={() => this.modifyCar(data)}>
                    Modificar
                  </button>
                  &nbsp; &nbsp;
                  <button onClick={() => this.deleteCar(data)}>
                    Eliminar
                  </button>
                </div>) : null}}
          
  

      </div>
    </div>

export default Persona;
