/*eslint-disable */
import React from "react";
import ImageSlider from "./imageSlider";
import PropertiesCard from "./propertiesCard";

const Car = ({ car }) => {
    if (!car) { return null}
    return ( <>
        <div><ImageSlider images={car.images} alt={car.name}/></div>
            <table>
                <tbody>
                    <tr >
                        <td className="car-desc-text">Model: </td>    
                        <td className="car-detail">{car.name}</td>    
                    </tr>    
                    <tr>
                        <td className="car-desc-text">Type of fuel:</td>      
                        <td className="car-detail" >{car.engine}</td>        
                    </tr>    
                    <tr>
                        <td className="car-desc-text">Production year: </td>
                        <td className="car-detail">{car.productionYear}</td>  
                    </tr>
                    <tr>
                        <td className="car-desc-text">Mileage: </td>
                        <td className="car-detail">{car.mileage}</td>
                    </tr>
                    <tr>
                        <td className="car-desc-text">Price: </td>
                        <td className="car-detail">{car.price}</td>
                    </tr>    
                    <tr>
                        <td>
                            <PropertiesCard data={car.properties}/>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>      
        </>
    );
}
    
export default Car;