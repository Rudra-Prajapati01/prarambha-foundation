function AboutMissionEditor({
  pageData,
  setPageData,
  uploadImage,
  uploading,
}) {

  return (

    <div className="bg-white rounded-[30px] p-10">

      <h2 className="text-4xl font-bold mb-8">
        About Mission Section
      </h2>

      <div className="space-y-6">

        {/* HEADING */}
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
                heading: e.target.value,
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

        {/* TITLE */}
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

        {/* CONTENT */}
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
                content: e.target.value,
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

        {/* IMAGE */}
        <div className="space-y-4">

          <input
            type="file"
            onChange={(e) =>
              uploadImage(e, "mission")
            }
          />

          {uploading && (
            <p className="text-sm text-gray-500">
              Uploading image...
            </p>
          )}

          {pageData?.mission?.image && (

            <img
              src={`http://localhost:5000${pageData.mission.image}`}
              alt="Mission"
              className="
                w-[220px]
                h-[220px]
                object-cover
                rounded-2xl
              "
            />

          )}

        </div>

      </div>

    </div>
  )
}

export default AboutMissionEditor