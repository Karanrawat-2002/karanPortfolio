import React from 'react';
import {Link} from "react-router-dom";
function Acadamic() {
    return ( 
        <>
        <div className='content'>
             <div className="box">
                <Link to="/" className='homeLink'><i class="fa-solid fa-arrow-right"></i></Link>
                <li><p><b>Highschool & Intermediate</b></p></li>
                <p>I completed both 10th and 12th from U.P. Board from Maharshi Arvind Vidhya Mandir, Kasia, Kushinagar.</p>
                <p>I obtained <b>87% marks</b> in 10th and <b>76% marks</b> in 12th.</p>
                <li><p><b>Graduation</b></p></li>
                <p>I am currently pursuing my bachelors in <b>Computer Application (B.C.A)</b> from <b>Dewan Institute of management</b>
                which is affiliated to the<b> C.C.S University, Meerut</b></p>
            </div>
        </div>
       </>
     );
}

export default Acadamic;