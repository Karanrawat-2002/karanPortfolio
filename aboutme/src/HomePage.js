import React from 'react';
import {Link} from "react-router-dom";

function HomePage() {
    return ( 
        <>
         <div className='hero'>
            <img src='media/Picsart_24-09-11_20-26-01-075.jpg' alt=''/>
            <h2 style={{fontFamily:"monospace", color:"#50cdfe"}}>Karan Rawat</h2>
         </div>
         <div className='options'>
                
                    <div className='card'  style={{width:"10%"}}>
                        <Link className='cardlink' to="/personal">
                           <img className="card-img" src='media/Picsart_25-10-07_18-14-30-159.jpg' alt=''/>
                        </Link>
                    </div>
                   <div className='card'  style={{width:"10%"}}>
                        <Link className='cardlink' to="/skill">
                           <img className="card-img" src='media/Picsart_25-10-07_17-56-21-196.jpg' alt=''/>
                        </Link>
                    </div>
                    <div className='card' style={{width:"10%"}}>
                        <Link className='cardlink' to="/project">
                           <img className="card-img" src='media/Picsart_25-10-07_18-02-02-605.jpg' alt=''/>
                        </Link>
                    </div>
                    <div className='card' style={{width:"10%"}}>
                        <Link className='cardlink' to="/connect">
                           <img className="card-img" src='media/Picsart_25-10-07_18-00-05-981.jpg' alt=''/>
                        </Link>
                    </div>
            </div>
          <br></br><br></br>
        </>
     );
}

export default HomePage;