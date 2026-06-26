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
    footer?.logo || ""

  return (

    <footer className="bg-[#FFF7E8] pt-20 pb-6 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================
            TOP SECTION
        ===================================== */}

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

          {/* =====================================
              ABOUT
          ===================================== */}

          <div>

            {/* LOGO */}

            {
              dynamicLogo && (

                <img
                  src={dynamicLogo}

                  alt="Prarambha Foundation"

                  loading="eager"

                  onError={(e) => {

                    e.target.style.display =
                      "none"
                  }}

                  className="
                    w-[240px]
                    lg:w-[260px]
                    h-[110px]
                    object-contain
                    mb-5
                  "
                />

              )
            }

            {/* DESCRIPTION */}

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

            {/* SOCIAL LINKS */}

            <div className="flex items-center gap-3 mt-6">

              {/* FACEBOOK */}

              <a
                href={
                  footer?.facebook
                  || "https://www.facebook.com/p/Prarambha-Foundation-61586256287748/"
                }

                target="_blank"

                rel="noreferrer"

                aria-label="Facebook"

                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#F3F4F6]
                  hover:bg-[#E63946]
                  hover:text-white
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  text-[#1F2937]
                "
              >

                <FaFacebookF />

              </a>

              {/* INSTAGRAM */}

              <a
                href={
                  footer?.instagram
                  || "https://www.instagram.com/prarambhafoundation/"
                }

                target="_blank"

                rel="noreferrer"

                aria-label="Instagram"

                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#F3F4F6]
                  hover:bg-[#E63946]
                  hover:text-white
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  text-[#1F2937]
                "
              >

                <FaInstagram />

              </a>

              {/* YOUTUBE */}

              <a
                href={
                  footer?.youtube
                  || "https://youtube.com"
                }

                target="_blank"

                rel="noreferrer"

                aria-label="YouTube"

                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#F3F4F6]
                  hover:bg-[#E63946]
                  hover:text-white
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  text-[#1F2937]
                "
              >

                <FaYoutube />

              </a>

            </div>

          </div>

          {/* =====================================
              QUICK LINKS
          ===================================== */}

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
                  className="
                    hover:text-[#E63946]
                    transition-all
                    duration-300
                  "
                >
                  Home
                </Link>

              </li>

              <li>

                <Link
                  to="/about"
                  className="
                    hover:text-[#E63946]
                    transition-all
                    duration-300
                  "
                >
                  About Us
                </Link>

              </li>

              <li>

                <Link
                  to="/gallery"
                  className="
                    hover:text-[#E63946]
                    transition-all
                    duration-300
                  "
                >
                  Gallery
                </Link>

              </li>

              <li>

                <Link
                  to="/stories"
                  className="
                    hover:text-[#E63946]
                    transition-all
                    duration-300
                  "
                >
                  Blog
                </Link>

              </li>

              <li>

                <Link
                  to="/contact"
                  className="
                    hover:text-[#E63946]
                    transition-all
                    duration-300
                  "
                >
                  Contact
                </Link>

              </li>

            </ul>

          </div>

          {/* =====================================
              PROGRAMS
          ===================================== */}

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
                  className="
                    hover:text-[#E63946]
                    transition-all
                    duration-300
                  "
                >
                  Early Intervention
                </Link>

              </li>

              <li>

                <Link
                  to="/programs/therapy-support"
                  className="
                    hover:text-[#E63946]
                    transition-all
                    duration-300
                  "
                >
                  Therapy Support
                </Link>

              </li>

              <li>

                <Link
                  to="/programs/inclusive-education"
                  className="
                    hover:text-[#E63946]
                    transition-all
                    duration-300
                  "
                >
                  Inclusive Education
                </Link>

              </li>

              <li>

                <Link
                  to="/programs/community-support"
                  className="
                    hover:text-[#E63946]
                    transition-all
                    duration-300
                  "
                >
                  Community Support
                </Link>

              </li>

            </ul>

          </div>

          {/* =====================================
              CONTACT
          ===================================== */}

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

                <FaPhoneAlt className="text-[#E63946] text-xl flex-shrink-0 mt-1" />

                <p className="flex-1">
                  {footer.phone ||
                    "+91 9825052901, 9409118461"}
                </p>

              </div>

              {/* EMAIL */}

              <div className="flex items-start gap-3">

                <FaEnvelope className="text-[#E63946] text-xl flex-shrink-0 mt-1" />

                <p className="flex-1">
                  {footer.email ||
                    "foundationprarambha@gmail.com"}
                </p>

              </div>

              {/* ADDRESS */}

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="text-[#E63946] text-xl flex-shrink-0 mt-1" />

                <p className="flex-1">
                  {footer.address || ""}
                </p>

              </div>

            </div>

            {/* DONATE BUTTON */}

            <Link
              to="/support-us"

              className="
                mt-6
                inline-flex
                items-center
                gap-2
                bg-[#E63946]
                hover:bg-red-600
                text-white
                px-6
                py-3
                rounded-full
                font-semibold
                transition-all
                duration-300
                shadow-lg
              "
            >

              <FaHeart />

              Support Us

            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer