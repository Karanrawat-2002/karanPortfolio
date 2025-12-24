
import { useState} from 'react';
import {Link} from "react-router-dom";
 function NavBar() {
    const [showList, setShowList]=useState(false);
    const navbarListShow=()=>{
       setShowList(!showList);
    }
    const closeList=()=>{
        console.log("it is working")
        setShowList(!showList); 
    }
    return ( 
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <img className='navimg' src='media/Picsart_25-10-08_13-02-30-190.jpg' alt=''/>
            <h5 className="heading">Resume</h5>
            <button onClick={navbarListShow}  className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse me-auto" id="navbarNav">
                <ul className="navbar-nav me-auto ">
                    <li className="nav-item">
                        <Link className='nav-link'  to="/"><i class="fa-solid fa-house icon"></i><br/>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/personal"><i class="fa-regular fa-user icon"></i><br/>Personal Info</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to="/academic"><i class="fa-solid fa-book icon"></i><br/>Acadamic Info</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/skill"><i class="fa-solid fa-brain icon"></i><br/>Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/project"><i class="fa-solid fa-diagram-project icon"></i><br/>Projects & Certi..</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/hobbie"><i class="fa-regular fa-heart icon"></i><br/>Hobbies</Link>
                    </li>
                    <li className="nav-item">                
                        <Link className="nav-link" to="/connect"><i class="fa-solid fa-comment-nodes icon"></i><br/>Connect with us</Link>
                    </li>
                 </ul> 
            </div>
        </div>
    </nav>
    {showList && <div class="dropdown">
        <Link onClick={closeList} className="nav-link" to="/">Home</Link>
        <Link onClick={closeList} className="nav-link" to="/personal">Personal Info</Link>
        <Link onClick={closeList} className="nav-link"  to="/academic">Acadamic Info</Link>
        <Link onClick={closeList} className="nav-link" to="/skill">Skills</Link>
        <Link onClick={closeList} className="nav-link" to="/project">Projects & Certi..</Link>
        <Link onClick={closeList} className="nav-link" to="/hobbie">Hobbies</Link>
        <Link onClick={closeList} className="nav-link" to="/connect">Connect with us</Link>
    </div>}
    </>
     );
 }
 export default NavBar;            