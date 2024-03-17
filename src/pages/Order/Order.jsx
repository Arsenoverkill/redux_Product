import "./Order.css";
import { useDispatch, useSelector } from "react-redux";
import { DEL_BASKET } from "../../redux/actionTypes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Order = () => {
  const order = useSelector((state) => state.product.order);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div id="order">
      <div
        style={{
          display: order.length > 0 ? "none" : "block",
        }}
        className="empty"
      >
        <div className="empty_block">
          <h1>Ваша корзина пока пуста</h1>
          <img
            src="https://media.tenor.com/LsqZNFjisVgAAAAM/dont-care.gif"
            alt=""
          />
        </div>
        <p>
          Загляните на главную, чтобы выбрать товары или найдите нужное в поиске
        </p>
        <button
          onClick={() => {
            navigate("/allProduct");
          }}
        >
          Перейти на главную
        </button>
      </div>
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
                    onClick={() => {
                      dispatch({ type: DEL_BASKET, payload: el.id });
                      setAlert(true);
                    }}
                  >
                    Remove product
                  </h3>
                  <h2>{el.name}</h2>
                  <h1>Price: {el.price * el.count}$</h1>
                  <p>Count: {el.count}</p>
                </div>
              </div>
              <hr
                style={{
                  width: "195vh",
                  border: "2px solid rgb(191 191 237)",
                  position: "absolute",
                  left: "30px",
                }}
              />
            </div>
          ))}
        </div>
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
              Товар удалень из корзины
            </p>
            <img
              style={{
                width: "17%",
                marginBottom: "10px",
              }}
              src="https://media.tenor.com/OA8KFcZxPjsAAAAi/sad-emoji.gif"
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

export default Order;
