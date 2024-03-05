import Avatar from "./Avatar";
import DescargaCv from "../Buttons/DescargaCv";

const Encabezado = ({ refInicio, selectedLanguage }) => {
    return (
        <section className="flex justify-between items-center pt-32" ref={refInicio}>
            <div className="flex items-center">
                <Avatar />
                {
                    selectedLanguage === 'Es' ? (
                    <div className="ml-4">
                        <h1 className="text-2xl font-bold text-left">Hola soy Kari! Bienvenidos a mi portfolio.</h1>
                        <p className="text-base leading-relaxed text-left">Aquí podrás adentrarte en el mundo del desarrollo web a través de los ojos de un <strong className="text-blue">Front End Junior.</strong></p>
                        <p className="text-base leading-relaxed text-left">Te invito a explorar mi portfolio y descubrir cómo mi pasión por el desarrollo web se traduce en proyectos creativos y funcionales. 
                        ¡Gracias por unirte a esta aventura!</p>
                        <DescargaCv selectedLanguage={selectedLanguage}/>
                    </div>                        
                    ):(
                    <div className="ml-4">
                        <h1 className="text-2xl font-bold text-left">Hi I'm Kari! Welcome to my portfolio.</h1>
                        <p className="text-base leading-relaxed text-left">Here you could see the world of web development through a <strong className="text-blue">Front End Junior</strong> eyes.</p>
                        <p className="text-base leading-relaxed text-left">I invite you to explore my portfolio so you can discover how I traduce my pation to creative and functional proyects. 
                        ¡Thank you for join this adventure!</p>
                        <DescargaCv selectedLanguage={selectedLanguage} />
                    </div>
                    )
                }
            </div>    
        </section>
    )
};

export default Encabezado;
