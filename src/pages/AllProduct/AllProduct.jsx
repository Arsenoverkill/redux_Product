import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import add_product from "../../images/add_product.svg";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import "./AllProduct.css";
import { useState } from "react";
const AllProduct = ({ value }) => {
  const product = useSelector((state) => state.product.product);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("all");
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [rename, setRename] = useState(false);
  let searchProduct = product.filter((el) => {
    return el.name.includes(value);
  });
  function filterProduct() {
    let res = product.filter((el) => {
      return el.category == category;
    });
    setCategoryProduct(res);
  }
  useEffect(() => {
    filterProduct();
  }, [categoryProduct, searchProduct]);
  return (
    <div id="allPoduct">
      <button
        style={{
          position: "absolute",
          right: "50px",
          top: "100px",
          display: rename ? "none" : "block",
        }}
        onClick={() => {
          setRename(true);
        }}
      >
        Изменить
      </button>
      <button
        style={{
          position: "absolute",
          right: "50px",
          top: "100px",
          display: rename ? "block" : "none",
          background:
            "radial-gradient(100% 100% at 100% 0%, rgb(203 39 39) 0%, rgb(243 94 94) 100%)",
          boxShadow: "none",
        }}
        onClick={() => {
          setRename(false);
        }}
      >
        Отменить изминение
      </button>
      <div className="links">
        <p
          onClick={() => {
            setActive(1);
            setCategory("all");
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
            setCategory("vegetable");
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
            setCategory("meat");
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
            setCategory("drink");
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
            setCategory("sweet");
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
            flexWrap: "wrap",
            gap: "10px",
          }}
          className="home_blocks"
        >
          {value ? (
            searchProduct.length > 0 ? (
              searchProduct.map((el) => (
                <div
                  style={{
                    width: "18pc",
                    height: "25pc",
                    marginTop: "30px",
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
                  <h1>{el.price}</h1>
                  <div className="edit_delet">
                    <h3>
                      {el.name.length > 20 ? el.name.slice(0, 20) : el.name}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        display: rename ? "flex" : "none",
                      }}
                    >
                      <button className="delet">
                        <MdDelete />
                      </button>
                      <button className="edit">
                        <MdEdit />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="not_product">
                <h1>Ничего не найдено</h1>
                <img
                  src="https://1000logos.net/wp-content/uploads/2023/10/Shrug-Smile-Emoji.png"
                  alt=""
                />
              </div>
            )
          ) : category == "all" ? (
            product.map((el) => (
              <div
                style={{
                  width: "18pc",
                  height: "25pc",
                  marginTop: "30px",
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
                <div className="edit_delet">
                  <h3>
                    {el.name.length > 20 ? el.name.slice(0, 20) : el.name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      display: rename ? "flex" : "none",
                    }}
                  >
                    <button className="delet">
                      <MdDelete />
                    </button>
                    <button className="edit">
                      <MdEdit />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            categoryProduct.map((el) => (
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
                <div className="edit_delet">
                  <h3>
                    {el.name.length > 20 ? el.name.slice(0, 20) : el.name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      display: rename ? "flex" : "none",
                    }}
                  >
                    <button className="delet">
                      <MdDelete />
                    </button>
                    <button className="edit">
                      <MdEdit />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
