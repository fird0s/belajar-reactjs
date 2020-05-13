import React from 'react';
import Logo from '../img/core-img/logo-small.png';
import PhotoProfile from '../img/bg-img/9.jpg';
import Slide1 from '../img/bg-img/1.jpg';
import Product1 from '../img/product/1.jpg'
import Header from './Header.js'
import ProductDetail from './ProductDetail'
// import '../assets/style.css'
import Footer from './Footer';
import Home from './Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation
} from "react-router-dom";



//#Write some like this in the App.js for example, since it's the main component:


class App extends React.Component {

  render () {
  return (
    <Router>
        <div>
            <Header />
            <Footer />
            <Route exact path="/" component={Home} />
            <Route path="/product_detail" component={ProductDetail} />
          
        </div>
    </Router>
  );
}
}




function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <br />
      <br />
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}



function ProductCategories() {
  return (
    <div class="product-catagories-wrapper pt-3">
        <div class="container">

          {/*<div class="section-heading">
                      <h6 class="ml-1">Product Category</h6>
                    </div> */}

          <div class="product-catagory-wrap">
            <div class="row">
              <div class="col-4">
                <div class="card mb-3 catagory-card">
                  <div class="card-body"><a href="catagory.html"><i class="lni-slim"></i><span>Sayuran</span></a></div>
                </div>
              </div>
              <div class="col-4">
                <div class="card mb-3 catagory-card">
                  <div class="card-body"><a href="catagory.html"><i class="lni-apartment"></i><span>Buah Segar</span></a></div>
                </div>
              </div>
              <div class="col-4">
                <div class="card mb-3 catagory-card">
                  <div class="card-body"><a href="catagory.html"><i class="lni-burger"></i><span>Terlaris</span></a></div>
                </div>
              </div>
              <div class="col-4">
                <div class="card mb-3 catagory-card">
                  <div class="card-body"><a href="catagory.html"><i class="lni-cup"></i><span>Promo</span></a></div>
                </div>
              </div>
              <div class="col-4">
                <div class="card mb-3 catagory-card">
                  <div class="card-body"><a href="catagory.html"><i class="lni-tshirt"></i><span>Sembako</span></a></div>
                </div>
              </div>
              <div class="col-4">
                <div class="card mb-3 catagory-card">
                  <div class="card-body"><a href="catagory.html"><i class="lni-island"></i><span>Travel</span></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default App;
