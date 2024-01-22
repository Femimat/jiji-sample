import Modal from "./Modal"
import Modal2 from "./Modal2"
import "../Assets/Styles/Password.css"
import { useState } from "react"

export function Password() {

    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)

    return (
        <div>
            <header className="App-headerr">
                <div className="Headerr-containerr">
                    <div className="Jiiji-icon">
                        <a href="/" className="Iconn">Jiji</a>
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

            <div>
                <div className="Row-Center">
                    <div className="Center-Xs">
                        <h1>Forgot Password</h1>

                        <div className="Card-Content">
                            <p>Enter your email or phone number</p>
                        </div>

                        <form className="Form-Table">
                            <input className="Formm" type="text" name="email" placeholder="Email or Phone"/>
                        </form>

                        <div className="Buttonn">
                            <button type="button" className="Btm">SEARCH</button>
                        </div>

                        <div className="Base-Link">
                            <p>Cancel</p>
                        </div>
                    </div>

                    
                </div>
            </div>
            
        </div>
        
    )
}