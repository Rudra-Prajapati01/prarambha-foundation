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

        <div className="bg-white rounded-[30px] p-10">

            {/* HEADER */}
            <div
                className="
          flex
          items-center
          justify-between
          mb-10
        "
            >

                <h2 className="text-4xl font-bold">
                    Team Members
                </h2>

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
          "
                >
                    + Add Member
                </button>

            </div>

            {/* MEMBERS */}
            <div className="space-y-8">

                {(pageData?.team || []).map(
                    (member, index) => (

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

                                <h3 className="text-2xl font-bold">
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

                                <input
                                    type="file"
                                    onChange={async (e) => {

                                        const file = e.target.files[0]

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
                                                    "http://localhost:5000/api/upload",
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
                                />

                                {member.image && (

                                    <img
                                        src={`http://localhost:5000${member.image}`}
                                        alt="preview"
                                        className="
        w-[120px]
        h-[120px]
        rounded-2xl
        object-cover
      "
                                    />

                                )}

                            </div>

                            {/* COLOR */}
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

                            {/* PREVIEW */}
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
                                    src={
                                        member.image
                                            ? `http://localhost:5000${member.image}`
                                            : "https://i.pravatar.cc/150"
                                    }
                                    alt="preview"
                                    className="
                                        w-[80px]
                                        h-[80px]
                                        rounded-full
                                        object-cover
                                        border-4
                                    "
                                    style={{
                                        borderColor: member.color,
                                    }}
                                />

                                <div>

                                    <h4
                                        className="
                                                    text-xl
                                                    font-bold
                                                    "
                                    >
                                        {member.name ||
                                            "Member Name"}
                                    </h4>

                                    <p
                                        style={{
                                            color: member.color,
                                        }}
                                        className="font-semibold"
                                    >
                                        {member.role ||
                                            "Role"}
                                    </p>

                                </div>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>
    )
}

export default AboutTeamEditor