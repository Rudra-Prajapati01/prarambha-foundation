function ProgramsEditor({
  pageData,
  setPageData,
}) {

  const programs =
    pageData?.programs || []

  /* =====================================
      ADD PROGRAM
  ===================================== */

  const addProgram = () => {

    const newProgram = {

      title: "",

      color: "#E63946",

      points: [""],
    }

    setPageData((prev) => ({

      ...prev,

      programs: [

        ...(prev.programs || []),

        newProgram,
      ],
    }))
  }

  /* =====================================
      DELETE PROGRAM
  ===================================== */

  const deleteProgram = (index) => {

    const updatedPrograms =
      programs.filter(
        (_, i) => i !== index
      )

    setPageData((prev) => ({

      ...prev,

      programs: updatedPrograms,
    }))
  }

  /* =====================================
      PROGRAM CHANGE
  ===================================== */

  const handleProgramChange = (
    index,
    field,
    value
  ) => {

    const updatedPrograms =
      [...programs]

    updatedPrograms[index][field] =
      value

    setPageData((prev) => ({

      ...prev,

      programs: updatedPrograms,
    }))
  }

  /* =====================================
      POINT CHANGE
  ===================================== */

  const handlePointChange = (
    programIndex,
    pointIndex,
    value
  ) => {

    const updatedPrograms =
      [...programs]

    updatedPrograms[
      programIndex
    ].points[
      pointIndex
    ] = value

    setPageData((prev) => ({

      ...prev,

      programs: updatedPrograms,
    }))
  }

  /* =====================================
      ADD POINT
  ===================================== */

  const addPoint = (
    programIndex
  ) => {

    const updatedPrograms =
      [...programs]

    updatedPrograms[
      programIndex
    ].points.push("")

    setPageData((prev) => ({

      ...prev,

      programs: updatedPrograms,
    }))
  }

  /* =====================================
      DELETE POINT
  ===================================== */

  const deletePoint = (
    programIndex,
    pointIndex
  ) => {

    const updatedPrograms =
      [...programs]

    updatedPrograms[
      programIndex
    ].points =
      updatedPrograms[
        programIndex
      ].points.filter(
        (_, i) =>
          i !== pointIndex
      )

    setPageData((prev) => ({

      ...prev,

      programs: updatedPrograms,
    }))
  }

  /* =====================================
      IMAGE UPLOAD
  ===================================== */

  const uploadProgramGalleryImage = async (
    e,
    field
  ) => {

    const file =
      e.target.files[0]

    if (!file) return

    const formData =
      new FormData()

    formData.append(
      "image",
      file
    )

    try {

      const response =
        await fetch(
          "https://prarambha-backend.onrender.com/api/upload",
          {
            method: "POST",
            body: formData,
          }
        )

      const data =
        await response.json()

      setPageData((prev) => ({

        ...prev,

        [field]:
          data.image,
      }))

    } catch (error) {

      console.log(error)
    }
  }

  /* =====================================
      IMAGE SUPPORT
  ===================================== */

  const getImageUrl = (image) => {

    if (!image)
      return "https://via.placeholder.com/600x400?text=Program+Image"

    return image.startsWith("http")
      ? image
      : `https://prarambha-backend.onrender.com${image}`
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

        <div>

          <h2
            className="
              text-3xl
              font-bold
              text-[#1F2937]
            "
          >
            Programs Section
          </h2>

          <p className="text-gray-500 mt-2">
            Manage programs and gallery images.
          </p>

        </div>

        {/* ADD BUTTON */}

        <button
          onClick={addProgram}

          className="
            bg-[#E63946]
            hover:bg-[#d62839]
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
            transition
          "
        >

          + Add Program

        </button>

      </div>

      {/* EMPTY */}

      {programs.length === 0 && (

        <div
          className="
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
            No Programs Added
          </h3>

          <p
            className="
              text-gray-500
              mb-6
            "
          >
            Add your first program.
          </p>

          <button
            onClick={addProgram}

            className="
              bg-black
              text-white
              px-6
              py-3
              rounded-2xl
              font-semibold
            "
          >

            Add Program

          </button>

        </div>

      )}

      {/* PROGRAMS */}

      <div className="space-y-8">

        {programs.map(
          (program, index) => (

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
                  Program {index + 1}
                </h3>

                <button
                  onClick={() =>
                    deleteProgram(index)
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

                placeholder="Program Title"

                value={
                  program.title || ""
                }

                onChange={(e) =>
                  handleProgramChange(
                    index,
                    "title",
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
                  mb-5
                "
              />

              {/* COLOR */}

              <div className="mb-6">

                <p
                  className="
                    font-semibold
                    mb-3
                  "
                >
                  Program Color
                </p>

                <input
                  type="color"

                  value={
                    program.color ||
                    "#E63946"
                  }

                  onChange={(e) =>
                    handleProgramChange(
                      index,
                      "color",
                      e.target.value
                    )
                  }

                  className="
                    w-[90px]
                    h-[55px]
                    rounded-xl
                    border-0
                    cursor-pointer
                  "
                />

              </div>

              {/* POINTS */}

              <div className="space-y-4">

                {(program.points || []).map(
                  (
                    point,
                    pointIndex
                  ) => (

                    <div
                      key={pointIndex}

                      className="
                        flex
                        gap-3
                      "
                    >

                      <input
                        type="text"

                        placeholder={`Point ${
                          pointIndex + 1
                        }`}

                        value={point}

                        onChange={(e) =>
                          handlePointChange(
                            index,
                            pointIndex,
                            e.target.value
                          )
                        }

                        className="
                          flex-1
                          h-[55px]
                          px-5
                          rounded-2xl
                          bg-[#F9FAFB]
                          outline-none
                        "
                      />

                      <button
                        onClick={() =>
                          deletePoint(
                            index,
                            pointIndex
                          )
                        }

                        className="
                          bg-red-100
                          text-red-600
                          px-4
                          rounded-xl
                          font-bold
                        "
                      >

                        ✕

                      </button>

                    </div>

                  )
                )}

              </div>

              {/* ADD POINT */}

              <button
                onClick={() =>
                  addPoint(index)
                }

                className="
                  mt-5
                  bg-black
                  text-white
                  px-5
                  py-3
                  rounded-2xl
                  font-semibold
                "
              >

                + Add Point

              </button>

            </div>

          )
        )}

      </div>

      {/* =====================================
          PROGRAM GALLERY IMAGES
      ===================================== */}

      <div
        className="
          mt-10
          border
          border-gray-200
          rounded-[30px]
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
          Programs Gallery Images
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* IMAGE 1 */}

          <div>

            <label
              className="
                block
                mb-3
                font-semibold
              "
            >
              Image 1
            </label>

            <input
              type="file"

              accept="image/*"

              onChange={(e) =>
                uploadProgramGalleryImage(
                  e,
                  "programImage1"
                )
              }

              className="
                w-full
                bg-[#F3F4F6]
                p-4
                rounded-2xl
                cursor-pointer
              "
            />

            {pageData.programImage1 && (

              <img
                src={
                  getImageUrl(
                    pageData.programImage1
                  )
                }

                alt="Program"

                loading="lazy"

                onError={(e) => {

                  e.target.onerror = null

                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Program+Image"
                }}

                className="
                  w-full
                  h-[180px]
                  object-cover
                  rounded-2xl
                  mt-3
                  shadow-md
                "
              />

            )}

          </div>

          {/* IMAGE 2 */}

          <div>

            <label
              className="
                block
                mb-3
                font-semibold
              "
            >
              Image 2
            </label>

            <input
              type="file"

              accept="image/*"

              onChange={(e) =>
                uploadProgramGalleryImage(
                  e,
                  "programImage2"
                )
              }

              className="
                w-full
                bg-[#F3F4F6]
                p-4
                rounded-2xl
                cursor-pointer
              "
            />

            {pageData.programImage2 && (

              <img
                src={
                  getImageUrl(
                    pageData.programImage2
                  )
                }

                alt="Program"

                loading="lazy"

                onError={(e) => {

                  e.target.onerror = null

                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Program+Image"
                }}

                className="
                  w-full
                  h-[180px]
                  object-cover
                  rounded-2xl
                  mt-3
                  shadow-md
                "
              />

            )}

          </div>

          {/* IMAGE 3 */}

          <div>

            <label
              className="
                block
                mb-3
                font-semibold
              "
            >
              Image 3
            </label>

            <input
              type="file"

              accept="image/*"

              onChange={(e) =>
                uploadProgramGalleryImage(
                  e,
                  "programImage3"
                )
              }

              className="
                w-full
                bg-[#F3F4F6]
                p-4
                rounded-2xl
                cursor-pointer
              "
            />

            {pageData.programImage3 && (

              <img
                src={
                  getImageUrl(
                    pageData.programImage3
                  )
                }

                alt="Program"

                loading="lazy"

                onError={(e) => {

                  e.target.onerror = null

                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Program+Image"
                }}

                className="
                  w-full
                  h-[180px]
                  object-cover
                  rounded-2xl
                  mt-3
                  shadow-md
                "
              />

            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProgramsEditor