import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import Personas from "./Personas";
import { GET_PERSONAS } from "./QuerysGraphql/GET_PERSONAS";
import UpdatePersona from "./UpdatePersona";
import CreatePersona from "./CreatePersona";
import Popup from "./Popup";

function Inicio(props) {
  const { loading, error, data } = useQuery(GET_PERSONAS);
  const [PersonToModify, setPersonToModify] = useState(false);
  const [DisplayForm, setDisplayForm] = useState(false);

  if (loading) return <p>Cargando</p>;
  if (error) return <p>Error</p>;
  const childToParent = (childdata) => {
    setPersonToModify(childdata);
  };

  return (
    <div>
      <Personas datos={data.getPersonas} childToParent={childToParent} />
      <div>
        <button onClick={() => setDisplayForm(!DisplayForm)}>Agregar</button>
      </div>
      <br /><br />
      {DisplayForm ? <CreatePersona /> : <div></div>}
      <div>
        {PersonToModify ? (
          <Popup content={<UpdatePersona Persona={PersonToModify} />} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Inicio;
