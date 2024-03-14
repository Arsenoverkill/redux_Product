import React from "react";
import "./Header.scss";
import homeLogo from "../../images/home.png";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";

const Header = () => {
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
                style={{
                  width: "110px",
                  objectFit: "cover",
                }}
                src="https://png.pngtree.com/png-vector/20230108/ourmid/pngtree-online-shop-logo-design-with-modern-concept-png-image_6555719.png"
                alt=""
              />
              <div className="homeLips">
                <NavLink to="/">
                  <img src={homeLogo} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <NavLink
              to="/basket/"
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: "black",
              }}
            >
              <SlBasket />
            </NavLink>
            <NavLink to="/admin">
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
