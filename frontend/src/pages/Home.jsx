import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../components/common/Navbar"
import Hero from "../components/common/Hero"
import Story from "../components/common/Story"
import Footer from "../components/common/Footer"
import Programs from "../components/common/Programs"
import Stats from "../components/common/Stats"

function Home() {

  const [pageData, setPageData] =
    useState(null)

  /* =====================================
      FETCH PAGE DATA
  ===================================== */

  useEffect(() => {

    fetchPage()

  }, [])

  const fetchPage =
    async () => {

      try {

        const { data } =
          await axios.get(
            "https://prarambha-backend.onrender.com/api/pages/home"
          )

        setPageData(data)

      } catch (error) {

        console.log(error)
      }
    }

  /* =====================================
      LOADING
  ===================================== */

  if (!pageData) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-white
        "
      >

        <div className="text-center">

          <div
            className="
              w-16
              h-16
              border-4
              border-[#E63946]
              border-t-transparent
              rounded-full
              animate-spin
              mx-auto
              mb-5
            "
          />

          <h2
            className="
              text-3xl
              font-extrabold
              text-[#1F2937]
            "
          >
            Loading...
          </h2>

        </div>

      </div>

    )
  }

  return (

    <div
      className="
        w-full
        overflow-x-hidden
        bg-white
      "
    >

      {/* =====================================
          NAVBAR
      ===================================== */}

      <Navbar
        pageData={pageData}
      />

      {/* =====================================
          HERO
      ===================================== */}

      <Hero
        pageData={pageData}
      />

      {/* =====================================
          PROGRAMS
      ===================================== */}

      <Programs
        pageData={pageData}
      />

      {/* =====================================
          STATS
      ===================================== */}

      <Stats
        pageData={pageData}
      />

      {/* =====================================
          STORIES
      ===================================== */}

      <Story
        pageData={pageData}
      />

      {/* =====================================
          FOOTER
      ===================================== */}

      <Footer
        pageData={pageData}
      />

    </div>
  )
}

export default Home