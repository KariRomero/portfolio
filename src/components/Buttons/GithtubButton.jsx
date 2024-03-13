import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const GithubButton=()=>{
    return(
        <div className='ml-4'>
            <a href='https://github.com/KariRomero' target='_blank'>
            <FontAwesomeIcon icon={faGithub} beatFade size="2xl" style={{color: "#5b88a5",}}/>
            </a>            
        </div>
    )
};

export default GithubButton;