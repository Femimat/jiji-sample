import React from "react"
import "../Assets/Styles/Modal2.css"


const Modal2 = ({ open, onClose }) => {

    if (!open) return null
    return (
        <div className="Overlay2">
            <div className="Modal2-Container">

                <div className="Pop-Title">
                    <h2>Sign in via email or phone</h2>
                 </div>
                <form className="Form-Table">
                    <input type="text" name="email" placeholder="Email or Phone"/>
                </form>

                <form className="Form-Table">
                    <input type="text" name="password" placeholder="Password"/>
                </form>

                <div className="Form">
                    <a href="/Forgot-Password">
                        <p>Forgot your password?</p>
                    </a>
                </div>

                <div className="Button-Container2">
                    <button disabled="disabled" type="button">sign in</button>
                </div>

                <div className="Form-Holder">
                    <p>Don't have an account? Registration</p>
                </div>

                <div className="Modal2-Close">
                    <p onClick={onClose} className="Close-Popup">X</p>
                </div>
            </div>
        </div>
    )
}        


export default Modal2