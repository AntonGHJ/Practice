import React from 'react';
import { Link } from 'react-router-dom';

const handleClick = () => {
    console.log('click pict')
}

const Image = ({src, alt, id}) => {
    
    return (
        <div style={{maxWidth:900, margin:"auto"}}>
       <Link className="nav-link" to={`/cars/${id}`}>
        <img style={{maxWidth:900, borderRadius:40, marginLeft:15}} onClick={handleClick} src={src} alt={alt} />
        </Link>
        </div>
        
    )
}
export default Image;