import React from "react";
import "./Order.css";
import { useSelector } from "react-redux";

const Order = () => {
  const order = useSelector((s) => s.product.order);
  return (
    <div>
      {order.map((el) => (
        <div>
          <h1>{el.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Order;
