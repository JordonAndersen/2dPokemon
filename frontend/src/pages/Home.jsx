import React from "react";
import { Link } from "react-router-dom"
import './home.css'

function HomePage() {
    return ( <><div className="jumbotron homecontianer">
    <h1 className="hometext">2dPokemon Project</h1>
    <p >This is my personal project to display everyting that I have learned while attending Code Platoon</p>
  
    <p>This project uses Django, React, Bootstrap, custom CSS. </p>
    <p>Please login</p>
    
            <Link className="homebutton" to="/login">Login</Link>
  </div></> );
}

export default HomePage;