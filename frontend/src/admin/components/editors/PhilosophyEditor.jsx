function PhilosophyEditor({
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

      philosophy: {

        ...prev.philosophy,

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
          Philosophy Section
        </h2>

        <p className="text-gray-500">

          Manage the philosophy content
          for the About page.

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
            Philosophy Title
          </label>

          <input
            type="text"
            placeholder="Enter title"
            value={
              pageData.philosophy?.title || ""
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
            Philosophy Description
          </label>

          <textarea
            rows="8"
            placeholder="Enter philosophy description"
            value={
              pageData.philosophy?.description || ""
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

      </div>

    </div>
  )
}

export default PhilosophyEditor