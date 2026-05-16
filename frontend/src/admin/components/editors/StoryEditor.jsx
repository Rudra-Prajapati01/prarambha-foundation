import axios from "axios"
import { useEffect, useState } from "react"

function StoryEditor() {

  /* =========================================
      STATES
  ========================================= */

  const [stories, setStories] =
    useState([])

  /* =========================================
      FETCH STORIES
  ========================================= */

  useEffect(() => {

    fetchStories()

  }, [])

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

  /* =========================================
      ADD STORY
  ========================================= */

  const addStory = async () => {

    try {

      const newStory = {

        title: "New Story",

        category: "Therapy",

        image: "",

        desc: "Write story here...",

        type: "small",
      }

      const { data } =
        await axios.post(
          "https://prarambha-backend.onrender.com/api/stories",
          newStory
        )

      setStories((prev) => [
        ...prev,
        data,
      ])

    } catch (error) {

      console.log(error)

    }
  }

  /* =========================================
      DELETE STORY
  ========================================= */

  const deleteStory = async (id) => {

    try {

      await axios.delete(
        `https://prarambha-backend.onrender.com/api/stories/${id}`
      )

      setStories((prev) =>
        prev.filter(
          (story) =>
            story._id !== id
        )
      )

    } catch (error) {

      console.log(error)

    }
  }

  /* =========================================
      HANDLE CHANGE
  ========================================= */

  const handleChange = (
    index,
    field,
    value
  ) => {

    const updatedStories =
      [...stories]

    updatedStories[index][field] =
      value

    setStories(updatedStories)
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

      {/* =====================================
          HEADER
      ===================================== */}

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
            text-3xl
            font-bold
          "
        >
          Impact Stories
        </h2>

        {/* ADD BUTTON */}

        <button
          onClick={addStory}
          className="
            bg-[#E63946]
            hover:bg-[#d62839]
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
            transition-all
          "
        >

          + Add Story

        </button>

      </div>

      {/* =====================================
          EMPTY STATE
      ===================================== */}

      {stories.length === 0 && (

        <div
          className="
            bg-[#F9FAFB]
            border
            border-dashed
            border-gray-300
            rounded-[30px]
            p-12
            text-center
          "
        >

          <h3
            className="
              text-2xl
              font-bold
              mb-3
            "
          >
            No Stories Found
          </h3>

          <p
            className="
              text-gray-500
              mb-6
            "
          >
            Start by adding your first
            impact story.
          </p>

          <button
            onClick={addStory}
            className="
              bg-black
              text-white
              px-6
              py-3
              rounded-2xl
              font-semibold
            "
          >

            Add First Story

          </button>

        </div>

      )}

      {/* =====================================
          STORIES
      ===================================== */}

      <div className="space-y-8">

        {stories.map((story, index) => (

          <div
            key={story._id}
            className="
              border
              border-gray-200
              rounded-[30px]
              p-6
            "
          >

            {/* TOP */}

            <div
              className="
                flex
                items-center
                justify-between
                mb-6
              "
            >

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Story {index + 1}
              </h3>

              <div className="flex items-center gap-3">

                {/* SAVE */}

                <button
                  onClick={async () => {

                    try {

                      await axios.put(
                        `https://prarambha-backend.onrender.com/api/stories/${story._id}`,
                        story
                      )

                      alert(
                        "Story Saved ✅"
                      )

                    } catch (error) {

                      console.log(error)

                    }
                  }}
                  className="
                    bg-green-100
                    text-green-700
                    px-4
                    py-2
                    rounded-xl
                    font-semibold
                  "
                >

                  Save

                </button>

                {/* DELETE */}

                <button
                  onClick={() =>
                    deleteStory(
                      story._id
                    )
                  }
                  className="
                    bg-red-100
                    text-red-600
                    px-4
                    py-2
                    rounded-xl
                    font-semibold
                  "
                >

                  Delete

                </button>

              </div>

            </div>

            {/* TITLE */}

            <input
              type="text"
              placeholder="Story Title"
              value={story.title || ""}
              onChange={(e) =>
                handleChange(
                  index,
                  "title",
                  e.target.value
                )
              }
              className="
                w-full
                h-[55px]
                px-5
                rounded-2xl
                bg-[#F3F4F6]
                outline-none
                mb-4
              "
            />

            {/* CATEGORY */}

            <input
              type="text"
              placeholder="Category"
              value={story.category || ""}
              onChange={(e) =>
                handleChange(
                  index,
                  "category",
                  e.target.value
                )
              }
              className="
                w-full
                h-[55px]
                px-5
                rounded-2xl
                bg-[#F3F4F6]
                outline-none
                mb-4
              "
            />

            {/* DESCRIPTION */}

            <textarea
              rows="4"
              placeholder="Description"
              value={story.desc || ""}
              onChange={(e) =>
                handleChange(
                  index,
                  "desc",
                  e.target.value
                )
              }
              className="
                w-full
                p-5
                rounded-2xl
                bg-[#F3F4F6]
                outline-none
                resize-none
                mb-4
              "
            />

            {/* IMAGE */}

            <div className="mb-4">

              <p
                className="
                  font-semibold
                  mb-3
                  text-[#111827]
                "
              >
                Upload Image
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {

                  const file =
                    e.target.files[0]

                  if (!file) return

                  const formData =
                    new FormData()

                  formData.append(
                    "image",
                    file
                  )

                  try {

                    const { data } =
                      await axios.post(
                        "https://prarambha-backend.onrender.com/api/upload",
                        formData,
                        {
                          headers: {
                            "Content-Type":
                              "multipart/form-data",
                          },
                        }
                      )

                    handleChange(
                      index,
                      "image",
                      data.image
                    )

                  } catch (error) {

                    console.log(error)

                  }
                }}
                className="
                  w-full
                  bg-[#F3F4F6]
                  p-4
                  rounded-2xl
                  cursor-pointer
                "
              />

              {/* PREVIEW */}

              {story.image && (

                <img
                  src={`https://prarambha-backend.onrender.com${story.image}`}
                  alt=""
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    rounded-2xl
                    mt-4
                  "
                />

              )}

            </div>

            {/* TYPE */}

            <select
              value={story.type || ""}
              onChange={(e) =>
                handleChange(
                  index,
                  "type",
                  e.target.value
                )
              }
              className="
                w-full
                h-[55px]
                px-5
                rounded-2xl
                bg-[#F3F4F6]
                outline-none
              "
            >

              <option value="large">
                Large
              </option>

              <option value="tall">
                Tall
              </option>

              <option value="small">
                Small
              </option>

            </select>

          </div>

        ))}

      </div>

    </div>
  )
}

export default StoryEditor