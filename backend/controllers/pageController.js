import Page from "../models/Page.js"

/* =====================================
    GET PAGE
===================================== */
const getPage = async (req, res) => {

  try {

    const page = await Page.findOne({
      page: req.params.slug,
    })

    if (!page) {

      return res.status(404).json({
        message: "Page not found",
      })
    }

    res.json(page)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

/* =====================================
    UPDATE PAGE
===================================== */
const updatePage = async (req, res) => {

  try {

    const page = await Page.findOne({
      page: req.params.slug,
    })

    if (!page) {

      return res.status(404).json({
        message: "Page not found",
      })
    }

    /* =====================================
        HERO
    ===================================== */
    if (req.body.hero !== undefined) {

      page.hero =
        req.body.hero
    }

    /* =====================================
        STORY
    ===================================== */
    if (req.body.story !== undefined) {

      page.story =
        req.body.story
    }

    /* =====================================
        MISSION
    ===================================== */
    if (req.body.mission !== undefined) {

      page.mission =
        req.body.mission
    }

    /* =====================================
        PHILOSOPHY
    ===================================== */
    if (req.body.philosophy !== undefined) {

      page.philosophy =
        req.body.philosophy
    }

    /* =====================================
        CTA
    ===================================== */
    if (req.body.cta !== undefined) {

      page.cta =
        req.body.cta
    }

    /* =====================================
        PROGRAMS
    ===================================== */
    if (req.body.programs !== undefined) {

      page.programs =
        req.body.programs
    }

    /* =====================================
        PROGRAM IMAGES
    ===================================== */
    if (
      req.body.programImage1 !== undefined
    ) {

      page.programImage1 =
        req.body.programImage1
    }

    if (
      req.body.programImage2 !== undefined
    ) {

      page.programImage2 =
        req.body.programImage2
    }

    if (
      req.body.programImage3 !== undefined
    ) {

      page.programImage3 =
        req.body.programImage3
    }

    /* =====================================
        DONATE PAGE
    ===================================== */
    if (req.body.donate !== undefined) {

      page.donate =
        req.body.donate
    }

    /* =====================================
        IMPACT STORIES
    ===================================== */
    if (
      req.body.impactStories !== undefined
    ) {

      page.impactStories =
        req.body.impactStories
    }

    /* =====================================
        STATS
    ===================================== */
    if (req.body.stats !== undefined) {

      page.stats =
        req.body.stats
    }

    /* =====================================
        VALUES
    ===================================== */
    if (req.body.values !== undefined) {

      page.values =
        req.body.values
    }

    /* =====================================
        CHAIRPERSON
    ===================================== */
    if (
      req.body.chairperson !== undefined
    ) {

      page.chairperson =
        req.body.chairperson
    }

    /* =====================================
        TEAM
    ===================================== */
    if (req.body.team !== undefined) {

      page.team =
        req.body.team
    }

    /* =====================================
        FOOTER
    ===================================== */
    if (req.body.footer !== undefined) {

      page.footer =
        req.body.footer
    }

    /* =====================================
        GENERIC SECTIONS
    ===================================== */
    if (
      req.body.sections !== undefined
    ) {

      page.sections =
        req.body.sections
    }

    /* =====================================
        SAVE PAGE
    ===================================== */

    const updatedPage =
      await page.save()

    res.json(updatedPage)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: error.message,
    })

  }
}

export {
  getPage,
  updatePage,
}