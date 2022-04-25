import React from 'react'
import FontIcon from '../FontIcon'

import './cards.css'

export default function Cards({ src, title, subtitle, action, index }) {

    return (
        <div className={'container-card card-' +  title } onClick={() => action(index) }>
            <div className='container-card-text'>
                <h1>{ title }</h1>
                <h3>{ subtitle }</h3>
            </div>
            <div className={'container-button button-' +  title }>
                <img src={ src } alt="." className='img-card' />
                <button>
                    Conocela
                    <FontIcon type='fas' name='caret-right' color='white'/>
                </button>
            </div>
        </div>
    )
}
