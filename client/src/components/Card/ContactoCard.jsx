import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MailButton from "../Buttons/MailButton";

const ContactoCard=({ refContacto, selectedLanguage })=>{
    return(
        <section className="pb-20" ref={refContacto}>
            {
                selectedLanguage === 'Es' ? (
                    <div>
                        <p className="text-base leading-relaxed text-center hover:text-blue hover:font-bold">
                        Escribime, me encantaría que trabajemos juntos! <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#5b88a5",}} />
                        </p>
                        <MailButton/>
                    </div>
                ): (
                    <div>
                        <p className="text-base leading-relaxed text-center hover:text-blue hover:font-bold">
                        Let's get in touch, I would like to know about your works! <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#5b88a5",}} />
                        </p>
                        <MailButton selectedLanguage={selectedLanguage}/>
                    </div>
                )
            }
            
            
        </section>
    )
};

export default ContactoCard;