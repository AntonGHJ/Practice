const express = require("express");
const Image = require("../models/Image");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Image.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "Ошибка на сервере",
    });
  }
});
module.exports = router;
