import React, { useState, useEffect } from 'react'
import Wave from 'react-wavify'

import './SecondPage.css'

export default function SecondPage() {

	const [windowHeight, setWindowHeight] = useState({})

	useEffect(() => {
		const heightWindow = window.innerHeight
		setWindowHeight({
			top: heightWindow,
			height: 350
		})
	}, [])

    return (
    	<section className='container-second-page' style={{ minHeight: windowHeight.top }}>

			<Wave
				fill='#27AE60'
				paused={false}
				options={{
					height: 40,
					amplitude: 60,
					speed: 0.25,
					points: 2
				}}
				className='wave-lib'
				style={windowHeight}
			/>

			<div className='container-second-page-one'>
				<h1>Cual es nuestra funcion ?</h1>
				<h3>Cuidar de adultos de mayor edad, que requieran unos cuidados especiales y atencion constante, con las personas y equipos necesarios para el mejor trato, sin hacerlos sentir como si estuviesen en un hospital</h3>
			</div>
			<div className='container-second-page-two'>
				<img src='./assets/secondPage/secondPage.svg' alt="nurse enfermeras cuidado" />
			</div>
		</section>
    )
}
