import { Navigate } from "react-router-dom"
import './logout.css'

export default function Logout({setUserToken, userToken}) {

  const handleLogout = (e) => {
    e.preventDefault()
    setUserToken(null)
  }

  if(!userToken) {
    return <Navigate to="/login"/>
  } else {
    return(
      <>
      <div className="logoutcontianer">   <p className="logouttext">Are you sure you want to logout?</p>
        <button className="logoutbutton" onClick={handleLogout}>Logout</button></div>
      
      </>
    )
  }

}