import Avatar3 from '../../assets/AvatarMaker3.png';
import React from 'react';
import './Avatar.css'; // Importa el archivo CSS donde definiremos las animaciones

const Avatar = () => {
    return (
        <img alt='mi avatar' src={Avatar3} className='rounded-full bg-beige shadow-2xl hover-spin'/>
    );
};

export default Avatar;
