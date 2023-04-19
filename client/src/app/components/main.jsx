import React from 'react';
import "../App.css"
import useDarkMode from '../hooks/useDarkMode';

import Description from './description';
import MainPicture from './mainPict';

const Main = () => {
   const [theme, toggleTheme] = useDarkMode()
    return (
   <div className='mainbc'>
    <div className='container'>
    {/*<div className={`theme-${theme}`}>
    <div className='darkmodeDiv'>
            <button className='darkModeButton' onClick={toggleTheme}>
                <span className="sun">☀️</span>
                <span className="moon">🌙</span>
            </button>
        </div>*/}

       

        
       <Description/>
        
       </div>
    </div>
    );
}
 
export default Main;