import GithubButton from "../Buttons/GithtubButton";
import LinkedInButton from "../Buttons/LinkedInButton";

const Footer =()=>{
    return(
        <div className="fixed bottom-0 left-0 w-full bg-white">

            <GithubButton/>
            <LinkedInButton/>

        </div>
    )
};

export default Footer;