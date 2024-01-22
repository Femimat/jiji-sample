import React from "react"
import "../Assets/Styles/Modal.css"


const Modal = ({ open, onClose }) => {

    if (!open) return null
    return (

        <div className="Overlay">
            <div className="Modal-Container">
                <div className="">
                    <div className="Pop-Title">
                        <h2>Register via email and phone</h2>
                    </div>
                    <form className="Form-Table">
                        <input type="text" name="email" placeholder="Enter email"/>
                    </form>

                    <form className="Form-Table">
                        <input type="text" name="password" placeholder="Password"/>
                    </form>

                    <form className="Form-Table">
                        <input type="text" name="name" placeholder="First name"/>
                    </form>

                    <form className="Form-Table">
                        <input type="text" placeholder="Last name (optional)"/>
                    </form>

                    <form className="Form-Table">
                        <input type="text" name="phone" placeholder="Phone (digits only)"/>
                    </form>

                    <form className="CheckBox-Container">
                        <input className="Check" type="checkbox" />

                        <div>
                            <h2>I agree with rules</h2>
                        </div>
                    </form> 

                    <div className="Button-Container">
                        <button disabled="disabled" type="button">Register</button>
                    </div>

                    <div className="Pop2">
                        <h3>Already have an account? Sign in</h3>
                    </div>
                </div>
                
                <div className="Modal-Close">
                    <p onClick={onClose} className="Close-Popup">X</p>
                </div>
            </div>
              
        </div>
                 
    )
}

export default Modal