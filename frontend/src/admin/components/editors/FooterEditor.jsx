import { useState } from "react"

function FooterEditor({
  pageData,
  setPageData,
}) {

  const footer =
    pageData?.footer || {}

  const [loading, setLoading] =
    useState(false)

  /* =====================================
      HANDLE CHANGE
  ===================================== */
  const handleFooterChange = (e) => {

    const {
      name,
      value,
    } = e.target

    setPageData((prev) => ({

      ...prev,

      footer: {

        ...(prev.footer || {}),

        [name]: value,
      },
    }))
  }

  /* =====================================
      HANDLE LOGO UPLOAD
  ===================================== */
  const handleLogoChange = async (e) => {

    const file =
      e.target.files[0]

    if (!file) return

    try {

      setLoading(true)

      const formData =
        new FormData()

      formData.append(
        "logo",
        file
      )

      /* =====================================
          CLOUDINARY UPLOAD API
      ===================================== */

      const response =
        await fetch(
          "https://prarambha-backend.onrender.com/api/logo/footer-logo",
          {
            method: "POST",
            body: formData,
          }
        )

      console.log(response)

      const data =
        await response.json()

      console.log(data)

      const data =
        await response.json()

      console.log(
        "UPLOAD RESPONSE:",
        data
      )

      if (!response.ok) {

        alert(
          data.message ||
          "Logo upload failed"
        )

        return
      }

      /* =====================================
          UPDATE REACT STATE
      ===================================== */

      setPageData((prev) => ({

        ...prev,

        footer: {

          ...(prev.footer || {}),

          logo:
            data?.footer?.logo ||
            data?.logo ||
            "",
        },
      }))

      alert(
        "Logo uploaded successfully"
      )

    } catch (error) {

      console.log(error)

      alert(
        "Something went wrong"
      )

    } finally {

      setLoading(false)
    }
  }

  /* =====================================
      SAVE FOOTER DATA
  ===================================== */
  const handleSaveFooter =
    async () => {

      try {

        setLoading(true)

        const response =
          await fetch(
            "https://prarambha-backend.onrender.com/api/page/footer",
            {

              method: "PUT",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                footer,
              }),
            }
          )

        const data =
          await response.json()

        console.log(
          "SAVE RESPONSE:",
          data
        )

        if (!response.ok) {

          alert(
            data.message ||
            "Failed to save footer"
          )

          return
        }

        alert(
          "Footer updated successfully"
        )

      } catch (error) {

        console.log(error)

        alert(
          "Save failed"
        )

      } finally {

        setLoading(false)
      }
    }

  return (

    <div
      className="
        bg-white
        rounded-[30px]
        p-8
        shadow-sm
      "
    >

      {/* TOP */}
      <div className="mb-8">

        <h2
          className="
            text-3xl
            font-bold
            text-[#1F2937]
            mb-3
          "
        >
          Footer Section
        </h2>

        <p className="text-gray-500">
          Edit footer information,
          logo, contact details,
          and social links.
        </p>

      </div>

      {/* FORM */}
      <div className="space-y-6">

        {/* LOGO */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Website Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
            className="
              w-full
              p-4
              rounded-2xl
              bg-[#F3F4F6]
            "
          />

          {
            footer.logo && (

              <img
                src={footer.logo}
                alt="logo preview"

                onError={(e) => {
                  e.target.src =
                    "/logo.png"
                }}

                className="
                  mt-4
                  w-40
                  h-auto
                  object-contain
                "
              />

            )
          }

        </div>

        {/* DESCRIPTION */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Footer Description
          </label>

          <textarea
            rows="5"
            name="description"
            placeholder="Footer Description"
            value={
              footer.description || ""
            }
            onChange={
              handleFooterChange
            }
            className="
              w-full
              p-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
              resize-none
            "
          />

        </div>

        {/* PHONE */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={
              footer.phone || ""
            }
            onChange={
              handleFooterChange
            }
            className="
              w-full
              h-[60px]
              px-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
            "
          />

        </div>

        {/* EMAIL */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={
              footer.email || ""
            }
            onChange={
              handleFooterChange
            }
            className="
              w-full
              h-[60px]
              px-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
            "
          />

        </div>

        {/* ADDRESS */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Address
          </label>

          <textarea
            rows="4"
            name="address"
            placeholder="Address"
            value={
              footer.address || ""
            }
            onChange={
              handleFooterChange
            }
            className="
              w-full
              p-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
              resize-none
            "
          />

        </div>

        {/* FACEBOOK */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Facebook Link
          </label>

          <input
            type="text"
            name="facebook"
            placeholder="Facebook URL"
            value={
              footer.facebook || ""
            }
            onChange={
              handleFooterChange
            }
            className="
              w-full
              h-[60px]
              px-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
            "
          />

        </div>

        {/* INSTAGRAM */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            Instagram Link
          </label>

          <input
            type="text"
            name="instagram"
            placeholder="Instagram URL"
            value={
              footer.instagram || ""
            }
            onChange={
              handleFooterChange
            }
            className="
              w-full
              h-[60px]
              px-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
            "
          />

        </div>

        {/* YOUTUBE */}
        <div>

          <label
            className="
              block
              font-semibold
              mb-3
              text-[#111827]
            "
          >
            YouTube Link
          </label>

          <input
            type="text"
            name="youtube"
            placeholder="YouTube URL"
            value={
              footer.youtube || ""
            }
            onChange={
              handleFooterChange
            }
            className="
              w-full
              h-[60px]
              px-5
              rounded-2xl
              bg-[#F3F4F6]
              outline-none
            "
          />

        </div>

      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={handleSaveFooter}

        disabled={loading}

        className="
          mt-8
          bg-[#E63946]
          hover:bg-red-600
          text-white
          px-8
          py-4
          rounded-2xl
          font-semibold
          transition
          disabled:opacity-50
        "
      >

        {
          loading
            ? "Saving..."
            : "Save Footer"
        }

      </button>

      {/* PREVIEW */}
      <div
        className="
          mt-10
          bg-[#F8FAFC]
          border
          border-gray-200
          rounded-[30px]
          p-8
        "
      >

        <h3
          className="
            text-2xl
            font-bold
            mb-6
            text-[#111827]
          "
        >
          Live Preview
        </h3>

        {
          footer.logo && (

            <img
              src={footer.logo}
              alt="preview"

              className="
                w-40
                object-contain
                mb-6
              "
            />

          )
        }

      </div>

    </div>
  )
}

export default FooterEditor