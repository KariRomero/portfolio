import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

const DescargaCv=()=>{
    return(
        <button className="text-black font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-4 mt-10 transition ease-in-out delay-150 bg-green hover:-translate-y-1 hover:scale-110 hover:bg-beige duration-300">
            <a href='src/assets/CV-RomeroKarina.pdf' download='Cv-RomeroKarina'>
            Descarga mi Cv <FontAwesomeIcon icon={faCircleDown} size="lg" style={{color: "#5b88a5",}} />
            </a>            
        </button>
    )
};

export default DescargaCv;


