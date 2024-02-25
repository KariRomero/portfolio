import InicioButton from "../Buttons/InicioButton";
import MisProyectosButton from "../Buttons/MisProyectosButton";
import SobreMiButton from "../Buttons/SobreMiButton";
import ContactoButton from "../Buttons/ContactoButton";

const NavBar =({ handleClickInicio,handleClickProyectos,handleClickSobreMi,handleClickContacto, selected })=>{    
    return(
        <div className="fixed top-0 left-0 w-full bg-white shadow-md" >
            <InicioButton handleClickInicio={handleClickInicio} isSelected={selected==='inicio'} />
            <MisProyectosButton handleClickProyectos={handleClickProyectos} isSelected={selected==='proyectos'} />
            <SobreMiButton handleClickSobreMi={handleClickSobreMi} isSelected={selected==='sobreMi'} />
            <ContactoButton handleClickContacto={handleClickContacto} isSelected={selected==='contacto'} />            
        </div>
    )
};

export default NavBar;