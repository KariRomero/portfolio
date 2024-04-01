import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer =()=>{
    return(   
        <div className="absolute inset-x-0 overflow-hidden py-2">
            <div className="flex justify-center">
                <div className='ml-4'>
                    <a href='https://github.com/KariRomero' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} beatFade size="2xl" style={{color: "#76ABAE",}}/>
                    </a>            
                </div>

                <div className='ml-4'>
                    <a href='https://www.linkedin.com/in/karinaromero-fullstack/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} beatFade size="2xl" style={{color: "#76ABAE",}} />
                    </a>                        
                </div>
            </div>            
        </div>
    )
};

export default Footer;