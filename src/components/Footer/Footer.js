import React from 'react'
import FontIcon from '../FontIcon'

import './footer.css'

export default function Footer() {
    return (
        <section className='container-footer'>
            <ul className='container-footer-list'>
                <li>
                    <a href="/" target={'_blank'}>
                        <FontIcon type='fab' name='whatsapp' color='#27AE60' size={32}/>
                    </a>
                </li>
                <li>
                    <a href="/" target={'_blank'}>
                        <FontIcon type='fab' name='github' color='#27AE60' size={32}/>
                    </a>
                </li>
                <li>
                    <a href="/" target={'_blank'}>
                        <FontIcon type='fab' name='linkedin' color='#27AE60' size={32}/>
                    </a>
                </li>
                <li>
                    <a href="/" target={'_blank'}>
                        <FontIcon type='fab' name='stack-overflow' color='#27AE60' size={32}/>
                    </a>
                </li>
            </ul>

            <code className='container-footer-text'>
                This page was created by JM
                <FontIcon type='fas' name='copyright' color='#000000' size={15}/>
            </code>
        </section>
    )
}
