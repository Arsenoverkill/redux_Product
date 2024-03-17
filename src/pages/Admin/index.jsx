import React, { useState } from "react";
import "./Admin.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT } from "../../redux/actionTypes";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("meat");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function creatData() {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    if (name !== "" && image !== "" && price !== "" && category !== "") {
      let clone = data.some((el) => {
        return image == el.image;
      });
      if (clone == false) {
        let newObj = {
          name,
          image,
          price,
          count: 1,
          category,
          id: Date.now(),
        };
        data.push(newObj);
        dispatch({ type: ADD_PRODUCT, payload: newObj });
        localStorage.setItem("product", JSON.stringify(data));
        setImage("");
        setName("");
        setPrice("");
        setCategory("");
      } else {
        alert("В магазине уже есть этот продукт !!!");
      }
    } else {
      alert("Заполните все поле !!!");
    }
  }
  function leaveAdmin() {
    let password = JSON.parse(localStorage.getItem("password")) || [];
    password[0] = false;
    localStorage.setItem("password", JSON.stringify(password));
  }
  return (
    <div id="admin">
      <img
        src="https://fons.pibig.info/uploads/posts/2023-06/1686131064_fons-pibig-info-p-fon-dlya-produktsii-pinterest-14.jpg"
        alt=""
        className="fon"
      />
      <button
        onClick={() => {
          leaveAdmin();
          navigate("/password");
        }}
        className="leave"
      >
        Выйти с админа
      </button>
      <div className="admin">
        <input
          onChange={(e) => setName(e.target.value.trim())}
          class="input"
          name="text"
          type="text"
          placeholder="Name..."
          value={name}
        />
        <input
          onChange={(e) => setImage(e.target.value.trim())}
          class="input"
          name="text"
          type="text"
          placeholder="URL..."
          value={image}
        />
        <input
          onChange={(e) => setPrice(e.target.value.trim())}
          class="input"
          name="text"
          type="number"
          placeholder="Price..."
          value={price}
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          id=""
          className="select_category"
          value={category}
        >
          <option value="meat">Meat</option>
          <option value="vegetable">Vegetable</option>
          <option value="drink">Drink</option>
          <option value="sweet">Sweet</option>
          <option value="product">Product</option>
        </select>
        <button onClick={creatData}>CREATE</button>
      </div>
    </div>
  );
};

export default Admin;
