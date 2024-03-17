import React, { useState } from "react";
import "./Password.css";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [eye, setEye] = useState(false);
  const [name, setName] = useState(true);
  const [code, setCode] = useState(true);
  const [inputName, setInputName] = useState("");
  const [inputCode, setInputCode] = useState("");

  const navigate = useNavigate();

  function Examination() {
    let password = JSON.parse(localStorage.getItem("password")) || [];
    if (inputName == "product" && inputCode == "shop") {
      if (password.length > 0) {
        password[0] = true;
      } else{
        password.push(true)
      };
      navigate("/admin");
      localStorage.setItem("password", JSON.stringify(password));
    } else if (inputName !== "product" && inputCode !== "shop") {
      setCode(false);
      setName(false);
    } else if (inputName !== "product" && inputCode == "shop") {
      setName(false);
      setCode(true);
    } else if (inputName == "product" && inputCode !== "shop") {
      setCode(false);
      setName(true);
    }
  }
  return (
    <div className="password">
      <div className="password_block">
        <h1>Вход</h1>
        <div className="code">
          <input
            type="text"
            name=""
            id=""
            className="input-3"
            placeholder="Name..."
            onChange={(e) => setInputName(e.target.value)}
            style={{
              border: name ? "1px solid #ccc" : "1px solid red",
            }}
          />
          <p
            style={{
              display: name ? "none" : "block",
              top: "41px",
              left: "2px",
            }}
          >
            Указанное вами имя не правильный !!!
          </p>
          <input
            type={eye ? "password" : "text"}
            name=""
            id=""
            className="input-3"
            placeholder="Password..."
            style={{
              width: eye ? "280px" : "300px",
              border: code ? "1px solid #ccc" : "1px solid red",
              marginTop: "27px",
            }}
            onChange={(e) => setInputCode(e.target.value)}
          />
          <p
            style={{
              display: code ? "none" : "block",
              top: "109px",
              left: "2px",
            }}
          >
            Указанное вами пароль не правильный !!!
          </p>
          <FaEye
            style={{
              position: "absolute",
              fontSize: "20px",
              right: "12px",
              top: "77px",
              cursor: "pointer",
            }}
            onClick={() => {
              setEye(!eye);
            }}
          />
          <button
            style={{
              marginTop: "30px",
            }}
            onClick={Examination}
          >
            Вход
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
