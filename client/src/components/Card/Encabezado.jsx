// import Avatar from "./Avatar";
// import DescargaCv from "../Buttons/DescargaCv";

// const Encabezado=()=>{
//     return(
//         <section className="text-left bg-red-200">
//             <Avatar/>
//             <h1 className="text-2xl font-bold">Hola soy Kari! Bienvenidos a mi portfolio.</h1>            
//             <p className="text-base">Aquí podrás adentrarte en el mundo del desarrollo web a través de los ojos de un Front End Junior.</p>
            
//             <p>Te invito a explorar mi portfolio y descubrir cómo mi pasión por el desarrollo web se traduce en proyectos creativos y funcionales. 
//                 ¡Gracias por unirte a esta aventura!</p>
//             <DescargaCv/>
//         </section>
//     )
// };

// export default Encabezado;
import Avatar from "./Avatar";
import DescargaCv from "../Buttons/DescargaCv";

const Encabezado = () => {
    return (
        <section className="flex justify-between items-center">
            <div className="flex items-center">
                <Avatar />
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">Hola soy Kari! Bienvenidos a mi portfolio.</h1>
                    <p className="text-base">Aquí podrás adentrarte en el mundo del desarrollo web a través de los ojos de un Front End Junior.</p>
                    <p>Te invito a explorar mi portfolio y descubrir cómo mi pasión por el desarrollo web se traduce en proyectos creativos y funcionales. 
                ¡Gracias por unirte a esta aventura!</p>
                <DescargaCv />
                </div>
            </div>    
        </section>
    )
};

export default Encabezado;
