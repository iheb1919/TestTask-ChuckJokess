import React from "react";
import '../../styles/navbar.scss'
//import { useNavigate } from 'react-router-dom'

function Navbar() {
  //const navigate = useNavigate()
  const menushow=()=>{
    const ull = document.getElementById("ulNavbar");
      ull.classList.toggle('showtab')
  }
  const submenushow=()=>{
    const ull = document.getElementById("navsubul");
      ull.classList.toggle('navsubulshow')
  }
  return (
    <nav className="navbar">
  
    <input type="checkbox" class="menu-btn" id="menu-btn"/>
          <label for="menu-btn" class="menu-icon">
            <span class="navicon" onClick={()=>menushow()}></span>
          </label>
    <ul className=" ulNavbar " id="ulNavbar">
      <li><a  href="/">SO FUNKTIONIERT'S</a></li>
      <li><a href="#">SONDERANGEBOTE</a></li>
      <li className="activeLi "  onClick={()=>submenushow()}>
        <div className="ul2">
      <img src={require("../../assets/assets_Homework_Front-End_01/shape.png")}/>

         <a href="#">MEIN BEREICH</a> 
         <img src={require("../../assets/assets_Homework_Front-End_01/path_2.png")}/>
         </div>
      <ul className="navsubul " id="navsubul">
              <li className="lisub"><a>My Published jokes</a></li>
              <li className="lisub"><a>My saved jokes</a></li>
              <li className="lisub"><a>Account infromation</a></li>
              <li className="lisub"> <a>Publich new joke</a></li>
            </ul>
      
      </li>

    </ul>
  </nav>
            
         
    
  );
}

export default Navbar;
