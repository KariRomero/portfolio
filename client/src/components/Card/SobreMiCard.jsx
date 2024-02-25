const SobreMiCard=({ refSobreMi })=>{
    return(
        <section className="mx-44" ref={refSobreMi}>

            <h1 className="tracking-widest mb-6 font-semibold">ME PRESENTO</h1>
            <h2 className="text-base leading-relaxed text-left font-semibold">¡Hola! Soy Karina, desarrolladora orientada al Front End.</h2>
            <p className="text-base leading-relaxed text-left">Me considero una persona curiosa, siempre en un constante proceso de aprendizaje y evolución. 
                Disfruto sumergiéndome en nuevos desafíos y enfrentándolos con entusiasmo y determinación.</p>
            <p className="text-base leading-relaxed text-left">Concidero que el trabajo en equipo y la empatía son  el dúo dinámico que impulsa resultados excepcionales. 
                Creo firmemente en la colaboración y en la importancia de entender las necesidades de los demás para lograr objetivos comunes.</p>
            <p className="text-base leading-relaxed text-left font-semibold text-blue">
                Mis tech skills son: JavaScript, CSS, React, Redux, Redux toolkit, Tailwind, Node.Js, Express, Sequelize, PostgreSQL

            </p>
            
        </section>
    )
};

export default SobreMiCard;