import ProyectoCard from "../Card/ProyectoCard";

const ProyectosCards =()=>{

    const proyectos=[
        {id:1,
        image:'https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp?w=1450&h=967',
        title:'Gatos',
        description:'Breve descripción del proyecto'
        },
        {id:2,
         image:'https://fielpet.com.ar/blog/content/images/size/w2000/2021/02/Hisotoria-de-los-gatos.jpg',
         title:'Gatos 2',
         description:'Breve descripción del proyecto'         
        },
    ];

    return(
        <section className="pb-40">
            <h1 className="tracking-widest mb-6 font-semibold">MIS PROYECTOS</h1>

            <div className="flex justify-between h-96">
            {
                proyectos && proyectos.map((p)=>(
                    <ProyectoCard
                    key={p.id}
                    image={p.image}
                    title={p.title}
                    description={p.description}
                    />
                ))
            }
            </div>            

        </section>
    )
};

export default ProyectosCards;