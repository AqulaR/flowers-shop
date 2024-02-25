import axios from "axios";
import { useState, useEffect } from "react";

export default function MainPage() {
  const [flowers, setFlowers] = useState([]);
  const [cart, setCart] = useState([]);
  const [inputQuantity, setQuantity] = useState(1);

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

  const addFlower = (name, inputQuantity, price) => {
    axios
      .post("https://6dwz27-3000.csb.app/server/cart", {
        name: name,
        quantity: inputQuantity,
        price: price,
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
    // <>
    //   <h1>Главная</h1>
    //   <h2>Все товары:</h2>
    //   <div>
    //     {flowers.map((f) => (
    //       <>
    //         <div key={f.id}>{f.name}</div>
    //         <button onClick={() => addFlower(f.name)}>Добавить</button>
    //       </>
    //     ))}
    //   </div>
    //   <div>
    //     <h2>Корзина:</h2>
    //     {cart.map((item, index) => (
    //       <>
    //         <p key={index}>{item.name}</p>
    //         <button onClick={() => removeFlower(item.id)}>Удалить</button>
    //       </>
    //     ))}
    //   </div>
    // </>
    <>
      <header>
        <div className="continer_header">
          <div className="logo_contanier">
            <a className="logo" href="#">
              <img src="src\img\logo.png" alt="logo" />
            </a>
          </div>
          <div className="menu_continer">
            <div className="top_menu">
              <p className="top_menu_text">@floral_finds</p>
              <p className="top_menu_text">+7(999)666-11-11</p>
            </div>
            <div className="down_menu">
              <nav className="nav_bar_continer">
                <ul className="left_nav">
                  <li>
                    <a href="#">Главная</a>
                  </li>
                  <li>
                    <a href="src\catalog.jsx">Каталог</a>
                  </li>
                  <li>
                    <a href="#">Отызвы</a>
                  </li>
                  <li>
                    <a href="#">О нас</a>
                  </li>
                </ul>
                <ul className="riht_nav">
                  <li className="input">
                    <input type="text" name="search" placeholder="Поиск.." />
                    <i className="fa-solid fa-magnifying-glass color-344A32"></i>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="Menu_buttom"
                        src="src\img\lk.png"
                        alt="профиль"
                      />
                    </a>
                    <a href="#">
                      <img
                        className="Menu_buttom"
                        src="src\img\cart.png"
                        alt="треш"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="offer">
          <div className="bg_offer">
            <div className="offer_text">
              <h1>FloralFinds</h1>
              <p>ваш идеальный выбор букетов и цветов для любого повода</p>
              <ul>
                <li>
                  <a href="#">В каталог</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="item_wrapper">
          {flowers.map((f) => (
            <>
              <div className="item" key={f.id}>
                <img src="src\img\tovar.png" alt="" />
                <p className="item_title">{f.name}</p>
                <p className="price">{f.price} р.</p>
                <button
                  className="item_btn"
                  onClick={() => addFlower(f.name, inputQuantity, f.price)}
                >
                  Добавить
                </button>
                <input
                  type="number"
                  onChange={(event) => setQuantity(event.target.value)}
                />
              </div>
            </>
          ))}
        </div>
      </main>
    </>
  );
}
