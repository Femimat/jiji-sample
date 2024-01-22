import newImage from "../Assets/images/footer-nigeria-new.svg"
import storeImage from "../Assets/images/app-store.svg"
import googleImage from "../Assets/images/google-play.svg"
import "../Assets/Styles/Footer.css"

function Footer() {
    return (
        <div>
            <div className="Footer-Image">
                <img src={newImage} alt="new.svg"/>
            </div>

            <div className="Footer-Container">
                <div className="Footer-Inner">
                    <div className="Footer-Group">
                        <h3>About us</h3>
                        <h3><a href="#">About Jiji</a></h3>
                        <h3><a href="#">We are hiring!</a></h3>
                        <h3><a href="#">Terms & Conditions</a></h3>
                        <h3><a href="#">Privacy Policy</a></h3>
                        <h3><a href="#">Billing Policy</a></h3>
                        <h3><a href="#">Cookie Policy</a></h3>
                        <h3><a href="#">Copyright Infringement Policy</a></h3>
                    </div>

                    <div className="Footer-Group">
                        <h3>Support</h3>
                        <h3><a href="#">support@jiji.ng</a></h3>
                        <h3><a href="#">Safety tips</a></h3>
                        <h3><a href="#">Contact Us</a></h3>
                        <h3><a href="#">FAQ</a></h3>
                    </div>

                    <div className="Footer-Group">
                        <h3>Our apps</h3>
                            <div className="Group">
                                <a href="#">
                                    <img src={storeImage} alt="store.svg"/>
                                </a>
                            </div>

                            <div className="Group">
                                <a href="#">
                                    <img src={googleImage} alt="google.svg"/>
                                </a>
                            </div>   
                    </div>

                    <div className="Footer-Group">
                        <h3>Our resources</h3>
                        <h3><a href="#">Our blog</a></h3>
                        <h3><a href="#">iji on FB</a></h3>
                        <h3><a href="#">Our Instagram</a></h3>
                        <h3><a href="#">Our YouTube</a></h3>
                        <h3><a href="#">Our Twitter</a></h3>
                    </div>

                    <div className="Footer-Group">
                        <h3>Hot links</h3>
                        <h3><a href="#">Brand</a></h3>
                        <h3><a href="#">Regions</a></h3>
                        <h3><a href="#">Jiji Africa</a></h3>
                    </div>
                </div>
                

                <div className="Footer-Copyright">
                    <h3>© 2023 Jiji.ng Gibraltar</h3>
                </div>
            </div>

            
            
        </div>
    )
}

export default Footer;