import {
  FaHeart,
  FaUsers,
  FaBook,
  FaHandHoldingHeart,
  FaUserFriends,
  FaChevronRight,
} from "react-icons/fa";

import hero from "../../assets/hero/hero2.png";

export default function Hero() {

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
  ];

  return (
    <div className="font-sans antialiased bg-white overflow-x-hidden">

      {/* MOBILE HERO */}
      <section className="lg:hidden bg-[#FFF7E8]">

        {/* ── Text content — left aligned, cream bg ── */}
        <div className="px-5 pt-7 pb-0">

          {/* Tagline */}
          <p className="text-red-500 font-bold tracking-widest uppercase text-[11px] mb-4">
            Early Intervention • Inclusive Education
          </p>

          {/* Heading */}
          <h1 className="text-[40px] sm:text-[52px] font-extrabold leading-[1.05] text-[#0B1B4D] mb-0">
            Empowering Every
          </h1>
          <h1 className="text-[40px] sm:text-[52px] font-extrabold leading-[1.05] text-red-500 mb-4">
            Child's Future
          </h1>

          {/* Mission */}
          <p className="text-[#0B1B4D] font-bold text-[15px] sm:text-base mb-3">
            Discovering Ability before Disability.
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-7 max-w-sm">
            Supporting children through therapy, inclusive education,
            sensory learning, and family-centered care programs.
          </p>

          {/* Buttons — stacked, full width, left aligned */}
          <div className="flex flex-col gap-3 mb-8">
            <button className="w-full flex items-center justify-center gap-3
                               bg-red-500 hover:bg-red-600 active:bg-red-700
                               text-white font-semibold
                               py-[14px] px-6 rounded-full shadow-md transition text-[15px]">
              <FaHeart />
              Explore Programs
            </button>
            <button className="w-full flex items-center justify-center gap-3
                               border-2 border-blue-400 text-blue-500
                               hover:bg-blue-50 active:bg-blue-100
                               font-semibold py-[14px] px-6 rounded-full
                               transition bg-white text-[15px]">
              <FaUserFriends />
              Volunteer With Us
            </button>
          </div>

        </div>

        {/* ── Yellow strip with image + doodles ── */}
        <div
          className="relative w-full overflow-hidden flex justify-center items-end"
          style={{
            background: "linear-gradient(135deg, #FFD600 0%, #FFC107 100%)",
            borderRadius: "40px 40px 0 0",
            minHeight: "280px",
          }}
        >
          {/* Heart doodle */}
          <svg
            className="absolute top-6 right-[20%] w-9 h-9 opacity-90"
            viewBox="0 0 40 40" fill="none"
          >
            <path
              d="M20 35s-15-9-15-20A9 9 0 0120 8a9 9 0 0115 7c0 11-15 20-15 20z"
              stroke="white" strokeWidth="2.5" fill="none"
            />
          </svg>

          {/* Sun doodle */}
          <svg
            className="absolute top-4 right-4 w-12 h-12 opacity-90"
            viewBox="0 0 100 100" fill="none"
          >
            <circle cx="50" cy="50" r="16" stroke="white" strokeWidth="4" />
            <line x1="50" y1="6"  x2="50" y2="22" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <line x1="50" y1="78" x2="50" y2="94" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <line x1="6"  y1="50" x2="22" y2="50" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <line x1="78" y1="50" x2="94" y2="50" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <line x1="20" y1="20" x2="30" y2="30" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <line x1="70" y1="70" x2="80" y2="80" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <line x1="20" y1="80" x2="30" y2="70" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <line x1="70" y1="30" x2="80" y2="20" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </svg>

          {/* Paper plane doodle */}
          <svg
            className="absolute bottom-16 left-4 w-[100px] opacity-90"
            viewBox="0 0 250 250" fill="none"
          >
            <path
              d="M52 220 C30 180 42 145 78 122 C112 100 126 82 142 72"
              stroke="#20B7FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 12" fill="none"
            />
            <path
              d="M54 194 C68 176 88 184 84 202 C80 218 58 214 58 198"
              stroke="#20B7FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 12" fill="none"
            />
            <path
              d="M142 52 L210 12 L170 82 L162 60 L142 52 Z"
              stroke="#20B7FF" strokeWidth="4" strokeLinejoin="round" fill="none"
            />
            <path d="M162 60L194 28" stroke="#20B7FF" strokeWidth="4" strokeLinecap="round" />
          </svg>

          {/* Hero image — bottom flush */}
          <img
            src={hero}
            alt="Children"
            className="relative z-10 w-[90%] max-w-[360px] sm:max-w-[440px] object-contain"
            style={{ marginBottom: "-4px" }}
          />
        </div>

      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP HERO — hidden below lg, 100% UNCHANGED
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[#FFF7E8] overflow-hidden min-h-[555px] hidden lg:block">

        {/* Desktop yellow blob — UNTOUCHED */}
        <div
          className="absolute top-0 right-0 w-[58%] h-full rounded-bl-[60%] rounded-tl-[28%] overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FFD600 0%, #FFC107 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center min-h-[540px]">

            {/* LEFT CONTENT */}
            <div className="w-1/2 z-10 text-left">
              <p className="text-red-500 font-semibold tracking-wide uppercase mb-3 text-sm">
                Early Intervention • Inclusive Education
              </p>
              <h1 className="text-[70px] font-extrabold leading-[1.05] text-[#0B1B4D]">
                Empowering Every
              </h1>
              <h1 className="text-[70px] font-extrabold leading-[1.05] text-red-500 mb-5">
                Child's Future
              </h1>
              <p className="text-[#0B1B4D] font-semibold text-xl mb-4">
                Discovering Ability before Disability.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed max-w-xl mb-8">
                Supporting children through therapy, inclusive education,
                sensory learning, and family-centered care programs.
              </p>
              <div className="flex flex-row items-start gap-5">
                <button className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition">
                  <FaHeart />
                  Explore Programs
                </button>
                <button className="flex items-center justify-center gap-3 border-2 border-blue-400 text-blue-500 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition bg-white">
                  <FaUserFriends />
                  Volunteer With Us
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-1/2 relative flex justify-center z-10">
              {/* Paper Plane */}
              <svg className="absolute top-40 left-[-62px] w-[220px] z-20" viewBox="0 0 250 250" fill="none">
                <path d="M52 220 C30 180 42 145 78 122 C112 100 126 82 142 72"
                  stroke="#20B7FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 12" fill="none" />
                <path d="M54 194 C68 176 88 184 84 202 C80 218 58 214 58 198"
                  stroke="#20B7FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 12" fill="none" />
                <path d="M142 52 L210 12 L170 82 L162 60 L142 52 Z"
                  stroke="#20B7FF" strokeWidth="4" strokeLinejoin="round" fill="none" />
                <path d="M162 60L194 28" stroke="#20B7FF" strokeWidth="4" strokeLinecap="round" />
              </svg>
              {/* Heart */}
              <svg className="absolute top-3 right-[280px] w-12 z-20" viewBox="0 0 40 40" fill="none">
                <path d="M20 35s-15-9-15-20A9 9 0 0120 8a9 9 0 0115 7c0 11-15 20-15 20z"
                  stroke="white" strokeWidth="2.5" fill="none" />
              </svg>
              {/* Sun */}
              <svg className="absolute top-4 right-0 w-16 h-16 z-20" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="16" stroke="white" strokeWidth="4" />
                <line x1="50" y1="6"  x2="50" y2="22" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <line x1="50" y1="78" x2="50" y2="94" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <line x1="6"  y1="50" x2="22" y2="50" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <line x1="78" y1="50" x2="94" y2="50" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <line x1="20" y1="20" x2="30" y2="30" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <line x1="70" y1="70" x2="80" y2="80" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <line x1="20" y1="80" x2="30" y2="70" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <line x1="70" y1="30" x2="80" y2="20" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <img
                src={hero}
                alt="Children"
                className="bottom-1 relative z-0 w-full max-w-2xl object-contain translate-x-24 pt-10"
              />
            </div>

          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1440 120" className="w-full h-[120px]" preserveAspectRatio="none">
            <path fill="#ffffff"
              d="M0,0 C180,140 420,120 540,80 C720,20 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,120 L0,120 Z" />
          </svg>
        </div>

      </section>

      {/* ═══════════════════════════════════════════
          FEATURES SECTION
      ═══════════════════════════════════════════ */}
      <section className="bg-white relative z-30 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── MOBILE feature cards (hidden on lg+) ── */}
          <div className="flex flex-col gap-3 lg:hidden">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-2xl px-4 py-4
                           shadow-[0_2px_12px_rgba(0,0,0,0.07)] border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#0B1B4D] text-[15px] mb-0.5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center">
                  <FaChevronRight className="text-gray-400 text-[10px]" />
                </div>
              </div>
            ))}
          </div>

          {/* ── DESKTOP feature grid — UNCHANGED (hidden on mobile) ── */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-5">
            {features.map((item, index) => (
              <div key={index}
                className="bg-[#F9FAFB] rounded-2xl flex items-start gap-5 p-6 shadow-sm">
                <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1B4D] text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}