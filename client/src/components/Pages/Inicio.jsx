import React from "react";
import Encabezado from "../Card/Encabezado";
import ProyectosCards from "../Cards/ProyectosCards";
import SobreMi from "./SobreMi";
import Contacto from "./Contacto";
import TopButton from "../Buttons/topButton";

const Inicio = ({ refInicio,refProyectos,refSobreMi,refContacto })=>{
    return(
        <div className="mx-36">
            <Encabezado refInicio={refInicio} />                      
            <ProyectosCards refProyectos={refProyectos} />
            <SobreMi refSobreMi={refSobreMi} />
            <Contacto refContacto={refContacto} />
            <TopButton/>           
            
        </div>
    )
};

export default Inicio;