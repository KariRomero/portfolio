import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';

const NavBar = ({ selected,selectedLanguage,handleClickInicio, handleClickProyectos,handleClickSobreMi,handleClickContacto,handleClickEn,handleClickEs }) => {    
    const navMenu = [
        {
            nombre:"INICIO",
            name:"HOME",
            handleClick: handleClickInicio,
            isSelected:selected === 'inicio'
        },
        {
            nombre:"PROYECTOS",
            name:"MY PROJECTS",
            handleClick: handleClickProyectos,
            isSelected:selected === 'proyectos'
        },
        {
            nombre:"SOBRE MI",
            name:"ABOUT ME",
            handleClick: handleClickSobreMi,
            isSelected:selected === 'sobreMi'
        },
        {
            nombre:"CONTACTO",
            name:"CONTACT",
            handleClick: handleClickContacto,
            isSelected:selected === 'contacto'
        }
    ]

    const navLanguage = [
        {
            name: "Es",
            handleClick: handleClickEs,
            isSelected:selectedLanguage === 'Es'
        },
        {
            name:"En",
            handleClick: handleClickEn,
            isSelected:selectedLanguage === 'En'
        }
    ]

    const [ showMenu, setShowMenu ] = useState(false);
    const [ theme, setTheme ] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') :
        'light'
    );

    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    }

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light');
        }
    },[theme]);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray shadow-md flex justify-center z-50">
                {/* Desktop menu */}
                <div className="hidden sm:block">
                    {
                        navMenu.map((menu)=>(
                            <button 
                            key={menu.nombre}
                            onClick={menu.handleClick}
                            className={`menu-btn dark:text-beige ${
                                menu.isSelected ? 'menu-selected dark:text-white' : ''
                            }`}
                            >
                                {selectedLanguage === 'Es' ? menu.nombre : menu.name}
                            </button>
                        ))
                    }  
                    {
                        navLanguage.map((lang)=>(
                            <button
                            key={lang.name}
                            onClick={lang.handleClick}
                            className={`w-6 h-6 rounded-full text-xs text-center dark:text-beige font-light tracking-normal mx-1 ${
                                lang.isSelected ? 'bg-blue dark:bg-green text-white dark:text-gray': ''
                            }`}
                            >
                                {lang.name}
                            </button>
                        ))
                    }             
                    {
                        theme === 'dark' ? (
                            <FontAwesomeIcon icon={faSun} size='lg' style={{color: "#EFE1D1",}}
                            className='cursor-pointer ml-28'
                            onClick={()=>setTheme('light')}
                            />
                        ) :
                        (
                            <FontAwesomeIcon icon={faMoon} size="lg" style={{color: "#5b88a5",}} 
                            className='cursor-pointer ml-28'
                            onClick={()=>setTheme('dark')}
                            />    

                        )
                    }
                </div>
                {/* Mobile menu */}
                <div className="block sm:hidden ml-auto mr-8">

                    {
                        theme === 'dark' ? (
                            <FontAwesomeIcon icon={faSun} size='lg' style={{color: "#EFE1D1",}}
                            className='cursor-pointer py-7 px-4'
                            onClick={()=>setTheme('light')}
                            />
                        ) :
                        (
                            <FontAwesomeIcon icon={faMoon} size="lg" style={{color: "#5b88a5",}} 
                            className='cursor-pointer py-7 px-4'
                            onClick={()=>setTheme('dark')}
                            />                    

                        )
                    }
                    <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#5b88a5",}} 
                    className='cursor-pointer py-7' 
                    onClick={toggleMenu}
                    />
                    {
                        showMenu && (
                            <div className='fixed top-16 left-0 right-0 bg-white dark:bg-gray shadow-md rounded-b-xl z-10 py-10 flex flex-col items-center gap-4'>
                                <div className='flex'>
                                    {
                                        navLanguage.map((lang)=>(
                                            <button
                                            key={lang.name}
                                            onClick={lang.handleClick}
                                            className={`w-6 h-6 rounded-full text-xs text-center font-light tracking-normal ${
                                                lang.isSelected ? 'bg-blue text-white': ''
                                            }`}
                                            >
                                                {lang.name}
                                            </button>
                                        ))
                                    }
                                </div>
                                
                                {
                                    navMenu.map((menu)=>(
                                        <button 
                                        key={menu.nombre}
                                        onClick={menu.handleClick}
                                        className={`text-xs dark:text-white ${
                                            menu.isSelected ? 'bg-blue' : ''
                                        }`}
                                        >
                                            {selectedLanguage === 'Es' ? menu.nombre : menu.name}
                                        </button>
                                    ))
                                }                                                                    
                            </div>
                        )
                    }
                </div>
            </nav>
        </>
    )
};

export default NavBar;
