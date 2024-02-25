import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import Inicio from "./components/Pages/Inicio";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  const [selectedButton, setSelectedButton] = useState('');

  const refInicio=useRef(null);
  const refProyectos=useRef(null);
  const refSobreMi=useRef(null);
  const refContacto=useRef(null);

  const handleClickInicio=()=>{
    refInicio.current?.scrollIntoView({ behavior:'smooth' });
    setSelectedButton('inicio')
    console.log('click InicioButton');
  };

  const handleClickProyectos=()=>{
    refProyectos.current?.scrollIntoView({ behavior:'smooth' });
    setSelectedButton('proyectos')
    console.log('click MisProyectosButton');
  };

  const handleClickSobreMi=()=>{
    refSobreMi.current?.scrollIntoView({ behavior:'smooth' });
    setSelectedButton('sobreMi')
    console.log('click SobreMiButton');
  };

  const handleClickContacto=()=>{
    refContacto.current?.scrollIntoView({ behavior:'smooth' });
    setSelectedButton('contacto')
    console.log('click ContactoButton');
  };


  return (
    <div>

      <NavBar 
      handleClickInicio={handleClickInicio} 
      handleClickProyectos={handleClickProyectos} 
      handleClickSobreMi={handleClickSobreMi} 
      handleClickContacto={handleClickContacto}
      selected={selectedButton}
      />
      <Footer/>

      <Routes>
        <Route path='/' element={<Inicio 
        refInicio={refInicio} 
        refProyectos={refProyectos} 
        refSobreMi={refSobreMi} 
        refContacto={refContacto}/>}/>
      </Routes>
      
    </div>
  )
}

export default App
