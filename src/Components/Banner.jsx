import "../Assets/Styles/Banner.css"
import manImage from "../Assets/images/Image-SideMenu.jsx/man.png"
import girlsImage from "../Assets/images/Image-SideMenu.jsx/girls.png"

function Banner() {
    return (
      <div className="Banner-Background">
         <div>
            <img src={manImage} alt="manImage"/>
         </div>

         <div className="Row">
            <div className="Input-info">
               <p id="text">Find anything in</p>
               <button type="button" className="button">ALL Nigeria</button>
            </div>
            <input className="Banner-Search" type="text" placeholder="I am looking for..."></input>
         </div>   

         <div>
            <img src={girlsImage} alt="girlsImage"/>
         </div>          
      </div>
    )
}

export default Banner;