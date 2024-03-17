import React, { useState } from "react";
import "./Header.scss";
import homeLogo from "../../images/home.png";
import { SlBasket } from "react-icons/sl";
import { NavLink, useNavigate } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Header = ({ setValue }) => {
  const order = useSelector((state) => state.product.order);
  const password = JSON.parse(localStorage.getItem("password")) || [];
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="header"
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <img
                onClick={() => {
                  navigate("/allProduct");
                }}
                style={{
                  width: "13%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src="https://www.unisg.it/assets/goodfood-logo-no-bg.png"
                alt=""
              />
              <div className="homeLips">
                <NavLink to="/">
                  <img src={homeLogo} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div class="container-input">
            <input
              type="text"
              placeholder="Search"
              name="text"
              class="input-2"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onClick={() => {
                navigate("/allProduct");
              }}
            />
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <NavLink
              to="/basket"
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: "black",
              }}
            >
              <div className="quintity-order">
                {order.length > 0 ? order.length : ""}
              </div>
              <SlBasket
                style={{
                  fontSize: "30px",
                }}
              />
            </NavLink>
            <NavLink to={password[0] ? "/admin" : "password"}>
              <RiAdminFill
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                  color: "black",
                }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
