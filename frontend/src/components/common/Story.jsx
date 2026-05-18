import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Story() {

  const navigate = useNavigate()

  const [stories, setStories] =
    useState([])

  /* =====================================
      IMAGE HELPER
  ===================================== */

  const getImageUrl = (
    image
  ) => {

    if (!image) {

      return "https://via.placeholder.com/1200x800?text=Story+Image"
    }

    return typeof image === "string"
      && image.startsWith("http")
        ? image
        : `https://prarambha-backend.onrender.com${image}`
  }

  /* =====================================
      FETCH STORIES
  ===================================== */

  useEffect(() => {

    const fetchStories =
      async () => {

        try {

          const { data } =
            await axios.get(
              "https://prarambha-backend.onrender.com/api/stories"
            )

          setStories(
            Array.isArray(data)
              ? data
              : []
          )

        } catch (error) {

          console.log(error)

          setStories([])
        }
      }

    fetchStories()

  }, [])

  /* =====================================
      STORY TYPES
  ===================================== */

  const largeStory =
    Array.isArray(stories)
      ? stories.find(
          (story) =>
            story.type === "large"
        )
      : null

  const tallStory =
    Array.isArray(stories)
      ? stories.find(
          (story) =>
            story.type === "tall"
        )
      : null

  const smallStories =
    Array.isArray(stories)
      ? stories.filter(
          (story) =>
            story.type === "small"
        )
      : []

  return (

    <section
      className="
        bg-[#F8FAFC]
        py-14
        lg:py-20
        overflow-hidden
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =====================================
            HEADING
        ===================================== */}

        <div className="mb-8 lg:mb-10">

          <p
            className="
              text-[#E63946]
              uppercase
              tracking-[4px]
              text-xs
              font-bold
              mb-3
            "
          >
            Real Stories
          </p>

          <h2
            className="
              text-[34px]
              sm:text-[42px]
              lg:text-5xl
              font-extrabold
              text-[#0B1B4D]
              leading-tight
              mb-4
            "
          >
            Impact Stories
          </h2>

          <div
            className="
              w-24
              h-1
              bg-[#E63946]
              rounded-full
            "
          />

        </div>

        {/* =====================================
            MOBILE
        ===================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            lg:hidden
          "
        >

          {Array.isArray(stories)
            && stories.map(
              (story) => (

                <div
                  key={story._id}

                  className="
                    relative
                    rounded-[30px]
                    overflow-hidden
                    h-[340px]
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                    group
                  "
                >

                  <img
                    src={
                      getImageUrl(
                        story.image
                      )
                    }

                    alt={
                      story.title
                    }

                    loading="lazy"

                    onError={(e) => {

                      e.target.onerror = null

                      e.target.src =
                        "https://via.placeholder.com/800x600?text=Story+Image"
                    }}

                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-all
                      duration-700
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/30
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      bg-[#E63946]
                      text-white
                      px-4
                      py-2
                      text-[11px]
                      font-bold
                      rounded-full
                    "
                  >
                    {story.category}
                  </div>

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-5
                      text-white
                    "
                  >

                    <h3
                      className="
                        text-[26px]
                        font-extrabold
                        leading-tight
                        mb-3
                      "
                    >
                      {story.title}
                    </h3>

                    <p
                      className="
                        text-sm
                        leading-relaxed
                        text-gray-200
                        mb-5
                        line-clamp-3
                      "
                    >
                      {story.desc}
                    </p>

                    <button
                      type="button"

                      onClick={() =>
                        navigate(`/stories/${story._id}`)
                      }

                      className="
                        flex
                        items-center
                        gap-3
                        bg-white/15
                        backdrop-blur-md
                        hover:bg-white/25
                        border
                        border-white/20
                        text-white
                        px-5
                        py-3
                        rounded-full
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                      "
                    >

                      Read More

                      <FaArrowRight className="text-xs" />

                    </button>

                  </div>

                </div>

              )
            )}

        </div>

        {/* =====================================
            DESKTOP
        ===================================== */}

        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-3
            gap-5
          "
        >

          {/* =====================================
              LEFT
          ===================================== */}

          <div
            className="
              lg:col-span-2
              flex
              flex-col
              gap-5
            "
          >

            {/* LARGE */}

            {largeStory && (

              <div
                className="
                  relative
                  rounded-[34px]
                  overflow-hidden
                  h-[450px]
                  group
                "
              >

                <img
                  src={
                    getImageUrl(
                      largeStory.image
                    )
                  }

                  alt={
                    largeStory.title
                  }

                  loading="lazy"

                  onError={(e) => {

                    e.target.onerror = null

                    e.target.src =
                      "https://via.placeholder.com/1200x800?text=Story+Image"
                  }}

                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-all
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-black/35" />

                <div
                  className="
                    absolute
                    top-5
                    right-5
                    bg-[#E63946]
                    text-white
                    px-5
                    py-2
                    text-sm
                    font-bold
                    rounded-full
                  "
                >
                  {largeStory.category}
                </div>

                <div
                  className="
                    absolute
                    bottom-10
                    left-10
                    max-w-xl
                    text-white
                  "
                >

                  <h3
                    className="
                      text-4xl
                      font-bold
                      mb-4
                      leading-tight
                    "
                  >
                    {largeStory.title}
                  </h3>

                  <p
                    className="
                      text-lg
                      text-gray-100
                      leading-relaxed
                      mb-6
                      line-clamp-3
                    "
                  >
                    {largeStory.desc}
                  </p>

                  <button
                    type="button"

                    onClick={() =>
                      navigate(`/stories/${largeStory._id}`)
                    }

                    className="
                      bg-[#E63946]
                      hover:bg-red-600
                      text-white
                      px-6
                      py-3
                      rounded-full
                      font-semibold
                      flex
                      items-center
                      gap-3
                      transition-all
                      duration-300
                    "
                  >

                    Read More

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            )}

            {/* SMALL */}

            <div className="grid grid-cols-2 gap-5">

              {Array.isArray(smallStories)
                && smallStories.map(
                  (story) => (

                    <div
                      key={story._id}

                      className="
                        relative
                        rounded-[32px]
                        overflow-hidden
                        h-[330px]
                        group
                      "
                    >

                      <img
                        src={
                          getImageUrl(
                            story.image
                          )
                        }

                        alt={
                          story.title
                        }

                        loading="lazy"

                        onError={(e) => {

                          e.target.onerror = null

                          e.target.src =
                            "https://via.placeholder.com/800x600?text=Story+Image"
                        }}

                        className="
                          w-full
                          h-full
                          object-cover
                          group-hover:scale-105
                          transition-all
                          duration-700
                        "
                      />

                      <div className="absolute inset-0 bg-black/35" />

                      <div
                        className="
                          absolute
                          top-5
                          right-5
                          bg-[#E63946]
                          text-white
                          px-5
                          py-2
                          text-sm
                          font-bold
                          rounded-full
                        "
                      >
                        {story.category}
                      </div>

                      <div
                        className="
                          absolute
                          bottom-7
                          left-7
                          right-7
                          text-white
                        "
                      >

                        <h3
                          className="
                            text-2xl
                            font-bold
                            mb-4
                            leading-snug
                          "
                        >
                          {story.title}
                        </h3>

                        <button
                          type="button"

                          onClick={() =>
                            navigate(`/stories/${story._id}`)
                          }

                          className="
                            bg-white/20
                            backdrop-blur-md
                            hover:bg-white/30
                            text-white
                            px-5
                            py-2
                            rounded-full
                            text-sm
                            font-semibold
                            transition-all
                            duration-300
                          "
                        >
                          Read More
                        </button>

                      </div>

                    </div>

                  )
                )}

            </div>

          </div>

          {/* =====================================
              TALL
          ===================================== */}

          {tallStory && (

            <div
              className="
                relative
                rounded-[34px]
                overflow-hidden
                min-h-[785px]
                group
              "
            >

              <img
                src={
                  getImageUrl(
                    tallStory.image
                  )
                }

                alt={
                  tallStory.title
                }

                loading="lazy"

                onError={(e) => {

                  e.target.onerror = null

                  e.target.src =
                    "https://via.placeholder.com/1200x800?text=Story+Image"
                }}

                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-all
                  duration-700
                "
              />

              <div className="absolute inset-0 bg-black/35" />

              <div
                className="
                  absolute
                  top-5
                  right-5
                  bg-[#E63946]
                  text-white
                  px-5
                  py-2
                  text-sm
                  font-bold
                  rounded-full
                "
              >
                {tallStory.category}
              </div>

              <div
                className="
                  absolute
                  bottom-10
                  left-8
                  right-8
                  text-white
                "
              >

                <h3
                  className="
                    text-5xl
                    font-black
                    leading-tight
                    mb-5
                  "
                >
                  {tallStory.title}
                </h3>

                <p
                  className="
                    text-lg
                    leading-relaxed
                    text-gray-100
                    mb-7
                  "
                >
                  {tallStory.desc}
                </p>

                <button
                  type="button"

                  onClick={() =>
                    navigate(`/stories/${tallStory._id}`)
                  }

                  className="
                    bg-[#E63946]
                    hover:bg-red-600
                    text-white
                    px-6
                    py-3
                    rounded-full
                    font-semibold
                    flex
                    items-center
                    gap-3
                    transition-all
                    duration-300
                  "
                >

                  Read More

                  <FaArrowRight />

                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  )
}

export default Story