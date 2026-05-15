import {
  FaTachometerAlt,
  FaFileAlt,
  FaHandsHelping,
  FaImages,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa"

import { Link, useNavigate } from "react-router-dom"

function Sidebar() {

  const navigate = useNavigate()

  const logoutHandler = () => {

    localStorage.removeItem("adminInfo")

    navigate("/admin")
  }

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin/dashboard",
    },

    {
      title: "Manage Pages",
      icon: <FaFileAlt />,
      path: "/admin/pages",
    },

    {
      title: "Programs",
      icon: <FaHandsHelping />,
      path: "/admin/programs",
    },

    {
      title: "Gallery",
      icon: <FaImages />,
      path: "/admin/gallery",
    },

    {
      title: "Messages",
      icon: <FaEnvelope />,
      path: "/admin/messages",
    },

    {
      title: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },
  ]

  return (
    <div
      className="
        w-[280px]
        min-h-screen
        bg-white
        border-r
        border-gray-200
        flex
        flex-col
        px-6
        py-8
      "
    >

      {/* LOGO */}
      <div className="mb-10">

        <h1
          className="
            text-2xl
            font-extrabold
            text-[#1F2937]
          "
        >
          Prarambha CMS
        </h1>

        <p
          className="
            text-sm
            text-gray-500
            mt-1
          "
        >
          Admin Dashboard
        </p>

      </div>

      {/* MENU */}
      <div className="flex flex-col gap-3">

        {menuItems.map((item, index) => (

          <Link
            key={index}
            to={item.path}
            className="
              flex
              items-center
              gap-4
              px-5
              py-4
              rounded-2xl
              text-[#1F2937]
              font-semibold
              hover:bg-[#FFF7E8]
              hover:text-[#E63946]
              transition-all
              duration-300
            "
          >

            <span className="text-lg">

              {item.icon}

            </span>

            {item.title}

          </Link>

        ))}

      </div>

      {/* LOGOUT */}
      <button
        onClick={logoutHandler}
        className="
          mt-auto
          flex
          items-center
          gap-4
          px-5
          py-4
          rounded-2xl
          bg-[#E63946]
          hover:bg-[#d62839]
          text-white
          font-semibold
          transition-all
        "
      >

        <FaSignOutAlt />

        Logout

      </button>

    </div>
  )
}

export default Sidebar