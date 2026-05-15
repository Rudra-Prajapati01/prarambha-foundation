import { FaArrowRight } from "react-icons/fa"

function ImpactStories({ pageData }) {

  /* =========================
      STORIES
  ========================= */
  const stories =
    pageData?.impactStories || []

  /* =========================
      STORY TYPES
  ========================= */
  const largeStory =
    stories.find(
      (story) =>
        story.type === "large"
    )

  const tallStory =
    stories.find(
      (story) =>
        story.type === "tall"
    )

  const smallStories =
    stories.filter(
      (story) =>
        story.type === "small"
    )

  return (

    <section className="bg-[#F8FAFC] py-14 lg:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-8 lg:mb-10">

          <p className="text-[#E63946] uppercase tracking-[3px] text-xs font-bold mb-3">
            Real Stories
          </p>

          <h2
            className="
              text-[34px]
              sm:text-[42px]
              lg:text-4xl
              font-extrabold
              text-[#0B1B4D]
              leading-tight
              mb-3
            "
          >
            Impact Stories
          </h2>

          <div className="w-20 h-1 bg-[#E63946] rounded-full"></div>

        </div>

        {/* MOBILE DESIGN */}
        <div className="flex flex-col gap-5 lg:hidden">

          {stories.map((story, index) => (

            <div
              key={index}
              className="
                relative
                rounded-[28px]
                overflow-hidden
                h-[320px]
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                group
              "
            >

              {/* IMAGE */}
              <img
                src={`https://prarambha-backend.onrender.com${story.image}`}
                alt={story.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-700
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

              {/* CATEGORY */}
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
                  tracking-widest
                  rounded-full
                  shadow-lg
                "
              >
                {story.category}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

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
                    text-gray-200
                    leading-relaxed
                    mb-5
                  "
                >
                  {story.desc}
                </p>

                <button
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
                    transition
                  "
                >

                  Read More

                  <FaArrowRight className="text-xs" />

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* DESKTOP DESIGN */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5">

          {/* LEFT */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* LARGE CARD */}
            {largeStory && (

              <div
                className="
                  relative
                  rounded-[32px]
                  overflow-hidden
                  h-[430px]
                  group
                "
              >

                <img
                  src={`https://prarambha-backend.onrender.com${largeStory.image}`}
                  alt={largeStory.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-black/35"></div>

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
                    tracking-wider
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

                  <h3 className="text-4xl font-bold mb-4">
                    {largeStory.title}
                  </h3>

                  <p
                    className="
                      text-lg
                      leading-relaxed
                      mb-6
                      text-gray-100
                    "
                  >
                    {largeStory.desc}
                  </p>

                  <button
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
                      transition
                      shadow-lg
                    "
                  >

                    Read More

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            )}

            {/* SMALL CARDS */}
            <div className="grid grid-cols-2 gap-5">

              {smallStories.map((story, index) => (

                <div
                  key={index}
                  className="
                    relative
                    rounded-[32px]
                    overflow-hidden
                    h-[330px]
                    group
                  "
                >

                  <img
                    src={`https://prarambha-backend.onrender.com${story.image}`}
                    alt={story.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition
                      duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-black/35"></div>

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
                      tracking-wider
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
                        mb-3
                        leading-snug
                      "
                    >
                      {story.title}
                    </h3>

                    <button
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
                        transition
                        border
                        border-white/20
                      "
                    >
                      Read More
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT TALL CARD */}
          {tallStory && (

            <div
              className="
                relative
                rounded-[32px]
                overflow-hidden
                min-h-[770px]
                group
              "
            >

              <img
                src={`https://prarambha-backend.onrender.com${tallStory.image}`}
                alt={tallStory.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-700
                "
              />

              <div className="absolute inset-0 bg-black/35"></div>

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
                  tracking-wider
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
                    text-4xl
                    font-bold
                    mb-5
                    leading-tight
                  "
                >
                  {tallStory.title}
                </h3>

                <p
                  className="
                    text-lg
                    leading-relaxed
                    text-gray-100
                    mb-6
                  "
                >
                  {tallStory.desc}
                </p>

                <button
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
                    transition
                    shadow-lg
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

export default ImpactStories