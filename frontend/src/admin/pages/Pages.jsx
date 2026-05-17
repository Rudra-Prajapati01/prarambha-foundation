import { useEffect, useState } from "react"
import axios from "axios"

import AdminLayout from "../layouts/AdminLayout"

/* =====================================
    HOME EDITORS
===================================== */
import HeroEditor from "../components/editors/HeroEditor"
import StoryEditor from "../components/editors/StoryEditor"
import ProgramsEditor from "../components/editors/ProgramsEditor"
import StatsEditor from "../components/editors/StatsEditor"
import FooterEditor from "../components/editors/FooterEditor"

import MissionEditor from "../components/editors/MissionEditor"
import ValuesEditor from "../components/editors/ValuesEditor"
import PhilosophyEditor from "../components/editors/PhilosophyEditor"

import CTAEditor from "../components/editors/CTAEditor"
import ImpactEditor from "../components/editors/ImpactEditor"

/* =====================================
    ABOUT EDITORS
===================================== */
import AboutHeroEditor from "../components/editors/about/AboutHeroEditor"
import AboutMissionEditor from "../components/editors/about/AboutMissionEditor"
import AboutChairpersonEditor from "../components/editors/about/AboutChairpersonEditor"
import AboutTeamEditor from "../components/editors/about/AboutTeamEditor"
import AboutCTAEditor from "../components/editors/about/AboutCTAEditor"

function Pages() {

  /* =====================================
      PAGE LIST
  ===================================== */
  const pagesList = [
    "home",
    "about",
    "programs",
  ]

  /* =====================================
      SECTIONS MAP
  ===================================== */
  const sectionsMap = {

    home: [
      "hero",
      "story",
      "programs",
      "stats",
      "footer",
    ],

    about: [
      "hero",
      "mission",
      "chairperson",
      "team",
      "cta",
    ],

    programs: [
      "hero",
      "programs",
      "footer",
    ],
  }

  /* =====================================
      STATES
  ===================================== */
  const [selectedPage, setSelectedPage] =
    useState("home")

  const [selectedSection, setSelectedSection] =
    useState("hero")

  const [expandedPage, setExpandedPage] =
    useState("home")

  const [pageData, setPageData] =
    useState({

      hero: {
        title: "",
        subtitle: "",
        description: "",
        buttonText: "",
        image: "",
      },

      story: {
        heading: "",
        title: "",
        description: "",
        image: "",
      },

      mission: {
        heading: "",
        title: "",
        content: "",
        image: "",
      },

      philosophy: {
        title: "",
        description: "",
      },

      chairperson: {
        name: "",
        role: "",
        quote: "",
        description: "",
        image: "",
      },

      cta: {
        title: "",
        description: "",
        button1: "",
        button2: "",
      },

      values: [],

      impact: [],

      impactStories: [],

      programs: [],

      stats: [],

      team: [],

      footer: {

        description: "",

        phone: "",

        email: "",

        address: "",

        logo: "",
      },
    })

  const [saving, setSaving] =
    useState(false)

  const [uploading, setUploading] =
    useState(false)

  const [success, setSuccess] =
    useState("")

  /* =====================================
      FETCH PAGE
  ===================================== */
  useEffect(() => {

    fetchPage()

  }, [selectedPage])

  const fetchPage = async () => {

    try {

      const { data } =
        await axios.get(
          `https://prarambha-backend.onrender.com/api/pages/${selectedPage}`
        )

      if (data) {

        setPageData(data)
      }

    } catch (error) {

      console.log(error)
    }
  }

  /* =====================================
      SAVE PAGE
  ===================================== */
  const savePage = async () => {

    try {

      setSaving(true)

      setSuccess("")

      await axios.put(
        `https://prarambha-backend.onrender.com/api/pages/${selectedPage}`,
        pageData
      )

      setSuccess(
        "Page updated successfully!"
      )

      setTimeout(() => {

        setSuccess("")

      }, 3000)

    } catch (error) {

      console.log(error)

    } finally {

      setSaving(false)
    }
  }

  /* =====================================
      IMAGE UPLOAD
  ===================================== */
  const uploadImage = async (
    e,
    field = "hero"
  ) => {

    const file =
      e.target.files[0]

    if (!file) return

    const formData =
      new FormData()

    formData.append(
      "image",
      file
    )

    try {

      setUploading(true)

      const { data } =
        await axios.post(
          "https://prarambha-backend.onrender.com/api/upload",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        )

      setPageData((prev) => ({

        ...prev,

        [field]: {

          ...prev[field],

          image: data.image,
        },
      }))

    } catch (error) {

      console.log(error)

    } finally {

      setUploading(false)
    }
  }

  /* =====================================
      TOGGLE PAGE
  ===================================== */
  const togglePage = (page) => {

    if (expandedPage === page) {

      setExpandedPage("")

    } else {

      setExpandedPage(page)
    }

    setSelectedPage(page)

    setSelectedSection(
      sectionsMap[page][0]
    )
  }

  return (

    <AdminLayout>

      <div
        className="
        flex
        gap-8
        w-full
        overflow-hidden
      "
      >

        {/* SIDEBAR */}
        <div
          className="
          w-[280px]
          min-w-[280px]
          bg-white
          rounded-[30px]
          p-6
          shadow-sm
          h-fit
          sticky
          top-6
          overflow-y-auto
          max-h-[95vh]
        "
        >

          <h2
            className="
            text-3xl
            font-bold
            mb-8
            text-[#111827]
          "
          >
            Website Pages
          </h2>

          {/* PAGE BUTTONS */}
          <div className="space-y-4">

            {pagesList.map((page) => (

              <div key={page}>

                <button
                  onClick={() =>
                    togglePage(page)
                  }
                  className={`
                  w-full
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  rounded-2xl
                  capitalize
                  font-bold
                  text-lg
                  transition-all

                  ${selectedPage === page
                      ? "bg-[#E63946] text-white"
                      : "bg-[#F3F4F6] text-[#111827]"
                    }
                `}
                >

                  {page}

                  <span>

                    {expandedPage === page
                      ? "−"
                      : "+"}

                  </span>

                </button>

                {/* SECTIONS */}
                {expandedPage === page && (

                  <div
                    className="
                    mt-3
                    ml-4
                    space-y-3
                    border-l-2
                    border-gray-200
                    pl-4
                  "
                  >

                    {sectionsMap[page].map(
                      (section) => (

                        <button
                          key={section}
                          onClick={() =>
                            setSelectedSection(
                              section
                            )
                          }
                          className={`
                          w-full
                          text-left
                          px-4
                          py-3
                          rounded-xl
                          capitalize
                          font-medium
                          transition-all

                          ${selectedSection ===
                              section
                              ? "bg-black text-white"
                              : "bg-[#F9FAFB] text-[#111827] hover:bg-[#ECEFF3]"
                            }
                        `}
                        >

                          {section}

                        </button>

                      )
                    )}

                  </div>

                )}

              </div>

            ))}

          </div>

          {/* SAVE BUTTON */}
          <button
            onClick={savePage}
            disabled={saving}
            className="
            w-full
            mt-10
            bg-[#E63946]
            hover:bg-[#d62839]
            text-white
            py-4
            rounded-2xl
            font-bold
            text-lg
          "
          >

            {saving
              ? "Saving..."
              : "Save Changes"}

          </button>

          {/* SUCCESS */}
          {success && (

            <div
              className="
              mt-5
              bg-green-100
              text-green-700
              px-5
              py-4
              rounded-2xl
              font-semibold
            "
            >

              {success}

            </div>

          )}

        </div>

        {/* =====================================
          EDITOR AREA
      ===================================== */}
        <div
          className="
          flex-1
          overflow-y-auto
          overflow-x-hidden
          pr-2
        "
        >

          <div
            className="
            w-full
            max-w-[1400px]
            mx-auto
          "
          >

            {/* HOME HERO */}
            {selectedPage === "home" &&
              selectedSection === "hero" && (

                <HeroEditor
                  pageData={pageData}
                  setPageData={setPageData}
                  uploadImage={uploadImage}
                  uploading={uploading}
                />

              )}

            {/* HOME STORY */}
            {selectedPage === "home" &&
              selectedSection === "story" && (

                <StoryEditor
                  pageData={pageData}
                  setPageData={setPageData}
                />

              )}

            {/* HOME PROGRAMS */}
            {selectedPage === "home" &&
              selectedSection === "programs" && (

                <ProgramsEditor
                  pageData={pageData}
                  setPageData={setPageData}
                />

              )}

            {/* HOME STATS */}
            {selectedPage === "home" &&
              selectedSection === "stats" && (

                <StatsEditor
                  pageData={pageData}
                  setPageData={setPageData}
                />

              )}

            {/* HOME FOOTER */}
            {selectedPage === "home" &&
              selectedSection === "footer" && (

                <FooterEditor
                  pageData={pageData}
                  setPageData={setPageData}
                />

              )}

            {/* ABOUT HERO */}
            {selectedPage === "about" &&
              selectedSection === "hero" && (

                <AboutHeroEditor
                  pageData={pageData}
                  setPageData={setPageData}
                  uploadImage={uploadImage}
                  uploading={uploading}
                />

              )}

            {/* ABOUT MISSION */}
            {selectedPage === "about" &&
              selectedSection === "mission" && (

                <AboutMissionEditor
                  pageData={pageData}
                  setPageData={setPageData}
                  uploadImage={uploadImage}
                  uploading={uploading}
                />

              )}

            {/* ABOUT CHAIRPERSON */}
            {selectedPage === "about" &&
              selectedSection === "chairperson" && (

                <AboutChairpersonEditor
                  pageData={pageData}
                  setPageData={setPageData}
                  uploadImage={uploadImage}
                  uploading={uploading}
                />

              )}

            {/* ABOUT TEAM */}
            {selectedPage === "about" &&
              selectedSection === "team" && (

                <AboutTeamEditor
                  pageData={pageData}
                  setPageData={setPageData}
                />

              )}

            {/* ABOUT CTA */}
            {selectedPage === "about" &&
              selectedSection === "cta" && (

                <AboutCTAEditor
                  pageData={pageData}
                  setPageData={setPageData}
                />

              )}

          </div>

        </div>

      </div>

    </AdminLayout>
  )
}

export default Pages