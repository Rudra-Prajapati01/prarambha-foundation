import { useEffect, useState } from "react"
import axios from "axios"

import AdminLayout from "../layouts/AdminLayout"

function GalleryAdmin() {

  const [gallery, setGallery] =
    useState([])

  const [loading, setLoading] =
    useState(false)

  const [uploading, setUploading] =
    useState(false)

  const [editingId, setEditingId] =
    useState(null)

  const [formData, setFormData] =
    useState({

      title: "",

      caption: "",

      category:
        "Therapy Sessions",

      image: "",
    })

  /* =====================================
      IMAGE SUPPORT
  ===================================== */

  const getImageUrl = (
    image
  ) => {

    if (!image) {

      return "https://via.placeholder.com/1200x700?text=Gallery+Image"
    }

    return typeof image === "string"
      && image.startsWith("http")
        ? image
        : `https://prarambha-backend.onrender.com${image}`
  }

  /* =====================================
      FETCH GALLERY
  ===================================== */

  const fetchGallery =
    async () => {

      try {

        const { data } =
          await axios.get(
            "https://prarambha-backend.onrender.com/api/gallery"
          )

        setGallery(data)

      } catch (error) {

        console.log(error)
      }
    }

  useEffect(() => {

    fetchGallery()

  }, [])

  /* =====================================
      HANDLE CHANGE
  ===================================== */

  const handleChange = (
    e
  ) => {

    const {
      name,
      value,
    } = e.target

    setFormData((prev) => ({

      ...prev,

      [name]:
        value,
    }))
  }

  /* =====================================
      UPLOAD IMAGE
  ===================================== */

  const uploadImage =
    async (e) => {

      const file =
        e.target.files[0]

      if (!file) return

      const data =
        new FormData()

      data.append(
        "image",
        file
      )

      try {

        setUploading(true)

        const res =
          await axios.post(
            "https://prarambha-backend.onrender.com/api/upload",
            data
          )

        /* SAFE RESPONSE */

        if (
          !res.data?.image
        ) {

          console.log(
            "Upload failed"
          )

          return
        }

        setFormData(
          (prev) => ({

            ...prev,

            image:
              res.data.image,
          })
        )

      } catch (error) {

        console.log(error)

      } finally {

        setUploading(false)
      }
    }

  /* =====================================
      CREATE / UPDATE
  ===================================== */

  const submitHandler =
    async (e) => {

      e.preventDefault()

      try {

        setLoading(true)

        if (editingId) {

          await axios.put(
            `https://prarambha-backend.onrender.com/api/gallery/${editingId}`,
            formData
          )

        } else {

          await axios.post(
            "https://prarambha-backend.onrender.com/api/gallery",
            formData
          )
        }

        /* RESET */

        setFormData({

          title: "",

          caption: "",

          category:
            "Therapy Sessions",

          image: "",
        })

        setEditingId(null)

        fetchGallery()

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)
      }
    }

  /* =====================================
      EDIT ITEM
  ===================================== */

  const editHandler = (
    item
  ) => {

    setEditingId(item._id)

    setFormData({

      title:
        item.title,

      caption:
        item.caption,

      category:
        item.category,

      image:
        item.image,
    })

    window.scrollTo({

      top: 0,

      behavior:
        "smooth",
    })
  }

  /* =====================================
      DELETE ITEM
  ===================================== */

  const deleteHandler =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this gallery item?"
        )

      if (
        !confirmDelete
      ) return

      try {

        await axios.delete(
          `https://prarambha-backend.onrender.com/api/gallery/${id}`
        )

        fetchGallery()

      } catch (error) {

        console.log(error)
      }
    }

  return (

    <AdminLayout>

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          py-10
        "
      >

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="mb-10">

          <h1
            className="
              text-5xl
              font-black
              text-[#1F2937]
              mb-4
            "
          >
            Emotional Gallery CMS
          </h1>

          <p
            className="
              text-lg
              text-gray-500
              max-w-3xl
              leading-relaxed
            "
          >
            Upload meaningful moments
            that reflect growth,
            inclusion, therapy,
            learning, and emotional
            connection.
          </p>

        </div>

        {/* =====================================
            FORM
        ===================================== */}

        <div
          className="
            bg-white
            rounded-[35px]
            p-8
            shadow-sm
            border
            border-gray-100
            mb-12
          "
        >

          <form
            onSubmit={
              submitHandler
            }

            className="
              space-y-6
            "
          >

            {/* TITLE */}

            <input
              type="text"

              name="title"

              placeholder="Story Title"

              value={
                formData.title
              }

              onChange={
                handleChange
              }

              className="
                w-full
                h-[65px]
                px-6
                rounded-2xl
                bg-[#F3F4F6]
                outline-none
              "

              required
            />

            {/* CAPTION */}

            <textarea
              rows="5"

              name="caption"

              placeholder="Emotional caption or short impact story"

              value={
                formData.caption
              }

              onChange={
                handleChange
              }

              className="
                w-full
                p-6
                rounded-2xl
                bg-[#F3F4F6]
                outline-none
                resize-none
              "

              required
            />

            {/* CATEGORY */}

            <select
              name="category"

              value={
                formData.category
              }

              onChange={
                handleChange
              }

              className="
                w-full
                h-[65px]
                px-6
                rounded-2xl
                bg-[#F3F4F6]
                outline-none
              "
            >

              <option>
                Therapy Sessions
              </option>

              <option>
                Inclusive Learning
              </option>

              <option>
                Parent Support
              </option>

              <option>
                Community Events
              </option>

              <option>
                Creative Activities
              </option>

              <option>
                Growth Moments
              </option>

            </select>

            {/* IMAGE */}

            <div className="space-y-4">

              <input
                type="file"

                accept="image/*"

                onChange={
                  uploadImage
                }

                className="
                  w-full
                  p-5
                  rounded-2xl
                  bg-[#F3F4F6]
                  cursor-pointer
                "
              />

              {/* LOADING */}

              {uploading && (

                <p
                  className="
                    text-[#E63946]
                    font-semibold
                  "
                >
                  Uploading image...
                </p>

              )}

              {/* PREVIEW */}

              {formData.image && (

                <img
                  src={
                    getImageUrl(
                      formData.image
                    )
                  }

                  alt="Preview"

                  loading="lazy"

                  onError={(
                    e
                  ) => {

                    e.target.onerror =
                      null

                    e.target.src =
                      "https://via.placeholder.com/1200x700?text=Gallery+Image"
                  }}

                  className="
                    w-full
                    h-[320px]
                    object-contain
                    bg-black
                    rounded-[30px]
                  "
                />

              )}

            </div>

            {/* BUTTON */}

            <button
              type="submit"

              disabled={
                loading
              }

              className="
                w-full
                bg-[#E63946]
                hover:bg-[#d62839]
                text-white
                py-5
                rounded-2xl
                font-bold
                text-lg
                transition-all
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >

              {loading
                ? "Saving..."
                : editingId
                  ? "Update Story"
                  : "Add Gallery Story"}

            </button>

          </form>

        </div>

        {/* =====================================
            GALLERY ITEMS
        ===================================== */}

        <div>

          <div
            className="
              flex
              items-center
              justify-between
              mb-8
            "
          >

            <h2
              className="
                text-4xl
                font-black
                text-[#1F2937]
              "
            >
              Uploaded Stories
            </h2>

            <div
              className="
                bg-[#FFF4F4]
                text-[#E63946]
                px-5
                py-3
                rounded-full
                font-bold
              "
            >
              {gallery.length}
              {" "}
              Stories
            </div>

          </div>

          {/* GRID */}

          <div
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
            "
          >

            {Array.isArray(
              gallery
            ) && gallery.map(
              (item) => (

                <div
                  key={
                    item._id
                  }

                  className="
                    bg-white
                    rounded-[30px]
                    overflow-hidden
                    shadow-sm
                    border
                    border-gray-100
                    hover:shadow-xl
                    transition-all
                  "
                >

                  {/* IMAGE */}

                  <img
                    src={
                      getImageUrl(
                        item.image
                      )
                    }

                    alt={
                      item.title
                    }

                    loading="lazy"

                    onError={(
                      e
                    ) => {

                      e.target.onerror =
                        null

                      e.target.src =
                        "https://via.placeholder.com/1200x700?text=Gallery+Image"
                    }}

                    className="
                      w-full
                      h-[260px]
                      object-cover
                    "
                  />

                  {/* CONTENT */}

                  <div className="p-6">

                    {/* CATEGORY */}

                    <div
                      className="
                        inline-block
                        bg-[#FFF4F4]
                        text-[#E63946]
                        text-sm
                        font-bold
                        px-4
                        py-2
                        rounded-full
                        mb-4
                      "
                    >
                      {
                        item.category
                      }
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        text-2xl
                        font-black
                        text-[#1F2937]
                        mb-3
                        leading-snug
                      "
                    >
                      {
                        item.title
                      }
                    </h3>

                    {/* CAPTION */}

                    <p
                      className="
                        text-gray-600
                        leading-relaxed
                        mb-6
                      "
                    >
                      {
                        item.caption
                      }
                    </p>

                    {/* ACTIONS */}

                    <div
                      className="
                        flex
                        gap-3
                      "
                    >

                      {/* EDIT */}

                      <button
                        onClick={() =>
                          editHandler(
                            item
                          )
                        }

                        className="
                          flex-1
                          bg-[#E63946]
                          hover:bg-[#d62839]
                          text-white
                          py-4
                          rounded-2xl
                          font-bold
                          transition-all
                        "
                      >
                        Edit Story
                      </button>

                      {/* DELETE */}

                      <button
                        onClick={() =>
                          deleteHandler(
                            item._id
                          )
                        }

                        className="
                          flex-1
                          bg-black
                          hover:bg-[#111827]
                          text-white
                          py-4
                          rounded-2xl
                          font-bold
                          transition-all
                        "
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </AdminLayout>
  )
}

export default GalleryAdmin