import React from 'react';
import { Link } from 'react-router-dom';
function Project() {
    return ( 
        <div className='content'>
            <div className='box'>
                <Link to="/" className='homeLink'><i class="fa-solid fa-arrow-right"></i></Link>
                <li><p><b>Projects</b>
                </p>
                    <p>Zerodha Clone(Stock Trading Platform), Airbnd Clone</p>
                </li>
                <li><p><b>Certifications</b></p>
                    <p>A full-Stack web development course by <i>Apna Collage</i></p>
                    <p>Data Science Program from IIT Kanpur</p>
                </li>
                
            </div>
        </div>
     );
}

export default Project;