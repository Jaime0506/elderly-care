import React from 'react'
import { bubble as Slide } from 'react-burger-menu'

import './menu.css'

export default function Menu({ isVisible, toggleSlide }) {

    const data_items = [
        "Inicio", 
        "Nuestra funcion", 
        "Equipo de trabajo", 
        "Donde nos encontramos", 
        "Redes"
    ]

    const scrollToWindow = (value) => {
        window.scrollTo({
        top: value ? value * window.innerHeight + 70 : 0,
        left: 0,
        behavior: 'smooth',
        })

        toggleSlide()
    }

    return (
       <Slide
            right
            customBurgerIcon={false}
            isOpen={isVisible}
            onClose={ toggleSlide }
            disableAutoFocus
        >
            <div>
                {
                    data_items.map((item, index) => (
                        <h1 onClick={() => scrollToWindow(index) } key={item}>{ item }</h1>
                    ))
                }
            </div>
        </Slide>
    )
}
