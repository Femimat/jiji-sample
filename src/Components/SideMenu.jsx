import vehiclesImage from "../Assets/images/Image-SideMenu.jsx/vehicles.png"
import realestateImage from "../Assets/images/Image-SideMenu.jsx/real-estate.png"
import mobileImage from "../Assets/images/Image-SideMenu.jsx/mobile.png"
import electronicsImage from "../Assets/images/Image-SideMenu.jsx/electronics.png"
import homeImage from "../Assets/images/Image-SideMenu.jsx/home.png"
import beautyImage from "../Assets/images/Image-SideMenu.jsx/beauty.png"
import fashionImage from "../Assets/images/Image-SideMenu.jsx/fashion.png"
import hobbiesImage from "../Assets/images/Image-SideMenu.jsx/hobbies.png"
import jobseekersImage from "../Assets/images/Image-SideMenu.jsx/jobseekers.png"
import servicesImage from "../Assets/images/Image-SideMenu.jsx/services.png"
import jobsImage from "../Assets/images/Image-SideMenu.jsx/jobs.png"
import babiesImage from "../Assets/images/Image-SideMenu.jsx/babies.png"
import animalsImage from "../Assets/images/Image-SideMenu.jsx/animals.png"
import agricultureImage from "../Assets/images/Image-SideMenu.jsx/agriculture.png"
import equipmentImage from "../Assets/images/Image-SideMenu.jsx/equipment.png"
import repairImage from "../Assets/images/Image-SideMenu.jsx/repair.png"
import MenuItem from "./MenuItem"
import "../Assets/Styles/SideMenu.css"

const items = [
    {
        menuLink: "",
        vehicleImage: vehiclesImage,
        alt: "vehicles.png",
        itemName: "Vehicle",
        addCount: "215,048"
    },
    {
        menuLink: "",
        vehicleImage: realestateImage,
        alt: "realestate.png",
        itemName: "Property",
        addCount: "97,407"
    },
    {
        menuLink: "",
        vehicleImage: mobileImage,
        alt: "mobile.png",
        itemName: "Mobile Phones & Tablets",
        addCount: "74,407"
    },
    {
        menuLink: "",
        vehicleImage: electronicsImage,
        alt: "electronics.png",
        itemName: "Electronics",
        addCount: "209,884"
    },
    {
        menuLink: "",
        vehicleImage: homeImage,
        alt: "home.png",
        itemName: "Home, Furniture & Appliances",
        addCount: "378,713"
    },
    {
        menuLink: "",
        vehicleImage: beautyImage,
        alt: "beauty.png",
        itemName: "Health & Beauty",
        addCount: "73,481"
    },
    {
        menuLink: "",
        vehicleImage: fashionImage,
        alt: "fashion.png",
        itemName: "Fashion",
        addCount: "187,639"
    },
    {
        menuLink: "",
        vehicleImage: hobbiesImage,
        alt: "hobbies.png",
        itemName: "Sports, Arts & Outdoors",
        addCount: "63,632"
    },
    {
        menuLink: "",
        vehicleImage: jobseekersImage,
        alt: "jobseekers.png",
        itemName: "Seeking Work CVs",
        addCount: "47,150"
    },
    {
        menuLink: "",
        vehicleImage: servicesImage,
        alt: "services.png",
        itemName: "Services",
        addCount: "58,779"
    },
    {
        menuLink: "",
        vehicleImage: jobsImage,
        alt: "jobs.png",
        itemName: "jobs",
        addCount: "1,855"
    },
    {
        menuLink: "",
        vehicleImage: babiesImage,
        alt: "babies.png",
        itemName: "Barbies & Kids",
        addCount: "27,769"
    },
    {
        menuLink: "",
        vehicleImage: animalsImage,
        alt: "animals.png",
        itemName: "Animals & Pets",
        addCount: "9,221"
    },
    {
        menuLink: "",
        vehicleImage: agricultureImage,
        alt: "agriculture.png",
        itemName: "Agriculture & Food",
        addCount: "23,217"
    },
    {
        menuLink: "",
        vehicleImage: equipmentImage,
        alt: "equipment.png",
        itemName: "Commercial Equipment & Tools",
        addCount: "123,780"
    },
    {
        menuLink: "",
        vehicleImage: repairImage,
        alt: "repair.png",
        itemName: "Repair & Construction",
        addCount: "216,545"
    },
]

function SideMenu() {
    return (
        <div className="Item-list">
            <div className="Item-categories">
                {items.map(item => {
                    return <MenuItem 
                        menuLink=""
                        vehicleImage={item.vehicleImage}
                        alt={item.alt}
                        itemName={item.itemName}
                        addCount={item.addCount}
                    />
                })}          
            </div>
                        
        </div>
    )
}

export default SideMenu;