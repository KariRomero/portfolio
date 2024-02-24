import Encabezado from "../Card/Encabezado";
import ProyectosCards from "../Cards/ProyectosCards";
import SobreMi from "./SobreMi";
import Contacto from "./Contacto";

const Inicio =()=>{
    return(
        <div className="mx-36">
            <Encabezado/>                      
            <ProyectosCards/>
            <SobreMi/>
            <Contacto/>
            
        </div>
    )
}

export default Inicio;