import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa"

import { Link } from "react-router-dom"

function Footer({ pageData }) {

  const footer =
    pageData?.footer || {}

  /* =====================================
      DYNAMIC LOGO
  ===================================== */

  const dynamicLogo =
    footer.logo
      ? footer.logo.startsWith("http")
        ? footer.logo
        : `https://prarambha-backend.onrender.com${footer.logo}`
      : "/logo.png"

  return (

    <footer className="bg-[#FFF7E8] pt-16 pb-6 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-12
            pb-10
            border-b
            border-gray-200
          "
        >

          {/* ABOUT */}
          <div>

            {/* LOGO */}
            <img
              src={dynamicLogo}
              alt="Prarambha Foundation"
              className="
                w-48
                h-[70px]
                object-contain
                mb-5
              "
            />

            <p
              className="
                text-gray-600
                leading-relaxed
                text-sm
              "
            >

              {footer.description ||
                "Supporting children through inclusive education and therapy support."}

            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-3 mt-6">

              {/* FACEBOOK */}
              <a
                href={footer.facebook || "#"}
                target="_blank"
                rel="noreferrer"
                className="
                  w-10 h-10 rounded-full
                  bg-[#F3F4F6]
                  hover:bg-[#E63946]
                  hover:text-white
                  transition
                  flex items-center justify-center
                  cursor-pointer
                  text-[#1F2937]
                "
              >

                <FaFacebookF />

              </a>

              {/* INSTAGRAM */}
              <a
                href={footer.instagram || "#"}
                target="_blank"
                rel="noreferrer"
                className="
                  w-10 h-10 rounded-full
                  bg-[#F3F4F6]
                  hover:bg-[#E63946]
                  hover:text-white
                  transition
                  flex items-center justify-center
                  cursor-pointer
                  text-[#1F2937]
                "
              >

                <FaInstagram />

              </a>

              {/* YOUTUBE */}
              <a
                href={footer.youtube || "#"}
                target="_blank"
                rel="noreferrer"
                className="
                  w-10 h-10 rounded-full
                  bg-[#F3F4F6]
                  hover:bg-[#E63946]
                  hover:text-white
                  transition
                  flex items-center justify-center
                  cursor-pointer
                  text-[#1F2937]
                "
              >

                <FaYoutube />

              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3
              className="
                text-xl
                font-bold
                mb-5
                text-[#1F2937]
              "
            >

              Quick Links

            </h3>

            <ul
              className="
                space-y-3
                text-gray-600
                text-sm
              "
            >

              <li>
                <Link
                  to="/"
                  className="hover:text-[#E63946] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#E63946] transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-[#E63946] transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/stories"
                  className="hover:text-[#E63946] transition"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#E63946] transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* PROGRAMS */}
          <div>

            <h3
              className="
                text-xl
                font-bold
                mb-5
                text-[#1F2937]
              "
            >

              Our Programs

            </h3>

            <ul
              className="
                space-y-3
                text-gray-600
                text-sm
              "
            >

              <li>
                <Link
                  to="/programs/early-intervention"
                  className="hover:text-[#E63946] transition"
                >
                  Early Intervention
                </Link>
              </li>

              <li>
                <Link
                  to="/programs/therapy-support"
                  className="hover:text-[#E63946] transition"
                >
                  Therapy Support
                </Link>
              </li>

              <li>
                <Link
                  to="/programs/inclusive-education"
                  className="hover:text-[#E63946] transition"
                >
                  Inclusive Education
                </Link>
              </li>

              <li>
                <Link
                  to="/programs/community-support"
                  className="hover:text-[#E63946] transition"
                >
                  Community Support
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3
              className="
                text-xl
                font-bold
                mb-5
                text-[#1F2937]
              "
            >

              Contact Us

            </h3>

            <div
              className="
                space-y-4
                text-gray-600
                text-sm
              "
            >

              {/* PHONE */}
              <div className="flex items-start gap-3">

                <FaPhoneAlt className="text-[#E63946] mt-1" />

                <p>
                  {footer.phone ||
                    "+91 940 911 8461"}
                </p>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">

                <FaEnvelope className="text-[#E63946] mt-1" />

                <p>
                  {footer.email ||
                    "foundationprarambha@gmail.com"}
                </p>

              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="text-[#E63946] mt-1" />

                <p>
                  {footer.address ||
                    "Ahmedabad, Gujarat, India"}
                </p>

              </div>

            </div>

            {/* DONATE BUTTON */}
            <Link
              to="/donate"
              className="
                mt-6
                inline-flex
                items-center gap-2
                bg-[#E63946]
                hover:bg-red-600
                text-white
                px-6 py-3
                rounded-full
                font-semibold
                transition
                shadow-lg
              "
            >

              <FaHeart />

              Donate Now

            </Link>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-6 flex flex-col gap-5">

          {/* COPYRIGHT */}
          <div
            className="
              flex flex-col md:flex-row
              items-center
              justify-between
              gap-4
            "
          >

            <p
              className="
                text-gray-500
                text-sm
                text-center
                md:text-left
              "
            >

              © 2026 Prarambha Foundation.
              All Rights Reserved.

            </p>

            <p
              className="
                text-gray-500
                text-sm
                text-center
                md:text-right
              "
            >

              Designed with care for every child’s future.

            </p>

          </div>

          {/* LEGAL INFO */}
          <div
            className="
              border-t border-gray-200
              pt-5
              flex flex-col lg:flex-row
              items-center
              justify-between
              gap-3
            "
          >

            <p
              className="
                text-gray-500
                text-xs
                text-center
                lg:text-left
                leading-relaxed
              "
            >

              Registered NGO • Inclusive Education &
              Child Development Initiative

            </p>

            <div
              className="
                flex flex-wrap
                items-center
                justify-center
                gap-4
                text-xs
                text-gray-500
              "
            >

              <span className="hover:text-[#E63946] transition cursor-pointer">
                Privacy Policy
              </span>

              <span className="hover:text-[#E63946] transition cursor-pointer">
                Terms & Conditions
              </span>

              <span className="hover:text-[#E63946] transition cursor-pointer">
                Child Protection Policy
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer