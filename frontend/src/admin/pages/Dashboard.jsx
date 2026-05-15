import AdminLayout from "../layouts/AdminLayout"

function Dashboard() {

  const cards = [
    {
      title: "Programs",
      value: "04",
    },

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

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >

        {cards.map((card, index) => (

          <div
            key={index}
            className="
              bg-white
              rounded-[28px]
              p-8
              shadow-sm
            "
          >

            <p
              className="
                text-gray-500
                font-medium
                mb-4
              "
            >
              {card.title}
            </p>

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

        ))}

      </div>

    </AdminLayout>
  )
}

export default Dashboard