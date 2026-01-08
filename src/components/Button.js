import React, { useState } from 'react';

import './Button.css';

const Button = ({ onClick }) => {

    const [isClicked, setIsClicked] = useState(false);


    const handleClick = () => {

        setIsClicked(!isClicked);

        onClick(); // Передаем управление внешнему обработчику

    };


    return (

        <button

            className={`custom-button ${isClicked ? 'clicked' : ''}`}

            onClick={handleClick}

        >

            Изменить цвет

        </button>

    );

};


export default Button;