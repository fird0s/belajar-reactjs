import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import Product1 from '../img/product/1.jpg'

import Slide1 from '../img/bg-img/1.jpg';

const divStyle = {
    backgroundImage: 'url(' + Slide1 + ')',
  };


export default class Home extends React.Component {
    render(){
            return (
                <div>
                    {/*  Carousel */}
                    <div className="page-content-wrapper">
                        <div className="hero-slides owl-carousel">
                        <div className="single-hero-slide" style={divStyle}>
                            <div className="slide-content h-100 d-flex align-items-center">
                            <div className="container">
                                <h4 className="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">Amazon Echo</h4>
                                <p className="text-white" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms">3rd Generation, Charcoal</p><a className="btn btn-primary btn-sm" href="#" data-animation="fadeInUp" data-delay="800ms" data-wow-duration="1000ms">Buy Now</a>
                            </div>
                            </div>
                        </div>

                        <div className="single-hero-slide" style={divStyle}>
                            <div className="slide-content h-100 d-flex align-items-center">
                            <div className="container">
                                <h4 className="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">Light Candle</h4>
                                <p className="text-white" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms">Now only $22</p><a className="btn btn-success btn-sm" href="#" data-animation="fadeInUp" data-delay="500ms" data-wow-duration="1000ms">Buy Now</a>
                            </div>
                            </div>
                        </div>

                        <div className="single-hero-slide" style={divStyle}>
                            <div className="slide-content h-100 d-flex align-items-center">
                            <div className="container">
                                <h4 className="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">Best Furniture</h4>
                                <p className="text-white" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms">3 years warranty</p><a className="btn btn-danger btn-sm" href="#" data-animation="fadeInUp" data-delay="800ms" data-wow-duration="1000ms">Buy Now</a>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    {/*  .Carousel */}
                    <br />

                    {/*  Produk Terlaris */}
                    <div className="top-products-area clearfix">
                        <div className="container">
                            <div className="section-heading d-flex align-items-center justify-content-between">
                                <h6 className="ml-1">Produk Terlaris</h6>
                                <a className="btn btn-success btn-sm" href="shop-grid.html">Lihat Semua >>></a>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="card top-product-card mb-3">
                                    <div className="card-bodya">
                                        <Link className="product-thumbnail d-block" to="/product_detail">
                                            <img className="mb-2" src={Product1} alt="" />
                                        </Link>
                                        <div className="ml-2">
                                            <a className="product-title" href="/product_detail">Mentega</a>
                                            <p className="sale-price">Rp. 13,000</p>
                                            <a className="btn btn-success btn-sm add2cart-notify" href="#"><i className="lni-plus"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="card top-product-card mb-3">
                                    <div className="card-bodya">
                                        <Link className="product-thumbnail d-block" to="/product_detail">
                                            <img className="mb-2" src={Product1} alt="" />
                                        </Link>
                                        <div className="ml-2">
                                            <a className="product-title" href="/product_detail">Mentega</a>
                                            <p className="sale-price">Rp. 13,000</p>
                                            <a className="btn btn-success btn-sm add2cart-notify" href="#"><i className="lni-plus"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="card top-product-card mb-3">
                                    <div className="card-bodya">
                                        <Link className="product-thumbnail d-block" to="/product_detail">
                                            <img className="mb-2" src={Product1} alt="" />
                                        </Link>
                                        <div className="ml-2">
                                            <a className="product-title" href="/product_detail">Mentega</a>
                                            <p className="sale-price">Rp. 13,000</p>
                                            <a className="btn btn-success btn-sm add2cart-notify" href="#"><i className="lni-plus"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="card top-product-card mb-3">
                                    <div className="card-bodya">
                                        <Link className="product-thumbnail d-block" to="/product_detail">
                                            <img className="mb-2" src={Product1} alt="" />
                                        </Link>
                                        <div className="ml-2">
                                            <a className="product-title" href="/product_detail">Mentega</a>
                                            <p className="sale-price">Rp. 13,000</p>
                                            <a className="btn btn-success btn-sm add2cart-notify" href="#"><i className="lni-plus"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="card top-product-card mb-3">
                                    <div className="card-bodya">
                                        <Link className="product-thumbnail d-block" to="/product_detail">
                                            <img className="mb-2" src={Product1} alt="" />
                                        </Link>
                                        <div className="ml-2">
                                            <a className="product-title" href="/product_detail">Mentega</a>
                                            <p className="sale-price">Rp. 13,000</p>
                                            <a className="btn btn-success btn-sm add2cart-notify" href="#"><i className="lni-plus"></i></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  .Produk Terlaris */}
                    <br/>
                    <br/>
                    <br/>


                </div>
              )
    }
}
