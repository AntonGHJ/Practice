import React from 'react';
import { Link } from 'react-router-dom';

const handleClick = () => {
    console.log('click pict')
}

const Image = ({src, alt, id}) => {
    
    return (
        <div style={{ margin:"auto"}}>
       <Link className="nav-link" to={`/cars/${id}`}>
        <img style={{borderRadius:40, marginLeft:15}} onClick={handleClick} src={src} alt={alt} />
        </Link>
        </div>
        
    )
}
export default Image;