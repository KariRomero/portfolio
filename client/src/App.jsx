import { Routes, Route, useNavigate } from "react-router-dom";
import Inicio from "./components/Pages/Inicio";
import Proyectos from './components/Pages/Proyectos';
import Contacto from './components/Pages/Contacto';
import SobreMi from './components/Pages/SobreMi';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div>

      <NavBar/>
      <Footer/>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
        <Route path='/sobremi' element={<SobreMi/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
      
    </div>
  )
}

export default App
