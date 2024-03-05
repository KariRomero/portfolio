import InicioButton from "../Buttons/InicioButton";
import MisProyectosButton from "../Buttons/MisProyectosButton";
import SobreMiButton from "../Buttons/SobreMiButton";
import ContactoButton from "../Buttons/ContactoButton";
import Lenguajes from "../Buttons/Lenguajes";

const NavBar = ({ handleClickInicio, handleClickProyectos, handleClickSobreMi, handleClickContacto, handleClickEs, handleClickEn, selected, selectedLanguage }) => {    
    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-center">
            <InicioButton handleClickInicio={handleClickInicio} isSelected={selected === 'inicio'} selectedLanguage={selectedLanguage}/>
            <MisProyectosButton handleClickProyectos={handleClickProyectos} isSelected={selected === 'proyectos'} selectedLanguage={selectedLanguage}/>
            <SobreMiButton handleClickSobreMi={handleClickSobreMi} isSelected={selected === 'sobreMi'} selectedLanguage={selectedLanguage}/>
            <ContactoButton handleClickContacto={handleClickContacto} isSelected={selected === 'contacto'} selectedLanguage={selectedLanguage}/>
            <Lenguajes handleClickEn={handleClickEn} handleClickEs={handleClickEs} selected={selectedLanguage}/>            
        </div>
    )
};

export default NavBar;
