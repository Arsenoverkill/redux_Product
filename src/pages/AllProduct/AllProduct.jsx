import React from "react";
import { NavLink } from "react-router-dom";
import add_product from "../../images/add_product.svg";
import { useSelector } from "react-redux";
import "./AllProduct.css";
import { useState } from "react";
const AllProduct = () => {
  const product = useSelector((state) => state.product.product);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState('all');
  return (
    <div id="allPoduct">
      <div className="links">
        <p
          onClick={() => {
            setActive(1);
            setCategory('all')
          }}
          style={{
            color: active == 1 ? "#2382AA" : "",
            borderBottom: active == 1 ? "3px solid #2382AA" : "",
          }}
        >
          All
        </p>
        <p
          onClick={() => {
            setActive(2);
          }}
          style={{
            color: active == 2 ? "#2382AA" : "",
            borderBottom: active == 2 ? "3px solid #2382AA" : "",
          }}
        >
          Fruits
        </p>
        <p
          onClick={() => {
            setActive(3);
          }}
          style={{
            color: active == 3 ? "#2382AA" : "",
            borderBottom: active == 3 ? "3px solid #2382AA" : "",
          }}
        >
          Meats
        </p>
        <p
          onClick={() => {
            setActive(4);
          }}
          style={{
            color: active == 4 ? "#2382AA" : "",
            borderBottom: active == 4 ? "3px solid #2382AA" : "",
          }}
        >
          Drinks
        </p>
        <p
          onClick={() => {
            setActive(5);
          }}
          style={{
            color: active == 5 ? "#2382AA" : "",
            borderBottom: active == 5 ? "3px solid #2382AA" : "",
          }}
        >
          Sweets
        </p>
      </div>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          className="home_blocks"
        >
          {product.map((el) => (
            <div
              style={{
                width: "18pc",
                height: "25pc",
              }}
              className="home_block"
            >
              <img className="product" src={el.image} alt="" />
              <NavLink to={`/detal/${el.id}`}>
                <img
                  style={{
                    marginLeft: "10px",
                  }}
                  className="add"
                  src={add_product}
                  alt=""
                />
              </NavLink>
              <h1>{el.price}$</h1>
              <h3>{el.name.length > 20 ? el.name.slice(0, 20) : el.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
