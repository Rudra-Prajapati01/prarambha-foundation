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
    page.hero =
      req.body.hero

    /* =====================================
        STORY
    ===================================== */
    page.story =
      req.body.story

    /* =====================================
        MISSION
    ===================================== */
    page.mission =
      req.body.mission

    /* =====================================
        PHILOSOPHY
    ===================================== */
    page.philosophy =
      req.body.philosophy

    /* =====================================
        CTA
    ===================================== */
    page.cta =
      req.body.cta

    /* =====================================
        PROGRAMS
    ===================================== */
    page.programs =
      req.body.programs


    page.donate =
      req.body.donate

    /* =====================================
        IMPACT STORIES
    ===================================== */
    page.impactStories =
      req.body.impactStories

    /* =====================================
        STATS
    ===================================== */
    page.stats =
      req.body.stats

    /* =====================================
        VALUES
    ===================================== */
    page.values =
      req.body.values

    /* =====================================
        CHAIRPERSON
    ===================================== */
    page.chairperson =
      req.body.chairperson

    /* =====================================
        TEAM
    ===================================== */
    page.team =
      req.body.team

    /* =====================================
        FOOTER
    ===================================== */
    page.footer =
      req.body.footer

    /* =====================================
        GENERIC SECTIONS
    ===================================== */
    page.sections =
      req.body.sections

    const updatedPage =
      await page.save()

    res.json(updatedPage)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

export {
  getPage,
  updatePage,
}