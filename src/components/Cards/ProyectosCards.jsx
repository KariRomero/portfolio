import ProyectoCard from "../Card/ProyectoCard";
import proyectos from "../Card/ProjectsEs";
import projects from "../Card/Projects";

const ProyectosCards =({ refProyectos, selectedLanguage })=>{    

    return(
        <section>
            <div className="pt-32 " ref={refProyectos}>

                {
                    selectedLanguage === 'Es' ? (
                    <div className="relative font-bold mb-12">
                    <div className="text-center text-6xl xl:text-8xl text-green">PROYECTOS</div>
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl dark:text-white">Mis proyectos</h1>
                </div>
                    ) : (
                        <div className="relative font-bold mb-12">
                                <div className="text-center text-6xl xl:text-8xl text-green">WORK</div>
                                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl dark:text-white">My work</h1>
                            </div>

                    )
                }                
             

            <div className="grid grid-cols-1 sm:grid-cols-2" >
            {   
                selectedLanguage === 'Es' ? (
                    proyectos && proyectos.map((p)=>(
                        <ProyectoCard
                        key={p.id}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        gitHub={p.gitHub}
                        deploy={p.deploy}
                        selectedLanguage={selectedLanguage}
                        />
                    ))
                ) : (
                    projects && projects.map((p)=>(
                        <ProyectoCard
                        key={p.id}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        gitHub={p.gitHub}
                        deploy={p.deploy}
                        selectedLanguage={selectedLanguage}
                        />
                    ))
                )
                
            }
            </div>  
            </div>          

        </section>
    )
};

export default ProyectosCards;