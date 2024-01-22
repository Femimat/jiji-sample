import slideImage from "../Assets/images/Image-SideMenu.jsx/slider.png"
import "../Assets/Styles/MarketingBanner.css"


function MarketingBanner() {
    return (
        <div className="Market-Banner">
            <div className="Slide-Image">
                <img className="Slide" src={slideImage} alt="slider.png"/>
            </div>

            <div className="Post-Banner">
                <h2>Got something to sell?</h2>
                <h3>Post an advert for free</h3>
            </div>
        </div>        
     )
}

export default MarketingBanner;