import {
  useLocation,
  useNavigate,
} from "react-router-dom"

import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"

function GalleryDetails() {

  const location =
    useLocation()

  const navigate =
    useNavigate()

  const item =
    location.state

  /* =====================================
      IMAGE HELPER
  ===================================== */

  const getImageUrl = (
    image
  ) => {

    if (!image) {

      return "https://via.placeholder.com/1200x700?text=Gallery+Image"
    }

    return typeof image === "string"
      && image.startsWith("http")
      ? image
      : `https://prarambha-backend.onrender.com${image}`
  }

  /* =====================================
      NO DATA
  ===================================== */

  if (!item) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#FFFDF8]
          px-6
        "
      >

        <div
          className="
            bg-white
            p-10
            rounded-[35px]
            shadow-xl
            text-center
            max-w-xl
          "
        >

          <div className="text-6xl mb-5">
            📷
          </div>

          <h1
            className="
              text-3xl
              font-black
              text-[#0B1B4D]
              mb-4
            "
          >
            No Gallery Data Found
          </h1>

          <p
            className="
              text-gray-600
              leading-relaxed
              mb-8
            "
          >
            The gallery item may have been removed
            or opened incorrectly.
          </p>

          <button
            onClick={() =>
              navigate("/gallery")
            }

            className="
              px-7
              py-4
              rounded-full
              bg-[#E63946]
              text-white
              font-semibold
              hover:bg-red-600
              transition-all
              duration-300
            "
          >
            Back To Gallery
          </button>

        </div>

      </div>
    )
  }

  return (

    <>

      {/* =====================================
          NAVBAR
      ===================================== */}

      <Navbar
        pageData={pageData}
      />

      {/* =====================================
          PAGE
      ===================================== */}

      <div
        className="
          bg-[#FFFDF8]
          min-h-screen
          py-10
          px-5
          md:px-12
        "
      >

        {/* =====================================
            BACK BUTTON
        ===================================== */}

        <div className="max-w-7xl mx-auto">

          <button
            onClick={() =>
              navigate(-1)
            }

            className="
              mb-10
              px-7
              py-4
              rounded-full
              bg-[#E63946]
              text-white
              font-semibold
              hover:bg-red-600
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
            "
          >
            ← Back
          </button>

        </div>

        {/* =====================================
            CONTENT
        ===================================== */}

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            lg:grid-cols-2
            gap-10
            items-center
          "
        >

          {/* =====================================
              IMAGE
          ===================================== */}

          <div
            className="
              overflow-hidden
              rounded-[35px]
              shadow-xl
              bg-white
            "
          >

            <img
              src={
                getImageUrl(
                  item.image
                )
              }

              alt={
                item.title
              }

              loading="lazy"

              onError={(e) => {

                e.target.onerror = null

                e.target.src =
                  "https://via.placeholder.com/1200x700?text=Gallery+Image"
              }}

              className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition-all
                duration-700
              "
            />

          </div>

          {/* =====================================
              CONTENT
          ===================================== */}

          <div>

            {/* CATEGORY */}

            <p
              className="
                text-[#E63946]
                uppercase
                tracking-[4px]
                font-semibold
                mb-4
                text-sm
              "
            >
              {item.category}
            </p>

            {/* TITLE */}

            <h1
              className="
                text-4xl
                md:text-6xl
                font-black
                text-[#0B1B4D]
                leading-tight
                mb-6
              "
            >
              {item.title}
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                text-lg
                text-gray-700
                leading-[2]
                mb-8
              "
            >

              {
                item.description
                || item.caption
                || "Every child deserves an environment filled with support, creativity, confidence, and opportunities to grow."
              }

            </p>

            {/* =====================================
                QUOTE
            ===================================== */}

            <div
              className="
                bg-white
                border-l-[6px]
                border-[#E63946]
                rounded-3xl
                p-6
                shadow-md
                mb-8
              "
            >

              <p
                className="
                  text-xl
                  italic
                  text-[#0B1B4D]
                  font-medium
                  leading-relaxed
                "
              >
                “Every child learns differently,
                and every smile is a step
                toward confidence.”
              </p>

            </div>

            {/* =====================================
                HIGHLIGHTS
            ===================================== */}

            <div
              className="
                grid
                sm:grid-cols-2
                gap-4
              "
            >

              {/* CARD */}

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-5
                  shadow-sm
                  border
                  border-gray-100
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <h3
                  className="
                    font-bold
                    text-[#0B1B4D]
                    mb-2
                  "
                >
                  Creative Learning
                </h3>

                <p
                  className="
                    text-gray-600
                    text-sm
                    leading-7
                  "
                >
                  Children engage in storytelling,
                  art, and imagination-building activities.
                </p>

              </div>

              {/* CARD */}

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-5
                  shadow-sm
                  border
                  border-gray-100
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <h3
                  className="
                    font-bold
                    text-[#0B1B4D]
                    mb-2
                  "
                >
                  Inclusive Environment
                </h3>

                <p
                  className="
                    text-gray-600
                    text-sm
                    leading-7
                  "
                >
                  Every child is supported with love,
                  respect, and equal opportunities.
                </p>

              </div>

              {/* CARD */}

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-5
                  shadow-sm
                  border
                  border-gray-100
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <h3
                  className="
                    font-bold
                    text-[#0B1B4D]
                    mb-2
                  "
                >
                  Child Development
                </h3>

                <p
                  className="
                    text-gray-600
                    text-sm
                    leading-7
                  "
                >
                  Activities improve emotional,
                  communication, and social skills.
                </p>

              </div>

              {/* CARD */}

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-5
                  shadow-sm
                  border
                  border-gray-100
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <h3
                  className="
                    font-bold
                    text-[#0B1B4D]
                    mb-2
                  "
                >
                  Joyful Experiences
                </h3>

                <p
                  className="
                    text-gray-600
                    text-sm
                    leading-7
                  "
                >
                  We create safe, happy,
                  and confidence-building moments
                  for every child.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================
          FOOTER
      ===================================== */}

      <Footer
        pageData={pageData}
      />

    </>
  )
}

export default GalleryDetails