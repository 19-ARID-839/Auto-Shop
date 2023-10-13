import React from "react";
import Cards from "./Cards";
import Data from "./Data";
import "./Product.css";
const Product = () => {
  return (
    <>
      <div className="upper-title">
        <div className="heading">Products</div>
        <div className="container line">
          <hr></hr>
        </div>
      </div>
      <div className="cards-container">
        {Data.map((item, index) => (
          <div className="cards">
            <Cards
              key={index}
              img={item.img}
              title={item.title}
              text={item.text}
              button1={item.button1}
              button2={item.button2}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
