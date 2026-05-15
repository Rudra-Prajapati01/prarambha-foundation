function FooterEditor({
  pageData,
  setPageData,
}) {

  const footer =
    pageData?.footer || {}

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
          contact details and
          organization description.
        </p>

      </div>

      {/* FORM */}
      <div className="space-y-6">

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

      </div>

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

        {/* DESC */}
        <div className="mb-6">

          <p
            className="
              text-gray-600
              leading-relaxed
            "
          >

            {footer.description ||
              "Footer description preview"}

          </p>

        </div>

        {/* CONTACTS */}
        <div className="space-y-4">

          <div>

            <span
              className="
                font-bold
                text-[#111827]
              "
            >
              Phone:
            </span>

            <span className="ml-2 text-gray-600">
              {footer.phone ||
                "+91 9876543210"}
            </span>

          </div>

          <div>

            <span
              className="
                font-bold
                text-[#111827]
              "
            >
              Email:
            </span>

            <span className="ml-2 text-gray-600">
              {footer.email ||
                "example@email.com"}
            </span>

          </div>

          <div>

            <span
              className="
                font-bold
                text-[#111827]
              "
            >
              Address:
            </span>

            <span className="ml-2 text-gray-600">
              {footer.address ||
                "Your address preview"}
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default FooterEditor