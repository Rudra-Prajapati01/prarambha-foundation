function ValuesEditor({
  pageData,
  setPageData,
}) {

  const values =
    pageData?.values || []

  /* =========================
      ADD VALUE
  ========================= */
  const addValue = () => {

    const newValue = {

      title: "",

      desc: "",

      icon: "",

      color: "#E63946",
    }

    setPageData((prev) => ({

      ...prev,

      values: [

        ...prev.values,

        newValue,
      ],
    }))
  }

  /* =========================
      DELETE VALUE
  ========================= */
  const deleteValue = (index) => {

    const updatedValues =
      values.filter(
        (_, i) => i !== index
      )

    setPageData((prev) => ({

      ...prev,

      values:
        updatedValues,
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

    const updatedValues =
      [...values]

    updatedValues[index][field] =
      value

    setPageData((prev) => ({

      ...prev,

      values:
        updatedValues,
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
            Values Section
          </h2>

          <p className="text-gray-500">

            Manage value cards for
            the About page.

          </p>

        </div>

        {/* ADD BUTTON */}
        <button
          onClick={addValue}
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

          + Add Value

        </button>

      </div>

      {/* EMPTY STATE */}
      {values.length === 0 && (

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
            No Values Found
          </h3>

          <p
            className="
              text-gray-500
              mb-6
            "
          >
            Add your first value card.

          </p>

          <button
            onClick={addValue}
            className="
              bg-black
              text-white
              px-6
              py-3
              rounded-2xl
              font-semibold
            "
          >

            Add First Value

          </button>

        </div>

      )}

      {/* VALUE CARDS */}
      <div className="space-y-8">

        {values.map((value, index) => (

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
                Value {index + 1}
              </h3>

              {/* DELETE */}
              <button
                onClick={() =>
                  deleteValue(index)
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

            {/* TITLE */}
            <input
              type="text"
              placeholder="Value Title"
              value={value.title || ""}
              onChange={(e) =>
                handleChange(
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
                mb-4
              "
            />

            {/* DESCRIPTION */}
            <textarea
              rows="4"
              placeholder="Value Description"
              value={value.desc || ""}
              onChange={(e) =>
                handleChange(
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
                mb-4
              "
            />

            {/* ICON */}
            <input
              type="text"
              placeholder="Icon Name (example: heart)"
              value={value.icon || ""}
              onChange={(e) =>
                handleChange(
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
                mb-4
              "
            />

            {/* COLOR */}
            <div>

              <label
                className="
                  block
                  font-semibold
                  mb-3
                "
              >
                Card Color
              </label>

              <input
                type="color"
                value={
                  value.color ||
                  "#E63946"
                }
                onChange={(e) =>
                  handleChange(
                    index,
                    "color",
                    e.target.value
                  )
                }
                className="
                  w-[90px]
                  h-[55px]
                  rounded-xl
                  border-none
                  cursor-pointer
                "
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default ValuesEditor