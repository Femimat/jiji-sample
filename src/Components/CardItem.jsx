export default function CardItem(props) {
    return (
            <div className="Table-List">  
                <a href={props.menuLink}>
                    <img src={props.vehicleImage} className="Card-List" alt={props.alt}/> 
                    <div className="Card-Info">
                        <h3>{props.itemName}</h3>
                        <h4>{props.price}</h4>        
                    </div>
                </a> 
            </div>  
    )
}