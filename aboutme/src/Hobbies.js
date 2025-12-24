import React from 'react';
import { Link } from 'react-router-dom';
function Hobbie() {
    return ( 
        <>
        <div className='content'>
            <div className="box">
                <Link to="/" className='homeLink'><i class="fa-solid fa-arrow-right"></i></Link>
                <p><i>I used to do painting, sketching, gaming</i></p>
                <p><i>I have desires to explore vallies, forests, lakes, sea and peaceful places</i></p>
                <p><i> where i can improve my imagination towards nature</i></p>
            </div>
        </div>
        </>
     );
}

export default Hobbie;