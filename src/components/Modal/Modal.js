import React from 'react'
import FontIcon from '../FontIcon'

import './Modal.css'

export default function Modal({ isOpen, toggleModal, children, key }) {

    return (
        <div className={`overlay ${ isOpen && 'visible-overlay'}`}>
            <div className='modal'>
                <div 
                    className='modal-icon'
                    onClick={ toggleModal }
                >
                   <FontIcon
                        type='fas'
                        name='x'
                        color='black'
                        size={16}
                        action={toggleModal}
                    /> 
                </div>
                <div className='modal-wrapper'>
                    { children }
                </div>
            </div>
        </div>
    )
}
