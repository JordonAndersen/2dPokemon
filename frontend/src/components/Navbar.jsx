import { Link } from "react-router-dom"
import pokemonLogo from '../images/pokemon_logo.png';  
import './navbar.css'


const Navbar = () =>{
  return (
  <>
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top mb-5">
  <div className="container-fluid">
   <Link className="navbar-brand" to="/"><img  className="homelogo"src={pokemonLogo} alt="home"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
           <Link className="nav-link" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link"to="/logout">Logout</Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
  </>
  );
}
export default Navbar

