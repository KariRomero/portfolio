const English =({ handleClickEn, isSelected })=>{
    return(
        
            <button onClick={handleClickEn} className={`w-6 h-6 rounded-full text-xs text-center font-light tracking-normal mx-1 ${
                isSelected ? 'bg-blue text-white': ''
            }`}
            >EN</button>
           
        
    )
};

export default English;