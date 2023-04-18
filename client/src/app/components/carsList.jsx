import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import { getCarsList, getCarsLoadingStatus, removeCar } from '../store/cars';
import Car from './car';
import { getIsLoggedIn } from '../store/users';
import Loader from '../utils/loader';

const CarsList = () => {       
    const cars = useSelector(getCarsList())
    const carsLoadingStatus = useSelector(getCarsLoadingStatus())
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch()
    const [theme, toggleTheme] = useDarkMode();
    return (<>     
      <div className={`theme-${theme}`}>
        <div className='darkmodeDiv'>
            <button className='darkModeButton' onClick={toggleTheme}>
                <span className="sun">☀️</span>
                <span className="moon">🌙</span>
            </button>
        </div>
       
<div className='container'>
    <div className='carListHeader'>OUR BEST CARS</div>
        {carsLoadingStatus && <Loader/>}
            {cars.map((car, _id, images, properties)=>(
                <div key={_id} className='car-data'>
                    <table className='mb-5' >
                        <Car id={_id} images={images} car={car} properties={properties}/>
                        <div className='detLink'>
                        <Link className="detailsLink" to={`/cars/${car._id}`}>More details</Link>
               
                        {isLoggedIn && (
                            <div >
                                <Link className="detailsLink"  to={`/cars/${car._id}/carEdit`}>Edit</Link>        
                                <button className="detailsLink" 
                                    onClick={() => dispatch(removeCar(car._id))}>  
                                Delete car</button>
                                <hr />
                            </div>)}      
                        </div>                
                    </table>           
                <br />
        </div>   
    ))}
    </div>
</div>
    </>  
     );
}
 
export default CarsList;