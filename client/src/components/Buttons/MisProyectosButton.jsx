import { Link, useLocation } from "react-router-dom";

const MisProyectosButton =()=>{
    const location=useLocation();
    return(
        <Link className={`text-black ${
            location.pathname === '/proyectos' ? 'text-blue' : ''
        }`} to='/proyectos'>
        <button className="bg-withe font-medium rounded-lg text-base tracking-widest px-5 py-2.5 me-2 mb-4 mt-4">
            PROYECTOS
        </button>
        </Link>
        
    )
};

export default MisProyectosButton;