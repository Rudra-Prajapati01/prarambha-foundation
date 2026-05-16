import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import {
  FaHeart,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
} from "react-icons/fa"

import logo from "../../assets/logo/logo.png"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  /* =========================================
     PREVENT BODY SCROLL
  ========================================= */

  useEffect(() => {

    if (menuOpen) {

      document.body.style.overflow = "hidden"

    } else {

      document.body.style.overflow = "auto"

    }

    return () => {

      document.body.style.overflow = "auto"

    }

  }, [menuOpen])

  /* =========================================
     NAVBAR LINKS
  ========================================= */

  const navLinks = [

    {
      name: "Home",
      path: "/",
    },

    /* =====================================
        WHO WE ARE
    ===================================== */

    {
      name: "Who We Are",

      dropdown: [

        {
          name: "About Us",
          path: "/about",
        },

        {
          name: "Our Chairperson",
          path: "/chairperson",
        },

        {
          name: "Our Stories",
          path: "/stories",
        },

        {
          name: "Documents",
          path: "/documents",
        },

      ],
    },

    /* =====================================
        WHAT WE DO
    ===================================== */

    {
      name: "What We Do",

      dropdown: [

        {
          name: "Early Intervention & Child Development",
          path: "/programs/early-intervention",
        },

        {
          name: "Therapy & Development Support",
          path: "/programs/therapy-support",
        },

        {
          name: "Inclusive Education",
          path: "/programs/inclusive-education",
        },

        {
          name: "Family & Community Support",
          path: "/programs/community-support",
        },

      ],
    },

    /* =====================================
        INSIGHT
    ===================================== */

    {
      name: "Insight",

      dropdown: [

        {
          name: "The Change We Aim",
          path: "/change-we-aim",
        },

        {
          name: "Our Impact",
          path: "/impact",
        },

      ],
    },

    /* =====================================
        COLLABORATION
    ===================================== */

    {
      name: "Collaboration",

      dropdown: [

        {
          name: "Doctors",
          path: "/collaboration/doctors",
        },

        {
          name: "Schools",
          path: "/collaboration/schools",
        },

      ],
    },

    /* =====================================
        UPDATES
    ===================================== */

    {
      name: "Updates",

      dropdown: [

        {
          name: "Our Stories",
          path: "/stories",
        },

        {
          name: "Gallery",
          path: "/gallery",
        },

        {
          name: "Blog",
          path: "/blog",
        },

      ],
    },

    /* =====================================
        CONTACT
    ===================================== */

    {
      name: "Contact",
      path: "/contact",
    },

  ]

  return (

    <>

      {/* =========================================
          TOP BAR
      ========================================= */}

      <div className="hidden lg:flex items-center justify-between bg-[#0B1B4D] text-white px-10 xl:px-16 py-3 text-sm">

        <p className="font-medium tracking-wide">

          Discovering Ability Before Disability

        </p>

        <div className="flex items-center gap-8">

          <p>
            foundationprarambha@gmail.com
          </p>

          <p>
            +91 940 911 8461
          </p>

        </div>

      </div>

      {/* =========================================
          MAIN NAVBAR
      ========================================= */}

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

          <div className="flex items-center justify-between h-[85px]">

            {/* =====================================
                LOGO
            ===================================== */}

            <Link
              to="/"
              className="flex-shrink-0"
            >

              <img
                src={logo}
                alt="Prarambha Foundation"
                className="
                  w-32
                  sm:w-40
                  lg:w-48
                  object-contain
                "
              />

            </Link>

            {/* =====================================
                DESKTOP MENU
            ===================================== */}

            <ul className="hidden lg:flex items-center gap-7 xl:gap-9">

              {navLinks.map((link, index) => (

                <li
                  key={index}
                  className="relative group"
                >

                  {/* SIMPLE LINK */}

                  {!link.dropdown ? (

                    <Link
                      to={link.path}
                      className="
                        relative
                        text-[#1F2937]
                        font-semibold
                        hover:text-[#E63946]
                        transition
                        duration-300
                        after:absolute
                        after:left-0
                        after:-bottom-2
                        after:w-0
                        after:h-[2px]
                        after:bg-[#E63946]
                        after:transition-all
                        after:duration-300
                        hover:after:w-full
                      "
                    >

                      {link.name}

                    </Link>

                  ) : (

                    <>

                      {/* DROPDOWN BUTTON */}

                      <button
                        className="
                          flex items-center gap-2
                          relative
                          text-[#1F2937]
                          font-semibold
                          hover:text-[#E63946]
                          transition
                          duration-300
                        "
                      >

                        {link.name}

                        <FaChevronDown
                          className="
                            text-[12px]
                            group-hover:rotate-180
                            transition
                            duration-300
                          "
                        />

                      </button>

                      {/* DROPDOWN */}

                      <div
                        className="
                          absolute
                          left-0
                          top-[55px]
                          w-[320px]
                          bg-white
                          rounded-3xl
                          border border-gray-100
                          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                          opacity-0
                          invisible
                          translate-y-3
                          group-hover:opacity-100
                          group-hover:visible
                          group-hover:translate-y-0
                          transition-all
                          duration-300
                          overflow-hidden
                          z-50
                        "
                      >

                        {link.dropdown.map((item, idx) => (

                          <Link
                            key={idx}
                            to={item.path}
                            className="
                              block
                              px-6
                              py-4
                              text-[15px]
                              font-medium
                              text-[#1F2937]
                              hover:bg-[#FFF5F5]
                              hover:text-[#E63946]
                              border-b
                              border-gray-100
                              transition
                            "
                          >

                            {item.name}

                          </Link>

                        ))}

                      </div>

                    </>

                  )}

                </li>

              ))}

            </ul>

            {/* =====================================
                RIGHT SIDE
            ===================================== */}

            <div className="flex items-center gap-3">

              {/* DONATE BUTTON */}

              <button
                className="
                  hidden sm:flex
                  items-center gap-2
                  bg-[#E63946]
                  hover:bg-[#d62839]
                  text-white
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  shadow-md
                  hover:scale-[1.03]
                  active:scale-[0.98]
                  transition
                  duration-300
                "
              >

                <FaHeart />

                Donate Now

              </button>

              {/* MOBILE BUTTON */}

              <button
                onClick={() => setMenuOpen(true)}
                className="
                  lg:hidden
                  w-11
                  h-11
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  hover:bg-gray-100
                  transition
                "
              >

                <FaBars className="text-2xl text-[#1F2937]" />

              </button>

            </div>

          </div>

        </div>

      </nav>

    </>
  )
}

export default Navbar