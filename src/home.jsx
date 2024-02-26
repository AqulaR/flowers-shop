import "./App.css";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
        {/* offer */}
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
        {/* offer */}

        {/* novinki */}

        <div className="contanier_novinki">
          <div className="novinki_wrap">
            <div className="top_novinki">
              <h2>Новинки</h2>
              <p>
                подборка новых дизайнов букетов, которые мы изготавливаем под
                заказ
              </p>
              <div className="rekamend">
                <p>Рекомендуем</p>
              </div>
            </div>
            <div className="down_novinki">
              <div className="down_wraper">
                {/* item */}
                <div className="item_new">
                  <div className="img_new">
                    <img src="/src/img/tovar_6.png" alt="item" />
                  </div>
                  <div className="txt_new">
                    <p className="bk_name">букет “нежность”</p>
                    <p className="bk_price">1190 руб.</p>
                  </div>
                  <div className="btn_new">
                    <a href="#">подробнее</a>
                  </div>
                </div>
                {/* item */}

                {/* item */}
                <div className="item_new">
                  <div className="img_new">
                    <img src="/src/img/tovar_1.png" alt="item" />
                  </div>
                  <div className="txt_new">
                    <p className="bk_name">букет “нежность”</p>
                    <p className="bk_price">1190 руб.</p>
                  </div>
                  <div className="btn_new">
                    <a href="#">подробнее</a>
                  </div>
                </div>
                {/* item */}
                {/* item */}
                <div className="item_new">
                  <div className="img_new">
                    <img src="/src/img/tovar_2.png" alt="item" />
                  </div>
                  <div className="txt_new">
                    <p className="bk_name">букет “нежность”</p>
                    <p className="bk_price">1190 руб.</p>
                  </div>
                  <div className="btn_new">
                    <a href="#">подробнее</a>
                  </div>
                </div>
                {/* item */}
                {/* item */}
                <div className="item_new">
                  <div className="img_new">
                    <img src="/src/img/tovar_3.png" alt="item" />
                  </div>
                  <div className="txt_new">
                    <p className="bk_name">букет “нежность”</p>
                    <p className="bk_price">1190 руб.</p>
                  </div>
                  <div className="btn_new">
                    <a href="#">подробнее</a>
                  </div>
                </div>
                {/* item */}
                {/* item */}
                <div className="item_new">
                  <div className="img_new">
                    <img src="/src/img/tovar_4.png" alt="item" />
                  </div>
                  <div className="txt_new">
                    <p className="bk_name">букет “нежность”</p>
                    <p className="bk_price">1190 руб.</p>
                  </div>
                  <div className="btn_new">
                    <a href="#">подробнее</a>
                  </div>
                </div>
                {/* item */}
              </div>
            </div>
          </div>
        </div>
        {/* novinki */}

        {/* otzivi */}
        <div className="otzivi_continer">
          <div className="txt_otzovi">
            <h6>Отзывы</h6>
            <p>клиенты говорят о нас</p>
          </div>
          {/* slider */}
          <div className="wraper_slider">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {/* slide */}
              <SwiperSlide>
                <div className="txt_slider">
                  <div className="txt_wrap">
                    <p className="name_ot">Евгений</p>
                    <p className="otziv_comm">
                      Большое вам спасибо за невероятный заказ! Цветы были
                      такими свежими и красивыми. Букет оформлен просто
                      замечательно. Большое вам спасибо за то, что были такими
                      любезными и такими милыми! Я обязательно буду заказывать у
                      вас снова. 🙏
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide */}
              {/* slide */}
              <SwiperSlide>
                <div className="txt_slider">
                  <div className="txt_wrap">
                    <p className="name_ot">Евгений</p>
                    <p className="otziv_comm">
                      Большое вам спасибо за невероятный заказ! Цветы были
                      такими свежими и красивыми. Букет оформлен просто
                      замечательно. Большое вам спасибо за то, что были такими
                      любезными и такими милыми! Я обязательно буду заказывать у
                      вас снова. 🙏
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide */}
              {/* slide */}
              <SwiperSlide>
                <div className="txt_slider">
                  <div className="txt_wrap">
                    <p className="name_ot">Евгений</p>
                    <p className="otziv_comm">
                      Большое вам спасибо за невероятный заказ! Цветы были
                      такими свежими и красивыми. Букет оформлен просто
                      замечательно. Большое вам спасибо за то, что были такими
                      любезными и такими милыми! Я обязательно буду заказывать у
                      вас снова. 🙏
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide */}
              {/* slide */}
              <SwiperSlide>
                <div className="txt_slider">
                  <div className="txt_wrap">
                    <p className="name_ot">Евгений</p>
                    <p className="otziv_comm">
                      Большое вам спасибо за невероятный заказ! Цветы были
                      такими свежими и красивыми. Букет оформлен просто
                      замечательно. Большое вам спасибо за то, что были такими
                      любезными и такими милыми! Я обязательно буду заказывать у
                      вас снова. 🙏
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide */}
              {/* slide */}
              <SwiperSlide>
                <div className="txt_slider">
                  <div className="txt_wrap">
                    <p className="name_ot">Евгений</p>
                    <p className="otziv_comm">
                      Большое вам спасибо за невероятный заказ! Цветы были
                      такими свежими и красивыми. Букет оформлен просто
                      замечательно. Большое вам спасибо за то, что были такими
                      любезными и такими милыми! Я обязательно буду заказывать у
                      вас снова. 🙏
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide */}
            </Swiper>
          </div>
          {/* slider */}
        </div>
        {/* otzivi */}

        {/* onas */}

        <div className="about">
          <div className="about_left">
            <img src="src\img\about.png" alt="" />
          </div>
          <div className="about_right">
            <h3>О НАС</h3>
            <div className="line_about"></div>
            <div className="text_about">
              <p>
                В городе Вологда есть много других магазинов и продавцов цветов,
                однако наш цветочный салон, вероятно, уникален тем, что мы
                тщательно подбираем и сочетаем лучшие свежесрезанные цветы и
                декоративные растения, чтобы доставить радость вам и вашим
                близким. Мы хотим, чтобы наш букет стал неотъемлемой частью
                приятных воспоминаний.
              </p>
              <div className="text_about1"></div>
              <p>
                Наши флористы постоянно совершенствуются в своем искусстве,
                чтобы каждый раз удивлять и радовать вас своими композициями. Мы
                гарантируем, что вы останетесь довольны своим выбором и будете
                рекомендовать нас своим друзьям и знакомым.
              </p>
            </div>
          </div>
        </div>
        {/* onas */}

        {/* sobibtiya */}
        <div className="lk-bg">
          <p className="lk-title">БУДЬТЕ В КУРСЕ ВСЕХ НОВОСТЕЙ</p>
          <p className="lk-text">
            Подпишитесь на рассылку, чтобы получать уведомленияо новостях,
            скидках и т.д.
          </p>
          <form className="lk-form">
            <input
              className="lk-input"
              type="text"
              placeholder="Введите вашу эл. почту"
            />
            <button className="lk-button">Подписаться</button>
          </form>
        </div>
        {/* sobibtiya */}
      </main>
      <div className="lk-img">
        <div className="lk-img2">
          <p className="img-title">МЫ В СОЦСЕТЯХ</p>
          <p className="img-title-text">
            Чтобы первыми узнавать о специальных предложениях, новинках, скидках
            и многом другом.
          </p>
          <div className="lk-sub-cont">
            <p className="img-sub-text">@floral_finds</p>
            <img className="img-sub" src="src/img/vk.png" alt="" />
          </div>
        </div>
      </div>
      <footer>
        <div className="wrapper_footer">
          <div className="foooter_a">
            <p className="footer_p">НАВИГАЦИЯ ПО САЙТУ</p>
            <ul>
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
              <li>
                <a href="#">Рассылка</a>
              </li>
              <li>
                <a href="#">Личный кабинет</a>
              </li>
            </ul>
          </div>
          <div className="footer_contact">
            <p className="footer_p">КОНТАКТЫ</p>
            <div className="contact_flex">
              <a href="">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8335 4.16663H4.16683C3.01787 4.16663 2.0835 5.101 2.0835 6.24996V18.75C2.0835 19.8989 3.01787 20.8333 4.16683 20.8333H20.8335C21.9825 20.8333 22.9168 19.8989 22.9168 18.75V6.24996C22.9168 5.101 21.9825 4.16663 20.8335 4.16663ZM20.8335 6.24996V6.78225L12.5002 13.2645L4.16683 6.78329V6.24996H20.8335ZM4.16683 18.75V9.42079L11.8606 15.4052C12.043 15.5484 12.2682 15.6263 12.5002 15.6263C12.7321 15.6263 12.9573 15.5484 13.1397 15.4052L20.8335 9.42079L20.8356 18.75H4.16683Z"
                    fill="#1C2E1A"
                  />
                </svg>
                <p>@floral_finds</p>
              </a>
            </div>
            <div className="contact_flex">
              <a href="">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.1757 7.71193C25.339 7.1888 25.1757 6.80518 24.4033 6.80518H21.8448C21.1938 6.80518 20.8963 7.13705 20.733 7.50155C20.733 7.50155 19.4322 10.5604 17.5888 12.5438C16.9938 13.1209 16.722 13.3032 16.3977 13.3032C16.2355 13.3032 15.9998 13.1209 15.9998 12.5978V7.71193C15.9998 7.08418 15.812 6.80518 15.2695 6.80518H11.2492C10.8432 6.80518 10.5982 7.09543 10.5982 7.37218C10.5982 7.96618 11.5198 8.10343 11.6143 9.77743V13.4089C11.6143 14.2043 11.4662 14.3494 11.1395 14.3494C10.2727 14.3494 8.16333 11.2793 6.9115 7.7648C6.66766 7.08193 6.4215 6.8063 5.76816 6.8063H3.21083C2.47933 6.8063 2.3335 7.13818 2.3335 7.50268C2.3335 8.15743 3.20033 11.3974 6.37133 15.6826C8.48533 18.6087 11.4615 20.1949 14.1728 20.1949C15.798 20.1949 15.9987 19.8428 15.9987 19.2353V17.0236C15.9987 16.3193 16.1538 16.1776 16.6683 16.1776C17.0463 16.1776 17.6973 16.3621 19.2152 17.7717C20.9488 19.4434 21.2358 20.1938 22.21 20.1938H24.7673C25.4977 20.1938 25.8628 19.8417 25.6528 19.1464C25.423 18.4546 24.5947 17.4477 23.4957 16.2563C22.8983 15.5768 22.0058 14.8456 21.734 14.4799C21.3548 14.0086 21.4645 13.8004 21.734 13.3819C21.734 13.3819 24.8513 9.1508 25.1757 7.71193Z"
                    fill="#1C2E1A"
                  />
                </svg>
                <p>floralfinds.supp@gmail.com</p>
              </a>
            </div>
            <div className="contact_flex">
              <a href="">
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4868 16.4259L16.4218 12.8839C16.2296 12.7165 15.9771 12.6272 15.7176 12.6349C15.4581 12.6426 15.2118 12.7466 15.0308 12.9251L12.6378 15.2835C12.0618 15.1781 10.9038 14.8322 9.71179 13.6927C8.51979 12.5494 8.15879 11.4368 8.05179 10.8886L10.5108 8.59436C10.6972 8.42102 10.8059 8.18498 10.814 7.93618C10.822 7.68738 10.7287 7.44536 10.5538 7.26132L6.85879 3.36665C6.68384 3.18203 6.44067 3.07005 6.18095 3.05448C5.92122 3.03892 5.66539 3.12099 5.46779 3.28328L3.29779 5.06673C3.1249 5.23302 3.02171 5.45433 3.00779 5.68869C2.99279 5.92828 2.70679 11.6035 7.29879 16.0061C11.3048 19.8442 16.3228 20.125 17.7048 20.125C17.9068 20.125 18.0308 20.1193 18.0638 20.1174C18.3083 20.1042 18.5391 20.0049 18.7118 19.8385L20.5718 17.7579C20.7418 17.5692 20.8281 17.3242 20.8122 17.0753C20.7963 16.8264 20.6795 16.5934 20.4868 16.4259Z"
                    fill="#1C2E1A"
                  />
                </svg>
                <p>+7(999)666-11-11</p>
              </a>
            </div>
            <p>
              <b>Мы находимся по адресу:</b> <br /> г. Вологда, Советский <br />
              проспект, 137 -1 этаж
            </p>
            <h5>©2024 FloralFinds</h5>
          </div>
          <div className="visa">
            <img src="src\img\visa.png" alt="visa" />
          </div>
        </div>
      </footer>
    </>
  );
}
