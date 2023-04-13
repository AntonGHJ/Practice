
import React, {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../api';
import useDarkMode from '../hooks/useDarkMode';
import { getCarsList } from '../store/cars';
import { getProperties } from '../store/properties';

import Car from './car';

const CarsList = () => {   
    
    const cars = useSelector(getCarsList())
    console.log(cars);
     const dispatch = useDispatch()
    //const properties = useSelector(getProperties())
    const [theme, toggleTheme] = useDarkMode();
    return (   <>  
    
      <div className={`theme-${theme}`}>
      <div className='darkmodeDiv'>
            <button className='darkModeButton' onClick={toggleTheme}>
                <span className="sun">☀️</span>
                <span className="moon">🌙</span>
            </button>
        </div>

       
    <div className='container'>
    <div className='carListHeader'>OUR BEST CARS</div>
    {cars.map((car, _id, images, properties)=>(
        <div key={_id} className='mb-5' style={{maxWidth:1200, margin:"auto"}}>
            <table className='mb-5' >
                <Car id={_id} images={images} car={car} properties={properties}/>
            
                <div className='detLink'>
        <Link className="detailsLink" to={`/cars/${car._id}`}>More details</Link>
        {/*<button className="btn btn-danger" 
        onClick={() => dispatch(removeCar(car._id))}>  
    Delete car</button>  */}     
        </div>

            </table>
            <hr />
            <br />
    </div>

   
    ))}
    </div>
    </div>
    </>  
     );
}
 
export default CarsList;