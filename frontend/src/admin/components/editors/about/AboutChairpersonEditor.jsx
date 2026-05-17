function AboutChairpersonEditor({
  pageData,
  setPageData,
  uploadImage,
  uploading,
}) {

  /* =====================================
      IMAGE SUPPORT
  ===================================== */

  const chairImage =
    pageData?.chairperson?.image
      ? pageData.chairperson.image.startsWith("http")
        ? pageData.chairperson.image
        : `https://prarambha-backend.onrender.com${pageData.chairperson.image}`
      : "https://i.pravatar.cc/500?img=47"

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
          Chairperson Section
        </h2>

        <p className="text-gray-500">

          Manage chairperson
          information and image.

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
            Section Heading
          </label>

          <input
            type="text"

            placeholder="Message from the Chairperson"

            value={
              pageData?.chairperson?.heading || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                chairperson: {

                  ...(pageData?.chairperson || {}),

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
            Section Title
          </label>

          <input
            type="text"

            placeholder="Leading with Heart"

            value={
              pageData?.chairperson?.title || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                chairperson: {

                  ...(pageData?.chairperson || {}),

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

        {/* NAME */}

        <div>

          <label
            className="
              block
              mb-3
              font-semibold
              text-[#111827]
            "
          >
            Chairperson Name
          </label>

          <input
            type="text"

            placeholder="Name"

            value={
              pageData?.chairperson?.name || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                chairperson: {

                  ...(pageData?.chairperson || {}),

                  name:
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

        {/* ROLE */}

        <div>

          <label
            className="
              block
              mb-3
              font-semibold
              text-[#111827]
            "
          >
            Role
          </label>

          <input
            type="text"

            placeholder="Founder & Chairperson"

            value={
              pageData?.chairperson?.role || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                chairperson: {

                  ...(pageData?.chairperson || {}),

                  role:
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

        {/* QUOTE */}

        <div>

          <label
            className="
              block
              mb-3
              font-semibold
              text-[#111827]
            "
          >
            Quote
          </label>

          <textarea
            placeholder="Quote"

            value={
              pageData?.chairperson?.quote || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                chairperson: {

                  ...(pageData?.chairperson || {}),

                  quote:
                    e.target.value,
                },
              })
            }

            className="
              w-full
              p-5
              rounded-2xl
              bg-gray-100
              h-[140px]
              outline-none
              resize-none
            "
          />

        </div>

        {/* DESCRIPTION */}

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
            placeholder="Description"

            value={
              pageData?.chairperson?.description || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                chairperson: {

                  ...(pageData?.chairperson || {}),

                  description:
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
            Upload Chairperson Image
          </label>

          <input
            type="file"

            accept="image/*"

            onChange={(e) =>
              uploadImage(
                e,
                "chairperson"
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

          {pageData?.chairperson?.image && (

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
                src={chairImage}

                alt="Chairperson"

                loading="lazy"

                onError={(e) => {

                  e.target.onerror = null

                  e.target.src =
                    "https://i.pravatar.cc/500?img=47"
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

export default AboutChairpersonEditor