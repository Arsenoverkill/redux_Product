import React, { useEffect, useState } from "react";
import "./Order.css";
import { useDispatch, useSelector } from "react-redux";
import { DEL_BASKET } from "../../redux/actionTypes";

const Order = () => {
  const order = useSelector((state) => state.product.order);
  const dispatch = useDispatch();
  return (
    <div id="order">
      <div className="container">
        <div className="order">
          {order.map((el) => (
            <div>
              <div className="order1">
                <div className="order-nav">
                  <div className="div">
                    <img
                      style={{
                        marginLeft: "-2pc",
                      }}
                      src={el.image}
                      alt="img"
                    />
                    <img
                      style={{
                        position: "absolute",
                        marginLeft: "-5pc",
                        height: "2.6pc",
                        width: "3pc",
                        marginLeft: "16.9pc",
                        marginTop: "-3.1pc",
                        opacity: "23pc",
                        borderRadius: "0 10px 0 0",
                        border: "2px solid #DEDEDE",
                        background: "rgb(196, 249, 249)",
                      }}
                      className="Ptihcka"
                      src="https://abrakadabra.fun/uploads/posts/2022-02/1643986799_2-abrakadabra-fun-p-galochka-dlya-prezentatsii-bez-fona-3.jpg"
                      alt=""
                    />
                  </div>
                  <h3
                    onClick={() =>
                      dispatch({ type: DEL_BASKET, payload: el.id })
                    }
                  >
                    Remove product
                  </h3>
                  <h2>{el.price}$</h2>
                  <h1>{el.name}</h1>
                </div>
              </div>
              <hr
                style={{
                  width: "180vh",
                  border: "solid 1.1px #DEDEDE",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
