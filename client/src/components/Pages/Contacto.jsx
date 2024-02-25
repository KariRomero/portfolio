import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MailButton from "../Buttons/MailButton";

const Contacto = ({ refContacto })=>{
    return(
        <section className="pb-20 mt-16" ref={refContacto}>
            <p className="text-base leading-relaxed text-center hover:text-blue hover:font-bold">
            Escribime, me encantaría que trabajemos juntos! <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#5b88a5",}} />
            </p>
            <MailButton/>
            
        </section>
    )
};

export default Contacto;