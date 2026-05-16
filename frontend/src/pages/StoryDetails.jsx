import { useEffect, useState } from "react"

import { useParams, Link } from "react-router-dom"

import axios from "axios"

import {
    FaArrowLeft,
    FaHeart,
    FaQuoteLeft,
    FaShareAlt,
} from "react-icons/fa"

function StoryDetails() {

    const { id } = useParams()

    const [story, setStory] =
        useState(null)

    useEffect(() => {

        const fetchStory = async () => {

            try {

                const { data } =
                    await axios.get(
                        `https://prarambha-backend.onrender.com/api/stories/${id}`
                    )

                setStory(data)

            } catch (error) {

                console.log(error)

            }
        }

        fetchStory()

    }, [id])

    if (!story) {

        return (

            <div
                className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#F8FAFC]
        "
            >

                <div className="text-center">

                    <div
                        className="
              w-16
              h-16
              border-4
              border-[#E63946]
              border-t-transparent
              rounded-full
              animate-spin
              mx-auto
              mb-6
            "
                    />

                    <h2
                        className="
              text-2xl
              font-bold
              text-[#0B1B4D]
            "
                    >
                        Loading Story...
                    </h2>

                </div>

            </div>
        )
    }

    return (

        <section className="bg-[#F8FAFC] min-h-screen">

            {/* HERO SECTION */}
            <div
                className="
          relative
          w-full
          bg-black
          overflow-hidden
        "
            >

                {/* IMAGE */}
                <img
                    src={
                        story.image?.startsWith("http")
                            ? story.image
                            : `https://prarambha-backend.onrender.com${story.image}`
                    }
                    alt={story.title}
                    onError={(e) => {

                        e.target.onerror = null

                        e.target.src =
                            "https://via.placeholder.com/1200x800?text=Story+Image"
                    }}
                    className="
                                w-full
                                max-h-screen
                                object-contain
                                mx-auto
                            "
                />

                {/* DARK OVERLAY */}
                <div
                    className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
          "
                />

                {/* TOP BAR */}
                <div
                    className="
            absolute
            top-0
            left-0
            w-full
            flex
            items-center
            justify-between
            px-6
            py-6
            z-20
          "
                >

                    {/* BACK BUTTON */}
                    <Link
                        to="/stories"
                        className="
              flex
              items-center
              gap-3
              bg-white/20
              backdrop-blur-md
              text-white
              px-5
              py-3
              rounded-full
              font-semibold
              hover:bg-white/30
              transition-all
            "
                    >

                        <FaArrowLeft />

                        Back Stories

                    </Link>

                    {/* SHARE */}
                    <button
                        className="
              w-14
              h-14
              rounded-full
              bg-white/20
              backdrop-blur-md
              text-white
              flex
              items-center
              justify-center
              text-xl
              hover:bg-white/30
              transition-all
            "
                    >

                        <FaShareAlt />

                    </button>

                </div>

                {/* HERO CONTENT */}
                <div
                    className="
            absolute
            bottom-0
            left-0
            w-full
            z-10
            px-6
            pb-12
          "
                >

                    <div className="max-w-6xl mx-auto">

                        {/* CATEGORY */}
                        <div
                            className="
                inline-block
                bg-[#E63946]
                text-white
                px-5
                py-2
                rounded-full
                text-sm
                font-bold
                tracking-wide
                mb-6
                shadow-lg
              "
                        >
                            {story.category}
                        </div>

                        {/* TITLE */}
                        <h1
                            className="
                text-4xl
                md:text-6xl
                font-black
                text-white
                leading-tight
                max-w-4xl
                drop-shadow-xl
              "
                        >
                            {story.title}
                        </h1>

                    </div>

                </div>

            </div>

            {/* CONTENT SECTION */}
            <div
                className="
          max-w-6xl
          mx-auto
          px-6
          py-20
          grid
          lg:grid-cols-[2fr_1fr]
          gap-14
        "
            >

                {/* LEFT SIDE */}
                <div>

                    {/* STORY CARD */}
                    <div
                        className="
              bg-white
              rounded-[35px]
              p-10
              shadow-xl
              border
              border-gray-100
            "
                    >

                        {/* HEADING */}
                        <div className="mb-10">

                            <p
                                className="
                  text-[#E63946]
                  uppercase
                  tracking-[4px]
                  font-bold
                  text-sm
                  mb-4
                "
                            >
                                Real Impact Story
                            </p>

                            <h2
                                className="
                  text-4xl
                  font-black
                  text-[#0B1B4D]
                  leading-tight
                "
                            >
                                A Journey of Hope,
                                Growth & Inclusion
                            </h2>

                        </div>

                        {/* DESCRIPTION */}
                        <div
                            className="
                text-[19px]
                leading-[2.1]
                text-gray-700
                space-y-6
              "
                        >

                            <p>
                                {story.desc}
                            </p>

                        </div>

                    </div>

                    {/* QUOTE */}
                    <div
                        className="
              mt-10
              bg-gradient-to-r
              from-[#E63946]
              to-[#ff6b75]
              text-white
              rounded-[35px]
              p-10
              shadow-2xl
              relative
              overflow-hidden
            "
                    >

                        <FaQuoteLeft
                            className="
                text-7xl
                absolute
                top-6
                right-6
                text-white/10
              "
                        />

                        <p
                            className="
                text-3xl
                font-bold
                leading-[1.7]
                relative
                z-10
              "
                        >
                            “Every child deserves
                            love, dignity, support,
                            and the opportunity
                            to grow.”
                        </p>

                        <div
                            className="
                mt-8
                flex
                items-center
                gap-3
                text-white/90
                font-semibold
              "
                        >

                            <FaHeart />

                            Prarambha Foundation

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDEBAR */}
                <div>

                    {/* IMPACT CARD */}
                    <div
                        className="
              bg-white
              rounded-[35px]
              p-8
              shadow-xl
              sticky
              top-10
              border
              border-gray-100
            "
                    >

                        <h3
                            className="
                text-2xl
                font-black
                text-[#0B1B4D]
                mb-8
              "
                        >
                            Story Impact
                        </h3>

                        <div className="space-y-6">

                            <div
                                className="
                  bg-[#FFF5F5]
                  rounded-2xl
                  p-5
                "
                            >

                                <p
                                    className="
                    text-sm
                    font-bold
                    text-[#E63946]
                    uppercase
                    mb-2
                  "
                                >
                                    Category
                                </p>

                                <h4
                                    className="
                    text-xl
                    font-bold
                    text-[#0B1B4D]
                  "
                                >
                                    {story.category}
                                </h4>

                            </div>

                            <div
                                className="
                  bg-[#F8FAFC]
                  rounded-2xl
                  p-5
                "
                            >

                                <p
                                    className="
                    text-sm
                    font-bold
                    text-[#E63946]
                    uppercase
                    mb-2
                  "
                                >
                                    Mission
                                </p>

                                <h4
                                    className="
                    text-lg
                    font-semibold
                    text-[#0B1B4D]
                    leading-relaxed
                  "
                                >
                                    Discovering Ability
                                    Before Disability
                                </h4>

                            </div>

                            <div
                                className="
                  bg-[#F8FAFC]
                  rounded-2xl
                  p-5
                "
                            >

                                <p
                                    className="
                    text-sm
                    font-bold
                    text-[#E63946]
                    uppercase
                    mb-2
                  "
                                >
                                    Focus
                                </p>

                                <h4
                                    className="
                    text-lg
                    font-semibold
                    text-[#0B1B4D]
                    leading-relaxed
                  "
                                >
                                    Child Development,
                                    Inclusion & Growth
                                </h4>

                            </div>

                        </div>

                        {/* CTA */}
                        <button
                            className="
                w-full
                mt-10
                bg-[#E63946]
                hover:bg-[#d62839]
                text-white
                py-4
                rounded-2xl
                font-bold
                text-lg
                transition-all
                duration-300
                shadow-lg
              "
                        >
                            Support Our Mission

                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default StoryDetails