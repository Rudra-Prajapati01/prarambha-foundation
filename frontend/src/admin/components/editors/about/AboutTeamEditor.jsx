function AboutTeamEditor({
  pageData,
  setPageData,
}) {

  /* =====================================
      ADD MEMBER
  ===================================== */

  const addMember = () => {

    setPageData({

      ...pageData,

      team: [

        ...(pageData.team || []),

        {
          name: "",
          role: "",
          image: "",
          color: "#E63946",
        },
      ],
    })
  }

  /* =====================================
      REMOVE MEMBER
  ===================================== */

  const removeMember = (index) => {

    const updatedTeam =
      [...pageData.team]

    updatedTeam.splice(index, 1)

    setPageData({

      ...pageData,

      team: updatedTeam,
    })
  }

  /* =====================================
      UPDATE MEMBER
  ===================================== */

  const updateMember = (
    index,
    field,
    value
  ) => {

    const updatedTeam =
      [...pageData.team]

    updatedTeam[index][field] =
      value

    setPageData({

      ...pageData,

      team: updatedTeam,
    })
  }

  return (

    <div
      className="
        bg-white
        rounded-[30px]
        p-10
        shadow-sm
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-10
        "
      >

        <div>

          <h2
            className="
              text-4xl
              font-bold
              text-[#111827]
              mb-2
            "
          >
            Team Members
          </h2>

          <p className="text-gray-500">
            Manage your NGO team members.
          </p>

        </div>

        <button
          onClick={addMember}

          className="
            bg-[#E63946]
            hover:bg-[#d62839]
            text-white
            px-6
            py-3
            rounded-2xl
            font-bold
            transition
          "
        >
          + Add Member
        </button>

      </div>

      {/* MEMBERS */}

      <div className="space-y-8">

        {(pageData?.team || []).map(
          (member, index) => {

            /* =====================================
                IMAGE SUPPORT
            ===================================== */

            const teamImage =
              member.image
                ? member.image.startsWith("http")
                  ? member.image
                  : `https://prarambha-backend.onrender.com${member.image}`
                : "https://i.pravatar.cc/150"

            return (

              <div
                key={index}

                className="
                  border
                  border-gray-200
                  rounded-[30px]
                  p-8
                  space-y-5
                "
              >

                {/* TOP */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    Member {index + 1}
                  </h3>

                  <button
                    onClick={() =>
                      removeMember(index)
                    }

                    className="
                      bg-red-100
                      text-red-600
                      px-4
                      py-2
                      rounded-xl
                      font-semibold
                    "
                  >
                    Remove
                  </button>

                </div>

                {/* NAME */}

                <input
                  type="text"

                  placeholder="Name"

                  value={member.name}

                  onChange={(e) =>
                    updateMember(
                      index,
                      "name",
                      e.target.value
                    )
                  }

                  className="
                    w-full
                    p-5
                    rounded-2xl
                    bg-gray-100
                    outline-none
                  "
                />

                {/* ROLE */}

                <input
                  type="text"

                  placeholder="Role"

                  value={member.role}

                  onChange={(e) =>
                    updateMember(
                      index,
                      "role",
                      e.target.value
                    )
                  }

                  className="
                    w-full
                    p-5
                    rounded-2xl
                    bg-gray-100
                    outline-none
                  "
                />

                {/* IMAGE */}

                <div className="space-y-4">

                  <label
                    className="
                      block
                      font-semibold
                      text-[#111827]
                    "
                  >
                    Upload Team Image
                  </label>

                  <input
                    type="file"

                    accept="image/*"

                    onChange={async (e) => {

                      const file =
                        e.target.files[0]

                      if (!file) return

                      const formData =
                        new FormData()

                      formData.append(
                        "image",
                        file
                      )

                      try {

                        const response =
                          await fetch(
                            "https://prarambha-backend.onrender.com/api/upload",
                            {
                              method: "POST",
                              body: formData,
                            }
                          )

                        const data =
                          await response.json()

                        updateMember(
                          index,
                          "image",
                          data.image
                        )

                      } catch (error) {

                        console.log(error)
                      }
                    }}

                    className="
                      w-full
                      bg-[#F3F4F6]
                      p-4
                      rounded-2xl
                      cursor-pointer
                    "
                  />

                  {/* IMAGE PREVIEW */}

                  {member.image && (

                    <img
                      src={teamImage}

                      alt="preview"

                      loading="lazy"

                      onError={(e) => {

                        e.target.onerror = null

                        e.target.src =
                          "https://i.pravatar.cc/150"
                      }}

                      className="
                        w-[120px]
                        h-[120px]
                        rounded-2xl
                        object-cover
                        shadow-md
                      "
                    />

                  )}

                </div>

                {/* COLOR */}

                <div>

                  <label
                    className="
                      block
                      mb-3
                      font-semibold
                      text-[#111827]
                    "
                  >
                    Accent Color
                  </label>

                  <input
                    type="color"

                    value={member.color}

                    onChange={(e) =>
                      updateMember(
                        index,
                        "color",
                        e.target.value
                      )
                    }

                    className="
                      w-[100px]
                      h-[60px]
                      rounded-xl
                      border-0
                      cursor-pointer
                    "
                  />

                </div>

                {/* LIVE PREVIEW */}

                <div
                  className="
                    flex
                    items-center
                    gap-5
                    mt-6
                    bg-gray-50
                    p-5
                    rounded-2xl
                  "
                >

                  <img
                    src={teamImage}

                    alt="preview"

                    loading="lazy"

                    onError={(e) => {

                      e.target.onerror = null

                      e.target.src =
                        "https://i.pravatar.cc/150"
                    }}

                    className="
                      w-[80px]
                      h-[80px]
                      rounded-full
                      object-cover
                      border-4
                    "

                    style={{
                      borderColor:
                        member.color,
                    }}
                  />

                  <div>

                    <h4
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      {
                        member.name ||
                        "Member Name"
                      }
                    </h4>

                    <p
                      style={{
                        color:
                          member.color,
                      }}

                      className="
                        font-semibold
                      "
                    >
                      {
                        member.role ||
                        "Role"
                      }
                    </p>

                  </div>

                </div>

              </div>
            )
          }
        )}

      </div>

    </div>
  )
}

export default AboutTeamEditor