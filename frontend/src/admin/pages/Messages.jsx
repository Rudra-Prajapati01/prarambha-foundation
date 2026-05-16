import { useEffect, useState } from "react"

import axios from "axios"

import {
  FaEnvelope,
  FaUser,
  FaCalendarAlt,
  FaTag,
} from "react-icons/fa"

import AdminLayout from "../layouts/AdminLayout"

function Messages() {

  const [messages, setMessages] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  /* =========================================
      FETCH MESSAGES
  ========================================= */

  useEffect(() => {

    const fetchMessages = async () => {

      try {

        const { data } =
          await axios.get(
            "http://localhost:5000/api/messages"
          )

        setMessages(data)

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)
      }
    }

    fetchMessages()

  }, [])

  return (

    <AdminLayout>

      <div className="p-8 bg-[#F8FAFC] min-h-screen">

        {/* HEADER */}

        <div className="mb-10">

          <h1
            className="
              text-4xl
              font-black
              text-[#0F172A]
              mb-3
            "
          >
            Contact Messages
          </h1>

          <p
            className="
              text-gray-500
              text-lg
            "
          >
            View all inquiries sent from the website.
          </p>

        </div>

        {/* LOADING */}

        {loading ? (

          <div
            className="
              flex
              items-center
              justify-center
              h-[400px]
            "
          >

            <div
              className="
                text-2xl
                font-bold
                text-[#E63946]
              "
            >
              Loading Messages...
            </div>

          </div>

        ) : messages.length === 0 ? (

          /* EMPTY */

          <div
            className="
              bg-white
              rounded-[30px]
              p-20
              text-center
              shadow-sm
            "
          >

            <div
              className="
                w-24
                h-24
                mx-auto
                rounded-full
                bg-[#FFECEC]
                flex
                items-center
                justify-center
                text-[#E63946]
                text-4xl
                mb-6
              "
            >
              <FaEnvelope />
            </div>

            <h2
              className="
                text-3xl
                font-black
                text-[#0F172A]
                mb-4
              "
            >
              No Messages Yet
            </h2>

            <p
              className="
                text-gray-500
                text-lg
              "
            >
              Website contact messages will appear here.
            </p>

          </div>

        ) : (

          /* MESSAGE LIST */

          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-2
              gap-8
            "
          >

            {messages.map((msg) => (

              <div
                key={msg._id}
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  border
                  border-gray-100
                "
              >

                {/* TOP */}

                <div
                  className="
                    flex
                    justify-between
                    items-start
                    mb-8
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-[#FFECEC]
                        flex
                        items-center
                        justify-center
                        text-[#E63946]
                        text-2xl
                      "
                    >
                      <FaUser />
                    </div>

                    <div>

                      <h2
                        className="
                          text-2xl
                          font-black
                          text-[#0F172A]
                        "
                      >
                        {msg.name}
                      </h2>

                      <p
                        className="
                          text-gray-500
                          mt-1
                        "
                      >
                        {msg.email}
                      </p>

                    </div>

                  </div>

                  <div
                    className="
                      bg-[#FFF4E5]
                      text-[#F59E0B]
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-bold
                    "
                  >
                    New
                  </div>

                </div>

                {/* SUBJECT */}

                <div className="mb-6">

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      mb-3
                    "
                  >

                    <FaTag className="text-[#2563EB]" />

                    <h3
                      className="
                        text-lg
                        font-bold
                        text-[#0F172A]
                      "
                    >
                      Subject
                    </h3>

                  </div>

                  <div
                    className="
                      bg-[#F8FAFC]
                      p-5
                      rounded-2xl
                      text-gray-700
                      leading-[1.8]
                    "
                  >
                    {msg.subject}
                  </div>

                </div>

                {/* MESSAGE */}

                <div className="mb-6">

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      mb-3
                    "
                  >

                    <FaEnvelope className="text-[#E63946]" />

                    <h3
                      className="
                        text-lg
                        font-bold
                        text-[#0F172A]
                      "
                    >
                      Message
                    </h3>

                  </div>

                  <div
                    className="
                      bg-[#F8FAFC]
                      p-6
                      rounded-2xl
                      text-gray-700
                      leading-[2]
                    "
                  >
                    {msg.message}
                  </div>

                </div>

                {/* DATE */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-gray-500
                    text-sm
                    pt-5
                    border-t
                  "
                >

                  <FaCalendarAlt />

                  {
                    new Date(
                      msg.createdAt
                    ).toLocaleString()
                  }

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </AdminLayout>
  )
}

export default Messages