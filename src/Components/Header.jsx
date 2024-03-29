import "../Assets/Styles/Header.css"
import Modal from "./Modal"
import Modal2 from "./Modal2"
import { useState } from "react"

function Header() {

    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)

    return (
        <header className="App-header">
            <div className="Header-container">
                <div className="Jiji-icon">
                    <a href="#" className="Icon">Jiji</a>
                </div>

                <div className="Title-text">
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
                    
                    <button type="button" className="Btn">sell</button>
                </div>
            </div>
        
        </header>
    )
}

export default Header;