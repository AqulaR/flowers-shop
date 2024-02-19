const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
// const { Sequelize, DataTypes } = require("sequelize");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
  name: String,
  age: Number,
});
// определяем модель User
const User = mongoose.model("User", userScheme);
// создаем объект модели User
const user = new User({ name: "Bill", age: 41 });

async function main() {
  // подключемся к базе данных
  await mongoose.connect("mongodb+srv://test:test@cluster0.gtwri.mongodb.net/");

  // сохраняем модель user в базу данных
  await user.save();
  console.log("Сохранен объект", user);

  // отключаемся от базы данных
  await mongoose.disconnect();
}
// запускаем подключение и взаимодействие с базой данных
main().catch(console.log);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/flowers/", (req, res) => {
  const content = fs.readFileSync("flowers.json", "utf8");
  const flowers = JSON.parse(content);
  if (!flowers || flowers.length <= 0) {
    res.status(404).json({ message: "Пусто" });
  } else {
    res.json(flowers);
  }
});

app.get("/flower/:id", (req, res) => {
  const id = req.params.id;
  const content = fs.readFileSync("flowers.json", "utf8");
  const flowers = JSON.parse(content);
  const flower = flowers.find((t) => t.id == id);

  if (flower) {
    res.json(flower);
  } else {
    res.status(404).json({ message: "Не найдено 404" });
  }
});

app.post("/server/flowers", (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Данные не переданы" });

  const flowerName = req.body.name;
  const flower = { name: flowerName };

  const data = fs.readFileSync("flowers.json", "utf8");
  const flowers = JSON.parse(data);

  const id = flowers.length > 0 ? Math.max(...flowers.map((t) => t.id)) : 0;
  flower.id = id + 1;
  flowers.push(flower);

  fs.writeFileSync("flowers.json", JSON.stringify(flowers));
  res.json(flower);
});

app.delete("/server/flowers/:id", (req, res) => {
  const id = req.params.id;
  const data = fs.readFileSync("flowers.json", "utf8");
  const flowers = JSON.parse(data);

  const index = flowers.findIndex((t) => t.id == id);
  if (index > -1) {
    const [flower] = flowers.splice(index, 1);
    fs.writeFileSync("flowers.json", JSON.stringify(flowers));
    res.json(flower);
  } else {
    res.status(404).json({ message: "Не найдено 404" });
  }
});

app.put("/server/flower", (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Данные не переданы" });

  const { id, name, isDone } = req.body;
  const data = fs.readFileSync("flowers.json", "utf8");
  const flowers = JSON.parse(data);
  const flower = flowers.find((t) => t.id == id);

  if (flower) {
    flower.name = name;
    flower.isDone = isDone;
    fs.writeFileSync("flowers.json", JSON.stringify(flowers));
    res.json(flower);
  } else {
    res.status(404).json({ message: "Не найдено 404" });
  }
});

// cart

app.get("/cart", (req, res) => {
  const content = fs.readFileSync("cart.json", "utf8");
  const all_cart_items = JSON.parse(content);
  if (!all_cart_items || all_cart_items.length <= 0) {
    res.status(404).json({ message: "Пусто" });
  } else {
    res.json(all_cart_items);
  }
});

app.post("/server/cart", (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Данные не переданы" });

  const cart_el_name = req.body.name;
  const cart = { name: cart_el_name };

  const data = fs.readFileSync("cart.json", "utf8");
  const all_cart_items = JSON.parse(data);

  const id =
    all_cart_items.length > 0
      ? Math.max(...all_cart_items.map((t) => t.id))
      : 0;
  cart.id = id + 1;
  all_cart_items.push(cart);

  fs.writeFileSync("cart.json", JSON.stringify(all_cart_items));
  res.json(cart);
});

app.listen(3000, () => {
  console.log("Сервер ожидает подключения...");
});
