import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const ProyectoCard = ({image, title, description})=>{
    return(
                
        <div className="w-1/2 h-full rounded-lg shadow-lg text-left mx-6 overflow-hidden bg-white">        
            <img className="rounded-t-lg w-full h-3/4 transition duration-300 ease-in-out hover:scale-110" src={image} alt={title} />

            <a href="">
            <FontAwesomeIcon icon={faGlobe} size="lg" style={{color: "#5b88a5",}} className="px-2 mt-2"/>
            </a>
            
            <a href="">
            <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#5b88a5",}} className="px-2 mt-2"/>
            </a>
            

        <div className="my-2 h-1/4 ml-4">            
            <h5 className="text-xl font-bold tracking-wide">
            {title}
            </h5>
            <p className="text-sm">{description}</p>
            
                        
            
            
            
        </div>

        </div>

    )
};

export default ProyectoCard;