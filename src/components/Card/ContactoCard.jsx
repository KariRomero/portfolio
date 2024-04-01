import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MailButton from "../Buttons/MailButton";

const ContactoCard=({ refContacto, selectedLanguage })=>{
    return(
        <section className="mx-38 py-12 sm:mx-20 dark:text-white" ref={refContacto}>
            <div>
                {
                    selectedLanguage === 'Es' ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 items-center py-12 sm:py-0 ">
                            <div className="relative font-bold order-2">
                                <div className="text-center text-6xl xl:text-8xl font-bold text-green">CONTACTO</div>
                                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl">Contacto</h1>
                            </div>
                        <div className="order-1">                       
                            <p className="text-base leading-relaxed text-center hover:text-blue hover:font-bold">
                                Escribime, me encantaría que trabajemos juntos! <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#5b88a5",}} />
                            </p>   
                            <MailButton selectedLanguage={selectedLanguage}/>                                        
                        </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 items-center py-12 sm:py-0 ">
                            <div className="relative font-bold order-2">
                                <div className="text-center text-6xl xl:text-8xl font-bold text-green">CONTACTO</div>
                                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl">Contacto</h1>
                            </div>
                        <div className="order-1">                       
                            <p className="text-base leading-relaxed text-center hover:text-blue hover:font-bold">
                                Let's get in touch, I would like to know about your works! <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#5b88a5",}} />
                            </p>   
                            <MailButton selectedLanguage={selectedLanguage}/>                                        
                        </div>
                        </div>
                    )
                }
            </div>
        </section>
        // <section className="pb-20" ref={refContacto}>
        //     {
        //         selectedLanguage === 'Es' ? (
        //             <div>
        //                 <p className="text-base leading-relaxed text-center hover:text-blue hover:font-bold">
        //                 Escribime, me encantaría que trabajemos juntos! <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#5b88a5",}} />
        //                 </p>
        //                 {/* <MailButton/> */}
        //             </div>
        //         ): (
        //             <div>
        //                 <p className="text-base leading-relaxed text-center hover:text-blue hover:font-bold">
        //                 Let's get in touch, I would like to know about your works! <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#5b88a5",}} />
        //                 </p>
        //                 {/* <MailButton selectedLanguage={selectedLanguage}/> */}
        //             </div>
        //         )
        //     }
            
            
        // </section>
    )
};

export default ContactoCard;