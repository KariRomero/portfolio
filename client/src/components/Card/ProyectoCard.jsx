import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProyectoCard = ({ image, title, description, gitHub, deploy, selectedLanguage })=>{
    return(
                
        <div className="w-1/2 h-full rounded-lg shadow-lg text-left overflow-hidden bg-white mx-1">              
          
            <img className="rounded-t-lg w-full h-3/4 transition duration-300 ease-in-out hover:scale-105" src={image} alt={title} />

            <div className=" h-1/4 transition duration-300 hover:-translate-y-56 bg-white">              

                <div className="my-2  h-64 bg-white">
                    <a href={deploy} target="_blank">
                        <FontAwesomeIcon icon={faGlobe} size="lg" style={{color: "#5b88a5",}} className="px-2 mt-2"/>
                    </a>
                    
                    <a href={gitHub} target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#5b88a5",}} className="px-2 mt-2"/>
                    </a>  

                    <h5 className="text-xl font-bold tracking-wide ml-4 my-3">{title}</h5>
                    <p className="text-sm leading-6 mx-4">{description}</p>       
                </div>

            </div>            

        </div>

    )
};

export default ProyectoCard;