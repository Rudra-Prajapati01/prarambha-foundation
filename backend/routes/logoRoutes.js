import express from "express"

import multer from "multer"

import path from "path"

import Page from "../models/Page.js"

const router =
  express.Router()

/* =====================================
   MULTER STORAGE
===================================== */

const storage =
  multer.diskStorage({

    destination:
      (req, file, cb) => {

        cb(
          null,
          "uploads/"
        )
      },

    filename:
      (req, file, cb) => {

        cb(
          null,

          Date.now() +
          path.extname(
            file.originalname
          )
        )
      },
  })

const upload =
  multer({ storage })

/* =====================================
   UPLOAD FOOTER LOGO
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

          error:
            "Page not found"
        })
      }

      /* CREATE FOOTER IF MISSING */

      if (!page.footer) {

        page.footer = {}
      }

      /* SAVE LOGO PATH */

      page.footer.logo =
        `/uploads/${req.file.filename}`

      await page.save()

      res.json({

        success: true,

        logo:
          page.footer.logo,
      })

    } catch (error) {

      console.log(error)

      res.status(500).json({

        error:
          error.message
      })
    }
  }
)

export default router