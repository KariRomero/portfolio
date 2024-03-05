import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import Inicio from "./components/Pages/Inicio";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  const [selectedButton, setSelectedButton] = useState('');
  const [language, setLanguage] = useState('Es');

  const refInicio=useRef(null);
  const refProyectos=useRef(null);
  const refSobreMi=useRef(null);
  const refContacto=useRef(null);

  const handleClickInicio=()=>{
    refInicio.current?.scrollIntoView({ behavior:'smooth' });
    setSelectedButton('inicio');
  };

  const handleClickProyectos=()=>{
    refProyectos.current?.scrollIntoView({ behavior:'smooth' });
    setSelectedButton('proyectos');
  };

  const handleClickSobreMi=()=>{
    refSobreMi.current?.scrollIntoView({ behavior:'smooth' });
    setSelectedButton('sobreMi');
  };

  const handleClickContacto=()=>{
    refContacto.current?.scrollIntoView({ behavior:'smooth' });
    setSelectedButton('contacto');
  };

  const handleClickEs=()=>{    
    setLanguage('Es')
    console.log(language);;
  };

  const handleClickEn=()=>{
    setLanguage('En');
    console.log(language);
  };


  return (
    <div>

      <NavBar 
      handleClickInicio={handleClickInicio} 
      handleClickProyectos={handleClickProyectos} 
      handleClickSobreMi={handleClickSobreMi} 
      handleClickContacto={handleClickContacto}
      handleClickEn={handleClickEn}
      handleClickEs={handleClickEs}
      selected={selectedButton}
      selectedLanguage={language}
      />
      <Footer/>

      <Routes>
        <Route path='/' element={<Inicio 
        refInicio={refInicio} 
        refProyectos={refProyectos} 
        refSobreMi={refSobreMi} 
        refContacto={refContacto}
        selectedLanguage={language}
        />}        
        />
      </Routes>
      
    </div>
  )
}

export default App
