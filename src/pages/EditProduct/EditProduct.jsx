import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT, SAVE_PRODUCT } from "../../redux/actionTypes";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("meat");
  const editProduct = useSelector((s) => s.product.edit);
  const dispatch = useDispatch();

  const navigate = useNavigate()
  function getEdit() {
    setName(editProduct.name);
    setPrice(editProduct.price);
    setImage(editProduct.image);
    setCategory(editProduct.category);
  }
  useEffect(() => {
    getEdit();
  }, []);
  return (
    <div className="admin">
      <input
        onChange={(e) => setName(e.target.value)}
        class="input"
        name="text"
        type="text"
        placeholder="Name..."
        value={name}
      />
      <input
        onChange={(e) => setImage(e.target.value)}
        class="input"
        name="text"
        type="text"
        placeholder="URL..."
        value={image}
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
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
      <button onClick={()=>{
        dispatch({type:SAVE_PRODUCT,payload:{name,price,image,id:editProduct.id,category}})
        navigate('/allProduct')
      }}>SAVE</button>
    </div>
  );
};

export default Edit;
