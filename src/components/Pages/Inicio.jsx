import React from "react";
import Encabezado from "../Card/Encabezado";
import ProyectosCards from "../Cards/ProyectosCards";
import ContactoCard from "../Card/ContactoCard";
import SobreMiCard from "../Card/SobreMiCard";
import TopButton from '../Buttons/TopButton';


const Inicio = ({ refInicio,refProyectos,refSobreMi,refContacto, selectedLanguage })=>{
    return(
        <div className="grid grid-cols-1 gap-10 mx-36">
            <Encabezado refInicio={refInicio} selectedLanguage={selectedLanguage} />                      
            <ProyectosCards refProyectos={refProyectos} selectedLanguage={selectedLanguage} />
            <SobreMiCard refSobreMi={refSobreMi} selectedLanguage={selectedLanguage} />
            <ContactoCard refContacto={refContacto} selectedLanguage={selectedLanguage} />
            <TopButton/>
                     
            
        </div>
    )
};

export default Inicio;