import express from "express"

import Message from "../models/Message.js"

const router = express.Router()

/* =========================================
   SEND MESSAGE
========================================= */

router.post("/", async (req, res) => {

  try {

    const {
      name,
      email,
      subject,
      message,
    } = req.body

    const newMessage =
      await Message.create({
        name,
        email,
        subject,
        message,
      })

    res.status(201).json(newMessage)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
})

/* =========================================
   GET ALL MESSAGES
========================================= */

router.get("/", async (req, res) => {

  try {

    const messages =
      await Message.find()
        .sort({ createdAt: -1 })

    res.json(messages)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
})

/* =========================================
   DELETE MESSAGE
========================================= */

router.delete("/:id", async (req, res) => {

  try {

    const message =
      await Message.findById(req.params.id)

    if (!message) {

      return res.status(404).json({
        message: "Message not found",
      })
    }

    await message.deleteOne()

    res.json({
      message: "Message deleted",
    })

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
})

export default router