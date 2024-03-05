const InicioButton =({ handleClickInicio,isSelected,selectedLanguage })=>{
    return(        
        <button 
        onClick={handleClickInicio} 
        className={`bg-white font-medium text-base tracking-widest px-5 py-2.5 me-2 mb-4 mt-4 ${
            isSelected ? 'text-blue' : ''
        }`}>
             {selectedLanguage === 'Es' ? 'INICIO' : 'HOME'}
        </button>
            
        
    )
};

export default InicioButton;