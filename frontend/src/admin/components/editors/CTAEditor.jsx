function CTAEditor({
  pageData,
  setPageData,
}) {

  /* =========================
      HANDLE CHANGE
  ========================= */
  const handleChange = (
    field,
    value
  ) => {

    setPageData((prev) => ({

      ...prev,

      cta: {

        ...prev.cta,

        [field]: value,
      },
    }))
  }

  return (

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
          CTA Section
        </h2>

        <p className="text-gray-500">

          Manage the About page
          call-to-action section.

        </p>

      </div>

      {/* FORM */}
      <div className="space-y-6">

        {/* TITLE */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            CTA Title
          </label>

          <input
            type="text"
            placeholder="Enter CTA title"
            value={
              pageData.cta?.title || ""
            }
            onChange={(e) =>
              handleChange(
                "title",
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

        </div>

        {/* DESCRIPTION */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            CTA Description
          </label>

          <textarea
            rows="5"
            placeholder="Enter CTA description"
            value={
              pageData.cta?.description || ""
            }
            onChange={(e) =>
              handleChange(
                "description",
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

        {/* BUTTON 1 */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Primary Button Text
          </label>

          <input
            type="text"
            placeholder="Example: Join Us"
            value={
              pageData.cta?.button1 || ""
            }
            onChange={(e) =>
              handleChange(
                "button1",
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

        </div>

        {/* BUTTON 2 */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Secondary Button Text
          </label>

          <input
            type="text"
            placeholder="Example: Contact Us"
            value={
              pageData.cta?.button2 || ""
            }
            onChange={(e) =>
              handleChange(
                "button2",
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

        </div>

      </div>

    </div>
  )
}

export default CTAEditor