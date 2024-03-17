import React, { useEffect, useState } from "react";
import "./DetalProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import add_product from "../../images/add_product.svg";
import { ADD_BASKET } from "../../redux/actionTypes";

const DetalProduct = () => {
  const product = useSelector((s) => s.product.product);
  const [detalProduct, setDetalProduct] = useState([]);
  const [recomend, setRecomend] = useState("");
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    let res = product.filter((el) => {
      return el.id == id;
    });
    detalProduct.map((el) => {
      setRecomend(el.category);
    });
    setDetalProduct(res);
  }, [detalProduct]);

  function setOrder(id, count) {
    let order = JSON.parse(localStorage.getItem("order")) || [];
    let res = order.some((el) => {
      return el.id == id;
    });
    if (res == false) {
      order.push(detalProduct[0]);
      localStorage.setItem("order", JSON.stringify(order));
      dispatch({ type: ADD_BASKET, payload: detalProduct[0] });
      setAlert(true);
    } else {
      order.map((el) => {
        if (el.id == id) {
          return (el.count += count);
        }
      });
      localStorage.setItem("order", JSON.stringify(order));
      setAlert(true);
    }
  }
  return (
    <div className="container">
      <div className="detal_blocks">
        {detalProduct.map((el) => (
          <div>
            <div className="detal_block">
              <img className="detal_product" src={el.image} alt="" />
              <div style={{ marginTop: "40px" }}>
                <h2 className="detal_name">{el.name}</h2>
                <p className="detal_plot">{el.plot}</p>
                <h1>{el.price * el.count}$</h1>
                <h2 className="detal_category">Category: {el.category}</h2>
                <div className="plus_minus">
                  <button
                    onClick={() => {
                      if (el.count > 1) {
                        return (el.count -= 1);
                      }
                    }}
                    class="button"
                  >
                    -
                  </button>
                  <h4>{el.count}</h4>
                  <button onClick={() => (el.count += 1)} class="button">
                    +
                  </button>
                </div>
                <div className="btns">
                  <button className="button-2">
                    {" "}
                    Купить<span></span>
                  </button>
                  <button
                    onClick={() => {
                      setOrder(el.id, el.count);
                      // navigate("/order");
                    }}
                    className="button-2"
                  >
                    {" "}
                    Добавить в корзину<span></span>
                  </button>
                </div>
              </div>
            </div>
            <h1
              style={{
                margin: "60px 0",
              }}
            >
              Recomend product
            </h1>
            <div className="recomend">
              {product.map((el) => {
                if (el.category == recomend) {
                  return (
                    <div>
                      <div className="home_block">
                        <img className="product" src={el.image} alt="" />
                        <NavLink to={`/detal/${el.id}`}>
                          <img className="add" src={add_product} alt="" />
                        </NavLink>
                        <h1>{el.price}$</h1>
                        <h3>
                          {el.name.length > 20 ? el.name.slice(0, 20) : el.name}
                        </h3>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: alert ? "flex" : "none",
        }}
        class="success"
      >
        <div class="success__icon">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
              fill="#393a37"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="success__title">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: "0 10px",
              }}
            >
              Товар добавлень в корзину
            </p>
            <img
              style={{
                width: "15%",
                marginBottom: "10px",
              }}
              src="https://m.media-amazon.com/images/I/715vwvP5ZEL.png"
              alt=""
            />
          </div>
        </div>
        <div
          onClick={() => {
            setAlert(false);
          }}
          class="success__close"
        >
          <svg
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
              fill="#393a37"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DetalProduct;
