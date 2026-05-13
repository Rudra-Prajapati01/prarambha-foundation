import { FaArrowRight } from "react-icons/fa"

const stories = [
  {
    id: 1,
    title: "Seeds of Confidence",
    category: "Livelihood",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Supporting children and families through inclusive education, therapy, and confidence-building programs.",
    large: true,
  },

  {
    id: 2,
    title: "Letting Children Dream Big",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Helping every child discover their abilities and grow with confidence and dignity.",
    tall: true,
  },

  {
    id: 3,
    title: "From Classroom To Confidence",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Creating safe learning environments for children with special needs.",
  },

  {
    id: 4,
    title: "Every Family Matters",
    category: "Care",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Empowering families with therapy support and community care programs.",
  },
]

function ImpactStories() {
  return (
    <section className="bg-[#F3F4F6] py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-10">

          <h2 className="text-4xl font-bold text-[#1F2937] mb-3">
            Impact Stories
          </h2>

          <div className="w-20 h-1 bg-[#E63946] rounded-full"></div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* TOP LARGE CARD */}
            <div className="relative rounded-[28px] overflow-hidden h-[430px] group">

              <img
                src={stories[0].image}
                alt={stories[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/35"></div>

              {/* CATEGORY */}
              <div className="absolute top-5 right-5 bg-[#E63946] text-white px-5 py-2 text-sm font-bold tracking-wider rounded-sm">
                {stories[0].category}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-10 left-10 max-w-xl text-white">

                <h3 className="text-4xl font-bold mb-4">
                  {stories[0].title}
                </h3>

                <p className="text-lg leading-relaxed mb-6 text-gray-100">
                  {stories[0].desc}
                </p>

                <button className="bg-[#E63946] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 transition">

                  Read More

                  <FaArrowRight />

                </button>

              </div>

            </div>

            {/* BOTTOM 2 CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {stories.slice(2, 4).map((story) => (
                <div
                  key={story.id}
                  className="relative rounded-[28px] overflow-hidden h-[330px] group"
                >

                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/35"></div>

                  <div className="absolute top-5 right-5 bg-[#E63946] text-white px-5 py-2 text-sm font-bold tracking-wider rounded-sm">
                    {story.category}
                  </div>

                  <div className="absolute bottom-7 left-7 right-7 text-white">

                    <h3 className="text-2xl font-bold mb-3 leading-snug">
                      {story.title}
                    </h3>

                    <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-5 py-2 rounded-full text-sm font-semibold transition">

                      Read More

                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT TALL CARD */}
          <div className="relative rounded-[28px] overflow-hidden min-h-[770px] group">

            <img
              src={stories[1].image}
              alt={stories[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/35"></div>

            <div className="absolute top-5 right-5 bg-[#E63946] text-white px-5 py-2 text-sm font-bold tracking-wider rounded-sm">
              {stories[1].category}
            </div>

            <div className="absolute bottom-10 left-8 right-8 text-white">

              <h3 className="text-4xl font-bold mb-5 leading-tight">
                {stories[1].title}
              </h3>

              <p className="text-lg leading-relaxed text-gray-100 mb-6">
                {stories[1].desc}
              </p>

              <button className="bg-[#E63946] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 transition">

                Read More

                <FaArrowRight />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ImpactStories