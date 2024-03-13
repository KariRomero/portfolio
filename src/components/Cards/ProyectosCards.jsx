import ProyectoCard from "../Card/ProyectoCard";
import proyectos from "../Card/ProjectsEs";
import projects from "../Card/Projects";

const ProyectosCards =({ refProyectos, selectedLanguage })=>{    

    return(
        <section>
            <div className="pt-32 " ref={refProyectos}></div>
            <h1 className="tracking-widest mb-6 font-semibold">
                {
                    selectedLanguage === 'Es' ? 'MIS PROYECTOS' : 'MY PROJECTS'
                }                
            </h1>

            <div className="flex justify-between h-96" >
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

        </section>
    )
};

export default ProyectosCards;