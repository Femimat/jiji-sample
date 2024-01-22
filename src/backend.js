import car1 from "./Assets/images/124357441_MzAwLTI4NS1hZDJhMjRmNjUx.jpg"
import car2 from "./Assets/images/124458643_MzAwLTIyNS00ZWViZTQwYjhj.jpg"
import car3 from "./Assets/images/124551432_MzAwLTQwMC1jYWYyNTg2YmU4.jpg"
import car4 from "./Assets/images/124810868_MzAwLTQwMC0xYWI0NjgwNmYz.jpg"
import car5 from "./Assets/images/124846369_MzAwLTQwMC01MzhiMjdjMjgz.jpg"
import car6 from "./Assets/images/125454782_MzAwLTQwMC1lNDYzZDI5NDdj.jpg"
import car7 from "./Assets/images/125450714_MzAwLTQwMC03ZTQyZGRlOTQ4.jpg"
import car8 from "./Assets/images/125448996_MzAwLTQwMC02MmMyYzY5ZTY1.jpg"
import car9 from "./Assets/images/125483265_MzAwLTQwMC1hYTJiYmY5MWFk.jpg"
import car10 from "./Assets/images/125492947_MzAwLTQwMC0zOWUxYjZlZTg5.jpg"
import car11 from "./Assets/images/125070774_MzAwLTIyNS1hMzJlNjQ3NjY2.jpg"
import car12 from "./Assets/images/125359332_MzAwLTQwMC05MWYzYmE3Zjgx.jpg"
import car13 from "./Assets/images/125414303_MzAwLTIyMi1mYTAzMDUzYjc4.jpg"
import car14 from "./Assets/images/125425990_MzAwLTIwNi01YzlhODBiNjY5.jpg"
import car15 from "./Assets/images/125434177_MzAwLTQwMC05MzBlZGM0ZWRj.jpg"
import car16 from "./Assets/images/125444431_MzAwLTIyNS0xY2Q1YjkyYzU5.jpg"

export const cars = [
    {
        "vehicleImage": car1,
        "itemName": "Honda Sonata 2010 Black",
        "price": "₦ 2,500,000",
        "city": "ikeja"
    },
    {
        "vehicleImage": car2,
        "itemName": "Corolla 2017 Blue",
        "price": "₦ 3,200,000",
        "city": "ikeja"
    },
    {
        "vehicleImage": car3,
        "itemName": "Accord Matrix 2019 White",
        "price": "₦ 4,800,000",
        "city": "ikorodu",
    },
    {
        "vehicleImage": car4,
        "itemName": "Honda 2015 Black",
        "price": "₦ 2,800,000",
        "city": "agege"
    },
    {
        "vehicleImage": car5,
        "itemName": "Corolla 2020 Black",
        "price": "₦ 5,200,000",
        "city": "ikorodu",
    },
    {
        "vehicleImage": car6,
        "itemName": "Lexus 2013 Cream",
        "price": "6,300,000",
        "city": "agege"
    },
    {
        "vehicleImage": car7,
        "itemName": "Range Rover 2018 Black",
        "price": "9,500,000",
        "city": "agege"
    },
    {
        "vehicleImage": car8,
        "itemName": "Iphone Xs Gold",
        "price": "₦ 180,000",
        "city": "ikeja"
    },
    {
        "vehicleImage": car9,
        "itemName": "Iphone Xs Max",
        "price": "₦ 220,000",
        "city": "ikeja"
    },
    {
        "vehicleImage": car10,
        "itemName": "Three Bedroom Flat",
        "price": "₦ 2,200,000",
        "city": "ikeja"
    },
    {
        "vehicleImage": car11,
        "itemName": "Benz White",
        "price": "₦ 8,000,000",
        "city": "ikeja"
    },
    {
        "vehicleImage": car12,
        "itemName": "iphone 11",
        "price": "₦ 200,000",
        "city": "ikeja"
    },
    {
        "vehicleImage": car13,
        "itemName": "Venza 2019 White",
        "price": "₦ 5,700,000",
        "city": "ikeja"
    },
    {
        "vehicleImage": car14,
        "itemName": "Lexus 2019 Red",
        "price": "₦ 7,800,000",
        "city": "ikeja"
    },
    {
        "vehicleImage": car15,
        "itemName": "Iphone 8 White",
        "price": "₦ 80,000",
        "city": "ikeja"
    },
    {
        "vehicleImage": car16,
        "itemName": "Range Rover 2020 Gray",
        "price": "₦ 10,000,000",
        "city": "ikeja"
    }

]

export function getCar(city, name) {
    for (let index = 0; index < cars.length; index++) {
        if (cars[index].itemName === name && cars[index].city === city) return cars[index];   
    }
}



