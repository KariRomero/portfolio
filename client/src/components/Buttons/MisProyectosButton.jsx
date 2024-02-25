import React from "react";
import { Link, useLocation } from "react-router-dom";

const MisProyectosButton =({handleClickProyectos})=>{
    const location=useLocation();    

    return(
        
        <button  onClick={handleClickProyectos} className="bg-white font-medium rounded-lg text-base tracking-widest px-5 py-2.5 me-2 mb-4 mt-4">
            PROYECTOS
        </button>
        
    )
};

export default MisProyectosButton;