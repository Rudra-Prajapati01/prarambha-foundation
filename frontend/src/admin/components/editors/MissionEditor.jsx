import axios from "axios"

function MissionEditor({
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

      mission: {

        ...prev.mission,

        [field]: value,
      },
    }))
  }

  /* =========================
      IMAGE UPLOAD
  ========================= */
  const uploadImage = async (e) => {

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

      const { data } =
        await axios.post(
          "https://prarambha-backend.onrender.com/api/upload",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        )

      handleChange(
        "image",
        data.image
      )

    } catch (error) {

      console.log(error)
    }
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
          Mission Section
        </h2>

        <p className="text-gray-500">

          Manage the About page
          mission section.

        </p>

      </div>

      {/* FORM */}
      <div className="space-y-6">

        {/* HEADING */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Mission Heading
          </label>

          <input
            type="text"
            placeholder="Enter heading"
            value={
              pageData.mission?.heading || ""
            }
            onChange={(e) =>
              handleChange(
                "heading",
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

        {/* CONTENT */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Mission Description
          </label>

          <textarea
            rows="6"
            placeholder="Enter description"
            value={
              pageData.mission?.content || ""
            }
            onChange={(e) =>
              handleChange(
                "content",
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

        {/* IMAGE */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Upload Mission Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={uploadImage}
            className="
              w-full
              bg-[#F3F4F6]
              p-4
              rounded-2xl
              cursor-pointer
            "
          />

        </div>

        {/* PREVIEW */}
        {pageData.mission?.image && (

          <img
            src={`https://prarambha-backend.onrender.com${pageData.mission.image}`}
            alt=""
            className="
              w-full
              h-[320px]
              object-cover
              rounded-[30px]
            "
          />

        )}

      </div>

    </div>
  )
}

export default MissionEditor