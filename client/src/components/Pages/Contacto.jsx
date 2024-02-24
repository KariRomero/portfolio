import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contacto = ()=>{

    const handleClick=()=>{

    };

    return(
        <section className="pb-20">
            <p onClick={handleClick} className="text-base leading-relaxed text-center hover:text-blue hover:font-bold">
            Escribime, me encantaría que trabajemos juntos! <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#5b88a5",}} />
            </p>
            
        </section>
    )
};

export default Contacto;