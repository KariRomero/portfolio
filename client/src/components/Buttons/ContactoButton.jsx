import { Link } from "react-router-dom";

const ContactoButton =()=>{
    return(

        <Link to='/contacto'>
        <button className="text-black bg-withe font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-4 mt-4">
            Contacto
        </button>
        </Link>
        
    )
};

export default ContactoButton;