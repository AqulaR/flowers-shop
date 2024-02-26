import React from "react";
import "./lk.css";
export default function Lk() {
  return (
    <>
      <div className="lk-bg">
        <p className="lk-title">БУДЬТЕ В КУРСЕ ВСЕХ НОВОСТЕЙ</p>
        <p className="lk-text">
          Подпишитесь на рассылку, чтобы получать уведомленияо новостях, скидках
          и т.д.
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
    </>
  );
}
