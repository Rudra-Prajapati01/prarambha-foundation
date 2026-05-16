import { useEffect, useState } from "react"
import axios from "axios"

import AdminLayout from "../layouts/AdminLayout"

function StoriesAdmin() {

  const [stories, setStories] = useState([])

  const [loading, setLoading] = useState(false)

  const [uploading, setUploading] = useState(false)

  const [editingId, setEditingId] = useState(null)

  const [formData, setFormData] = useState({

    title: "",

    desc: "",

    category: "Inclusive Education",

    image: "",

    type: "small",
  })

  /* =====================================
      FETCH STORIES
  ===================================== */

  const fetchStories = async () => {

    try {

      const { data } =
        await axios.get(
          "https://prarambha-backend.onrender.com/api/stories"
        )

      setStories(data)

    } catch (error) {

      console.log(error)

    }
  }

  useEffect(() => {

    fetchStories()

  }, [])

  /* =====================================
      HANDLE CHANGE
  ===================================== */

  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData((prev) => ({

      ...prev,

      [name]: value,
    }))
  }

  /* =====================================
      UPLOAD IMAGE
  ===================================== */

  const uploadImage = async (e) => {

    const file = e.target.files[0]

    if (!file) return

    const data = new FormData()

    data.append("image", file)

    try {

      setUploading(true)

      const res =
        await axios.post(
          "https://prarambha-backend.onrender.com/api/upload",
          data,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        )

      setFormData((prev) => ({

        ...prev,

        image: res.data.image,
      }))

    } catch (error) {

      console.log(error)

    } finally {

      setUploading(false)

    }
  }

  /* =====================================
      CREATE / UPDATE STORY
  ===================================== */

  const submitHandler = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      if (editingId) {

        await axios.put(
          `https://prarambha-backend.onrender.com/api/stories/${editingId}`,
          formData
        )

      } else {

        await axios.post(
          "https://prarambha-backend.onrender.com/api/stories",
          formData
        )
      }

      setFormData({

        title: "",

        desc: "",

        category:
          "Inclusive Education",

        image: "",

        type: "small",
      })

      setEditingId(null)

      fetchStories()

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }
  }

  /* =====================================
      EDIT STORY
  ===================================== */

  const editHandler = (item) => {

    setEditingId(item._id)

    setFormData({

      title: item.title,

      desc: item.desc,

      category: item.category,

      image: item.image,

      type: item.type,
    })

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  /* =====================================
      DELETE STORY
  ===================================== */

  const deleteHandler = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this story?"
      )

    if (!confirmDelete) return

    try {

      await axios.delete(
        `https://prarambha-backend.onrender.com/api/stories/${id}`
      )

      fetchStories()

    } catch (error) {

      console.log(error)

    }
  }

  return (

    <AdminLayout>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-5xl font-black text-[#1F2937] mb-4">

            Emotional Stories CMS

          </h1>

          <p className="text-lg text-gray-500 max-w-3xl leading-relaxed">

            Manage impactful NGO stories, emotional journeys,
            inclusive learning moments, and child development experiences.

          </p>

        </div>

        {/* FORM */}

        <div className="bg-white rounded-[35px] p-8 shadow-sm border border-gray-100 mb-12">

          <form
            onSubmit={submitHandler}
            className="space-y-6"
          >

            {/* TITLE */}

            <input
              type="text"
              name="title"
              placeholder="Story Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full h-[65px] px-6 rounded-2xl bg-[#F3F4F6] outline-none"
              required
            />

            {/* DESCRIPTION */}

            <textarea
              rows="5"
              name="desc"
              placeholder="Emotional impact story"
              value={formData.desc}
              onChange={handleChange}
              className="w-full p-6 rounded-2xl bg-[#F3F4F6] outline-none resize-none"
              required
            />

            {/* CATEGORY */}

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full h-[65px] px-6 rounded-2xl bg-[#F3F4F6] outline-none"
            >

              <option>
                Inclusive Education
              </option>

              <option>
                Child Development
              </option>

              <option>
                Therapy Support
              </option>

              <option>
                Parent Support
              </option>

              <option>
                Community Events
              </option>

            </select>

            {/* STORY TYPE */}

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full h-[65px] px-6 rounded-2xl bg-[#F3F4F6] outline-none"
            >

              <option value="large">
                Large Card
              </option>

              <option value="small">
                Small Card
              </option>

              <option value="tall">
                Tall Card
              </option>

            </select>

            {/* IMAGE */}

            <div className="space-y-4">

              <input
                type="file"
                onChange={uploadImage}
                className="w-full p-5 rounded-2xl bg-[#F3F4F6]"
              />

              {uploading && (

                <p className="text-[#E63946] font-semibold">

                  Uploading image...

                </p>

              )}

              {formData.image && (

                <img
                  src={`https://prarambha-backend.onrender.com${formData.image}`}
                  alt="Preview"
                  className="w-full h-[320px] object-cover rounded-[30px]"
                />

              )}

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E63946] hover:bg-[#d62839] text-white py-5 rounded-2xl font-bold text-lg transition-all"
            >

              {loading
                ? "Saving..."
                : editingId
                  ? "Update Story"
                  : "Add Story"}

            </button>

          </form>

        </div>

        {/* STORIES */}

        <div>

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-4xl font-black text-[#1F2937]">

              Uploaded Stories

            </h2>

            <div className="bg-[#FFF4F4] text-[#E63946] px-5 py-3 rounded-full font-bold">

              {stories.length} Stories

            </div>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {stories.map((item) => (

              <div
                key={item._id}
                className="bg-white rounded-[30px] overflow-hidden shadow-sm border border-gray-100"
              >

                {/* IMAGE */}

                <img
                  src={`https://prarambha-backend.onrender.com${item.image}`}
                  alt={item.title}
                  className="w-full h-[260px] object-cover"
                />

                {/* CONTENT */}

                <div className="p-6">

                  <div className="inline-block bg-[#FFF4F4] text-[#E63946] text-sm font-bold px-4 py-2 rounded-full mb-4">

                    {item.category}

                  </div>

                  <h3 className="text-2xl font-black text-[#1F2937] mb-3 leading-snug">

                    {item.title}

                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">

                    {item.desc}

                  </p>

                  <div className="bg-[#F3F4F6] text-[#111827] text-sm font-semibold px-4 py-2 rounded-full inline-block mb-6">

                    {item.type} card

                  </div>

                  {/* BUTTONS */}

                  <div className="flex gap-3">

                    <button
                      onClick={() =>
                        editHandler(item)
                      }
                      className="flex-1 bg-[#E63946] hover:bg-[#d62839] text-white py-4 rounded-2xl font-bold transition-all"
                    >

                      Edit

                    </button>

                    <button
                      onClick={() =>
                        deleteHandler(item._id)
                      }
                      className="flex-1 bg-black hover:bg-[#111827] text-white py-4 rounded-2xl font-bold transition-all"
                    >

                      Delete

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </AdminLayout>
  )
}

export default StoriesAdmin