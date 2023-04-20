import React from 'react';
import "../App.css"
import MainPageText from './mainPageText';

const Main = () => {
  
    return (
   <div className='main-page'>
    <div className='container'>
    {/*<div className={`theme-${theme}`}>
    <div className='darkmodeDiv'>
            <button className='darkModeButton' onClick={toggleTheme}>
                <span className="sun">☀️</span>
                <span className="moon">🌙</span>
            </button>
        </div>*/}

       

        
       <MainPageText/>
        
       </div>
    </div>
    );
}
 
export default Main;