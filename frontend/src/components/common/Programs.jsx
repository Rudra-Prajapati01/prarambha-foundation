function Programs({ pageData }) {

  const programList =
    pageData?.programs || []

  /* =====================================
      IMAGE SUPPORT
  ===================================== */

  const getImageUrl = (image) => {

    if (!image)
      return ""

    if (image.startsWith("http"))
      return image

    return `https://prarambha-backend.onrender.com${image}`
  }

  /* =====================================
      FIRST PROGRAM IMAGES
  ===================================== */

  const firstProgram =
  {
    image1:
      pageData?.programImage1,

    image2:
      pageData?.programImage2,

    image3:
      pageData?.programImage3,
  }

  return (

    <section className="bg-white py-14 lg:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
        >

          {/* LEFT CONTENT */}

          <div>

            {/* TAG */}

            <p
              className="
                text-[#E63946]
                font-bold
                uppercase
                tracking-[4px]
                text-xs
                mb-4
              "
            >
              Our Core Programs
            </p>

            {/* HEADING */}

            <h2
              className="
    text-[36px]
    sm:text-[44px]
    lg:text-5xl
    font-extrabold
    text-[#0B1B4D]
    leading-[1.1]
    mb-6
  "
            >
              Supporting Every Child{" "}
              <span className="text-[#E63946] whitespace-nowrap">
                With Education, Therapy & Skills
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                text-gray-600
                text-[15px]
                lg:text-lg
                leading-relaxed
                mb-10
                max-w-2xl
              "
            >

              Our programs focus on early intervention,
              therapy, inclusive education, sensory
              development, and family support to help
              children grow with confidence, independence,
              and dignity.

            </p>

            {/* PROGRAM LIST */}

            <div className="space-y-5 lg:space-y-7">

              {programList.map((program, index) => (

                <div
                  key={index}

                  className="
                    bg-[#F8FAFC]
                    rounded-[24px]
                    p-5
                    lg:p-7
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                    border
                    border-gray-100
                    transition
                    hover:-translate-y-1
                  "

                  style={{
                    borderLeft:
                      `5px solid ${program.color}`,
                  }}
                >

                  {/* TITLE */}

                  <h3
                    className="
                      text-[18px]
                      lg:text-xl
                      font-bold
                      text-[#0B1B4D]
                      mb-4
                      leading-snug
                    "
                  >
                    {program.title}
                  </h3>

                  {/* POINTS */}

                  <ul className="space-y-2.5">

                    {(program.points || []).map(
                      (item, idx) => (

                        <li
                          key={idx}

                          className="
                            text-gray-600
                            text-sm
                            lg:text-base
                            flex items-start gap-2
                            leading-relaxed
                          "
                        >

                          <span
                            className="
                              mt-[8px]
                              w-1.5
                              h-1.5
                              rounded-full
                              flex-shrink-0
                            "

                            style={{
                              background:
                                program.color,
                            }}
                          />

                          {item}

                        </li>

                      )
                    )}

                  </ul>

                  {/* BUTTON */}

                  <a
                    href="/about"

                    className="
                            mt-5
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            transition
                            hover:translate-x-1
                            relative
                            z-50
                            cursor-pointer
                          "

                    style={{
                      color: program.color,
                      pointerEvents: "auto",
                    }}
                  >

                    Read More →

                  </a>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT IMAGES */}

          <div
            className="
              relative
              mt-12
              lg:mt-0
              flex items-center justify-center
            "
          >

            {/* MOBILE */}

            <div
              className="
                flex
                flex-col
                gap-6
                lg:hidden
                w-full
                items-center
              "
            >

              {/* IMAGE 1 */}

              {firstProgram.image1 && (

                <img
                  src={
                    getImageUrl(
                      firstProgram.image1
                    )
                  }

                  alt="Program"

                  onError={(e) => {

                    e.target.onerror = null

                    e.target.src =
                      "https://via.placeholder.com/600x600?text=Program+Image"
                  }}

                  className="
                    w-[220px]
                    rounded-[28px]
                    shadow-2xl
                    rotate-[-4deg]
                  "
                />

              )}

              {/* IMAGE 2 */}

              {firstProgram.image2 && (

                <img
                  src={
                    getImageUrl(
                      firstProgram.image2
                    )
                  }

                  alt="Program"

                  onError={(e) => {

                    e.target.onerror = null

                    e.target.src =
                      "https://via.placeholder.com/600x600?text=Program+Image"
                  }}

                  className="
                    w-[280px]
                    rounded-[30px]
                    shadow-2xl
                    rotate-[3deg]
                    -mt-2
                  "
                />

              )}

              {/* IMAGE 3 */}

              {firstProgram.image3 && (

                <img
                  src={
                    getImageUrl(
                      firstProgram.image3
                    )
                  }

                  alt="Program"

                  onError={(e) => {

                    e.target.onerror = null

                    e.target.src =
                      "https://via.placeholder.com/600x600?text=Program+Image"
                  }}

                  className="
                    w-[230px]
                    rounded-[28px]
                    shadow-2xl
                    rotate-[-3deg]
                  "
                />

              )}

            </div>

            {/* DESKTOP */}

            <div
              className="
                hidden
                lg:block
                relative
                h-[620px]
                w-full
              "
            >

              {/* IMAGE 1 */}

              {firstProgram.image1 && (

                <div
                  className="
                    absolute
                    top-40
                    left-12
                    w-[240px]
                    rounded-[30px]
                    overflow-hidden
                    shadow-2xl
                    rotate-[-6deg]
                    hover:rotate-0
                    transition
                    duration-500
                    z-10
                  "
                >

                  <img
                    src={
                      getImageUrl(
                        firstProgram.image1
                      )
                    }

                    alt="Program"

                    onError={(e) => {

                      e.target.onerror = null

                      e.target.src =
                        "https://via.placeholder.com/600x600?text=Program+Image"
                    }}

                    className="
                      w-full
                      h-[200px]
                      object-cover
                    "
                  />

                </div>

              )}

              {/* IMAGE 2 */}

              {firstProgram.image2 && (

                <div
                  className="
                    absolute
                    top-[280px]
                    right-1
                    w-[300px]
                    rounded-[30px]
                    overflow-hidden
                    shadow-2xl
                    rotate-[4deg]
                    hover:rotate-0
                    transition
                    duration-500
                    z-20
                  "
                >

                  <img
                    src={
                      getImageUrl(
                        firstProgram.image2
                      )
                    }

                    alt="Program"

                    onError={(e) => {

                      e.target.onerror = null

                      e.target.src =
                        "https://via.placeholder.com/600x600?text=Program+Image"
                    }}

                    className="
                      w-full
                      h-[300px]
                      object-cover
                    "
                  />

                </div>

              )}

              {/* IMAGE 3 */}

              {firstProgram.image3 && (

                <div
                  className="
                    absolute
                    bottom-[-80px]
                    left-28
                    w-[260px]
                    rounded-[30px]
                    overflow-hidden
                    shadow-2xl
                    rotate-[-4deg]
                    hover:rotate-0
                    transition
                    duration-500
                    z-10
                  "
                >

                  <img
                    src={
                      getImageUrl(
                        firstProgram.image3
                      )
                    }

                    alt="Program"

                    onError={(e) => {

                      e.target.onerror = null

                      e.target.src =
                        "https://via.placeholder.com/600x600?text=Program+Image"
                    }}

                    className="
                      w-full
                      h-[220px]
                      object-cover
                    "
                  />

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Programs