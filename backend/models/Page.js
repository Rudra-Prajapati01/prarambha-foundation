import mongoose from "mongoose"

/* =====================================
    GENERIC SECTION
===================================== */
const sectionSchema = mongoose.Schema({

  heading: String,

  content: String,

  image: String,
})

/* =====================================
    PROGRAMS
===================================== */
const programSchema = mongoose.Schema({

  title: String,

  points: [String],

  color: String,

  image1: String,

  image2: String,

  image3: String,
})

/* =====================================
    IMPACT STORIES
===================================== */
const impactStorySchema = mongoose.Schema({

  title: String,

  category: String,

  image: String,

  desc: String,

  type: String,
})

/* =====================================
    STATS
===================================== */
const statsSchema = mongoose.Schema({

  number: String,

  label: String,

  icon: String,
})

/* =====================================
    VALUES
===================================== */
const valueSchema = mongoose.Schema({

  title: String,

  desc: String,

  icon: String,

  color: String,
})

/* =====================================
    TEAM
===================================== */
const teamSchema = mongoose.Schema({

  name: String,

  role: String,

  image: String,

  color: String,
})

/* =====================================
    MAIN PAGE SCHEMA
===================================== */
const pageSchema = mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      unique: true,
    },

    /* =====================================
        HERO
    ===================================== */
    hero: {

      title: String,

      subtitle: String,

      description: String,

      buttonText: String,

      image: String,
    },

    /* =====================================
        STORY SECTION
    ===================================== */
    story: {

      heading: String,

      title: String,

      description: String,

      image: String,
    },

    /* =====================================
        MISSION SECTION
    ===================================== */
    mission: {

      heading: String,

      content: String,

      image: String,
    },

    /* =====================================
        PHILOSOPHY
    ===================================== */
    philosophy: {

      title: String,

      description: String,
    },

    /* =====================================
        CHAIRPERSON
    ===================================== */
    chairperson: {

      name: String,

      role: String,

      quote: String,

      description: String,

      image: String,
    },

    /* =====================================
        CTA
    ===================================== */
    cta: {

      title: String,

      description: String,

      button1: String,

      button2: String,
    },

    /* =====================================
        PROGRAMS
    ===================================== */
    programs: [programSchema],

    /* =====================================
        IMPACT STORIES
    ===================================== */
    impactStories: [impactStorySchema],

    /* =====================================
        STATS
    ===================================== */
    stats: [statsSchema],

    /* =====================================
        VALUES
    ===================================== */
    values: [valueSchema],

    /* =====================================
        TEAM
    ===================================== */
    team: [teamSchema],

    /* =====================================
        FOOTER
    ===================================== */
    footer: {

      description: String,

      phone: String,

      email: String,

      address: String,
    },

    /* =====================================
        GENERIC SECTIONS
    ===================================== */
    sections: [sectionSchema],
  },
  {
    timestamps: true,
  }
)

const Page = mongoose.model(
  "Page",
  pageSchema
)

export default Page