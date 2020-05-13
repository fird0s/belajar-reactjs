import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';


function Footer() {
  return (
      <div className="footer-nav-area" id="footerNav">
        <div className="container h-100 px-0">
          <div className="suha-footer-nav h-100">
            <ul className="h-100 d-flex align-items-center justify-content-between">
              <li className="active"><Link to="/"><i className="lni-home"></i>Beranda</Link></li>
              <li><a href="message.html"><i className="lni-support"></i>Order</a></li>
              <li><a href="cart.html"><i className="lni-cart"></i>Promo</a></li>
              <li><a href="pages.html"><i className="lni-heart"></i>Akun</a></li>
            </ul>
          </div>
        </div>
      </div>
  );
}


export default Footer;
