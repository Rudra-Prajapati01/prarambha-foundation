function AboutCTAEditor({
  pageData,
  setPageData,
}) {

  return (

    <div className="bg-white rounded-[30px] p-10">

      <h2 className="text-4xl font-bold mb-8">
        CTA Section
      </h2>

      <div className="space-y-6">

        {/* TITLE */}
        <input
          type="text"
          placeholder="Title"
          value={
            pageData?.cta?.title || ""
          }
          onChange={(e) =>
            setPageData({
              ...pageData,
              cta: {
                ...(pageData?.cta || {}),
                title: e.target.value,
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

        {/* DESCRIPTION */}
        <textarea
          placeholder="Description"
          value={
            pageData?.cta?.description || ""
          }
          onChange={(e) =>
            setPageData({
              ...pageData,
              cta: {
                ...(pageData?.cta || {}),
                description: e.target.value,
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
          "
        />

        {/* BUTTON 1 */}
        <input
          type="text"
          placeholder="Button 1 Text"
          value={
            pageData?.cta?.button1 || ""
          }
          onChange={(e) =>
            setPageData({
              ...pageData,
              cta: {
                ...(pageData?.cta || {}),
                button1: e.target.value,
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

        {/* BUTTON 2 */}
        <input
          type="text"
          placeholder="Button 2 Text"
          value={
            pageData?.cta?.button2 || ""
          }
          onChange={(e) =>
            setPageData({
              ...pageData,
              cta: {
                ...(pageData?.cta || {}),
                button2: e.target.value,
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

        {/* PREVIEW */}
        <div
          className="
            mt-8
            bg-gradient-to-r
            from-[#E63946]
            to-[#F4A020]
            rounded-[30px]
            p-10
            text-white
          "
        >

          <h3 className="text-4xl font-bold mb-5">
            {pageData?.cta?.title ||
              "CTA Title"}
          </h3>

          <p className="text-lg leading-8 opacity-90 mb-8">
            {pageData?.cta?.description ||
              "CTA Description"}
          </p>

          <div className="flex gap-4 flex-wrap">

            <button
              className="
                bg-white
                text-[#E63946]
                px-6
                py-3
                rounded-2xl
                font-bold
              "
            >
              {pageData?.cta?.button1 ||
                "Button 1"}
            </button>

            <button
              className="
                border-2
                border-white
                px-6
                py-3
                rounded-2xl
                font-bold
              "
            >
              {pageData?.cta?.button2 ||
                "Button 2"}
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AboutCTAEditor