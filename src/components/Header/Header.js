import React, { useState, useEffect } from 'react'
import FontIcon from '../FontIcon'

import './Header.css'

export default function Header({ toggleSlide }) {

    const [offSet, setOffSet] = useState(false)

    useEffect(() => {
        const onScroll = () => { setOffSet((window.pageYOffset > 70) && true) }
    
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    

    const changeOpacity = { opacity: offSet && 1 }

    return (
        <>
            <span className='container-second-bars' style={ changeOpacity }>
                <FontIcon 
                    type='fas'
                    name='bars'
                    color='black'
                    size={24}
                    action={ toggleSlide }
                    style={{ marginRight: '20px', cursor: 'pointer' }}
                />
            </span>
                
            <section className='container-header'>
                <span></span>

                <div className='container-title-header'>
                    <h1 className='title-header'>
                        Cuidado del mayor
                    </h1>
                </div>

                <div className='container-icon-header'>
                    <FontIcon type='fas' name='bars' color='white' size={24} action={ toggleSlide } style={{ cursor: 'pointer' }}/>
                </div>
            </section>
        </>
    )
}
