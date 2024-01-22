import "../Assets/Styles/AdvertCard.css"


export function AdvertCard (props) {
    return (    
        <div className="Advert-Page">
            <div className="Img-Vech">

                <div className="Imgg">
                    <img src={props.vehicleImage} alt=""/>
                </div>

                <div className="Imgg">
                    <img src={props.vehicleImage} alt=""/>
                </div>

                <div className="Imgg">
                    <img src={props.vehicleImage} alt=""/>
                </div>

                <div className="Imgg">
                    <img src={props.vehicleImage} alt=""/>
                </div>

                <div className="Imgg">
                    <img src={props.vehicleImage} alt=""/>
                </div>
            </div>

            <div className="Advert">
                
                <div className="Advert-Title">
                    <h1>Corrola 2017 Blue</h1>
                    <p>Promoted Posted 59 min ago Lagos, Ikoyi</p>
                </div>

                <div className="Icon-Info">

                    <div className="Con-Info">
                        <p>Nigerian Used</p>
                    </div>

                    <div className="Con-Info">
                        <p>Petrol</p>
                    </div>

                    <div className="Con-Info">
                        <p>Automatic</p>
                    </div>

                    <div className="Con-Info">
                        <p>153890 km</p>
                    </div>
                </div>
            </div>

            <div className="Advert-Wrapper">
                <div className="Advert-Tiles">
                    <div className="Advert-Specs">
                        <p>No faults</p>
                        <h4>second condition</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>Pilot</p>
                        <h4>model</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>EX-L 4x2 (3.5L 6cyl 5A)</p>
                        <h4>Trim</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>Front Wheel</p>
                        <h4>DRIVETRAIN</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>6</p>
                        <h4>NUMBER OF CYLINDERS</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>Gold</p>
                        <h4>COLOR</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>8</p>
                        <h4>SEATS</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>Yes</p>
                        <h4>EXCHANGE POSSIBLE</h4>
                    </div>   
                </div>

                <div className="Advert-Tiles">

                    <div className="Advert-Specs">
                        <p>Honda</p>
                        <h4>make</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>2008</p>
                        <h4>year of manufacture</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>SUV</p>
                        <h4>body</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>3500 cc</p>
                        <h4>engine size</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>247 hp</p>
                        <h4>horse power</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>Other</p>
                        <h4>interior color</h4>
                    </div>

                    <div className="Advert-Specs">
                        <p>Yes</p>
                        <h4>registered car</h4>
                    </div>
                </div>
                
            </div>

            <div className="Advert-List-Wraper">
                <div className="List-Wraper">

                    <div className="List-Tag">
                        <p>Air Conditioning</p>
                    </div>

                    <div className="List-Tag">
                        <p>Allow Wheels</p> 
                    </div>
                    
                    <div className="List-Tag">
                        <p>Airbags</p>
                    </div>
                    
                    <div className="List-Tag">
                        <p>Armrests</p>
                    </div>
                    
                    <div className="List-Tag">
                        <p>Sunroof</p>
                    </div> 
                </div>
            </div>

            <div className="Desc-Text">
                <div className="Text">
                    <p>Clean registered pilot, affordable price</p>
                </div>

                <div className="Card-Button">
                    <p>Show contact</p>
                </div>
            </div>

            <div className="Btton">
                <div className="Content-Btt">
                    <div className="Btt">
                        <p>Make an offer</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}