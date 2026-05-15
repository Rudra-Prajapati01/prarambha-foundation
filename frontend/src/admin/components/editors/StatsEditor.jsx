function StatsEditor({
  pageData,
  setPageData,
}) {

  const stats =
    pageData?.stats || []

  /* =====================================
      ICON OPTIONS
  ===================================== */
  const iconOptions = [

    "smile",

    "users",

    "graduation",

    "handshake",

    "heart",

    "star",

    "globe",

    "book",

    "child",

    "school",
  ]

  /* =====================================
      ADD STAT
  ===================================== */
  const addStat = () => {

    const newStat = {

      number: "",

      label: "",

      icon: "smile",
    }

    setPageData((prev) => ({

      ...prev,

      stats: [

        ...(prev.stats || []),

        newStat,
      ],
    }))
  }

  /* =====================================
      DELETE
  ===================================== */
  const deleteStat = (index) => {

    const updatedStats =
      stats.filter(
        (_, i) => i !== index
      )

    setPageData((prev) => ({

      ...prev,

      stats: updatedStats,
    }))
  }

  /* =====================================
      CHANGE
  ===================================== */
  const handleStatChange = (
    index,
    field,
    value
  ) => {

    const updatedStats =
      [...stats]

    updatedStats[index][field] =
      value

    setPageData((prev) => ({

      ...prev,

      stats: updatedStats,
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

      {/* TOP */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >

        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Stats Section
        </h2>

        <button
          onClick={addStat}
          className="
            bg-[#E63946]
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
          "
        >

          + Add Stat

        </button>

      </div>

      {/* STATS */}
      <div className="space-y-6">

        {stats.map(
          (stat, index) => (

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
                  mb-5
                "
              >

                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  Stat {index + 1}
                </h3>

                <button
                  onClick={() =>
                    deleteStat(index)
                  }
                  className="
                    bg-red-100
                    text-red-600
                    px-4
                    py-2
                    rounded-xl
                  "
                >

                  Delete

                </button>

              </div>

              {/* NUMBER */}
              <input
                type="text"
                placeholder="Number"
                value={stat.number || ""}
                onChange={(e) =>
                  handleStatChange(
                    index,
                    "number",
                    e.target.value
                  )
                }
                className="
                  w-full
                  h-[60px]
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
                placeholder="Label"
                value={stat.label || ""}
                onChange={(e) =>
                  handleStatChange(
                    index,
                    "label",
                    e.target.value
                  )
                }
                className="
                  w-full
                  h-[60px]
                  px-5
                  rounded-2xl
                  bg-[#F3F4F6]
                  outline-none
                  mb-4
                "
              />

              {/* ICON */}
              <select
                value={stat.icon || "smile"}
                onChange={(e) =>
                  handleStatChange(
                    index,
                    "icon",
                    e.target.value
                  )
                }
                className="
                  w-full
                  h-[60px]
                  px-5
                  rounded-2xl
                  bg-[#F3F4F6]
                  outline-none
                "
              >

                {iconOptions.map(
                  (icon) => (

                    <option
                      key={icon}
                      value={icon}
                    >

                      {icon}

                    </option>

                  )
                )}

              </select>

            </div>

          )
        )}

      </div>

    </div>
  )
}

export default StatsEditor