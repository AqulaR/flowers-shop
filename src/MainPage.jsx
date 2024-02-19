import axios from "axios";
import { useState, useEffect } from "react";

export default function MainPage() {
  const [flowers, setFlowers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://6dwz27-3000.csb.app/flowers/")
      .then((data) => {
        //console.log(data.data, 'data');
        setFlowers(data.data);
      })
      .catch((e) => console.log(e, "error"));
  }, []);

  useEffect(() => {
    axios
      .get("https://6dwz27-3000.csb.app/cart/")
      .then((data) => {
        //console.log(data.data, 'cart');
        setCart(data.data);
      })
      .catch((e) => console.log(e, "error"));
  }, []);

  useEffect(() => {
    console.log(flowers, "flowers");
  }, [flowers]);

  const addFlower = (name) => {
    axios
      .post("https://6dwz27-3000.csb.app/server/cart", {
        name: name,
      })
      .then((response) => {
        setCart([...cart, response.data]);
        console.log(response, "response");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const removeFlower = (id) => {
    axios
      .delete(`https://6dwz27-3000.csb.app/server/flowers/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1>Главная</h1>
      <h2>Все товары:</h2>
      <div>
        {flowers.map((f) => (
          <>
            <div key={f.id}>{f.name}</div>
            <button onClick={() => addFlower(f.name)}>Добавить</button>
          </>
        ))}
      </div>
      <div>
        <h2>Корзина:</h2>
        {cart.map((item, index) => (
          <>
            <p key={index}>{item.name}</p>
            <button onClick={() => removeFlower(item.id)}>Удалить</button>
          </>
        ))}
      </div>
    </>
  );
}
