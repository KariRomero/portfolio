const Español =({ handleClickEs,isSelected })=>{
    return(
        
            <button onClick={handleClickEs} className={`w-6 h-6 rounded-full text-xs text-center font-light tracking-normal mx-1 ${
                isSelected ? 'bg-blue text-white': ''
            }`}
            >ES</button>
           
        
    )
};

export default Español;