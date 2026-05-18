function AboutHeroEditor({
  pageData,
  setPageData,
  uploadImage,
  uploading,
}) {

  /* =====================================
      IMAGE SUPPORT
  ===================================== */

  const heroImage =
    pageData?.hero?.image
      ? pageData.hero.image.startsWith("http")
        ? pageData.hero.image
        : `https://prarambha-backend.onrender.com${pageData.hero.image}`
      : "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80"

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
          About Hero Section
        </h2>

        <p className="text-gray-500">
          Manage hero section content and image.
        </p>

      </div>

      {/* FORM */}

      <div className="space-y-6">

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
            Hero Title
          </label>

          <input
            type="text"

            placeholder="Title"

            value={
              pageData?.hero?.title || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                hero: {

                  ...pageData.hero,

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

        {/* SUBTITLE */}

        <div>

          <label
            className="
              block
              mb-3
              font-semibold
              text-[#111827]
            "
          >
            Hero Subtitle
          </label>

          <input
            type="text"

            placeholder="Subtitle"

            value={
              pageData?.hero?.subtitle || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                hero: {

                  ...pageData.hero,

                  subtitle:
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
              pageData?.hero?.description || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                hero: {

                  ...pageData.hero,

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
              h-[180px]
              outline-none
              resize-none
            "
          />

        </div>

        {/* BUTTON TEXT */}

        <div>

          <label
            className="
              block
              mb-3
              font-semibold
              text-[#111827]
            "
          >
            Button Text
          </label>

          <input
            type="text"

            placeholder="Button Text"

            value={
              pageData?.hero?.buttonText || ""
            }

            onChange={(e) =>
              setPageData({

                ...pageData,

                hero: {

                  ...pageData.hero,

                  buttonText:
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

        {/* IMAGE */}

        <div className="space-y-4">

          <label
            className="
              block
              font-semibold
              text-[#111827]
            "
          >
            Upload Hero Image
          </label>

          <input
            type="file"

            accept="image/*"

            onChange={(e) =>
              uploadImage(
                e,
                "hero"
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

            <p className="text-gray-500">
              Uploading image...
            </p>

          )}

          {/* IMAGE PREVIEW */}

          {pageData?.hero?.image && (

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
                src={heroImage}

                alt="Hero"

                loading="lazy"

                onError={(e) => {

                  e.target.onerror = null

                  e.target.src =
                    "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80"
                }}

                className="
                  w-full
                  h-[320px]
                  object-cover
                  rounded-[30px]
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

export default AboutHeroEditor