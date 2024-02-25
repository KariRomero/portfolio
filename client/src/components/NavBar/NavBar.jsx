import InicioButton from "../Buttons/InicioButton";
import MisProyectosButton from "../Buttons/MisProyectosButton";
import SobreMiButton from "../Buttons/SobreMiButton";
import ContactoButton from "../Buttons/ContactoButton";

const NavBar =({ handleClickInicio,handleClickProyectos,handleClickSobreMi,handleClickContacto })=>{
    return(
        <div className="fixed top-0 left-0 w-full bg-white shadow-md" >
            <InicioButton handleClickInicio={handleClickInicio}/>
            <MisProyectosButton handleClickProyectos={handleClickProyectos}/>
            <SobreMiButton handleClickSobreMi={handleClickSobreMi} />
            <ContactoButton handleClickContacto={handleClickContacto} />            
        </div>
    )
};

export default NavBar;