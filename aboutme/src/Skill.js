import React from 'react';
import { Link } from 'react-router-dom';
function Skill() {
    return ( 
        <>
        <div className='content'>
           <div className='box'> 
            <Link to="/" className='homeLink'><i class="fa-solid fa-arrow-right"></i></Link>
            <li><p><b>Technical Skill</b></p>
            <p>Full-Stack Web developer with technology like HTML, CSS, JAVASCRIPT, NODE.JS, EXPRESS.JS, REST(API),</p>
            <p>BOOTSTRAP, GIT and GITHUB, MONGO-DB, REACT.JS, Material-UI</p></li>
            <li><p><b>Soft Skill</b></p>
            <p>Active Listener</p></li>
            </div>
        </div>
        </>
     );
}

export default Skill;