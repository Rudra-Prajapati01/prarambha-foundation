const express = require("express")
const router = express.Router()

const multer = require("multer")
const path = require("path")

const Page = require("../models/Page")

/* =====================================
   MULTER STORAGE
===================================== */

const storage =
  multer.diskStorage({

    destination:
      (req, file, cb) => {

        cb(null, "uploads/")
      },

    filename:
      (req, file, cb) => {

        cb(
          null,
          Date.now() +
          path.extname(file.originalname)
        )
      },
  })

const upload =
  multer({ storage })

/* =====================================
   UPLOAD LOGO
===================================== */

router.put(
  "/footer-logo",

  upload.single("logo"),

  async (req, res) => {

    try {

      const page =
        await Page.findOne({
          slug: "home"
        })

      if (!page) {

        return res.status(404).json({
          error: "Page not found"
        })
      }

      page.footer.logo =
        `/uploads/${req.file.filename}`

      await page.save()

      res.json({
        success: true,
        logo:
          page.footer.logo,
      })

    } catch (error) {

      res.status(500).json({
        error: error.message
      })
    }
  }
)

module.exports = router