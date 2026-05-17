function AboutMissionEditor({
  pageData,
  setPageData,
  uploadImage,
  uploading,
}) {

  /* =====================================
      IMAGE SUPPORT
  ===================================== */

  const missionImage =
    pageData?.mission?.image
      ? pageData.mission.image.startsWith("http")
        ? pageData.mission.image
        : `https://prarambha-backend.onrender.com${pageData.mission.image}`
      : "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"

  return (

    <div
      className="
        bg-white
        rounded-[30px]
        p-10
        shadow-sm
      "
    >

      {/* HEADER */}

      <div className="mb-8">

        <h2
          className="
            text-4xl
            font-bold
            mb-2
            text-[#111827]
          "
        >
          About Mission Section
        </h2>

        <p className="text-gray-500">
          Manage the mission section content.
        </p>

      </div>

      {/* FORM */}

      <div className="space-y-6">

        {/* HEADING */}

        <div>

          <label
            className="
              block
              mb-3
              font-semibold
              text-[#111827]
            "
          >
            Heading
          </label>

          <input
            type="text"

            placeholder="Heading"

            value={
              pageData?.mission?.heading || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                mission: {

                  ...(pageData?.mission || {}),

                  heading:
                    e.target.value,
                },
              })
            }

            className="
              w-full
              p-5
              rounded-2xl
              bg-gray-100
              outline-none
            "
          />

        </div>

        {/* TITLE */}

        <div>

          <label
            className="
              block
              mb-3
              font-semibold
              text-[#111827]
            "
          >
            Title
          </label>

          <input
            type="text"

            placeholder="Title"

            value={
              pageData?.mission?.title || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                mission: {

                  ...(pageData?.mission || {}),

                  title:
                    e.target.value,
                },
              })
            }

            className="
              w-full
              p-5
              rounded-2xl
              bg-gray-100
              outline-none
            "
          />

        </div>

        {/* CONTENT */}

        <div>

          <label
            className="
              block
              mb-3
              font-semibold
              text-[#111827]
            "
          >
            Description
          </label>

          <textarea
            placeholder="Content"

            value={
              pageData?.mission?.content || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                mission: {

                  ...(pageData?.mission || {}),

                  content:
                    e.target.value,
                },
              })
            }

            className="
              w-full
              p-5
              rounded-2xl
              bg-gray-100
              h-[220px]
              outline-none
              resize-none
            "
          />

        </div>

        {/* IMAGE */}

        <div className="space-y-4">

          <label
            className="
              block
              font-semibold
              text-[#111827]
            "
          >
            Upload Mission Image
          </label>

          <input
            type="file"

            accept="image/*"

            onChange={(e) =>
              uploadImage(
                e,
                "mission"
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

          {/* UPLOADING */}

          {uploading && (

            <p className="text-sm text-gray-500">
              Uploading image...
            </p>

          )}

          {/* IMAGE PREVIEW */}

          {pageData?.mission?.image && (

            <div>

              <p
                className="
                  mb-3
                  font-semibold
                  text-gray-700
                "
              >
                Image Preview
              </p>

              <img
                src={missionImage}

                alt="Mission"

                loading="lazy"

                onError={(e) => {

                  e.target.onerror = null

                  e.target.src =
                    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
                }}

                className="
                  w-[220px]
                  h-[220px]
                  object-cover
                  rounded-2xl
                  shadow-lg
                "
              />

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default AboutMissionEditor