  import { useEffect, useState } from "react"

  import HeroSection from "../components/common/about/HeroSection"
  import MissionSection from "../components/common/about/MissionSection"
  import ChairpersonSection from "../components/common/about/ChairpersonSection"
  import TeamSection from "../components/common/about/TeamSection"
  import CTASection from "../components/common/about/CTASection"

  import Navbar from "../components/common/Navbar"

  export default function About() {

    const [pageData, setPageData] =
      useState(null)

    const [loading, setLoading] =
      useState(true)

    useEffect(() => {

      const fetchPage = async () => {

        try {

          const response = await fetch(
            "https://prarambha-backend.onrender.com/api/pages/about"
          )

          const data =
            await response.json()

          setPageData(data)

        } catch (error) {

          console.log(error)

        } finally {

          setLoading(false)
        }
      }

      fetchPage()

    }, [])

    if (loading) {

      return (
        <>
          <Navbar pageData={pageData} />


          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            Loading...
          </div>
        </>
      )
    }

    return (
      <>
        <Navbar pageData={pageData} />

        <HeroSection
          data={pageData?.hero}
        />

        <MissionSection
          data={pageData?.mission}
        />

        <ChairpersonSection
          data={pageData?.chairperson}
        />

        <TeamSection
          data={pageData?.team}
        />

        <CTASection
          data={pageData?.cta}
        />
      </>
    )
  }