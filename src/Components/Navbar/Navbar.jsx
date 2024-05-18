import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

  const [menu, setMenu] = useState("M & M")

  const [navbar, setNavbar] = useState(true)

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <><div className='dropdown' onClick={() => setNavbar(!navbar)}>
      <div className="dropdown-content">
        {navbar === false ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
        <h1 className='menu-text'>{menu}</h1>
      </div>
    </div>

        <div className="navbar">
          <div className={`nav-menu${navbar ? "open" : ""}`}>

            <ul className="list-items">
              <li className="item" onClick={() => { setMenu("M & M"); setNavbar(!navbar) ;scrollToTop()}}>
                <Link to="/">Home</Link>
                {menu === "M & M" ? <div className='active'></div> : <></>}
              </li>
              <li className="item" onClick={() => { setMenu("Wedding Party"); setNavbar(!navbar);scrollToTop() }}>
                <Link to="/wedding-party">Wedding Party</Link>
                {menu === "Wedding Party" ? <div className='active'></div> : <></>}
              </li>
              {/* <li className="item" onClick={() => { setMenu("Accomodations"); setNavbar(!navbar);scrollToTop() }}>
                <Link to="/accommodations">Accomodations & Pick-up</Link>
                {menu === "Accomodations" ? <div className='active'></div> : <></>}

              </li> */}
              <li className="item" onClick={() => { setMenu("Recommendations"); setNavbar(!navbar);scrollToTop() }}>
                <Link to="/stay-pics">Recommendations</Link>
                {menu === "Recommendations" ? <div className='active'></div> : <></>}
              </li>
              
            </ul>
          </div>
        </div>
    </>
  );
};

export default Navbar;
