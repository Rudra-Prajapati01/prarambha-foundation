import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import {
  FaHeart,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa"

import logo from "../../assets/logo/logo.png"

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [activeDropdown, setActiveDropdown] =
    useState(null)

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
          name: "Documents",
          path: "/documents",
        },

      ],
    },

    {
      name: "What We Do",

      dropdown: [

        {
          name: "Early Intervention",
          path: "/programs/early-intervention",
        },

        {
          name: "Therapy Support",
          path: "/programs/therapy-support",
        },

        {
          name: "Inclusive Education",
          path: "/programs/inclusive-education",
        },

        {
          name: "Community Support",
          path: "/programs/community-support",
        },

      ],
    },

    {
      name: "Gallery",
      path: "/gallery",
    },

    {
      name: "Blog",
      path: "/stories",
    },

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

      <div
        className="
          hidden lg:flex
          items-center
          justify-between
          bg-[#0B1B4D]
          text-white
          px-10
          xl:px-16
          py-3
          text-sm
        "
      >

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
          NAVBAR
      ========================================= */}

      <nav
        className="
          sticky
          top-0
          z-50
          bg-white
          border-b
          border-gray-100
          shadow-sm
        "
      >

        <div
          className="
            w-full
            px-4
            sm:px-6
            lg:px-10
            xl:px-16
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              h-[85px]
            "
          >

            {/* =====================================
                LOGO
            ===================================== */}

            <Link to="/">

              <img
                src={logo}
                alt="logo"
                className="
                  w-32
                  sm:w-40
                  object-contain
                "
              />

            </Link>

            {/* =====================================
                DESKTOP MENU
            ===================================== */}

            <ul
              className="
                hidden
                lg:flex
                items-center
                gap-8
              "
            >

              {navLinks.map((link, index) => (

                <li
                  key={index}
                  className="relative group"
                >

                  {!link.dropdown ? (

                    <Link
                      to={link.path}
                      className="
                        text-[#1F2937]
                        font-semibold
                        hover:text-[#E63946]
                        transition
                      "
                    >

                      {link.name}

                    </Link>

                  ) : (

                    <>

                      <button
                        className="
                          flex
                          items-center
                          gap-2
                          text-[#1F2937]
                          font-semibold
                          hover:text-[#E63946]
                          transition
                        "
                      >

                        {link.name}

                        <FaChevronDown
                          className="
                            text-[12px]
                            group-hover:rotate-180
                            transition
                          "
                        />

                      </button>

                      {/* DESKTOP DROPDOWN */}

                      <div
                        className="
                          absolute
                          left-0
                          top-[50px]
                          w-[280px]
                          bg-white
                          rounded-2xl
                          shadow-xl
                          border
                          border-gray-100
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
                              text-sm
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
                  hidden md:flex
                  items-center
                  gap-2
                  bg-[#EF4444]
                  hover:bg-[#DC2626]
                  text-white
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  transition
                "
              >

                <FaHeart />

                Donate Now

              </button>

              {/* MOBILE MENU BUTTON */}

              <button
                onClick={() =>
                  setMenuOpen(!menuOpen)
                }
                className="
                  lg:hidden
                  w-12
                  h-12
                  rounded-xl
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                "
              >

                {
                  menuOpen
                    ? <FaTimes className="text-2xl" />
                    : <FaBars className="text-2xl" />
                }

              </button>

            </div>

          </div>

        </div>

        {/* =========================================
            MOBILE MENU
        ========================================= */}

        <div
          className={`
            lg:hidden
            fixed
            top-0
            right-0
            h-screen
            w-[85%]
            bg-white
            shadow-2xl
            z-[999]
            transition-all
            duration-300
            overflow-y-auto
            ${menuOpen
              ? "translate-x-0"
              : "translate-x-full"
            }
          `}
        >

          {/* HEADER */}

          <div
            className="
              flex
              items-center
              justify-between
              p-5
              border-b
            "
          >

            <img
              src={logo}
              alt="logo"
              className="w-28"
            />

            <button
              onClick={() =>
                setMenuOpen(false)
              }
            >

              <FaTimes className="text-3xl text-[#1F2937]" />

            </button>

          </div>

          {/* MOBILE LINKS */}

          <div className="p-5">

            {navLinks.map((link, index) => (

              <div
                key={index}
                className="mb-3"
              >

                {!link.dropdown ? (

                  <Link
                    to={link.path}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                      block
                      py-4
                      px-4
                      rounded-xl
                      font-semibold
                      text-[#1F2937]
                      hover:bg-gray-100
                    "
                  >

                    {link.name}

                  </Link>

                ) : (

                  <>

                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === index
                            ? null
                            : index
                        )
                      }
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        py-4
                        px-4
                        rounded-xl
                        font-semibold
                        text-[#1F2937]
                        hover:bg-gray-100
                      "
                    >

                      {link.name}

                      <FaChevronDown
                        className={`
                          transition
                          ${activeDropdown === index
                            ? "rotate-180"
                            : ""
                          }
                        `}
                      />

                    </button>

                    {/* MOBILE DROPDOWN */}

                    {
                      activeDropdown === index && (

                        <div
                          className="
                            ml-4
                            mt-2
                            border-l-2
                            border-[#EF4444]
                          "
                        >

                          {link.dropdown.map((item, idx) => (

                            <Link
                              key={idx}
                              to={item.path}
                              onClick={() =>
                                setMenuOpen(false)
                              }
                              className="
                                block
                                py-3
                                px-4
                                text-sm
                                text-gray-700
                                hover:text-[#EF4444]
                              "
                            >

                              {item.name}

                            </Link>

                          ))}

                        </div>

                      )
                    }

                  </>

                )}

              </div>

            ))}

            {/* MOBILE DONATE BUTTON */}

            <button
              className="
                w-full
                mt-6
                bg-[#EF4444]
                hover:bg-[#DC2626]
                text-white
                py-4
                rounded-full
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                transition
              "
            >

              <FaHeart />

              Donate Now

            </button>

          </div>

        </div>

        {/* OVERLAY */}

        {
          menuOpen && (

            <div
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                lg:hidden
                fixed
                inset-0
                bg-black/40
                z-[998]
              "
            />

          )
        }

      </nav>

    </>
  )
}

export default Navbar