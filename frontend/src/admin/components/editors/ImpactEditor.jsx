function ImpactEditor({
  pageData,
  setPageData,
}) {

  const impact =
    pageData?.impact || []

  /* =========================
      ADD IMPACT
  ========================= */
  const addImpact = () => {

    const newImpact = {

      number: "",

      label: "",
    }

    setPageData((prev) => ({

      ...prev,

      impact: [

        ...prev.impact,

        newImpact,
      ],
    }))
  }

  /* =========================
      DELETE IMPACT
  ========================= */
  const deleteImpact = (index) => {

    const updatedImpact =
      impact.filter(
        (_, i) => i !== index
      )

    setPageData((prev) => ({

      ...prev,

      impact:
        updatedImpact,
    }))
  }

  /* =========================
      HANDLE CHANGE
  ========================= */
  const handleChange = (
    index,
    field,
    value
  ) => {

    const updatedImpact =
      [...impact]

    updatedImpact[index][field] =
      value

    setPageData((prev) => ({

      ...prev,

      impact:
        updatedImpact,
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
      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >

        <div>

          <h2
            className="
              text-3xl
              font-bold
              text-[#111827]
              mb-2
            "
          >
            Impact Section
          </h2>

          <p className="text-gray-500">

            Manage About page
            impact statistics.

          </p>

        </div>

        {/* ADD BUTTON */}
        <button
          onClick={addImpact}
          className="
            bg-[#E63946]
            hover:bg-[#d62839]
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
            transition-all
          "
        >

          + Add Impact

        </button>

      </div>

      {/* EMPTY STATE */}
      {impact.length === 0 && (

        <div
          className="
            bg-[#F9FAFB]
            border
            border-dashed
            border-gray-300
            rounded-[30px]
            p-12
            text-center
          "
        >

          <h3
            className="
              text-2xl
              font-bold
              mb-3
            "
          >
            No Impact Stats Found
          </h3>

          <p
            className="
              text-gray-500
              mb-6
            "
          >
            Add your first
            impact statistic.

          </p>

          <button
            onClick={addImpact}
            className="
              bg-black
              text-white
              px-6
              py-3
              rounded-2xl
              font-semibold
            "
          >

            Add First Impact

          </button>

        </div>

      )}

      {/* IMPACT CARDS */}
      <div className="space-y-8">

        {impact.map((item, index) => (

          <div
            key={index}
            className="
              border
              border-gray-200
              rounded-[30px]
              p-6
            "
          >

            {/* TOP */}
            <div
              className="
                flex
                items-center
                justify-between
                mb-6
              "
            >

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Impact {index + 1}
              </h3>

              {/* DELETE */}
              <button
                onClick={() =>
                  deleteImpact(index)
                }
                className="
                  bg-red-100
                  text-red-600
                  px-4
                  py-2
                  rounded-xl
                  font-semibold
                "
              >

                Delete

              </button>

            </div>

            {/* NUMBER */}
            <input
              type="text"
              placeholder="Example: 500+"
              value={item.number || ""}
              onChange={(e) =>
                handleChange(
                  index,
                  "number",
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
                mb-4
              "
            />

            {/* LABEL */}
            <input
              type="text"
              placeholder="Example: Children Supported"
              value={item.label || ""}
              onChange={(e) =>
                handleChange(
                  index,
                  "label",
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

        ))}

      </div>

    </div>
  )
}

export default ImpactEditor