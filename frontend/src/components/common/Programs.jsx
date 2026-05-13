import program1 from "../../assets/programs/programs1.png"
import program2 from "../../assets/programs/programs2.png"
import program3 from "../../assets/programs/programs3.png"

function Programs() {

    const programList = [
        {
            title: "Early Intervention & Child Development",
            color: "#F7C600",
            items: [
                "Autism & ADHD Support",
                "Developmental Delay Programs",
                "Learning Disorder Support",
            ],
        },

        {
            title: "Therapy & Developmental Support",
            color: "#38BDF8",
            items: [
                "Speech & Language Therapy",
                "Occupational Therapy",
                "Sensory Integration Activities",
            ],
        },

        {
            title: "Inclusive Education Support",
            color: "#E63946",
            items: [
                "Montessori-based Learning",
                "Individual Learning Plans",
                "School Readiness Programs",
            ],
        },
    ]

    return (

        <section className="bg-white py-14 lg:py-24 overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

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
                                leading-[1.05]
                                mb-6
                            "
                        >

                            Supporting Every Child

                            <span className="block text-[#E63946]">
                                With Care & Inclusion
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
                                        p-5 lg:p-7
                                        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                                        border border-gray-100
                                        transition
                                        hover:-translate-y-1
                                    "
                                    style={{
                                        borderLeft: `5px solid ${program.color}`,
                                    }}
                                >

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

                                    <ul className="space-y-2.5">

                                        {program.items.map((item, idx) => (

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
                                                    className="mt-[8px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                    style={{ background: program.color }}
                                                ></span>

                                                {item}

                                            </li>

                                        ))}

                                    </ul>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* RIGHT IMAGES */}
<div
  className="
    relative
    h-[420px]
    sm:h-[520px]
    lg:h-[620px]
    flex items-center justify-center
    mt-8 lg:mt-0
  "
>

    {/* IMAGE 1 */}
    <div
      className="
        absolute

        top-6
        left-4

        sm:top-12
        sm:left-10

        lg:top-40
        lg:left-12

        w-[150px]
        sm:w-[200px]
        lg:w-[240px]

        rounded-[24px]
        lg:rounded-[30px]

        overflow-hidden
        shadow-2xl

        rotate-[-6deg]
        hover:rotate-0

        transition duration-500
        z-10
      "
    >

        <img
          src={program1}
          alt="Program"
          className="
            w-full
            h-[150px]
            sm:h-[180px]
            lg:h-[200px]
            object-cover
          "
        />

    </div>

    {/* IMAGE 2 */}
    <div
      className="
        absolute

        top-[90px]
        right-2

        sm:top-[150px]
        sm:right-6

        lg:top-[280px]
        lg:right-1

        w-[220px]
        sm:w-[260px]
        lg:w-[300px]

        rounded-[24px]
        lg:rounded-[30px]

        overflow-hidden
        shadow-2xl

        rotate-[4deg]
        hover:rotate-0

        transition duration-500
        z-20
      "
    >

        <img
          src={program2}
          alt="Program"
          className="
            w-full
            h-[220px]
            sm:h-[260px]
            lg:h-[300px]
            object-cover
          "
        />

    </div>

    {/* IMAGE 3 */}
    <div
      className="
        absolute

        bottom-0
        left-16

        sm:bottom-2
        sm:left-24

        lg:bottom-[-160px]
        lg:left-28

        w-[170px]
        sm:w-[220px]
        lg:w-[260px]

        rounded-[24px]
        lg:rounded-[30px]

        overflow-hidden
        shadow-2xl

        rotate-[-4deg]
        hover:rotate-0

        transition duration-500
        z-10
      "
    >

        <img
          src={program3}
          alt="Program"
          className="
            w-full
            h-[160px]
            sm:h-[200px]
            lg:h-[220px]
            object-cover
          "
        />

    </div>

</div>

                </div>

            </div>

        </section>
    )
}

export default Programs