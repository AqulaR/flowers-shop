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
                <ul>
                  <li>
                    <a href="#">Главная</a>
                  </li>
                  <li>
                    <a href="#">Каталог</a>
                  </li>
                  <li>
                    <a href="#">Отызвы</a>
                  </li>
                  <li>
                    <a href="#">О нас</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <input type="text" />
                  </li>
                  <li>
                    <a href="">
                      <img src="" alt="" />
                    </a>
                    <a href="">
                      <img src="" alt="" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
