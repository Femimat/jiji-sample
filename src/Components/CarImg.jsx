import "../Assets/Styles/CarImg.css"
import { AdvertCard } from "./AdvertCard"

export function CarImg (props) {

    return (
        <div className="Car-Img">
            <div className="Car-desc-container">
                <div className="Img-Container">
                    <img src={props.vehicleImage} alt=""/>
                </div>
                
                <AdvertCard vehicleImage={props.vehicleImage} />
            </div>

            

            <div className="Price-Tag">
                    
                <div className="Tag card-shadow">
                    <h1>{props.price}</h1>
                    <p>Market price: ₦ 4.9 M ~ 5.96 M</p>
                    <p>Request call back</p> 
                </div>
                            
                <div className="Contact card-shadow">
                    <h2>AutoVic Ltd</h2>
                    <h3>Typically replies within a few hours</h3>
                    <h3>6 y on jiji</h3>
                    <p>Show contact</p>
                    <p>Start chat</p>
                </div>
    
                <div className="Safety-List card-shadow">
                    <h4>Safety tips</h4>
                    <ul>
                        <li>Remember, don't send any pre-payments</li>
                        <li>Meet the seller at a safe public place</li>
                        <li>Inspect the goods to make sure they meet your needs</li>
                        <li>Check all documentation and only pay if you're satisfied</li>
                    </ul>
                </div>
    
                <div className="Button-Wrapper card-shadow">
                    <p id="unbutton">Mark unavailable</p>
                    <p id="unabuse">Report Abuse</p>
                </div>
    
                <div className="Post-Ads card-shadow">
                    <p>Post Ad Like This</p>
                </div>
            </div>  
                   
        </div>
        

    )
}



            