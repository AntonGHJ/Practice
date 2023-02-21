import React from 'react';
import "../App.css"
import useDarkMode from '../hooks/useDarkMode';

import Description from './description';
import MainPicture from './mainPict';

const Main = () => {
   const [theme, setTheme] = useDarkMode()
    return (
    <>
    <div className={`theme-${theme}`}>
        <MainPicture/>
        <h1 >Our cars for sale you can find in cars list</h1>
    <hr />
    <Description/>    
    </div>
    </>);
}
 
export default Main;