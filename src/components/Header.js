import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return <header>
      <div className="container">
          <div className="wrapper">
              <div className="inner-header">
                  <div className="logo">
                      <Link to="/">MAGDA</Link>
                  </div>
                  <div className="menu">
                      <button>menu</button>
                  </div>
              </div>
          </div>
      </div>
  </header>;
};

export default Header;