import { useEffect, useState } from "react"

import HeroSection from "../components/common/about/HeroSection"
import MissionSection from "../components/common/about/MissionSection"
import ChairpersonSection from "../components/common/about/ChairpersonSection"
import TeamSection from "../components/common/about/TeamSection"
import CTASection from "../components/common/about/CTASection"

import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"

import { usePageData }
from "../context/PageContext"

export default function About() {

  /* =====================================
      GLOBAL PAGE DATA
  ===================================== */

  const {
    pageData: globalPageData,
  } = usePageData()

  /* =====================================
      ABOUT PAGE DATA
  ===================================== */

  const [aboutData, setAboutData] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  /* =====================================
      FETCH ABOUT PAGE
  ===================================== */

  useEffect(() => {

    const fetchPage =
      async () => {

        try {

          const response =
            await fetch(
              "https://prarambha-backend.onrender.com/api/pages/about"
            )

          const data =
            await response.json()

          setAboutData(data)

        } catch (error) {

          console.log(error)

        } finally {

          setLoading(false)
        }
      }

    fetchPage()

  }, [])

  /* =====================================
      LOADING
  ===================================== */

  if (loading) {

    return (

      <>

        <Navbar
          pageData={globalPageData}
        />

        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
          }}
        >

          <div
            style={{
              textAlign: "center",
            }}
          >

            <div
              style={{
                width: "70px",
                height: "70px",
                border:
                  "5px solid #E63946",
                borderTop:
                  "5px solid transparent",
                borderRadius: "50%",
                margin: "0 auto 20px",
                animation:
                  "spin 1s linear infinite",
              }}
            />

            <h2
              style={{
                fontSize: "32px",
                fontWeight: "900",
                color: "#0B1B4D",
              }}
            >
              Loading...
            </h2>

          </div>

        </div>

        <style>{`
          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>

      </>
    )
  }

  /* =====================================
      PAGE
  ===================================== */

  return (

    <>

      {/* =====================================
          NAVBAR
      ===================================== */}

      <Navbar
        pageData={globalPageData}
      />

      {/* =====================================
          HERO
      ===================================== */}

      <HeroSection
        data={aboutData?.hero}
      />

      {/* =====================================
          MISSION
      ===================================== */}

      <MissionSection
        data={aboutData?.mission}
      />

      {/* =====================================
          CHAIRPERSON
      ===================================== */}

      <ChairpersonSection
        data={aboutData?.chairperson}
      />

      {/* =====================================
          TEAM
      ===================================== */}

      <TeamSection
        data={aboutData?.team}
      />

      {/* =====================================
          CTA
      ===================================== */}

      <CTASection
        data={aboutData?.cta}
      />

      {/* =====================================
          FOOTER
      ===================================== */}

      <Footer
        pageData={globalPageData}
      />

    </>
  )
}