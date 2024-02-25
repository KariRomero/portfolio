import Encabezado from "../Card/Encabezado";
import ProyectosCards from "../Cards/ProyectosCards";
import SobreMi from "./SobreMi";
import Contacto from "./Contacto";
import TopButton from "../Buttons/topButton";

const Inicio =()=>{
    return(
        <div className="mx-36">
            <Encabezado/>                      
            <ProyectosCards/>
            <SobreMi/>
            <Contacto/>
            <TopButton/>           
            
        </div>
    )
}

export default Inicio;