function HeroEditor({
  pageData,
  setPageData,
  uploadImage,
  uploading,
}) {

  const handleHeroChange = (e) => {

    const { name, value } = e.target

    setPageData((prev) => ({

      ...prev,

      hero: {

        ...prev.hero,

        [name]: value,
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

      <h2
        className="
          text-3xl
          font-bold
          text-[#1F2937]
          mb-8
        "
      >
        Hero Section
      </h2>

      <div className="space-y-6">

        {/* SMALL TAG */}
        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Hero Tag
          </label>

          <input
            type="text"
            name="tag"
            placeholder="Every Child Deserves Support"
            value={pageData.hero?.tag || ""}
            onChange={handleHeroChange}
            className="
              w-full
              h-[60px]
              px-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
            "
          />

        </div>

        {/* TITLE */}
        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Hero Title
          </label>

          <textarea
            rows="3"
            name="title"
            placeholder="Discovering Ability Before Disability Defines"
            value={pageData.hero?.title || ""}
            onChange={handleHeroChange}
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

        {/* SUBTITLE */}
        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Hero Subtitle
          </label>

          <textarea
            rows="3"
            name="subtitle"
            placeholder="Inclusive Early Childhood & Special Education Initiative"
            value={pageData.hero?.subtitle || ""}
            onChange={handleHeroChange}
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

        {/* DESCRIPTION */}
        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Hero Description
          </label>

          <textarea
            rows="6"
            name="description"
            placeholder="Write hero description..."
            value={pageData.hero?.description || ""}
            onChange={handleHeroChange}
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

        {/* BUTTONS */}
        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Primary Button Text
            </label>

            <input
              type="text"
              name="buttonText"
              placeholder="Donate Now"
              value={pageData.hero?.buttonText || ""}
              onChange={handleHeroChange}
              className="
                w-full
                h-[60px]
                px-5
                rounded-2xl
                bg-[#F3F4F6]
                outline-none
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Secondary Button Text
            </label>

            <input
              type="text"
              name="secondaryButtonText"
              placeholder="Learn More"
              value={pageData.hero?.secondaryButtonText || ""}
              onChange={handleHeroChange}
              className="
                w-full
                h-[60px]
                px-5
                rounded-2xl
                bg-[#F3F4F6]
                outline-none
              "
            />

          </div>

        </div>

        {/* BUTTON LINKS */}

        {/* HERO IMAGE */}
        <div>

          <label className="block mb-3 font-semibold text-gray-700">
            Hero Image
          </label>

          <input
            type="file"
            onChange={uploadImage}
            className="
              w-full
              p-4
              rounded-2xl
              bg-[#F3F4F6]
            "
          />

        </div>

        {/* UPLOADING */}
        {uploading && (

          <p className="text-[#E63946] font-medium">

            Uploading image...

          </p>

        )}

        {/* IMAGE PREVIEW */}
        {pageData.hero?.image && (

          <div>

            <p className="mb-3 font-semibold text-gray-700">
              Image Preview
            </p>

            <img
              src={pageData.hero.image}
              alt="Hero"

              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/1200x700?text=Hero+Image"
              }}

              className="
                    w-full
                    h-[350px]
                    object-cover
                    rounded-[30px]
                  "
            />

          </div>

        )}

      </div>

    </div>
  )
}

export default HeroEditor