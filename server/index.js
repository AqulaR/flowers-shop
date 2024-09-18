const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const { all } = require("axios");

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

  const flower = {
    name: req.body.name,
    price: req.body.price,
    img: req.body.img,
    desc: req.body.desc,
    quantity: req.body.quantity,
  };

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

  const { id, name, price, img, desc, quantity } = req.body;
  const data = fs.readFileSync("flowers.json", "utf8");
  const flowers = JSON.parse(data);
  const flower = flowers.find((t) => t.id == id);

  if (flower) {
    flower.name = name;
    flower.price = price;
    flower.img = img;
    flower.desc = desc;
    flower.quantity = quantity;
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

  // const cart_el_name = req.body.name;
  const cart = {
    el_id: req.body.el_id,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
  };

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

app.delete("/server/cart/:id", (req, res) => {
  const id = req.params.id;
  const data = fs.readFileSync("cart.json", "utf8");
  const cart = JSON.parse(data);

  const index = cart.findIndex((t) => t.id == id);
  if (index > -1) {
    const [flower] = cart.splice(index, 1);
    fs.writeFileSync("cart.json", JSON.stringify(cart));
    res.json(flower);
  } else {
    res.status(404).json({ message: "Не найдено 404" });
  }
});

app.put("/server/cart", (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Данные не переданы" });

  const { id, name, price, img, desc, quantity } = req.body;
  const data = fs.readFileSync("cart.json", "utf8");
  const all_cart = JSON.parse(data);
  const cart_item = all_cart.find((t) => t.id == id);

  if (cart_item) {
    cart_item.name = name;
    cart_item.price = price;
    cart_item.img = img;
    cart_item.desc = desc;
    cart_item.quantity = quantity;
    fs.writeFileSync("cart.json", JSON.stringify(all_cart));
    res.json(cart_item);
  } else {
    res.status(404).json({ message: "Не найдено 404" });
  }
});

app.listen(3000, () => {
  console.log("Сервер ожидает подключения...");
});
