const InicioButton =({ handleClickInicio,isSelected })=>{
    return(        
        <button 
        onClick={handleClickInicio} 
        className={`bg-white font-medium rounded-lg text-base tracking-widest px-5 py-2.5 me-2 mb-4 mt-4 ${
            isSelected ? 'text-blue' : ''
        }`}>
            INICIO
        </button>
            
        
    )
};

export default InicioButton;