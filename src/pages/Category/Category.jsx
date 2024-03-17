import React, { useEffect, useState } from "react";
import "./Category.css";
import { useSelector } from "react-redux";
import add_product from "../../images/add_product.svg";
import { NavLink, useParams } from "react-router-dom";

const Category = () => {
  const product = useSelector((s) => s.product.product);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const { category } = useParams();
  function filterProduct() {
    let res = product.filter((el) => {
      return el.category == category;
    });
    setCategoryProduct(res);
  }

  useEffect(() => {
    filterProduct();
  }, []);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "70px",
      }}
    >
      <div className="category_blocks">
        {categoryProduct.map((el) => (
          <div
            style={{
              margin: "20px 45px",
            }}
            className="home_block"
          >
            <img className="product" src={el.image} alt="" />
            <NavLink to={`/detal/${el.id}`}>
              <img className="add" src={add_product} alt="" />
            </NavLink>
            <h1>{el.price}$</h1>
            <h3>{el.name.length > 20 ? el.name.slice(0, 20) : el.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
