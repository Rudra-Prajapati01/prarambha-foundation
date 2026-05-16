import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { FaArrowRight } from "react-icons/fa"

import StoriesCTA from "./StoriesCTA"

function Stories() {

    const navigate = useNavigate()

    const [stories, setStories] = useState([])

    const [loading, setLoading] = useState(true)

    const [selectedCategory, setSelectedCategory] =
        useState("All")

    const [search, setSearch] =
        useState("")

    /* =========================================
        FETCH STORIES
    ========================================= */

    useEffect(() => {

        const fetchStories = async () => {

            try {

                const { data } =
                    await axios.get(
                        "https://prarambha-backend.onrender.com/api/stories"
                    )

                setStories(data)

            } catch (error) {

                console.log(error)

            } finally {

                setLoading(false)

            }
        }

        fetchStories()

    }, [])

    /* =========================================
        FILTER
    ========================================= */

    const categories = [
        "All",
        "Therapy",
        "Inclusive Education",
        "Parent Support",
        "Child Development",
        "Community",
    ]

    const filteredStories =
        stories.filter((story) => {

            const matchesCategory =
                selectedCategory === "All"
                    ? true
                    : story.category === selectedCategory

            const matchesSearch =
                story.title
                    ?.toLowerCase()
                    .includes(search.toLowerCase())

            return (
                matchesCategory &&
                matchesSearch
            )
        })

    const featuredStory =
        stories[0]

    /* =========================================
        IMAGE HELPER
    ========================================= */

    const getImageUrl = (image) => {

        if (!image) {
            return "https://via.placeholder.com/800x600?text=Story+Image"
        }

        return image.startsWith("http")
            ? image
            : `https://prarambha-backend.onrender.com${image}`
    }

    const handleImageError = (e) => {

        e.target.onerror = null

        e.target.src =
            "https://via.placeholder.com/800x600?text=Story+Image"
    }

    return (

        <div className="bg-[#FFFDFB] min-h-screen">

            {/* =========================================
                HERO SECTION
            ========================================= */}

            <section
                className="
                    relative
                    overflow-hidden
                    py-24
                    px-4
                    sm:px-6
                    lg:px-8
                    bg-gradient-to-br
                    from-[#FFF5F5]
                    via-[#FFFDFB]
                    to-[#F8FAFC]
                "
            >

                <div className="max-w-6xl mx-auto text-center">

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-3
                            bg-white
                            shadow-md
                            px-6
                            py-3
                            rounded-full
                            mb-8
                        "
                    >

                        <div
                            className="
                                w-3
                                h-3
                                rounded-full
                                bg-[#E63946]
                            "
                        ></div>

                        <span
                            className="
                                text-sm
                                font-bold
                                tracking-wider
                                text-[#E63946]
                            "
                        >
                            REAL STORIES • REAL GROWTH
                        </span>

                    </div>

                    <h1
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-7xl
                            font-black
                            text-[#0B1B4D]
                            leading-tight
                            mb-8
                        "
                    >
                        Real Journeys of
                        <span className="text-[#E63946]">
                            {" "}Growth & Hope
                        </span>
                    </h1>

                    <p
                        className="
                            max-w-3xl
                            mx-auto
                            text-base
                            md:text-xl
                            text-gray-600
                            leading-[2]
                        "
                    >
                        Every child carries a unique story of courage,
                        resilience, and possibility. These journeys
                        reflect the heart of Prarambha Foundation
                        and the transformative power of inclusive care.
                    </p>

                </div>

            </section>

            {/* =========================================
                FEATURED STORY
            ========================================= */}

            {featuredStory && (

                <section className="px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-24">

                    <div
                        className="
                            max-w-7xl
                            mx-auto
                            bg-white
                            rounded-[40px]
                            overflow-hidden
                            shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                            grid
                            lg:grid-cols-2
                        "
                    >

                        {/* IMAGE */}
                        <div className="h-full">

                            <img
                                src={getImageUrl(featuredStory.image)}
                                alt={featuredStory.title}
                                onError={handleImageError}
                                className="
                                    w-full
                                    h-[350px]
                                    lg:h-[500px]
                                    object-cover
                                "
                            />

                        </div>

                        {/* CONTENT */}
                        <div className="p-8 lg:p-14 flex flex-col justify-center">

                            <div
                                className="
                                    inline-block
                                    bg-[#FFF1F2]
                                    text-[#E63946]
                                    px-5
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-bold
                                    mb-6
                                    w-fit
                                "
                            >
                                Featured Story
                            </div>

                            <h2
                                className="
                                    text-3xl
                                    md:text-5xl
                                    font-black
                                    text-[#0B1B4D]
                                    leading-tight
                                    mb-6
                                "
                            >
                                {featuredStory.title}
                            </h2>

                            <p
                                className="
                                    text-gray-600
                                    leading-[2]
                                    text-base
                                    md:text-lg
                                    mb-8
                                "
                            >
                                {featuredStory.desc}
                            </p>

                            <button
                                onClick={() =>
                                    navigate(
                                        `/stories/${featuredStory._id}`
                                    )
                                }
                                className="
                                    bg-[#E63946]
                                    hover:bg-red-600
                                    text-white
                                    px-8
                                    py-4
                                    rounded-full
                                    font-bold
                                    flex
                                    items-center
                                    gap-3
                                    w-fit
                                    transition
                                "
                            >

                                Read Full Story

                                <FaArrowRight />

                            </button>

                        </div>

                    </div>

                </section>

            )}

            {/* =========================================
                FILTERS
            ========================================= */}

            <section className="px-4 sm:px-6 lg:px-8 mb-14">

                <div className="max-w-7xl mx-auto">

                    {/* SEARCH */}
                    <div className="mb-8">

                        <input
                            type="text"
                            placeholder="Search stories..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="
                                w-full
                                h-[65px]
                                rounded-2xl
                                bg-white
                                px-6
                                shadow-sm
                                border
                                border-gray-100
                                outline-none
                                focus:ring-2
                                focus:ring-[#E63946]
                            "
                        />

                    </div>

                    {/* CATEGORY BUTTONS */}
                    <div className="flex flex-wrap gap-4">

                        {categories.map((category, index) => (

                            <button
                                key={index}
                                onClick={() =>
                                    setSelectedCategory(category)
                                }
                                className={`
                                    px-6
                                    py-3
                                    rounded-full
                                    font-bold
                                    transition-all
                                    duration-300

                                    ${selectedCategory === category
                                        ? "bg-[#E63946] text-white shadow-lg"
                                        : "bg-white text-[#0B1B4D] hover:bg-[#FFF1F2]"
                                    }
                                `}
                            >

                                {category}

                            </button>

                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================
                STORIES GRID
            ========================================= */}

            <section className="px-4 sm:px-6 lg:px-8 pb-24">

                <div className="max-w-7xl mx-auto">

                    {loading ? (

                        <div
                            className="
                                min-h-[300px]
                                flex
                                items-center
                                justify-center
                                text-2xl
                                font-bold
                                text-[#0B1B4D]
                            "
                        >
                            Loading Stories...
                        </div>

                    ) : filteredStories.length === 0 ? (

                        <div
                            className="
                                text-center
                                py-20
                            "
                        >

                            <h2
                                className="
                                    text-3xl
                                    font-black
                                    text-[#0B1B4D]
                                    mb-4
                                "
                            >
                                No Stories Found
                            </h2>

                            <p className="text-gray-500">
                                Try another search or category.
                            </p>

                        </div>

                    ) : (

                        <div
                            className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                xl:grid-cols-3
                                gap-8
                            "
                        >

                            {filteredStories.map((story, index) => (

                                <div
                                    key={index}
                                    className="
                                        group
                                        bg-white
                                        rounded-[35px]
                                        overflow-hidden
                                        shadow-md
                                        border
                                        border-gray-100
                                        hover:-translate-y-3
                                        hover:shadow-2xl
                                        transition-all
                                        duration-500
                                    "
                                >

                                    {/* IMAGE */}
                                    <div className="overflow-hidden">

                                        <img
                                            src={getImageUrl(story.image)}
                                            alt={story.title}
                                            onError={handleImageError}
                                            className="
                                                w-full
                                                h-[320px]
                                                object-cover
                                                transition-transform
                                                duration-700
                                                group-hover:scale-110
                                            "
                                        />

                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-7">

                                        <div
                                            className="
                                                inline-block
                                                bg-[#FFF4F4]
                                                text-[#E63946]
                                                px-4
                                                py-2
                                                rounded-full
                                                text-sm
                                                font-bold
                                                mb-5
                                            "
                                        >
                                            {story.category}
                                        </div>

                                        <h3
                                            className="
                                                text-2xl
                                                font-black
                                                text-[#0B1B4D]
                                                leading-snug
                                                mb-4
                                                line-clamp-2
                                            "
                                        >
                                            {story.title}
                                        </h3>

                                        <p
                                            className="
                                                text-gray-600
                                                leading-[1.9]
                                                mb-7
                                                line-clamp-4
                                            "
                                        >
                                            {story.desc}
                                        </p>

                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/stories/${story._id}`
                                                )
                                            }
                                            className="
                                                bg-[#E63946]
                                                hover:bg-red-600
                                                text-white
                                                px-6
                                                py-3
                                                rounded-full
                                                font-semibold
                                                flex
                                                items-center
                                                gap-3
                                                transition
                                            "
                                        >

                                            Read More

                                            <FaArrowRight />

                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </section>

            {/* CTA SECTION */}
            <StoriesCTA />

        </div>
    )
}

export default Stories