import { cars } from '../backend'
import CardItem from "./CardItem"
import "../Assets/Styles/Table.css"

function Table() {
    return (
        <div className="Flex-Wrap">
            <h3>Trending ads</h3>

            <div className="Table-Container">
                {cars.map(car  => {
                    return <CardItem
                            menuLink={car.city + "/cars/" + car.itemName}
                            vehicleImage={car.vehicleImage}
                            alt="honda.jpg"
                            itemName={car.itemName}
                            price={car.price}
                />
                })}
            </div>
        </div>
    )
}

export default Table;