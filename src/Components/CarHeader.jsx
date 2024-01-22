import "../Assets/Styles/CarHeader.css"
import Modal from "./Modal"
import Modal2 from "./Modal2"
import { useState } from "react"

export function CarHeader () {

    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)

    return (
        <header className="Appp">
            <div className="Headerr-container">
                <div className="Jiiji-icon">
                    <a href="/" className="Iconn">Jiji</a>
                </div>

                <div>
                    <input className="Baner-Search" type="text" placeholder="Type your search here"></input>
                </div>

                <div className="Titlle-text">
                    <p>SELL FASTER, BUY SMARTER</p>
                </div>

                <div className="Info">
                    <div className="">
                        <p onClick={() => setOpenModal2(true)} className="sm">Sign in</p>
                        <Modal2 open={openModal2} onClose={() => setOpenModal2(false)} />
                    </div>
                    
                    <div className="">
                        <p onClick={() => setOpenModal(true)}>Registration</p>
                        <Modal open={openModal} onClose={() => setOpenModal(false)} />
                    </div>
                    <button type="button" className="Btnn">SELL</button>
                </div>
            </div>
        </header>
    )
}