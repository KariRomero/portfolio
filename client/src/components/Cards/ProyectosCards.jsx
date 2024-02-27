import ProyectoCard from "../Card/ProyectoCard";
import proyectos from '../Card/Proyectos'

const ProyectosCards =({refProyectos})=>{    

    return(
        <section>
            <div className="pt-32 " ref={refProyectos}></div>
            <h1 className="tracking-widest mb-6 font-semibold">MIS PROYECTOS</h1>

            <div className="flex justify-between h-96" >
            {
                proyectos && proyectos.map((p)=>(
                    <ProyectoCard
                    key={p.id}
                    image={p.image}
                    title={p.title}
                    description={p.description}
                    gitHub={p.gitHub}
                    deploy={p.deploy}
                    />
                ))
            }
            </div>            

        </section>
    )
};

export default ProyectosCards;