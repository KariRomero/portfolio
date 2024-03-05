const ContactoButton =({ handleClickContacto,isSelected, selectedLanguage })=>{
    return(        
        <button 
        onClick={handleClickContacto} 
        className={`bg-white font-medium text-base tracking-widest px-5 py-2.5 me-2 mb-4 mt-4 ${
            isSelected ? 'text-blue' : ''
        }`}>
            { selectedLanguage === 'Es' ? 'CONTACTO' : 'CONTACT'}
        </button>      
        
    )
};

export default ContactoButton;