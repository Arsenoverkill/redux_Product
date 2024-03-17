import "./Home.css";
import fon1 from "../../images/Group 1.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import add_product from "../../images/add_product.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const product = useSelector((state) => state.product.product);
  const navigate = useNavigate();
  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <img
        src="https://fonoteka.top/uploads/posts/2022-02/1643880251_1-phonoteka-org-p-fon-dlya-letnego-menyu-1.jpg"
        alt=""
        className="home-fon"
      />
      <button
        onClick={() => {
          navigate("/allProduct");
        }}
        style={{
          margin: "30px 0 30px 50px",
          background: "#2382AA",
          border: "none",
          borderRadius: "10px",
          color: "white",
          padding: "15px 20px",
          fontSize: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          Поиск продуктов <IoSearchOutline />
        </div>
      </button>
      <div
        className="marquee"
        style={{
          display: "flex",
        }}
      >
        <img src={fon1} alt="" />
        <img
          style={{
            margin: "0 60px",
          }}
          src={fon1}
          alt=""
        />
        <img src={fon1} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "40px 150px 0 150px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h2>Categories </h2>
          <img
            style={{
              width: "50px",
              height: "50px",
            }}
            src="https://i.pinimg.com/originals/3d/c4/66/3dc46683ec3f6b87da2bb4b78fde993b.png"
            alt=""
          />
        </div>
        <NavLink to="/allProduct">
          <h2
            style={{
              cursor: "pointer",
              color: "blue",
            }}
          >
            See All
          </h2>
        </NavLink>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "100px",
          margin: "30px 0",
        }}
      >
        <div
          onClick={() => {
            navigate("/category/meat");
          }}
          className="category"
        >
          <div className="lips">
            <img
              style={{
                width: "130px",
              }}
              src="https://static.vecteezy.com/system/resources/previews/027/521/085/original/fresh-beef-isolated-on-transparent-background-raw-meat-cut-out-generative-ai-png.png"
              alt=""
            />
          </div>
          <h1>Meat</h1>
        </div>
        <div
          onClick={() => {
            navigate("/category/sweet");
          }}
          className="category"
        >
          <div className="lips">
            <img
              style={{
                width: "130px",
              }}
              src="https://imgpng.ru/d/chocolate_PNG97153.png"
              alt=""
            />
          </div>
          <h1>Sweets</h1>
        </div>
        <div
          onClick={() => {
            navigate("/category/vegetable");
          }}
          className="category"
        >
          <div className="lips">
            <img
              style={{
                width: "130px",
              }}
              src="https://www.pngmart.com/files/17/Fresh-Fruits-PNG-Image.png"
              alt=""
            />
          </div>
          <h1>Vegetables</h1>
        </div>
        <div
          onClick={() => {
            navigate("/category/drink");
          }}
          className="category"
        >
          <div className="lips">
            <img
              style={{
                width: "130px",
              }}
              src="https://www.pngall.com/wp-content/uploads/5/Beverage-PNG-Image-HD.png"
              alt=""
            />
          </div>
          <h1>Drink</h1>
        </div>
        <div
          onClick={() => {
            navigate("/category/product");
          }}
          className="category"
        >
          <div className="lips">
            <img
              style={{
                width: "100px",
              }}
              src="https://cdn-icons-png.flaticon.com/512/2674/2674486.png"
              alt=""
            />
          </div>
          <h1>Product</h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "60px 150px 40px 150px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h2>Best Product </h2>
          <img
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
            }}
            src="https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/03/flaming-fire_5e7405587ae30.png"
            alt=""
          />
        </div>
        <NavLink to="/allProduct">
          <h2
            style={{
              cursor: "pointer",
              color: "blue",
            }}
          >
            See All
          </h2>
        </NavLink>
      </div>
      <div className="container">
        <div className="home_blocks">
          {product.map((el) => (
            <div className="home_block">
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
    </div>
  );
};

export default Home;
