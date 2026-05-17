import express from "express"

import multer from "multer"

import Page from "../models/Page.js"

import {
  storage
}
from "../config/cloudinary.js"

const router =
  express.Router()

const upload =
  multer({ storage })

router.put(

  "/footer-logo",

  upload.single("logo"),

  async (req, res) => {

    try {

      const pages =
        await Page.find()

      for (const page of pages) {

        if (!page.footer) {

          page.footer = {}
        }

        page.footer.logo =
          req.file.path

        await page.save()
      }

      res.json({

        success: true,

        logo:
          req.file.path,
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