import React from "react";
import "./Personas.css";
import { useQuery, useMutation, gql } from "@apollo/client";

function Carros ({ duenoId }) {
    
    const GET_CARROS = gql`
    query getCarros($duenoId: Int!) {
        getCarros(duenoId: $duenoId) {
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
    const owner = duenoId;
    const { loading, error, data } = useQuery(GET_CARROS, {variables: { owner },});

    if (loading) return <div>Cargando...</div>;
    if (error) {
        console.log(JSON.stringify(error, null, 2));
        return <div>Error</div>
    };
    return (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {
                data.getCarros(owner).map((dato) => 
                    dato.active && (
                        <li key={dato.id}>
                            
                            <div className="personBox">
                                <pre>
                                Marca: {dato.marca} 
                                Modelo: {dato.modelo} 
                                Color: {dato.color} 
                                Placa: {dato.placa}
                                --------------------
                                </pre>
                            </div>

                            &nbsp; &nbsp;
                            <button onClick={() => console.log("modificar")}>
                                Modificar
                            </button>

                            &nbsp; &nbsp;
                            <button onClick={() => console.log("borrar")}>
                                Eliminar
                            </button>
                        
                        </li>
                    )
                )
            }
        </div>
    )

};

export default Carros;