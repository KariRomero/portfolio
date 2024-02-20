import { Link } from "react-router-dom";

const MisProyectosButton =()=>{
    return(
        <Link to='/proyectos'>
        <button className="text-black bg-withe font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-4 mt-4">
            Proyectos
        </button>
        </Link>
        
    )
};

export default MisProyectosButton;