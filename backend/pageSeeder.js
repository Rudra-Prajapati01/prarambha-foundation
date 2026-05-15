import dotenv from "dotenv"

import connectDB from "./config/db.js"

import Page from "./models/Page.js"

dotenv.config()

connectDB()

const seedPages = async () => {

  try {

    await Page.deleteMany()

    await Page.create({

      page: "home",

      hero: {

        title:
          "Discovering Ability Before Disability",

        subtitle:
          "Prarambha Foundation",

        description:
          "Supporting children through inclusive education, therapy support, sensory learning, early intervention, and family-centered care programs that help every child grow with confidence, dignity, and opportunity.",

        buttonText:
          "Explore Programs",

        image: "",
      },

      sections: [

        {
          heading: "Who We Are",

          content:
            "At Prarambha Foundation, we believe that every child deserves understanding, support, and equal opportunities during their early developmental years. We focus on early intervention, inclusive education, therapy support, and family guidance to help children discover their strengths before limitations define them.",
        },

        {
          heading: "Our Mission",

          content:
            "Our mission is to create a safe, inclusive, and empowering environment where every child receives the care, education, and developmental support they need to thrive emotionally, socially, and academically.",
        },

        {
          heading: "Our Vision",

          content:
            "To build a world where every child is understood before being judged, supported before being excluded, and celebrated for their unique abilities and potential.",
        },
      ],
    })

    console.log("Pages Seeded Successfully")

    process.exit()

  } catch (error) {

    console.log(error)

    process.exit(1)
  }
}

seedPages()