import React from "react";
import Encabezado from "../Card/Encabezado";
import ProyectosCards from "../Cards/ProyectosCards";
import ContactoCard from "../Card/ContactoCard";
import SobreMiCard from "../Card/SobreMiCard";
import TopButton from "../Buttons/topButton";

const Inicio = ({ refInicio,refProyectos,refSobreMi,refContacto })=>{
    return(
        <div className="grid grid-cols-1 gap-10 mx-36">
            <Encabezado refInicio={refInicio} />                      
            <ProyectosCards refProyectos={refProyectos} />
            <SobreMiCard refSobreMi={refSobreMi} />
            <ContactoCard refContacto={refContacto} />
            <TopButton/>           
            
        </div>
    )
};

export default Inicio;