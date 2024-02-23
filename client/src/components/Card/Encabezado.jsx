import Avatar from "./Avatar";
import DescargaCv from "../Buttons/DescargaCv";

const Encabezado = () => {
    return (
        <section className="flex justify-between items-center">
            <div className="flex items-center">
                <Avatar />
                <div className="ml-4">
                    <h1 className="text-2xl font-bold text-left">Hola soy Kari! Bienvenidos a mi portfolio.</h1>
                    <p className="text-base leading-relaxed text-left">Aquí podrás adentrarte en el mundo del desarrollo web a través de los ojos de un <strong className="text-blue">Front End Junior.</strong></p>
                    <p className="text-base leading-relaxed text-left">Te invito a explorar mi portfolio y descubrir cómo mi pasión por el desarrollo web se traduce en proyectos creativos y funcionales. 
                    ¡Gracias por unirte a esta aventura!</p>
                    <DescargaCv />
                </div>
            </div>    
        </section>
    )
};

export default Encabezado;
