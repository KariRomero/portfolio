import { Link, useLocation } from "react-router-dom";

const ContactoButton =()=>{
    const location=useLocation();
    return(

        <Link className={`text-black ${
            location.pathname === '/contacto' ? 'text-blue' : ''
        }`} to='/contacto'>
        <button className="bg-white font-medium text-base tracking-widest px-5 py-2.5 me-2 mb-4 mt-4">
            CONTACTO
        </button>
        </Link>
        
    )
};

export default ContactoButton;