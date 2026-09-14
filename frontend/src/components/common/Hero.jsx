import {
  FaHeart,
  FaUsers,
} from "react-icons/fa"

import hero from "../../assets/hero/hero2.png"

export default function Hero({ pageData }) {


  const heroData = pageData?.hero || {}

  const heroTitle =
    heroData.title || "Discovering Ability Before Disability"

  const heroTag =
    heroData.tag || "Early Intervention • Inclusive Education"

  const heroSubtitle = heroData.subtitle || ""

  const heroDescription = heroData.description || ""

  const primaryButton = heroData.buttonText || "Support Us"

  const secondaryButton = heroData.secondaryButtonText || "Learn More"

  const primaryButtonLink = heroData.buttonLink || "/support-us"

  const secondaryButtonLink = heroData.secondaryButtonLink || "/about"

  const titleWords = heroTitle.split(" ")
  const firstLine = titleWords.slice(0, 2).join(" ")
  const secondLine = titleWords.slice(2).join(" ")

  const heroImage = heroData.image || hero

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
          {heroSubtitle && (
            <p className="text-[#0B1B4D] font-bold text-[15px] sm:text-base mb-3">
              {heroSubtitle}
            </p>
          )}

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
              h-[280px]
              object-contain
              object-bottom
            "
            style={{
              marginBottom: "-4px",
            }}
          />

        </div>

      </section>

      {/* =========================================================
          DESKTOP HERO
      ========================================================= */}
      <section className="relative bg-[#FFF7E8] overflow-hidden min-h-[550px] hidden lg:block pb-12">

        {/* YELLOW SHAPE & IMAGE CONTAINER */}
        <div
          className="absolute top-0 right-0 w-[55%] h-full overflow-hidden"
          style={{
            borderBottomLeftRadius: "50% 80%",
            borderTopLeftRadius: "20% 40%",
            background: "linear-gradient(135deg, #FFD600 0%, #FFC107 100%)",
          }}
        >
          {/* HERO IMAGE */}
          <img
            src={heroImage}
            alt="Children"
            onError={(e) => {
              e.target.src = hero
            }}
            className="absolute inset-0 w-full h-full object-contain object-bottom pb-8"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* LEFT TEXT CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-24 z-10">
          <div className="max-w-2xl text-left">

            {/* TAG */}
            <p className="text-red-500 font-semibold tracking-wide uppercase mb-3 text-sm">
              {heroTag}
            </p>

            {/* TITLE */}
            <h1 className="text-[52px] xl:text-[62px] font-extrabold leading-[1.05] text-[#0B1B4D]">
              {firstLine}
            </h1>

            <h1 className="text-[52px] xl:text-[62px] font-extrabold leading-[1.05] text-red-500 mb-5">
              {secondLine}
            </h1>

            {/* SUBTITLE */}
            {heroSubtitle && (
              <p className="text-[#0B1B4D] font-bold text-lg xl:text-xl mb-3">
                {heroSubtitle}
              </p>
            )}

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-base xl:text-lg leading-relaxed mb-8 max-w-xl">
              {heroDescription}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-row items-center gap-4">

              <a
                href={primaryButtonLink}
                className="
                  flex items-center justify-center gap-2.5
                  bg-red-500 hover:bg-red-600
                  text-white font-semibold
                  px-7 py-3.5 rounded-full
                  shadow-md transition text-base
                "
              >
                <FaHeart />
                {primaryButton}
              </a>

              <a
                href={secondaryButtonLink}
                className="
                  flex items-center justify-center gap-2.5
                  border-2 border-[#0B1B4D]
                  text-[#0B1B4D] hover:bg-[#0B1B4D] hover:text-white
                  font-semibold px-7 py-3.5
                  rounded-full transition bg-white text-base
                "
              >
                <FaUsers />
                {secondaryButton}
              </a>

            </div>

          </div>
        </div>

        {/* WAVE OVERLAY */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-[80px] xl:h-[100px] block"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,40 C320,100 420,100 740,40 C1060,-20 1120,-10 1440,30 L1440,100 L0,100 Z"
            />
          </svg>
        </div>

      </section>

    </div>
  )
}