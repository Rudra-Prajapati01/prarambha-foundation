function Topbar() {

  const adminInfo = JSON.parse(
    localStorage.getItem("adminInfo")
  )

  return (
    <div
      className="
        h-[90px]
        bg-white
        border-b
        border-gray-200
        flex
        items-center
        justify-between
        px-8
      "
    >

      <div>

        <h2
          className="
            text-3xl
            font-extrabold
            text-[#1F2937]
          "
        >
          Dashboard
        </h2>

        <p
          className="
            text-gray-500
            mt-1
          "
        >
          Welcome back, {adminInfo?.name}
        </p>

      </div>

      <div
        className="
          w-12
          h-12
          rounded-full
          bg-[#F7C600]
          flex
          items-center
          justify-center
          text-[#1F2937]
          font-bold
          text-lg
        "
      >
        A
      </div>

    </div>
  )
}

export default Topbar