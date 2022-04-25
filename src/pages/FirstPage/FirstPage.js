import React, { useEffect, useState } from 'react'

import './FirstPage.css'

export default function FirstPage() {

    const [heightWindow, setHeightWindow] = useState({})

    useEffect(() => {
        const heigth = window.innerHeight 
        setHeightWindow({
            minHeigth: heigth,
        })
    }, [])
    
    return (
        <section className='container-first-page' style={ heightWindow }>
            <div className='container-first-page-one'>
                <h1>Quienes Somos ?</h1>
                <h3>Personas que se preocupan por el cuidado del adulto mayor</h3>
            </div>
            <div className='container-first-page-two'>
                <img src='../assets/firstPage/firstPage.png' alt="old adualt grand father" className='image-first-page' />
            </div>
        </section>
    )
}
