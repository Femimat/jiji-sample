export default function MenuItem(props) {
    return (
        <div className="List">
            <a href={props.menuLink} id="Parent-item">
                <img src={props.vehicleImage} className="img" alt={props.alt}/> 
                <div className="column">
                    <p>{props.itemName}</p>
                    <span>{props.addCount} ads</span>        
                </div>
            </a> 
        </div> 
    )
}