import { useParams } from "react-router";
import { getCar } from './backend';
import { useState } from "react";
import "../src/Assets/Styles/Car.css"
import { CarHeader } from "./Components/CarHeader";
import { CarLink } from "./Components/CarLink";
import { CarImg } from "./Components/CarImg";

export function Car() {
    const { city, carName,} = useParams();
    const [ car ] = useState(getCar(city, carName));


    return (
        <div className="body">
            <CarHeader />
            <CarLink itemName={car.itemName}/>
            <CarImg vehicleImage={car.vehicleImage} 
                 price={car.price}
            />
            
        </div>
           
    );
}