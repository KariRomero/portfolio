const MisProyectosButton =({handleClickProyectos,isSelected, selectedLanguage})=>{
    return(        
        <button  
        onClick={handleClickProyectos} 
        className={`bg-white font-medium text-base tracking-widest px-5 py-2.5 me-2 mb-4 mt-4 ${
            isSelected ? 'text-blue' : ''
        }`}>
             {selectedLanguage === 'Es' ? 'PROYECTOS' : 'MY PROJECTS'}
        </button>        
    )
};

export default MisProyectosButton;