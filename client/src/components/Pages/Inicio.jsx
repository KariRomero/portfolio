import Encabezado from "../Card/Encabezado";
import ProyectosCards from "../Cards/ProyectosCards";

const Inicio =()=>{
    return(
        <div className="my-32 mx-36">
            <Encabezado/>                      
            <ProyectosCards/>
            
        </div>
    )
}

export default Inicio;