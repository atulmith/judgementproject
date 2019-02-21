import React from "react";
import { Link } from 'react-router-dom';

class HomeMenu extends React.Component {
  constructor(){
    super();

  }
  render() {
    var loggedin="Login";
    var adminuser=this.props.useradmin.adminuser;
    //alert("adminuser="+JSON.stringify(adminuser));
    if(adminuser && adminuser._id){
      loggedin="Logout ("+adminuser.name+")";
    }
    return (
      <div>
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration={400}
          data-w-id="25a72f65-8f9d-3ea7-d5ab-87bd81a775a4"
          className="navbar-2 w-nav"
        >
          <div className="container-5 w-container">
            <a href="#" className="brand w-nav-brand">
              <img
                src="/images/logo-black-query.png"
                width={97}
                alt="altimage"
                className="image-4"
              />
            </a>
            <nav role="navigation" className="w-nav-menu">
               
              
              <a href="#" className="w-nav-link">
                Support
              </a>
              
              <Link to="/useradmin/login" className="loginnavlink w-nav-link">{loggedin}</Link>
              
              <Link to="/useradmin/register" className="w-nav-link">Register</Link>
            </nav>
            <div className="w-nav-button">
              <div className="w-icon-nav-menu" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMenu;
