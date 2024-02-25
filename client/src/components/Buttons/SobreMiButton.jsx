const SobreMiButton =({ handleClickSobreMi,isSelected })=>{    
    return(        
        <button 
        onClick={handleClickSobreMi} 
        className={`bg-white font-medium rounded-lg text-base tracking-widest px-5 py-2.5 me-2 mb-4 mt-4 ${
            isSelected ? 'text-blue' : ''
        }`}>
            SOBRE MI
        </button>    
        
    )
};

export default SobreMiButton;