import {
  FaHeart,
  FaUsers,
  FaBook,
  FaHandHoldingHeart,
  FaUserFriends,
  FaChevronRight,
} from "react-icons/fa"

import hero from "../../assets/hero/hero2.png"

export default function Hero({ pageData }) {

  /* =====================================
      HERO DATA
  ===================================== */
  const heroData = pageData?.hero || {}

  const heroTitle =
    heroData.title || "Discovering Ability Before Disability"

  const heroTag =
    heroData.tag || "Early Intervention • Inclusive Education"

  const heroSubtitle = heroData.subtitle || ""

  const heroDescription = heroData.description || ""

  const primaryButton = heroData.buttonText || "Donate Now"

  const secondaryButton = heroData.secondaryButtonText || "Learn More"

  const primaryButtonLink = heroData.buttonLink || "/donate"

  const secondaryButtonLink = heroData.secondaryButtonLink || "/about"

  /* =====================================
      TITLE SPLIT
  ===================================== */
  const titleWords = heroTitle.split(" ")
  const firstLine = titleWords.slice(0, 2).join(" ")
  const secondLine = titleWords.slice(2).join(" ")

  /* =====================================
      HERO IMAGE
  ===================================== */
  const heroImage =
    heroData.image || hero

  /* =====================================
      FEATURES
  ===================================== */
  const features = [
    {
      icon: <FaBook className="text-yellow-600 text-xl" />,
      bg: "bg-yellow-100",
      title: "Special Education",
      desc: "Personalized learning programs for every child to help them grow.",
    },
    {
      icon: <FaHandHoldingHeart className="text-pink-500 text-xl" />,
      bg: "bg-pink-100",
      title: "Therapy Support",
      desc: "Occupational, speech, and behavioral therapies for holistic development.",
    },
    {
      icon: <FaUserFriends className="text-blue-500 text-xl" />,
      bg: "bg-blue-100",
      title: "Inclusive Programs",
      desc: "Activities and programs that encourage creativity, social skills and confidence.",
    },
    {
      icon: <FaUsers className="text-green-600 text-xl" />,
      bg: "bg-green-100",
      title: "Family Support",
      desc: "Counseling and guidance for families to build a strong support system.",
    },
  ]

  return (
    <div className="font-sans antialiased bg-white overflow-x-hidden">

      {/* =========================================================
          MOBILE HERO
      ========================================================= */}
      <section className="lg:hidden bg-[#FFF7E8]">

        {/* TEXT CONTENT */}
        <div className="px-5 pt-7 pb-0">

          {/* TAGLINE */}
          <p className="text-red-500 font-bold tracking-widest uppercase text-[11px] mb-4">
            {heroTag}
          </p>

          {/* HEADING */}
          <h1 className="text-[40px] sm:text-[52px] font-extrabold leading-[1.05] text-[#0B1B4D] mb-0">
            {firstLine}
          </h1>

          <h1 className="text-[40px] sm:text-[52px] font-extrabold leading-[1.05] text-red-500 mb-4">
            {secondLine}
          </h1>

          {/* SUBTITLE */}
          <p className="text-[#0B1B4D] font-bold text-[15px] sm:text-base mb-3">
            {heroSubtitle}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-7 max-w-sm">
            {heroDescription}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 mb-8">

            <a
              href={primaryButtonLink}
              className="
                w-full flex items-center justify-center gap-3
                bg-red-500 hover:bg-red-600 active:bg-red-700
                text-white font-semibold
                py-[14px] px-6 rounded-full
                shadow-md transition text-[15px]
              "
            >
              <FaHeart />
              {primaryButton}
            </a>

            <a
              href={secondaryButtonLink}
              className="
                w-full flex items-center justify-center gap-3
                border-2 border-[#0B1B4D]
                text-[#0B1B4D]
                hover:bg-[#0B1B4D]
                hover:text-white
                font-semibold py-[14px] px-6 rounded-full
                transition bg-white text-[15px]
              "
            >
              <FaUsers />
              {secondaryButton}
            </a>

          </div>

        </div>

        {/* MOBILE IMAGE SECTION */}
        <div
          className="relative w-full overflow-hidden flex justify-center items-end"
          style={{
            background: "linear-gradient(135deg, #FFD600 0%, #FFC107 100%)",
            borderRadius: "40px 40px 0 0",
            minHeight: "280px",
          }}
        >

          {/* HEART DOODLE */}
          <svg className="absolute top-6 right-[20%] w-9 h-9 opacity-90" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 35s-15-9-15-20A9 9 0 0120 8a9 9 0 0115 7c0 11-15 20-15 20z"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>

          {/* SUN DOODLE */}
          <svg className="absolute top-4 right-4 w-12 h-12 opacity-90" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="16" stroke="white" strokeWidth="4" />
          </svg>

          {/* HERO IMAGE */}
          <img
            src={heroImage}
            alt="Children"

            onError={(e) => {
              e.target.src = hero
            }}

            className="
                    relative z-10
                    w-[90%]
                    max-w-[360px]
                    sm:max-w-[440px]
                    object-contain
                  "

            style={{
              marginBottom: "-4px",
            }}
          />

        </div>

      </section>

      {/* =========================================================
          DESKTOP HERO
          Key fix: image is INSIDE the yellow shape div, clipped by it,
          so it naturally stays behind the wave (z-index layering correct)
      ========================================================= */}
      <section
        className="relative bg-[#FFF7E8] overflow-hidden min-h-[555px] hidden lg:block"
      >

        {/* YELLOW SHAPE — image lives INSIDE this so it's clipped & behind wave */}
        <div
          className="absolute top-0 right-0 w-[58%] h-full overflow-hidden"
          style={{
            borderBottomLeftRadius: "60%",
            borderTopLeftRadius: "28%",
            background: "linear-gradient(135deg, #FFD600 0%, #FFC107 100%)",
          }}
        >
          {/* IMAGE anchored to bottom-right of yellow shape, no translate */}
          <img
            src={heroImage}
            alt="Children"

            onError={(e) => {
              e.target.src = hero
            }}

            className="
              absolute
              bottom-0
              right-0
              h-full
              w-auto
              max-w-none
              object-contain
              object-bottom
            "

            style={{
              zIndex: 1,
            }}
          />
        </div>

        {/* LEFT TEXT CONTENT — above yellow shape */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

          <div className="flex flex-row items-center min-h-[540px]">

            <div className="w-1/2 z-10 text-left">

              {/* TAG */}
              <p className="text-red-500 font-semibold tracking-wide uppercase mb-3 text-sm">
                {heroTag}
              </p>

              {/* TITLE */}
              <h1 className="text-[70px] font-extrabold leading-[1.05] text-[#0B1B4D]">
                {firstLine}
              </h1>

              <h1 className="text-[70px] font-extrabold leading-[1.05] text-red-500 mb-5">
                {secondLine}
              </h1>

              {/* SUBTITLE */}
              <p className="text-[#0B1B4D] font-semibold text-xl mb-4 max-w-xl">
                {heroSubtitle}
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-700 text-lg leading-relaxed max-w-xl mb-8">
                {heroDescription}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-row items-start gap-5">

                <a
                  href={primaryButtonLink}
                  className="
                    flex items-center justify-center gap-3
                    bg-red-500 hover:bg-red-600
                    text-white font-semibold
                    px-8 py-4 rounded-full
                    shadow-lg transition
                  "
                >
                  <FaHeart />
                  {primaryButton}
                </a>

                <a
                  href={secondaryButtonLink}
                  className="
                    flex items-center justify-center gap-3
                    border-2 border-[#0B1B4D]
                    text-[#0B1B4D]
                    hover:bg-[#0B1B4D]
                    hover:text-white
                    font-semibold px-8 py-4
                    rounded-full transition bg-white
                  "
                >
                  <FaUsers />
                  {secondaryButton}
                </a>

              </div>

            </div>

            {/* Right half — intentionally empty, image is in yellow shape above */}
            <div className="w-1/2" />

          </div>

        </div>

        {/* WAVE — z-20 on top of image, pointer-events-none so buttons stay clickable */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-20 translate-y-[1px] pointer-events-none">
          <svg
            viewBox="0 0 1440 80"
            className="w-full h-[146px] block"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="
                M0,40 C180,110 500,90 610,55
                C720,25 900,10 1080,35
                C1260,60 1380,20 1440,30
                L1440,80 L0,80 Z
              "
            />
          </svg>
        </div>

      </section>

      {/* =========================================================
          FEATURES SECTION
      ========================================================= */}
      <section className="bg-white relative z-30 py-6 lg:py-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* MOBILE FEATURES */}
          <div className="flex flex-col gap-3 lg:hidden">
            {features.map((item, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-4
                  bg-white rounded-2xl px-4 py-4
                  shadow-[0_2px_12px_rgba(0,0,0,0.07)]
                  border border-gray-100
                "
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#0B1B4D] text-[15px] mb-0.5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center">
                  <FaChevronRight className="text-gray-400 text-[10px]" />
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP FEATURES */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#F9FAFB] rounded-2xl
                  flex items-start gap-5 p-6
                  shadow-sm hover:shadow-md transition
                "
              >
                <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1B4D] text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

    </div>
  )
}