import "./App.css";
export default function Home() {
  return (
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
      </main>
    </>
  );
}
