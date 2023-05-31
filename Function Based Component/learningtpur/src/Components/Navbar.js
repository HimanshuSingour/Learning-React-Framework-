import React from "react";

function Navbar() {
  return (

<nav className="navbar navbar-dark bg-dark navbar navbar-expand-lg fixed-bottom">

  
  <a className="navbar-brand" >Navbar</a>
 
  <div className="collapse navbar-collapse">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/home">Home</a>
      <a className="nav-item nav-link active" href="/aboutus">About Us</a>
    </div>
  </div>
</nav>

  )
}

export default Navbar;
