import React from 'react';
import { Link } from 'react-router-dom';
function Connect() {
    return ( 
        <>
        <div className='connectLink' >
         <Link className='connectHome'  to="/" ><i class="fa-solid fa-arrow-right"></i>home</Link>
            <div className='options'>
                <a className='connect' href='https://www.linkedin.com/in/karan-rawat-32b33a353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                   <i className='fa-brands fa-linkedin-in'></i>
                   <p>linkedin</p>
                </a>
                <a className='connect' href='https://www.instagram.com/karanrawat2002/'>
                   <i className='fa-brands fa-instagram' id='insta'></i><p>Instagram</p>
                </a>
                <a className='connect' href='https://t.me/Karanrawat2002/'>
                   <i className='fa-brands fa-telegram'></i>
                   <p>Telegram</p>
                </a>
                <p className='connect' >
                   <i class="fa-regular fa-envelope" id='gmail'></i>
                   <p id='gmailId'>rawatkaran0017@gmail.com</p>
                </p>
            </div>
        </div>
        </>
     );
}

export default Connect;