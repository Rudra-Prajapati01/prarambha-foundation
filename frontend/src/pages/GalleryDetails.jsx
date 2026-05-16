import { useLocation, useNavigate } from "react-router-dom"

function GalleryDetails() {

  const location = useLocation()
  const navigate = useNavigate()

  const item = location.state

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          No Gallery Data Found
        </h1>
      </div>
    )
  }

  return (
    <div className="bg-[#FFFDF8] min-h-screen py-10 px-5 md:px-12">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-6 py-3 rounded-full bg-[#E63946] text-white font-semibold hover:scale-105 duration-300"
      >
        ← Back
      </button>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[35px] shadow-xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>

          <p className="text-[#E63946] uppercase tracking-[4px] font-semibold mb-4">
            {item.category}
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-[#0B1B4D] leading-tight mb-6">
            {item.title}
          </h1>

          <p className="text-lg text-gray-700 leading-[2] mb-8">
            {item.description}
          </p>

          {/* QUOTE */}
          <div className="bg-white border-l-[6px] border-[#E63946] rounded-3xl p-6 shadow-md mb-8">
            <p className="text-xl italic text-[#0B1B4D] font-medium leading-relaxed">
              “Every child learns differently, and every smile is a step toward confidence.”
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#0B1B4D] mb-2">
                Creative Learning
              </h3>

              <p className="text-gray-600 text-sm leading-7">
                Children engage in storytelling, art, and imagination-building activities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#0B1B4D] mb-2">
                Inclusive Environment
              </h3>

              <p className="text-gray-600 text-sm leading-7">
                Every child is supported with love, respect, and equal opportunities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#0B1B4D] mb-2">
                Child Development
              </h3>

              <p className="text-gray-600 text-sm leading-7">
                Activities are designed to improve social, emotional, and communication skills.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#0B1B4D] mb-2">
                Joyful Experiences
              </h3>

              <p className="text-gray-600 text-sm leading-7">
                We create happy learning moments where children feel safe and confident.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default GalleryDetails
