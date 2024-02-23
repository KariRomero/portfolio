import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const LinkedInButton=()=>{
    return(
        <div className='ml-4'>
            <a href='https://www.linkedin.com/in/karinaromero-fullstack/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} beatFade size="2xl" style={{color: "#5b88a5",}} />
            </a>                        
        </div>
    )
};

export default LinkedInButton;