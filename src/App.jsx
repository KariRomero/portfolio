import { Routes, Route } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Inicio from "./components/Pages/Inicio";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  const [selectedButton, setSelectedButton] = useState('');
  const [language, setLanguage] = useState(
    localStorage.getItem('language') ? localStorage.getItem('language') :
    'Es'
  );

  const refInicio=useRef(null);
  const refProyectos=useRef(null);
  const refSobreMi=useRef(null);
  const refContacto=useRef(null);

//   const [language, setLanguage] = useState(
//     localStorage.getItem('language') ? localStorage.getItem('language') :
//     'Es'        
// )
useEffect(()=>{
    if(language === 'En'){
        document.documentElement.classList.add('En');
        localStorage.setItem('language','En');
    } else {
        document.documentElement.classList.remove('En');
        localStorage.setItem('language','Es');
    }
},[language]);

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
  };

  const handleClickEn=()=>{
    setLanguage('En');
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
