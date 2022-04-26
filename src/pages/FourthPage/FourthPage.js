import React, { useEffect, useState } from 'react'
import FontIcon from '../../components/FontIcon'

import './fourthPage.css'

export default function FourthPage() {

    const [heightWindow, setHeightWindow] = useState({})

    useEffect(() => {
        const height = window.innerHeight
        setHeightWindow({
            height: height,
        })
    }, [])

    const apiWhatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=+571234567890&text=Hola!%20Quisiera%20Obtener%20Mas%20Informacion')
    }
    
    return (
        <section className='container-fourth-page' style={ heightWindow }>
            <div className='container-fourth-page-text'>
                <h1>Donde nos encontramos ?</h1>
                <h3>Actualmente nos ubicamos en bogota, cundinamarca en la localidad de fontibon. Kr 30 28-60, llama y pregunta por nosotros al siguiente numero <p>+57 123 456 7890</p> o comunicate a nuestro WhatsApp</h3>

                <button onClick={ apiWhatsapp }>
                    Contactanos
                    <FontIcon type='fab' color='white' name='whatsapp' size={22}/>
                </button>
            </div>
            <div className="container-fourth-page-img">
                <img src='./assets/fourthPage/Planet.svg' alt="planet ubication" />
            </div>
        </section>
    )
}
