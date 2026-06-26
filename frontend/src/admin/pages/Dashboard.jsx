import AdminLayout from "../layouts/AdminLayout"

function Dashboard() {

  /* =====================================
      DASHBOARD CARDS
  ===================================== */

  const cards = [


    {
      title: "Impact Stories",
      value: "12",
    },

    {
      title: "Gallery Images",
      value: "48",
    },

    {
      title: "Messages",
      value: "09",
    },
  ]

  return (

    <AdminLayout>

      {/* =====================================
          PAGE HEADER
      ===================================== */}

      <div className="mb-8">

        <h1
          className="
            text-4xl
            font-extrabold
            text-[#111827]
            mb-2
          "
        >
          Dashboard
        </h1>

        <p className="text-gray-500">

          Welcome to the
          Prarambha Foundation CMS.

        </p>

      </div>

      {/* =====================================
          DASHBOARD GRID
      ===================================== */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >

        {Array.isArray(cards)
          && cards.map(
            (card, index) => (

              <div
                key={index}

                className="
                  bg-white
                  rounded-[28px]
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* TOP ACCENT */}

                <div
                  className="
                    w-14
                    h-2
                    rounded-full
                    bg-[#E63946]
                    mb-5
                  "
                ></div>

                {/* TITLE */}

                <p
                  className="
                    text-gray-500
                    font-medium
                    mb-4
                  "
                >
                  {card.title}
                </p>

                {/* VALUE */}

                <h2
                  className="
                    text-5xl
                    font-extrabold
                    text-[#E63946]
                  "
                >
                  {card.value}
                </h2>

              </div>

            )
          )}

      </div>

    </AdminLayout>
  )
}

export default Dashboard