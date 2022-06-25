import React, { useEffect, useState } from "react";
import Header from "./Header";
import Product from "./Product";
import Data from "./Data";

import "./Styles/Home.css";

function Home() {
  
  return (
    <div>
      <Header />
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61nwy86mdaL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product id ="12321341" title="The lean startup" price={29.99} image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg" rating={5} />
          <Product id ="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} image="https://m.media-amazon.com/images/I/71bFtbpmddL._AC_UY218_.jpg" rating={4}/>
        </div>

        <div className="home__row">
          <Product id ="4903850" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://m.media-amazon.com/images/I/71mU5rpECpL._AC_SL1385_.jpg" rating={3}/>
          <Product id ="23445930" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} image="https://m.media-amazon.com/images/I/61IxWv3ecpL._AC_UY218_.jpg" rating={5} />
          <Product id ="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} image="https://m.media-amazon.com/images/I/91X91LF4xxL._AC_SY450_.jpg" rating={4}/>
        </div>

        <div className="home__row">
        <Product id ="4903850" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra wide Dual WQHD 5120 x 1440" price={1094.99} image="https://m.media-amazon.com/images/I/71mU5rpECpL._AC_SL1385_.jpg" rating={4}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
