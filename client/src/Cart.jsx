import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("https://6dwz27-3000.csb.app/cart/")
      .then((data) => {
        //console.log(data.data, 'cart');
        setCart(data.data);
      })
      .catch((e) => console.log(e, "error"));
  }, []);

  const removeFlower = (id) => {
    axios
      .delete(`https://6dwz27-3000.csb.app/server/cart/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div>
        <h2>Корзина:</h2>
        <div className="item_wrapper">
          {cart.map((item) => (
            <>
              <div className="item" key={item.id}>
                <img src="src\img\tovar.png" alt="" />
                <p className="item_title">{item.name}</p>
                <p className="price">{item.price} р.</p>
                <span>Количество:</span>
                <p>{item.quantity}</p>
                <button
                  className="item_btn"
                  onClick={() => removeFlower(item.id)}
                >
                  Удалить
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
