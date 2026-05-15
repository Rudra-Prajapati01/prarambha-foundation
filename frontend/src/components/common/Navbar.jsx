import { useState } from "react"
import { Link } from "react-router-dom"

import {
  FaHeart,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"

import logo from "../../assets/logo/logo.png"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Who We Are",
      dropdown: [
        { name: "About Us", path: "/about" },
        { name: "Our Mission", path: "/mission" },
        { name: "Our Story", path: "/story" },
        { name: "Chairperson Message", path: "/chairperson" },
        { name: "Collaborations", path: "/collaborations" },
        { name: "Contact Us", path: "/contact" },
      ],
    },

    {
      name: "What We Do",
      dropdown: [
        { name: "Early Intervention", path: "/programs/early-intervention" },
        { name: "Therapy Support", path: "/programs/therapy-support" },
        { name: "Inclusive Education", path: "/programs/inclusive-education" },
        { name: "Parent Guidance", path: "/programs/parent-guidance" },
        { name: "Community Support", path: "/programs/community-support" },
      ],
    },

    {
      name: "Impact",
      path: "/impact",
    },

    {
      name: "Updates",
      path: "/updates",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ]

  return (
    <>

      {/* TOP INFO BAR */}
      <div className="hidden lg:flex items-center justify-between bg-[#0B1B4D] text-white px-10 xl:px-16 py-2 text-sm">

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

      {/* NAVBAR */}
      <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">

        <div className="w-full px-4 lg:px-10 xl:px-16">

          {/* MAIN NAVBAR */}
          <div className="flex items-center justify-between h-[88px]">

            {/* LOGO */}
            <Link to="/" className="flex-shrink-0">

              <img
                src={logo}
                alt="Prarambha Foundation"
                className="w-40 sm:w-44 lg:w-48 object-contain"
              />

            </Link>

            {/* DESKTOP NAV LINKS */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10 font-semibold text-[16px] text-[#1F2937]">

              {navLinks.map((link, index) => (

                <li
                  key={index}
                  className="relative group"
                >

                  {/* NORMAL LINK */}
                  {!link.dropdown ? (

                    <Link
                      to={link.path}
                      className="
                        relative
                        hover:text-[#E63946]
                        transition
                        duration-300
                        after:absolute
                        after:left-0
                        after:-bottom-1
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
                          relative
                          hover:text-[#E63946]
                          transition
                          duration-300
                          after:absolute
                          after:left-0
                          after:-bottom-1
                          after:w-0
                          after:h-[2px]
                          after:bg-[#E63946]
                          after:transition-all
                          after:duration-300
                          group-hover:after:w-full
                        "
                      >

                        {link.name}

                      </button>

                      {/* DROPDOWN MENU */}
                      <div
                        className="
                          absolute
                          left-0
                          top-[48px]
                          w-[270px]
                          bg-white
                          rounded-2xl
                          shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                          border border-gray-100
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
                              hover:bg-[#FFF7E8]
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

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* DONATE BUTTON */}
              <button
                className="
                  flex items-center justify-center gap-2
                  bg-[#E63946] hover:bg-[#d62839]
                  text-white
                  px-5 sm:px-6
                  py-3
                  rounded-full
                  font-semibold
                  shadow-md
                  hover:scale-[1.03]
                  active:scale-[0.98]
                  transition
                  duration-300
                  text-sm sm:text-base
                "
              >

                <FaHeart className="text-sm" />

                Donate Now

              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(true)}
                className="
                  lg:hidden
                  w-11 h-11
                  rounded-xl
                  flex items-center justify-center
                  text-[#1F2937]
                  hover:bg-gray-100
                  transition
                "
              >

                <FaBars className="text-2xl" />

              </button>

            </div>

          </div>

        </div>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`
            fixed inset-0 bg-black/40 z-40
            transition-opacity duration-300
            ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
          onClick={() => setMenuOpen(false)}
        />

        {/* MOBILE SIDEBAR */}
        <div
          className={`
            fixed top-0 right-0 h-full w-[78%] sm:w-[70%] max-w-[340px]
            bg-white z-50 shadow-2xl
            transition-transform duration-300
            flex flex-col
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >

          {/* TOP */}
          <div className="border-b border-gray-100">

            <div className="flex items-center justify-between px-5 py-5">

              <img
                src={logo}
                alt="Logo"
                className="w-36 object-contain"
              />

              <button
                onClick={() => setMenuOpen(false)}
                className="
                  w-10 h-10
                  rounded-xl
                  bg-gray-100
                  flex items-center justify-center
                  text-[#1F2937]
                "
              >

                <FaTimes className="text-lg" />

              </button>

            </div>

            {/* TAGLINE */}
            <p className="text-sm text-gray-500 px-5 pb-5 leading-relaxed">

              Discovering Ability Before Disability

            </p>

          </div>

          {/* MOBILE LINKS */}
          <div className="flex flex-col px-5 py-6 gap-3 overflow-y-auto">

            {navLinks.map((link, index) => (

              <div key={index}>

                {!link.dropdown ? (

                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="
                      px-4 py-4
                      rounded-2xl
                      text-[#1F2937]
                      font-semibold
                      hover:bg-[#FFF7E8]
                      hover:text-[#E63946]
                      transition
                      block
                    "
                  >

                    {link.name}

                  </Link>

                ) : (

                  <div className="bg-[#F9FAFB] rounded-2xl overflow-hidden">

                    <div
                      className="
                        px-4 py-4
                        font-bold
                        text-[#1F2937]
                        border-b border-gray-200
                      "
                    >

                      {link.name}

                    </div>

                    {link.dropdown.map((item, idx) => (

                      <Link
                        key={idx}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="
                          block
                          px-6 py-3
                          text-sm
                          text-gray-600
                          hover:bg-[#FFF7E8]
                          hover:text-[#E63946]
                          transition
                        "
                      >

                        {item.name}

                      </Link>

                    ))}

                  </div>

                )}

              </div>

            ))}

          </div>

          {/* MOBILE SOCIALS */}
          <div className="flex items-center gap-4 px-5 pb-5 mt-auto">

            <div className="w-11 h-11 rounded-full bg-[#F3F4F6] hover:bg-[#E63946] hover:text-white transition flex items-center justify-center cursor-pointer text-[#1F2937]">

              <FaFacebookF />

            </div>

            <div className="w-11 h-11 rounded-full bg-[#F3F4F6] hover:bg-[#E63946] hover:text-white transition flex items-center justify-center cursor-pointer text-[#1F2937]">

              <FaInstagram />

            </div>

            <div className="w-11 h-11 rounded-full bg-[#F3F4F6] hover:bg-[#E63946] hover:text-white transition flex items-center justify-center cursor-pointer text-[#1F2937]">

              <FaLinkedinIn />

            </div>

          </div>

          {/* MOBILE FOOTER */}
          <div className="p-5 border-t border-gray-100">

            <button
              className="
                w-full
                flex items-center justify-center gap-3
                bg-[#E63946] hover:bg-[#d62839]
                text-white
                py-4
                rounded-full
                font-semibold
                shadow-lg
                hover:scale-[1.02]
                active:scale-[0.98]
                transition
                duration-300
              "
            >

              <FaHeart />

              Donate Now

            </button>

          </div>

        </div>

      </nav>

    </>
  )
}

export default Navbar