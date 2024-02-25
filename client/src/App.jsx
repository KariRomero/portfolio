import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Inicio from "./components/Pages/Inicio";
import Proyectos from './components/Pages/Proyectos';
import Contacto from './components/Pages/Contacto';
import SobreMi from './components/Pages/SobreMi';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  const refInicio=useRef(null);
  const refProyectos=useRef(null);
  const refSobreMi=useRef(null);
  const refContacto=useRef(null);

  const handleClickInicio=()=>{
    refInicio.current?.scrollIntoView({ behavior:'smooth' });
    console.log('click InicioButton');
  };

  const handleClickProyectos=()=>{
    refProyectos.current?.scrollIntoView({ behavior:'smooth' });
    console.log('click MisProyectosButton');
  };

  const handleClickSobreMi=()=>{
    refSobreMi.current?.scrollIntoView({ behavior:'smooth' });
    console.log('click SobreMiButton');
  };

  const handleClickContacto=()=>{
    refContacto.current?.scrollIntoView({ behavior:'smooth' });
    console.log('click ContactoButton');
  };


  return (
    <div>

      <NavBar handleClickInicio={handleClickInicio} handleClickProyectos={handleClickProyectos} handleClickSobreMi={handleClickSobreMi} handleClickContacto={handleClickContacto} />
      <Footer/>

      <Routes>
        <Route path='/' element={<Inicio refInicio={refInicio} refProyectos={refProyectos} refSobreMi={refSobreMi} refContacto={refContacto}/>}/>
      </Routes>
      
    </div>
  )
}

export default App
