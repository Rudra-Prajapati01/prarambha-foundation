import {
  Link,
} from "react-router-dom"

function Programs({ pageData }) {

  /* =====================================
      PROGRAM DATA
  ===================================== */

  const programs =
    pageData?.programs || []

  /* =====================================
      IMAGE SUPPORT
  ===================================== */

  const getImageUrl = (image) => {

    if (!image)
      return "https://via.placeholder.com/600x400?text=Program+Image"

    return image.startsWith("http")
      ? image
      : `https://prarambha-backend.onrender.com${image}`
  }

  /* =====================================
      GALLERY IMAGES
  ===================================== */

  const galleryImages = [

    getImageUrl(
      pageData?.programImage1
    ),

    getImageUrl(
      pageData?.programImage2
    ),

    getImageUrl(
      pageData?.programImage3
    ),
  ]

  return (

    <section
      className="
        py-24
        px-5
        lg:px-14
        bg-white
      "
    >

      <div
        className="
          max-w-[1400px]
          mx-auto
        "
      >

        {/* TOP */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-start
            mb-20
          "
        >

          <div>

            <p
              className="
                text-[#E63946]
                uppercase
                tracking-[5px]
                font-bold
                mb-5
                text-sm
              "
            >
              Our Core Programs
            </p>

            <h2
              className="
                text-5xl
                lg:text-7xl
                leading-[1.05]
                font-black
                text-[#0B1B4D]
                mb-8
              "
            >

              Supporting Every Child

              <span className="text-[#E63946]">
                {" "}
                With Care & Inclusion
              </span>

            </h2>

            <p
              className="
                text-[#5B6475]
                text-xl
                leading-[2]
                max-w-[650px]
              "
            >

              Our programs focus on early intervention,
              therapy,
              inclusive education,
              sensory development,
              and family support
              to help children grow with confidence,
              independence,
              and dignity.

            </p>

          </div>

          {/* PROGRAM CARDS */}

          <div className="space-y-7">

            {
              programs.map(
                (
                  program,
                  index
                ) => (

                  <div
                    key={index}

                    className="
                      bg-[#F8FAFC]
                      rounded-[35px]
                      p-8
                      border
                      border-gray-100
                      hover:shadow-xl
                      transition-all
                      duration-300
                    "

                    style={{
                      borderLeft:
                        `6px solid ${program.color || "#E63946"}`,
                    }}
                  >

                    <h3
                      className="
                        text-3xl
                        font-black
                        text-[#0B1B4D]
                        mb-6
                      "
                    >
                      {program.title}
                    </h3>

                    <ul className="space-y-4">

                      {
                        program.points?.map(
                          (
                            point,
                            i
                          ) => (

                            <li
                              key={i}

                              className="
                                flex
                                items-start
                                gap-4
                                text-[#5B6475]
                                text-lg
                              "
                            >

                              <span
                                className="
                                  w-3
                                  h-3
                                  rounded-full
                                  mt-3
                                  flex-shrink-0
                                "

                                style={{
                                  background:
                                    program.color ||
                                    "#E63946",
                                }}
                              />

                              {point}

                            </li>

                          )
                        )
                      }

                    </ul>

                    <Link
                      to="/contact"

                      className="
                        inline-flex
                        items-center
                        gap-2
                        mt-8
                        font-bold
                        transition
                        hover:translate-x-1
                      "

                      style={{
                        color:
                          program.color ||
                          "#E63946",
                      }}
                    >

                      Read More →

                    </Link>

                  </div>

                )
              )
            }

          </div>

        </div>

        {/* =====================================
            GALLERY
        ===================================== */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
          "
        >

          {
            galleryImages.map(
              (
                image,
                index
              ) => (

                <div
                  key={index}

                  className="
                    overflow-hidden
                    rounded-[35px]
                    shadow-lg
                    group
                    h-[320px]
                  "
                >

                  <img
                    src={image}

                    alt={`Program ${index + 1}`}

                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition-all
                      duration-500
                    "

                    onError={(e) => {

                      e.target.onerror = null

                      e.target.src =
                        "https://via.placeholder.com/600x400?text=Program+Image"
                    }}
                  />

                </div>

              )
            )
          }

        </div>

      </div>

    </section>
  )
}

export default Programs