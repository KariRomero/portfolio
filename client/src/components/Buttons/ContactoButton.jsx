import { Link, useLocation } from "react-router-dom";

const ContactoButton =({ handleClickContacto })=>{
    const location=useLocation();
    return(

        
        <button onClick={handleClickContacto} className="bg-white font-medium text-base tracking-widest px-5 py-2.5 me-2 mb-4 mt-4">
            CONTACTO
        </button>
        
        
    )
};

export default ContactoButton;