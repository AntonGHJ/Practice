const express = require("express");
const Message = require("../models/Message");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router.post("/createMessage", [
  async (req, res) => {
    try {
      const newMessage = await Message.create({
        ...req.body,
      });
      res.status(201).send({ messageId: newMessage._id });
    } catch (error) {
      res.status(500).json({
        message: "Ошибка на сервере",
      });
    }
  },
]);

router.get("/", async (req, res) => {
  try {
    const list = await Message.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "Ошибка на сервере",
    });
  }
});
router.delete("/:messageId", auth, async (req, res) => {
  try {
    const { messageId } = req.params;
    const result = await Message.findByIdAndDelete(messageId);
    if (!result) {
      return res.status(404).json({
        message: "Сообщение не найдено",
      });
    }
    res.status(200).json({
      message: "Сообщение успешно удалено",
    });
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
module.exports = router;
