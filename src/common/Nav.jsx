import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  //logout function variable
  const logout=()=>{
    localStorage.clear();
    props.setUser(null);
  }

  //create variable to hold the data
  let buttons, profile;
  if(localStorage.getItem('token')){
    //change the content of button
    buttons = (
      <div>
        <Link className='nav-link active  text-white' to="/" onClick={logout}>Logout</Link>
      </div>
    );
    profile = (
      <div>
        <Link className="nav-link  text-white" to="/profile">Profile</Link>
      </div>
    );
  }
  else{
    buttons=(
      <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link  text-white" to="/register">Register</Link>
          </li>
         
        </ul>
      </div>
    );
  }




  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand  text-white" to="/">Kodebrewer Bootcamper</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white"  to="/">Home</Link>
          </li>
          <li className="nav-item">
            {profile}
          </li>
         
        </ul>
        <span className="navbar-text  text-white" >
        {buttons}
        </span>
      </div>
    </div>
  </nav></div>
  )
}

export default Nav