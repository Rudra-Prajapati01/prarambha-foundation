import { useEffect, useState } from "react"

import axios from "axios"

import AdminLayout from "../../layouts/AdminLayout"

function DonateEditor() {

  /* =====================================
      LOCAL STATE
  ===================================== */

  const [pageData, setPageData] =
    useState({

      donate: {

        heroTitle: "",

        heroSubtitle: "",

        heroDescription: "",

        cards: [

          {
            title: "",
            amount: "",
            desc: "",
            buttonText: "",
            icon: "",
          },

          {
            title: "",
            amount: "",
            desc: "",
            buttonText: "",
            icon: "",
          },

          {
            title: "",
            amount: "",
            desc: "",
            buttonText: "",
            icon: "",
          },
        ],
      },
    })

  /* =====================================
      FETCH DATA
  ===================================== */

  useEffect(() => {

    fetchDonatePage()

  }, [])

  const fetchDonatePage = async () => {

    try {

      const { data } =
        await axios.get(
          "https://prarambha-backend.onrender.com/api/pages/donate"
        )

      if (data?.donate) {

        setPageData(data)
      }

    } catch (error) {

      console.log(error)
    }
  }

  /* =====================================
      SAVE DATA
  ===================================== */

  const saveDonatePage = async () => {

    try {

      await axios.put(
        "https://prarambha-backend.onrender.com/api/pages/donate",

        pageData
      )

      alert("Donate Page Updated ✅")

    } catch (error) {

      console.log(error)

      alert("Update Failed ❌")
    }
  }

  /* =====================================
      HANDLE HERO
  ===================================== */

  const handleHeroChange = (
    field,
    value
  ) => {

    setPageData((prev) => ({

      ...prev,

      donate: {

        ...prev.donate,

        [field]: value,
      },
    }))
  }

  /* =====================================
      HANDLE CARD
  ===================================== */

  const handleCardChange = (
    index,
    field,
    value
  ) => {

    const updatedCards =
      [...pageData.donate.cards]

    updatedCards[index] = {

      ...updatedCards[index],

      [field]: value,
    }

    setPageData((prev) => ({

      ...prev,

      donate: {

        ...prev.donate,

        cards: updatedCards,
      },
    }))
  }

  return (

    <AdminLayout>

      <div
        className="
          bg-white
          rounded-[30px]
          p-8
          shadow-sm
        "
      >

        {/* HEADER */}

        <div className="mb-8">

          <h2
            className="
              text-3xl
              font-bold
              text-[#111827]
              mb-2
            "
          >
            Donate CMS
          </h2>

          <p className="text-gray-500">
            Manage donation page content.
          </p>

        </div>

        {/* HERO */}

        <div className="space-y-5 mb-12">

          <input
            type="text"

            placeholder="Hero Title"

            value={
              pageData.donate.heroTitle
            }

            onChange={(e) =>
              handleHeroChange(
                "heroTitle",
                e.target.value
              )
            }

            className="
              w-full
              h-[58px]
              px-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
            "
          />

          <input
            type="text"

            placeholder="Hero Subtitle"

            value={
              pageData.donate.heroSubtitle
            }

            onChange={(e) =>
              handleHeroChange(
                "heroSubtitle",
                e.target.value
              )
            }

            className="
              w-full
              h-[58px]
              px-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
            "
          />

          <textarea
            rows="4"

            placeholder="Hero Description"

            value={
              pageData.donate.heroDescription
            }

            onChange={(e) =>
              handleHeroChange(
                "heroDescription",
                e.target.value
              )
            }

            className="
              w-full
              p-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
              resize-none
            "
          />

        </div>

        {/* DONATION CARDS */}

        <div className="space-y-8">

          {
            pageData.donate.cards.map(
              (card, index) => (

                <div
                  key={index}

                  className="
                    border
                    border-gray-200
                    rounded-[28px]
                    p-6
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-bold
                      mb-6
                    "
                  >
                    Donation Card {index + 1}
                  </h3>

                  <div className="space-y-4">

                    {/* TITLE */}

                    <input
                      type="text"

                      placeholder="Card Title"

                      value={card.title}

                      onChange={(e) =>
                        handleCardChange(
                          index,
                          "title",
                          e.target.value
                        )
                      }

                      className="
                        w-full
                        h-[55px]
                        px-5
                        rounded-2xl
                        bg-[#F3F4F6]
                        outline-none
                      "
                    />

                    {/* AMOUNT */}

                    <input
                      type="text"

                      placeholder="Amount"

                      value={card.amount}

                      onChange={(e) =>
                        handleCardChange(
                          index,
                          "amount",
                          e.target.value
                        )
                      }

                      className="
                        w-full
                        h-[55px]
                        px-5
                        rounded-2xl
                        bg-[#F3F4F6]
                        outline-none
                      "
                    />

                    {/* DESCRIPTION */}

                    <textarea
                      rows="3"

                      placeholder="Description"

                      value={card.desc}

                      onChange={(e) =>
                        handleCardChange(
                          index,
                          "desc",
                          e.target.value
                        )
                      }

                      className="
                        w-full
                        p-5
                        rounded-2xl
                        bg-[#F3F4F6]
                        outline-none
                        resize-none
                      "
                    />

                    {/* BUTTON */}

                    <input
                      type="text"

                      placeholder="Button Text"

                      value={card.buttonText}

                      onChange={(e) =>
                        handleCardChange(
                          index,
                          "buttonText",
                          e.target.value
                        )
                      }

                      className="
                        w-full
                        h-[55px]
                        px-5
                        rounded-2xl
                        bg-[#F3F4F6]
                        outline-none
                      "
                    />

                    {/* ICON */}

                    <input
                      type="text"

                      placeholder="Emoji Icon"

                      value={card.icon}

                      onChange={(e) =>
                        handleCardChange(
                          index,
                          "icon",
                          e.target.value
                        )
                      }

                      className="
                        w-full
                        h-[55px]
                        px-5
                        rounded-2xl
                        bg-[#F3F4F6]
                        outline-none
                      "
                    />

                  </div>

                </div>

              )
            )
          }

        </div>

        {/* SAVE BUTTON */}

        <button
          onClick={saveDonatePage}

          className="
            mt-10
            w-full
            h-[60px]
            rounded-2xl
            bg-[#E63946]
            hover:bg-[#d62839]
            text-white
            font-bold
            text-lg
            transition-all
          "
        >

          Save Donate Page

        </button>

      </div>

    </AdminLayout>
  )
}

export default DonateEditor