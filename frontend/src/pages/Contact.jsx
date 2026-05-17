import { useEffect, useState } from "react"

import axios from "axios"

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa"

import Navbar from "../components/common/Navbar"

function Contact() {

  const [contactData, setContactData] =
    useState(null)

  const [loading, setLoading] =
    useState(false)

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

  /* =========================================
      FETCH CONTACT DATA
  ========================================= */

  useEffect(() => {

    const fetchData = async () => {

      try {

        const { data } =
          await axios.get(
            "https://prarambha-backend.onrender.com/api/pages/contact"
          )

        setContactData(data)

      } catch (error) {

        console.log(error)

      }
    }

    fetchData()

  }, [])

  /* =========================================
      HANDLE CHANGE
  ========================================= */

  const changeHandler = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  /* =========================================
      SUBMIT FORM
  ========================================= */

  const submitHandler = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {

      await axios.post(
        "https://prarambha-backend.onrender.com/api/messages",
        formData
      )

      alert("Message Sent Successfully 😄")

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

    } catch (error) {

      console.log(error)

      alert("Something went wrong")

    } finally {

      setLoading(false)
    }
  }

  return (

    <div className="bg-[#FFFDFB] min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <Navbar pageData={pageData} />

      {/* HERO SECTION */}

      <section
        className="
          relative
          py-24
          px-4
          sm:px-6
          lg:px-8
          overflow-hidden
          bg-gradient-to-br
          from-[#FFF7F2]
          via-[#FFFDFB]
          to-[#F7FAFF]
        "
      >

        {/* SHAPES */}

        <div
          className="
            absolute
            top-0
            right-0
            w-[700px]
            h-[700px]
            bg-[#FFD400]
            rounded-bl-[250px]
            opacity-95
          "
        ></div>

        <div
          className="
            absolute
            bottom-[-120px]
            left-[-120px]
            w-[350px]
            h-[350px]
            bg-[#FFE9EC]
            rounded-full
          "
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div
            className="
              grid
              lg:grid-cols-2
              gap-20
              items-center
            "
          >

            {/* LEFT */}

            <div>

              <p
                className="
                  text-[#F44336]
                  font-bold
                  uppercase
                  tracking-[3px]
                  mb-5
                "
              >
                {contactData?.heroTag ||
                  "Contact Us"}
              </p>

              <h1
                className="
                  text-5xl
                  md:text-7xl
                  font-black
                  leading-tight
                  text-[#071952]
                  mb-8
                "
              >

                {contactData?.heroTitle ||
                  "Let’s Build Inclusive Futures Together"}

              </h1>

              <p
                className="
                  text-lg
                  leading-[2]
                  text-gray-700
                  max-w-2xl
                  mb-10
                "
              >

                {contactData?.heroDescription ||
                  "We’re here to support children, families, educators, and communities through inclusive education, therapy, and early intervention. Reach out to us anytime."}

              </p>

              {/* CONTACT CARDS */}

              <div className="space-y-6">

                {/* EMAIL */}

                <div
                  className="
                    flex
                    items-center
                    gap-5
                    bg-white
                    p-5
                    rounded-3xl
                    shadow-sm
                  "
                >

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#FFE9EC]
                      flex
                      items-center
                      justify-center
                      text-[#F44336]
                      text-2xl
                    "
                  >
                    <FaEnvelope />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#071952]
                      "
                    >
                      Email Address
                    </h3>

                    <p className="text-gray-600">

                      {contactData?.email ||
                        "foundationprarambha@gmail.com"}

                    </p>

                  </div>

                </div>

                {/* PHONE */}

                <div
                  className="
                    flex
                    items-center
                    gap-5
                    bg-white
                    p-5
                    rounded-3xl
                    shadow-sm
                  "
                >

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#FFF3D6]
                      flex
                      items-center
                      justify-center
                      text-[#FF9800]
                      text-2xl
                    "
                  >
                    <FaPhoneAlt />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#071952]
                      "
                    >
                      Phone Number
                    </h3>

                    <p className="text-gray-600">

                      {contactData?.phone ||
                        "+91 940 911 8461"}

                    </p>

                  </div>

                </div>

                {/* LOCATION */}

                <div
                  className="
                    flex
                    items-center
                    gap-5
                    bg-white
                    p-5
                    rounded-3xl
                    shadow-sm
                  "
                >

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#E7F7EC]
                      flex
                      items-center
                      justify-center
                      text-[#22C55E]
                      text-2xl
                    "
                  >
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#071952]
                      "
                    >
                      Location
                    </h3>

                    <p className="text-gray-600">

                      {contactData?.location ||
                        "Ahmedabad, Gujarat, India"}

                    </p>

                  </div>

                </div>

                {/* HOURS */}

                <div
                  className="
                    flex
                    items-center
                    gap-5
                    bg-white
                    p-5
                    rounded-3xl
                    shadow-sm
                  "
                >

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#EEF4FF]
                      flex
                      items-center
                      justify-center
                      text-[#2563EB]
                      text-2xl
                    "
                  >
                    <FaClock />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#071952]
                      "
                    >
                      Working Hours
                    </h3>

                    <p className="text-gray-600">

                      {contactData?.hours ||
                        "Monday - Saturday : 9 AM - 6 PM"}

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT FORM */}

            <div
              className="
                bg-white
                p-8
                md:p-12
                rounded-[40px]
                shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                relative
                overflow-hidden
              "
            >

              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-52
                  h-52
                  bg-[#FFE9EC]
                  rounded-full
                  blur-3xl
                "
              ></div>

              <div className="relative z-10">

                <h2
                  className="
                    text-4xl
                    font-black
                    text-[#071952]
                    mb-4
                  "
                >
                  Send Us a Message
                </h2>

                <p
                  className="
                    text-gray-600
                    mb-10
                    leading-[1.9]
                  "
                >
                  Have questions or want to collaborate?
                  Fill out the form below.
                </p>

                <form
                  onSubmit={submitHandler}
                  className="space-y-6"
                >

                  <div
                    className="
                      grid
                      md:grid-cols-2
                      gap-6
                    "
                  >

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={changeHandler}
                      placeholder="Your Name"
                      required
                      className="
                        h-[65px]
                        px-6
                        rounded-2xl
                        border
                        border-gray-200
                        outline-none
                      "
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={changeHandler}
                      placeholder="Your Email"
                      required
                      className="
                        h-[65px]
                        px-6
                        rounded-2xl
                        border
                        border-gray-200
                        outline-none
                      "
                    />

                  </div>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={changeHandler}
                    placeholder="Subject"
                    required
                    className="
                      w-full
                      h-[65px]
                      px-6
                      rounded-2xl
                      border
                      border-gray-200
                      outline-none
                    "
                  />

                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={changeHandler}
                    placeholder="Write your message..."
                    required
                    className="
                      w-full
                      p-6
                      rounded-2xl
                      border
                      border-gray-200
                      outline-none
                      resize-none
                    "
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      bg-[#F44336]
                      hover:bg-red-600
                      text-white
                      px-10
                      py-5
                      rounded-full
                      font-bold
                      flex
                      items-center
                      gap-4
                      transition-all
                      duration-300
                      hover:scale-105
                      shadow-lg
                    "
                  >

                    {
                      loading
                        ? "Sending..."
                        : "Send Message"
                    }

                    <FaPaperPlane />

                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Contact