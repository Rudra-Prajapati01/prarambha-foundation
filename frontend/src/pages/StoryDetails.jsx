import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import axios from "axios"

function StoryDetails() {

  const { id } = useParams()

  const [story, setStory] =
    useState(null)

  useEffect(() => {

    const fetchStory = async () => {

      try {

        const { data } =
          await axios.get(
            `https://prarambha-backend.onrender.com/api/stories/${id}`
          )

        setStory(data)

      } catch (error) {

        console.log(error)

      }
    }

    fetchStory()

  }, [id])

  if (!story) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-2xl
          font-bold
          bg-white
        "
      >
        Loading Story...
      </div>
    )
  }

  return (

    <section className="bg-white min-h-screen">

      {/* HERO IMAGE */}
      <div
        className="
          w-full
          bg-black
          flex
          items-center
          justify-center
        "
      >

        <img
          src={`https://prarambha-backend.onrender.com${story.image}`}
          alt={story.title}
          className="
            w-full
            max-h-screen
            object-contain
          "
        />

      </div>

      {/* CONTENT */}
      <div
        className="
          max-w-5xl
          mx-auto
          px-6
          py-16
        "
      >

        {/* CATEGORY */}
        <div
          className="
            inline-block
            bg-[#FFECEC]
            text-[#E63946]
            px-5
            py-2
            rounded-full
            font-bold
            mb-6
          "
        >
          {story.category}
        </div>

        {/* TITLE */}
        <h1
          className="
            text-5xl
            font-black
            text-[#0B1B4D]
            leading-tight
            mb-8
          "
        >
          {story.title}
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            text-xl
            leading-[2]
            text-gray-700
            mb-10
          "
        >
          {story.desc}
        </p>

        {/* QUOTE */}
        <div
          className="
            border-l-4
            border-[#E63946]
            bg-[#FFF5F5]
            p-8
            rounded-2xl
            italic
            text-2xl
            text-[#0B1B4D]
            font-semibold
          "
        >
          "Every child deserves love,
          dignity, support, and the
          opportunity to grow."

        </div>

      </div>

    </section>
  )
}

export default StoryDetails