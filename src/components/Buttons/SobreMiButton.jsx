const SobreMiButton =({ handleClickSobreMi,isSelected, selectedLanguage })=>{    
    return(        
        <button 
        onClick={handleClickSobreMi} 
        className={`bg-white font-medium text-base tracking-widest px-5 py-2.5 me-2 mb-4 mt-4 ${
            isSelected ? 'text-blue' : ''
        }`}>
            { selectedLanguage === 'Es'? 'SOBRE MI' : 'ABOUT ME'}
        </button>    
        
    )
};

export default SobreMiButton;