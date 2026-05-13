import { useState } from "react"
import { Link } from "react-router-dom"

import {
  FaHeart,
  FaBars,
  FaTimes,
} from "react-icons/fa"

import logo from "../../assets/logo/logo.png"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ]

  return (

    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">

      <div className="w-full px-4 lg:px-10 xl:px-16">

        {/* MAIN NAVBAR */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex-shrink-0">

            <img
              src={logo}
              alt="Prarambha Foundation"
              className="w-36 sm:w-40 lg:w-44 object-contain"
            />

          </Link>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-12 font-semibold text-[17px] text-[#1F2937]">

            {navLinks.map((link, index) => (

              <li key={index}>

                <Link
                  to={link.path}
                  className="
                    hover:text-red-500
                    transition
                    duration-300
                  "
                >
                  {link.name}
                </Link>

              </li>

            ))}

          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* DONATE BUTTON */}
            <button
              className="
                flex items-center justify-center gap-2
                bg-red-500 hover:bg-red-600
                text-white
                px-5 sm:px-6
                py-3
                rounded-full
                font-semibold
                shadow-md
                transition
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
          fixed top-0 right-0 h-full w-[82%] max-w-[340px]
          bg-white z-50 shadow-2xl
          transition-transform duration-300
          flex flex-col
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* TOP */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">

          <img
            src={logo}
            alt="Logo"
            className="w-32 object-contain"
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

        {/* MOBILE LINKS */}
        <div className="flex flex-col px-5 py-6 gap-2">

          {navLinks.map((link, index) => (

            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="
                px-4 py-4
                rounded-2xl
                text-[#1F2937]
                font-semibold
                hover:bg-[#FFF7E8]
                hover:text-red-500
                transition
              "
            >

              {link.name}

            </Link>

          ))}

        </div>

        {/* MOBILE FOOTER */}
        <div className="mt-auto p-5 border-t border-gray-100">

          <button
            className="
              w-full
              flex items-center justify-center gap-3
              bg-red-500 hover:bg-red-600
              text-white
              py-4
              rounded-full
              font-semibold
              shadow-lg
              transition
            "
          >

            <FaHeart />

            Donate Now

          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar