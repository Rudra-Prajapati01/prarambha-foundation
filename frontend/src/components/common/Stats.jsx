import {
  FaSmile,
  FaUsers,
  FaGraduationCap,
  FaHandshake,
} from "react-icons/fa"

function Stats() {

  const stats = [
    {
      icon: <FaSmile />,
      number: "500+",
      text: "Children Supported",
    },
    {
      icon: <FaUsers />,
      number: "100+",
      text: "Families Helped",
    },
    {
      icon: <FaGraduationCap />,
      number: "20+",
      text: "Programs Conducted",
    },
    {
      icon: <FaHandshake />,
      number: "50+",
      text: "Volunteers Joined",
    },
  ]

  return (

    <section className="py-12 lg:py-24 bg-[#F4FBFF] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MOBILE DESIGN */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">

          {stats.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-[24px]
                shadow-md
                border border-[#EAF6FF]
                py-8
                px-4
                text-center
              "
            >

              {/* ICON */}
              <div
                className="
                  w-16 h-16
                  mx-auto
                  rounded-full
                  bg-[#EAF6FF]
                  flex items-center justify-center
                  text-[#38BDF8]
                  text-3xl
                  mb-4
                "
              >

                {item.icon}

              </div>

              {/* NUMBER */}
              <h2
                className="
                  text-[32px]
                  font-extrabold
                  text-[#F7C600]
                  leading-none
                  mb-3
                "
              >

                {item.number}

              </h2>

              {/* TEXT */}
              <p
                className="
                  text-[#1F2937]
                  text-sm
                  leading-relaxed
                  font-medium
                "
              >

                {item.text}

              </p>

            </div>

          ))}

        </div>

        {/* DESKTOP DESIGN */}
        <div className="hidden lg:grid grid-cols-4 gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-[28px]
                shadow-lg
                py-14
                px-8
                text-center
                hover:-translate-y-2
                transition
                duration-300
                border border-[#EAF6FF]
              "
            >

              {/* ICON */}
              <div className="w-20 h-20 mx-auto rounded-full bg-[#EAF6FF] flex items-center justify-center text-[#38BDF8] text-4xl mb-6">

                {item.icon}

              </div>

              {/* NUMBER */}
              <h2 className="text-5xl font-extrabold text-[#F7C600] mb-4">

                {item.number}

              </h2>

              {/* TEXT */}
              <p className="text-[#1F2937] text-lg font-medium leading-relaxed">

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Stats