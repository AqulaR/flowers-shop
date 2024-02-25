import axios from "axios";
import { useState } from "react";

export default function AddItem() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [inputFour, setInputFour] = useState("");

  const addFlower = (inputOne, inputTwo, inputThree, inputFour) => {
    axios
      .post("https://6dwz27-3000.csb.app/server/flowers", {
        name: inputOne,
        price: inputTwo,
        img: "src/img/tovar.png",
        desc: inputThree,
        quantity: inputFour,
      })
      .then((response) => {
        console.log(response, "response");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          gap: 20,
        }}
      >
        Название цветка:
        <input
          style={{ backgroundColor: "lightgrey", color: "black" }}
          type="text"
          name="input1"
          value={inputOne}
          onChange={(event) => setInputOne(event.target.value)}
        />
        Цена в рублях:
        <input
          style={{ backgroundColor: "lightgrey", color: "black" }}
          type="number"
          name="input2"
          value={inputTwo}
          onChange={(event) => setInputTwo(event.target.value)}
        />
        Количество:
        <input
          style={{ backgroundColor: "lightgrey", color: "black" }}
          type="number"
          name="input4"
          value={inputFour}
          onChange={(event) => setInputFour(event.target.value)}
        />
        Описание:
        <textarea
          style={{ backgroundColor: "lightgrey", color: "black" }}
          name="input3"
          value={inputThree}
          onChange={(event) => setInputThree(event.target.value)}
        />
        <button
          onClick={() => addFlower(inputOne, inputTwo, inputThree, inputFour)}
          style={{ backgroundColor: "lightgrey" }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}
