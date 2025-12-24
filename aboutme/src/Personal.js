import React from 'react';
import { Link } from 'react-router-dom';
function Personal() {
    return ( 
        <>
        <div className='content'>
            
           <div  className='box'> 
            <Link to="/" className='homeLink'><i class="fa-solid fa-arrow-right"></i></Link>
                <p><b>Name: </b>Karan Rawat</p> 
                <p><b>D.O.B:</b> 7 July 2005</p>
                <p><b>Language Known: Hindi, English</b></p>
                <p><b>Gender:</b> Male</p>
                <p><b>Nationality:</b> Indian</p>
                <p><b>Martial Status:</b> Unmarried</p>
                <p><b>Father's Name: </b>Ramadhin Rawat</p>
                <p><b>Mother's Name: </b>Anita Devi</p>
                <p><i>We are three siblings. My brother is a Mechenical Engineer and </i></p>
                <p><i>my sister is a teacher.
                    My father is a worker in Victory Precision pvt. ltd. My mother is an asha.
                </i></p>
            </div>
        </div>

        </>
     );
}

export default Personal;
