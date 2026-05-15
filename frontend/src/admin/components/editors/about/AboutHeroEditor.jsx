function AboutHeroEditor({
  pageData,
  setPageData,
  uploadImage,
  uploading,
}) {

  return (

    <div className="bg-white rounded-[30px] p-10">

      <h2 className="text-4xl font-bold mb-8">
        About Hero Section
      </h2>

      <div className="space-y-6">

        <input
          type="text"
          placeholder="Title"
          value={pageData.hero.title}
          onChange={(e) =>
            setPageData({
              ...pageData,
              hero: {
                ...pageData.hero,
                title: e.target.value,
              },
            })
          }
          className="w-full p-5 rounded-2xl bg-gray-100"
        />

        <input
          type="text"
          placeholder="Subtitle"
          value={pageData.hero.subtitle}
          onChange={(e) =>
            setPageData({
              ...pageData,
              hero: {
                ...pageData.hero,
                subtitle: e.target.value,
              },
            })
          }
          className="w-full p-5 rounded-2xl bg-gray-100"
        />

        <textarea
          placeholder="Description"
          value={pageData.hero.description}
          onChange={(e) =>
            setPageData({
              ...pageData,
              hero: {
                ...pageData.hero,
                description: e.target.value,
              },
            })
          }
          className="w-full p-5 rounded-2xl bg-gray-100 h-[180px]"
        />

        <input
          type="text"
          placeholder="Button Text"
          value={pageData.hero.buttonText}
          onChange={(e) =>
            setPageData({
              ...pageData,
              hero: {
                ...pageData.hero,
                buttonText: e.target.value,
              },
            })
          }
          className="w-full p-5 rounded-2xl bg-gray-100"
        />

        <input
          type="file"
          onChange={(e) =>
            uploadImage(e, "hero")
          }
        />

        {uploading && (
          <p>Uploading...</p>
        )}

      </div>

    </div>
  )
}

export default AboutHeroEditor