import ProyectosCards from "../Cards/ProyectosCards";

const Proyectos=({ref})=>{
    return(
        <div className="mt-16">
            <ProyectosCards ref={ref}/>
        </div>
    )
};

export default Proyectos;