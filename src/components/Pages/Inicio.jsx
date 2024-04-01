import React from "react";
import Encabezado from "../Card/Encabezado";
import ProyectosCards from "../Cards/ProyectosCards";
import ContactoCard from "../Card/ContactoCard";
import SobreMiCard from "../Card/SobreMiCard";
import TopButton from '../Buttons/TopButton';
import Footer from "../Footer/Footer";


const Inicio = ({ refInicio,refProyectos,refSobreMi,refContacto, selectedLanguage })=>{
    return(
        <div className="grid grid-cols-1 gap-10 ">
            <Encabezado refInicio={refInicio} selectedLanguage={selectedLanguage} />                      
            <ProyectosCards refProyectos={refProyectos} selectedLanguage={selectedLanguage} />
            <SobreMiCard refSobreMi={refSobreMi} selectedLanguage={selectedLanguage} />
            <ContactoCard refContacto={refContacto} selectedLanguage={selectedLanguage} />
            <div>
                <Footer/>
            </div>
            <div>
            <TopButton/>

            </div>
                     
            
        </div>
    )
};

export default Inicio;