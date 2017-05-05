import React from 'react';
import "../style/Pricings.css";

const Pricings = () => (
  <div className="price table">
    <div className="price-row">

      <div className="price-col">
        <div className="recommanded-product"></div>
          <div className="hey">
            <div className="price-header">
              <div className="header-content">
                <div>SAT Live Online Essentials</div>
                <div className="description">
              AVILABLE ONLINE ONLY
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="price-col">
        <div className="star-recommanded-product">OUR MOST POPULAR OPTION</div>
        <div className="price-header-dark">
          <div className="header-content">
            <div>SAT Live Online Essentials</div>
            <div className="description">
              AVILABLE ONLINE ONLY
            </div>
          </div>
        </div>
      </div>


      <div className="price-col">
        <div className="star-recommanded-product">OUR MOST POPULAR OPTION</div>
        <div className="price-header">
          <div className="header-content">
            <div>SAT Live Online Essentials</div>
            <div className="description">
              AVILABLE ONLINE ONLY
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

);

export default Pricings;
