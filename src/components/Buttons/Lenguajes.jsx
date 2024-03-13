import Español from "./Español";
import English from "./English";

const Lenguajes=({ handleClickEn, handleClickEs, selected})=>{
    return(
        <div className="my-8">
            <English handleClickEn={handleClickEn} isSelected={selected === 'En'}/>
            <Español handleClickEs={handleClickEs} isSelected={selected === 'Es'}/>
        </div>
    )
};

export default Lenguajes;