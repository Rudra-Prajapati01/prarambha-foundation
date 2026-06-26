import React, { useEffect, useState } from "react"

import axios from "axios"

import {
  FaEnvelope,
  FaUser,
  FaCalendarAlt,
  FaTag,
  FaTrash,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa"

import AdminLayout from "../layouts/AdminLayout"

function Messages() {

  const [messages, setMessages] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [messageToDelete, setMessageToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const confirmDelete = async () => {
    if (!messageToDelete) return;
    setIsDeleting(true);
    try {
      await axios.delete(`http://localhost:5000/api/messages/${messageToDelete}`);
      setMessages((prev) => prev.filter((msg) => msg._id !== messageToDelete));
      setToastType("success");
      setToastMessage("Message deleted successfully.");
    } catch (error) {
      setToastType("error");
      setToastMessage("Failed to delete message. Please try again.");
    } finally {
      setIsDeleting(false);
      setShowModal(false);
      setMessageToDelete(null);
      setTimeout(() => setToastMessage(""), 3000);
    }
  }

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

      {/* TOAST */}
      {toastMessage && (
        <div className={`fixed top-24 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-2 animate-bounce text-white ${toastType === "success" ? "bg-green-500" : "bg-red-500"}`}>
          {toastType === "success" ? <FaCheck /> : <FaExclamationTriangle />}
          <span className="font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* CONFIRMATION MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Delete Message?</h3>
            <p className="text-gray-600 mb-8">Are you sure you want to permanently delete this contact message?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setMessageToDelete(null);
                }}
                className="px-6 py-2.5 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-6 py-2.5 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors flex items-center gap-2"
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-8 bg-[#F8FAFC] min-h-screen">

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

                  <button
                    onClick={() => {
                      setMessageToDelete(msg._id);
                      setShowModal(true);
                    }}
                    disabled={isDeleting && messageToDelete === msg._id}
                    className="
                      p-3
                      text-red-500
                      bg-red-50
                      hover:bg-red-500
                      hover:text-white
                      rounded-xl
                      transition-colors
                      border
                      border-red-100
                    "
                    title="Delete Message"
                  >
                    <FaTrash className="text-lg" />
                  </button>

                </div>

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
                    "
                  >
                    {msg.subject}
                  </div>

                </div>

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