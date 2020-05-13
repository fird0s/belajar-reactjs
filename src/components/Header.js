import React from 'react';
import Logo from '../img/core-img/logo-small.png';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';


function Header() {
  return (
    <div className="header-area" id="headerArea">
        <div className="container h-100 d-flex align-items-center justify-content-between">
          <div className="logo-wrapper">
              <Link to="/">
                <img src={Logo} alt="Logo" />
               </Link>
          </div>
          <div className="top-search-form">
            <form>
                <input className="form-control" type="search" placeholder="Cari Produk" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
        </div>
      </div>
  );
}


export default Header;
