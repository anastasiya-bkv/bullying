const express = require("express");
const words = require("./words");
const app = express();

app.listen(3002, async () => {
  console.log("Сервер запущен на порте  3002");
});

app.get("/", (req, res, next) => {
  let { text } = req.query;
  if (!text) {
    res.json({ ok: false, error: "Нужно передать текст GET параметром text" });
    return;
  }

  text = text.toLowerCase();

  const hasBullying = words.some((word) => text.includes(word));

  res.json({
    ok: true,
    hasBullying: hasBullying ? "Травля" : "Не травля",
  });
});
