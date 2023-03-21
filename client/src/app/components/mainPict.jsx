import React from 'react';

const MainPicture = () => {
    return ( 
    
            <div className='main-picture'>        
          <img style={{borderRadius:20 }} 
        src="https://a.d-cd.net/895dcdcs-960.jpg" 
        alt="Welcome to our main page" />
         <h1 style={{
            margin:'auto', position: 'absolute', color:'white', bottom: 40, left:'60%'}}>
            ONLY BEST CARS FOR YOU!
        </h1>
        </div>     
     );
}
 
export default MainPicture;

