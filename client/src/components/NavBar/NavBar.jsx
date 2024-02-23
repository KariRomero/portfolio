import InicioButton from "../Buttons/InicioButton";
import MisProyectosButton from "../Buttons/MisProyectosButton";
import SobreMiButton from "../Buttons/SobreMiButton";
import ContactoButton from "../Buttons/ContactoButton";

const NavBar =()=>{
    return(
        <div className="fixed top-0 left-0 w-full bg-white shadow-md" >
            <InicioButton/>
            <MisProyectosButton/>
            <SobreMiButton/>
            <ContactoButton/>            
        </div>
    )
};

export default NavBar;