import DescargaCv from "../Buttons/DescargaCv";
import Avatar3 from '../../assets/AvatarMaker3.png';
import './Avatar.css';

const Encabezado = ({ refInicio, selectedLanguage }) => {
    return (
        <section className="w-full pt-27 mt-2 dark:text-white" ref={refInicio}>
            <div className="sm:h-[600px] grid grid-cols-1 gap-6 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0">
                <div>
                    <img alt='mi avatar' src={Avatar3} className='w-full md:max-w-md mx-auto rounded-full bg-beige shadow-xl hover-spin'/>
                </div>
                {
                    selectedLanguage === 'Es' ? (
                        <div>                    
                            <p className="text-left">Hola</p>
                            <h1 className="text-2xl font-bold text-left">Soy Kari</h1>
                            <h2 className="text-xl font-bold text-left">Bienvenidos a mi portfolio.</h2>
                            <p className="text-base leading-relaxed text-left">Aquí podrás adentrarte en el mundo del desarrollo web a través de los ojos de un <strong className="text-blue">Front End Junior.</strong></p>
                            <p className="text-base leading-relaxed text-left">Te invito a explorar mi portfolio y descubrir cómo mi pasión por el desarrollo web se traduce en proyectos creativos y funcionales. 
                            ¡Gracias por unirte a esta aventura!</p>     
                            <DescargaCv selectedLanguage={selectedLanguage}/>                                                               
                        </div>
                    ):(
                        <div>                    
                        <p className="text-left">Hello</p>
                        <h1 className="text-2xl font-bold text-left">I'm Kari</h1>
                        <h2 className="text-xl font-bold text-left">Welcome to my portfolio.</h2>
                        <p className="text-base leading-relaxed text-left">Here you could see the world of web development through a <strong className="text-blue">Front End Junior</strong> eyes.</p>
                        <p className="text-base leading-relaxed text-left">I invite you to explore my portfolio so you can discover how I traduce my pation to creative and functional proyects. 
                        ¡Thank you for join this adventure!</p>     
                        <DescargaCv selectedLanguage={selectedLanguage}/>                                                               
                    </div>

                    )
                }
            </div>
        </section>      
    )
};

export default Encabezado;
