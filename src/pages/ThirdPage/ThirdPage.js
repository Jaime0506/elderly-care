import React, { useEffect, useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer"

import Modal from '../../components/Modal/Modal'
import Cards from '../../components/ThirdPage/Cards'
import { data } from '../../utils/dataCards'
import { data_modal } from '../../components/Modal/data_modal'
import SamplePDF from '../../utils/samplePDF'

import './ThirdPage.css'

export default function ThirdPage() {

    const [isVisible, setIsVisible] = useState(false)
    const [heightWindow, setHeightWindow] = useState({})
    const [wrapper, setWrapper] = useState(null)
    const [key, setKey] = useState(null)

    useEffect(() => {
        const height = window.innerHeight

        const checkKey = (key) => {
            isVisible && setKey(key)

            if (key.key === "Escape") {
                setIsVisible(!isVisible)
            }
        }

        setHeightWindow({
            minHeight: height,
        })

        document.addEventListener('keydown', checkKey)

        return () => {
            document.removeEventListener('keydown', checkKey)
        }
        
    }, [isVisible])

    const toggleModal = (index) => {
        !isVisible && (setWrapper(
            <>
                <div className='container-text-modal'>
                    <h1 className='office-modal'>{data_modal[index].office}</h1>
                    <h2 className='title-modal'>{data_modal[index].title}</h2>

                    <p className='subtitle-modal'>{data_modal[index].subtitle}</p>

                    <PDFDownloadLink document={<SamplePDF/>} fileName={data_modal[index].title}>
                        <button 
                            className='button-modal'
                        >
                            Descargar CV
                        </button>
                    </PDFDownloadLink>
                </div>
                
                <div className='container-image-modal'>
                    <img src={ data_modal[index].image } alt="ejemplo" className='image-modal' />
                </div>
            </>
        ))

        setIsVisible(!isVisible)
    }
    
    return (
        <>
            <Modal
                isOpen={isVisible}
                toggleModal={toggleModal}
                keyDown={key}
            >   
                { wrapper }
            </Modal>

            <section className='container-third-page' style={heightWindow}>
                <div className='container-third-page-title'>
                    <h1>Equipo de trabajo</h1>
                </div>

                <div className="container-third-page-cards">
                    {
                        data.map((item, index) => (
                            <Cards 
                                {...item} 
                                key={index} 
                                index={index} 
                                action={() => toggleModal(index) }
                            />
                        ))
                    }
                </div>

                <div className='container-third-page-footer'>
                    <h3>Contamos con las enfermeras necesarias para cualquier tipo de cuidado y convenios con doctores que se encargan de vigilar constantemente su estado de salud.</h3>
                </div>
            </section>  
        </>
        
    )
}
