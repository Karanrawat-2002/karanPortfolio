import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Academic from "./Academy";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './navbar';
import Connect from "./Connect";
import Personal from "./Personal";
import Hobbie from "./Hobbies";
import Skill from "./Skill";
import HomePage from "./HomePage";
import Project from "./Project"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/academic' element={<Academic/>}/>
         <Route path='/connect' element={<Connect/>}/>
         <Route path='/personal' element={<Personal/>}/>
         <Route path='/hobbie' element={<Hobbie/>}/>
         <Route path='/skill' element={<Skill/>}/>
         <Route path='/project' element={<Project/>}/>
      </Routes>
    </BrowserRouter> 
   </React.StrictMode>
);


reportWebVitals();
