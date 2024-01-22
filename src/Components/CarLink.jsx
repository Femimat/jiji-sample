import "../Assets/Styles/CarLink.css"

export function CarLink (props) {
    return (
        <div>
            <div className="Car-Link">
                <div className="Car-Group">
                    <p>All ads</p>
                </div>

                <div className="Car-Group">
                    <p>Vehicles</p>
                </div>

              <div className="Car-Group">
                    <p>Cars</p>
                </div>

                <div className="Car-Group">
                    <p>{props.itemName} Cars</p>
                </div>

                <div className="Car-Group">
                    <p id="Car">{props.itemName}</p>
                </div>
            </div> 
        </div>
    )
}