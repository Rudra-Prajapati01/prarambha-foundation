function AboutChairpersonEditor({
  pageData,
  setPageData,
  uploadImage,
  uploading,
}) {

  return (

    <div className="bg-white rounded-[30px] p-10">

      <h2 className="text-4xl font-bold mb-8">
        Chairperson Section
      </h2>

      <div className="space-y-6">

        {/* NAME */}
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
                name: e.target.value,
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

        {/* ROLE */}
        <input
          type="text"
          placeholder="Role"
          value={
            pageData?.chairperson?.role || ""
          }
          onChange={(e) =>
            setPageData({
              ...pageData,
              chairperson: {
                ...(pageData?.chairperson || {}),
                role: e.target.value,
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

        {/* QUOTE */}
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
                quote: e.target.value,
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
          "
        />

        {/* DESCRIPTION */}
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

        {/* IMAGE */}
        <div className="space-y-4">

          <input
            type="file"
            onChange={(e) =>
              uploadImage(e, "chairperson")
            }
          />

          {uploading && (
            <p className="text-sm text-gray-500">
              Uploading image...
            </p>
          )}

          {pageData?.chairperson?.image && (

            <img
              src={`https://prarambha-backend.onrender.com${pageData.chairperson.image}`}
              alt="Chairperson"
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

export default AboutChairpersonEditor