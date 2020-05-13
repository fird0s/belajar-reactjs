import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';


function ProductDetail() {
  return (
    <div className="page-content-wrapper">
      <div className="product-slides owl-carousel owl-loaded owl-drag">
      <div className="owl-stage-outer"><div className="owl-stage"><div className="owl-item active" ><div className="single-product-slide" ></div></div><div className="owl-item" ><div className="single-product-slide" ></div></div><div className="owl-item" ><div className="single-product-slide" ></div></div></div></div><div className="owl-nav"><div className="owl-prev disabled"><i className="lni-chevron-left"></i></div><div className="owl-next"><i className="lni-chevron-right"></i></div></div><div className="owl-dots"><div className="owl-dot active"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div></div></div>
      <div className="product-description pb-3">
        <div className="product-title-meta-data bg-white mb-3">
          <div className="container d-flex justify-content-between">
            <div className="p-title-price">
              <h6 className="mb-1">Flower Ceramic Pots</h6>
              <p className="sale-price mb-0">$38<span>$41</span></p>
            </div>
          </div>
        </div>

        <div className="cart-form-wrapper bg-white ">
          <div className="container">
            <form className="cart-form" action="#" method="post">
              <input className="form-control" type="text" id="qty2" step="1" min="1" max="12" name="quantity" value="1" />
              <button className="btn btn-warning" type="submit">+ Keranjang</button>
            </form>
          </div>
        </div>
        <div className="p-specification bg-white mb-3 py-3">
          <div className="container">
            <h6>Specifications</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum? Id, culpa? At officia quisquam laudantium nisi mollitia nesciunt, qui porro asperiores cum voluptates placeat similique recusandae in facere quos vitae?</p>
            <ul>
              <li>100% good reviews</li>
              <li>7 days returns</li>
              <li>Warranty not aplicable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProductDetail;
