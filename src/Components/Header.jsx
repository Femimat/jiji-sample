import "../Assets/Styles/Header.css"

function Header() {
    return (
        <header className="App-header">
            <div className="Header-container">
                <div className="Jiji-icon">
                    <a href="https://jiji.ng/" className="Icon">Jiji</a>
                </div>

                <div className="Title-text">
                    <p>SELL FASTER, BUY SMARTER</p>
                </div>

                <div className="Info">
                    <a href="https://jiji.ng/login.html" className="sm">Sign in</a>
                    <a href="https://jiji.ng/registration.html">Registration</a>
                    <button type="button" className="Btn">SELL</button>
                </div>
            </div>
        
        </header>
    )
}

export default Header;