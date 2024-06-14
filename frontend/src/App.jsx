import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import HomePage from './pages/Home';
import Signup from './pages/Signup';
import Mainpage from './pages/Mainpage';
import Logout from './pages/Logout'
import Login from './pages/Login';
import Pokemonbuilder from './pages/Pokemonbuilder';
import Pokemongame from './pages/pokemongame';

function App() {

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [userToken, setUserToken] = useState(null)

  const handleToken = (token) => {
    setFormData({ username: '', password: '' })
    setUserToken(token)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
          <Router>
            <Navbar />
            <Routes>

            <Route path="/" element={<HomePage/>} /> 
            <Route path="/Mainpage" element={<Mainpage/>} />     
            <Route path='/pokemonbuilder' element={<Pokemonbuilder/>} /> 
            <Route path='/Pokemongame' element={<Pokemongame/>} />         
            <Route path="/signup" element={<Signup handleInputChange={handleInputChange} formData={formData} /> } /> 
            <Route path="/login" element={<Login handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} />} /> 
            <Route path="/logout" element={<Logout userToken={userToken} setUserToken={setUserToken}/>} /> 
            </Routes>
          </Router>
  );
}

export default App;