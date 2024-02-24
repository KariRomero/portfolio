const ProyectoCard = ({image, title, description})=>{
    return(
                
        <div className="w-1/2 h-full rounded-lg shadow-lg text-left mx-6">        
            <img className="rounded-t-lg w-full h-3/4" src={image} alt={title} />

        <div className="my-4 h-1/4 ml-4">            
            <h5 className="text-xl font-bold tracking-wide">
            {title}
            </h5>
            <p className="text-sm">{description}</p>
        </div>

        </div>

    )
};

export default ProyectoCard;