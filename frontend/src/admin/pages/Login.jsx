
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa"

import logo from "../../assets/logo/logo.png"

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)
    setError("")

    try {

      const { data } = await axios.post(
        "https://prarambha-backend.onrender.com/api/admin/login",
        formData
      )

      localStorage.setItem(
        "adminInfo",
        JSON.stringify(data)
      )

      navigate("/admin/dashboard")

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Login failed"
      )

    } finally {

      setLoading(false)

    }
  }

  return (
    <div
      className="
        min-h-screen
        bg-[#FFF7E8]
        flex
        items-center
        justify-center
        px-4
        py-10
        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND SHAPES */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-120px]
          w-[350px]
          h-[350px]
          bg-[#F7C600]
          rounded-full
          opacity-80
        "
      />

      <div
        className="
          absolute
          bottom-[-120px]
          left-[-120px]
          w-[300px]
          h-[300px]
          bg-[#38BDF8]
          rounded-full
          opacity-20
        "
      />

      {/* LOGIN CARD */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-md
          bg-white
          rounded-[32px]
          shadow-[0_15px_60px_rgba(0,0,0,0.08)]
          p-8
          sm:p-10
        "
      >

        {/* LOGO */}
        <div className="flex justify-center mb-6">

          <img
            src={logo}
            alt="Prarambha Foundation"
            className="w-44 object-contain"
          />

        </div>

        {/* TITLE */}
        <div className="text-center mb-8">

          <p
            className="
              text-[#E63946]
              font-bold
              uppercase
              tracking-[4px]
              text-xs
              mb-3
            "
          >
            Admin Panel
          </p>

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-extrabold
              text-[#1F2937]
              leading-tight
              mb-3
            "
          >
            Welcome Back
          </h1>

          <p
            className="
              text-gray-500
              text-sm
              leading-relaxed
            "
          >
            Sign in to manage Prarambha Foundation CMS
          </p>

        </div>

        {/* ERROR */}
        {error && (

          <div
            className="
              bg-red-100
              text-red-600
              px-4
              py-3
              rounded-2xl
              text-sm
              mb-5
              font-medium
            "
          >

            {error}

          </div>

        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* EMAIL */}
          <div>

            <label
              className="
                block
                text-sm
                font-semibold
                text-[#1F2937]
                mb-2
              "
            >
              Email Address
            </label>

            <div
              className="
                flex
                items-center
                bg-[#F3F4F6]
                rounded-2xl
                px-4
                h-[58px]
              "
            >

              <FaEnvelope
                className="
                  text-gray-400
                  mr-3
                "
              />

              <input
                type="email"
                name="email"
                placeholder="admin@prarambha.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[#1F2937]
                  placeholder:text-gray-400
                "
              />

            </div>

          </div>

          {/* PASSWORD */}
          <div>

            <label
              className="
                block
                text-sm
                font-semibold
                text-[#1F2937]
                mb-2
              "
            >
              Password
            </label>

            <div
              className="
                flex
                items-center
                bg-[#F3F4F6]
                rounded-2xl
                px-4
                h-[58px]
              "
            >

              <FaLock
                className="
                  text-gray-400
                  mr-3
                "
              />

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[#1F2937]
                  placeholder:text-gray-400
                "
              />

            </div>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-[58px]
              bg-[#E63946]
              hover:bg-[#d62839]
              text-white
              rounded-2xl
              font-semibold
              text-lg
              shadow-lg
              hover:scale-[1.02]
              active:scale-[0.98]
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-3
            "
          >

            {loading ? (
              "Signing In..."
            ) : (
              <>
                Login
                <FaArrowRight />
              </>
            )}

          </button>

        </form>

        {/* FOOTER */}
        <div
          className="
            mt-8
            text-center
            text-sm
            text-gray-400
            leading-relaxed
          "
        >

          Prarambha Foundation CMS Panel

        </div>

      </div>

    </div>
  )
}

export default Login