import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { usePageData } from "../context/PageContext";
import centreImage from "../assets/Story/MyChildhood PreSchool.jpeg";
import icdsImage from "../assets/Story/icds logo.jpeg";

import {
  FaCheckCircle,
  FaHeart,
  FaHandsHelping,
  FaChevronRight,
  FaBuilding,
  FaSchool,
  FaHands,
} from "react-icons/fa";

/* Small decorative "milestone seal" — the page's signature motif.
   A dashed ring standing in for a developmental milestone / official
   seal, tying together "growth" and "partnership with government
   bodies" without literally illustrating either. */
function MilestoneSeal({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="60"
        r="56"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      <circle
        cx="60"
        cy="60"
        r="40"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle cx="60" cy="60" r="4" fill="currentColor" />
    </svg>
  );
}

export default function OurAssociation() {
  const { pageData } = usePageData();
  const [activeTab, setActiveTab] = useState("preschool");

  // Data for My Childhood Pre School
  const keyAreas = [
    "Individualized Learning Plans (ILP)",
    "Early Intervention Programs",
    "Special Education Support",
    "School Readiness Programs",
    "Developmental Screening & Assessment",
    "Behavioural and Social Skills Development",
    "Parent Guidance & Counselling",
    "Inclusive Classroom Support",
  ];

  const childrenSupport = [
    "Developmental Delays",
    "Autism Spectrum Disorder (ASD)",
    "ADHD",
    "Speech & Language Delays",
    "Specific Learning Disabilities",
    "Intellectual Disabilities",
    "Down Syndrome",
    "Cerebral Palsy",
    "Behavioural and Social Development Challenges",
    "School Readiness Concerns",
  ];

  // Data for ICDS & AMC
  const collaborativeApproach = [
    "Early Identification of Developmental Concerns",
    "Developmental Screening & School Readiness",
    "Parent Awareness & Counselling",
    "Inclusive Education Support",
    "Teacher Capacity Building",
    "Community Outreach Programmes",
    "Referral Guidance",
    "Child Development Awareness Campaigns",
  ];

  return (
    <div className="font-[Jakarta] antialiased bg-[#FBF6EE] overflow-x-hidden min-h-screen flex flex-col text-[#22304F]">
      {/* Font + token setup — self-contained, no build config changes needed */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .font-body, .font-\\[Jakarta\\] { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }
        @keyframes seal-spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        .seal-spin { animation: seal-spin 40s linear infinite; }
      `}</style>

      <Navbar pageData={pageData} />

      <main className="flex-grow w-full">
        {/* PAGE HEADER */}
        <div className="relative bg-[#22304F] py-14 text-center text-white overflow-hidden">
          <MilestoneSeal className="seal-spin absolute -right-8 -top-10 w-40 h-40 text-white/10" />
          <MilestoneSeal
            className="seal-spin absolute -left-10 -bottom-14 w-44 h-44 text-white/10"
            style={{ animationDirection: "reverse" }}
          />
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#E8A33D] mb-3">
            Prarambha Foundation
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
            Our Association
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto px-4">
            Collaborating with institutions and government departments to
            create inclusive learning environments.
          </p>
        </div>

        {/* SUB-TAB NAVIGATION */}
        <section className="bg-[#FBF6EE]/95 backdrop-blur border-b border-[#22304F]/10 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center sm:justify-start gap-8 py-4">
              <button
                onClick={() => setActiveTab("preschool")}
                className={`relative flex items-center gap-2 pb-2 font-semibold text-sm sm:text-base tracking-wide transition-colors duration-300 ${
                  activeTab === "preschool"
                    ? "text-[#22304F]"
                    : "text-[#22304F]/40 hover:text-[#22304F]/70"
                }`}
              >
                <FaSchool
                  className={activeTab === "preschool" ? "text-[#E15B4D]" : ""}
                />
                My Childhood Pre School
                {activeTab === "preschool" && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[3px] rounded-full bg-[#E15B4D]" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("icds-amc")}
                className={`relative flex items-center gap-2 pb-2 font-semibold text-sm sm:text-base tracking-wide transition-colors duration-300 ${
                  activeTab === "icds-amc"
                    ? "text-[#22304F]"
                    : "text-[#22304F]/40 hover:text-[#22304F]/70"
                }`}
              >
                <FaBuilding
                  className={activeTab === "icds-amc" ? "text-[#E15B4D]" : ""}
                />
                ICDS Department & AMC
                {activeTab === "icds-amc" && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[3px] rounded-full bg-[#E15B4D]" />
                )}
              </button>
            </div>
          </div>
        </section>

        {/* ================= TAB 1: MY CHILDHOOD PRE SCHOOL ================= */}
        {activeTab === "preschool" && (
          <div>
            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
                <h1 className="font-display text-[34px] sm:text-[46px] lg:text-[54px] font-semibold text-[#22304F] leading-[1.15] mb-6 tracking-tight">
                  Prarambha Foundation <br className="hidden lg:block" />
                  <span className="text-[#E15B4D] italic">&</span> My
                  Childhood Pre School
                </h1>

                <p className="text-lg sm:text-xl text-[#5C6B85] leading-relaxed mb-8 max-w-2xl">
                  Empowering Every Child Through Inclusive Education and Early
                  Intervention.
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-16 h-[3px] bg-[#E8A33D] rounded-full"></div>
                  <div className="w-4 h-[3px] bg-[#E15B4D] rounded-full"></div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#E8A33D]/20 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>

                  <img
                    src={centreImage}
                    alt="My Childhood Pre School"
                    className="w-full h-auto object-cover rounded-[2rem] shadow-xl border border-white"
                  />
                </div>
              </div>
            </section>

            {/* ABOUT PARTNERSHIP */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
              <p className="font-display text-xl sm:text-2xl text-[#22304F] leading-relaxed mb-6 font-medium">
                Prarambha Foundation proudly collaborates with My Childhood
                Pre School, a progressive early childhood education institution
                committed to nurturing every child's unique potential.
              </p>

              <p className="text-lg sm:text-xl text-[#5C6B85] leading-relaxed">
                Through this partnership, we work towards creating an inclusive
                and supportive learning environment for children with
                developmental, learning, and behavioral challenges. At our
                Akhbarnagar, Nava Vadaj, Ahmedabad Centre, we currently support
                more than 30 children through individualized educational and
                developmental programs designed to meet each child's specific
                needs.
              </p>
            </section>

            {/* KEY AREAS OF SUPPORT */}
            <section className="bg-white py-16 lg:py-24 mt-8 border-y border-[#22304F]/5">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <p className="uppercase tracking-[0.25em] text-xs font-bold text-[#E15B4D] mb-3">
                    What We Offer
                  </p>

                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#22304F]">
                    Our Key Areas of Support
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {keyAreas.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#FBF6EE] p-6 rounded-2xl border border-[#22304F]/5 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-[#E8A33D]/60 hover:-translate-y-1"
                    >
                      <FaCheckCircle className="text-[#E8A33D] text-2xl flex-shrink-0" />
                      <span className="text-[#22304F] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* DAY CARE & LEARNING SUPPORT */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
              <div className="relative bg-[#22304F] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center overflow-hidden">
                <MilestoneSeal className="absolute -right-12 -bottom-12 w-56 h-56 text-white/5" />

                <div className="w-16 h-16 bg-[#E8A33D] rounded-full flex items-center justify-center shadow-lg mb-8">
                  <FaHandsHelping className="text-[#22304F] text-2xl" />
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-6">
                  Day Care & Learning Support
                </h2>

                <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-4xl">
                  In addition to educational interventions, Prarambha Foundation
                  also provides a structured Day Care and Development Support
                  Program for children requiring additional attention,
                  supervision, and developmental guidance. The program focuses
                  on enhancing communication, social interaction, daily living
                  skills, learning readiness, and overall child development in
                  a safe and nurturing environment.
                </p>
              </div>
            </section>

            {/* CHILDREN WE SUPPORT */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#22304F] mb-4">
                  Children We Support
                </h2>

                <p className="text-lg sm:text-xl text-[#5C6B85]">
                  Our programs are designed for children with:
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {childrenSupport.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white border border-[#22304F]/10 rounded-full px-5 py-3 hover:border-[#E15B4D]/40 hover:bg-[#FBF6EE] transition-colors duration-200"
                  >
                    <FaChevronRight className="text-[#E15B4D] text-xs flex-shrink-0" />

                    <span className="text-base sm:text-lg text-[#22304F]/80 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ABOUT MY CHILDHOOD PRE SCHOOL */}
            <section className="bg-white py-16 lg:py-24 border-t border-[#22304F]/5">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#22304F] mb-8">
                  About My Childhood Pre School
                </h2>

                <div className="bg-[#FBF6EE] p-8 rounded-3xl border border-[#22304F]/5">
                  <p className="text-xl text-[#22304F] leading-relaxed mb-4 font-medium">
                    <span className="font-display font-semibold text-[#E15B4D]">
                      My Childhood Pre School
                    </span>{" "}
                    is dedicated to providing quality early childhood education
                    through child-centered learning, experiential activities,
                    and holistic development.
                  </p>

                  <p className="text-lg text-[#5C6B85] leading-relaxed">
                    The school believes in fostering curiosity, creativity,
                    confidence, and strong foundational skills during the most
                    important years of a child's life.
                  </p>
                </div>
              </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="relative bg-[#22304F] py-16 lg:py-20 mt-auto overflow-hidden">
              <MilestoneSeal className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] text-white/5" />

              <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <FaHeart className="text-[#E15B4D] text-2xl" />
                </div>

                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed max-w-4xl mx-auto">
                  Together,{" "}
                  <span className="text-[#E8A33D] font-semibold">
                    Prarambha Foundation
                  </span>{" "}
                  and{" "}
                  <span className="text-[#E8A33D] font-semibold">
                    My Childhood Pre School
                  </span>{" "}
                  are committed to ensuring that every child—regardless of
                  ability—receives the opportunity to learn, grow, participate,
                  and thrive in an inclusive educational environment.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* ================= TAB 2: ICDS DEPARTMENT & AMC ================= */}
        {activeTab === "icds-amc" && (
          <div>
            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* LEFT CONTENT */}
              <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="uppercase tracking-[0.25em] text-xs font-bold text-[#E15B4D] mb-4">
                  Government Partnership
                </p>

                <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[50px] font-semibold text-[#22304F] leading-[1.15] mb-6 tracking-tight">
                  ICDS Department & AMC
                </h1>

                <p className="text-xl sm:text-2xl text-[#E15B4D] font-semibold max-w-2xl mb-8">
                  Working Together to Strengthen Early Childhood Development
                  and Inclusive Education
                </p>

                <p className="text-lg sm:text-xl text-[#5C6B85] leading-relaxed max-w-2xl mb-8">
                  Prarambha Foundation believes that meaningful and sustainable
                  change is possible through collaboration with government
                  departments, educational institutions, healthcare
                  professionals, and community organizations.
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-16 h-[3px] bg-[#E8A33D] rounded-full"></div>
                  <div className="w-4 h-[3px] bg-[#E15B4D] rounded-full"></div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-[#E8A33D]/20 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>

                  <img
                    src={icdsImage}
                    alt="ICDS Department & AMC"
                    className="w-full h-auto object-contain rounded-[2rem] shadow-xl border border-white bg-white"
                  />

                </div>
              </div>

            </section>

            {/* OVERVIEW */}
            <section className="bg-white py-12 lg:py-16 border-y border-[#22304F]/5">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-lg sm:text-xl text-[#22304F]/80 leading-relaxed font-medium">
                  As part of our commitment to improving child development and
                  inclusive education, we actively work alongside government
                  systems to support early identification, developmental
                  screening, parent awareness, and educational interventions.
                </p>
              </div>
            </section>

            {/* ICDS & AMC CARDS */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* ICDS Card */}
                <div className="bg-white border border-[#22304F]/10 rounded-3xl p-8 hover:border-[#E8A33D]/50 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-[#FBF6EE] rounded-2xl flex items-center justify-center mb-6">
                      <FaBuilding className="text-[#E15B4D] text-xl" />
                    </div>

                    <h2 className="font-display text-2xl font-semibold text-[#22304F] mb-4">
                      Integrated Child Development Services (ICDS)
                    </h2>

                    <p className="text-[#5C6B85] leading-relaxed mb-4">
                      Prarambha Foundation is associated with the Integrated
                      Child Development Services (ICDS) under the Department of
                      Women & Child Development, Government of Gujarat, in
                      supporting child development awareness, developmental
                      screening initiatives, parent education, and
                      capacity-building programmes through Anganwadi Centres.
                    </p>

                    <p className="text-[#5C6B85] leading-relaxed">
                      Our collaborative efforts focus on promoting early
                      identification of developmental concerns, school
                      readiness, and timely intervention during the critical
                      early years of a child's life.
                    </p>
                  </div>
                </div>

                {/* AMC Card */}
                <div className="bg-white border border-[#22304F]/10 rounded-3xl p-8 hover:border-[#E8A33D]/50 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-[#FBF6EE] rounded-2xl flex items-center justify-center mb-6">
                      <FaHands className="text-[#E15B4D] text-xl" />
                    </div>

                    <h2 className="font-display text-2xl font-semibold text-[#22304F] mb-4">
                      Ahmedabad Municipal Corporation (AMC)
                    </h2>

                    <p className="text-[#5C6B85] leading-relaxed mb-4">
                      Prarambha Foundation has collaborated with the Ahmedabad
                      Municipal Corporation (AMC) for child development
                      awareness programmes and developmental screening
                      initiatives aimed at supporting early identification and
                      promoting inclusive education within the community.
                    </p>

                    <p className="text-[#5C6B85] leading-relaxed">
                      These initiatives help connect families with appropriate
                      educational and developmental support services while
                      encouraging awareness among parents, caregivers, and
                      educators.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* OUR COLLABORATIVE APPROACH */}
            <section className="bg-white py-16 lg:py-24 border-t border-[#22304F]/5">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                  <p className="uppercase tracking-[0.25em] text-xs font-bold text-[#E15B4D] mb-3">
                    How We Work
                  </p>

                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#22304F] mb-4">
                    Our Collaborative Approach
                  </h2>

                  <p className="text-lg text-[#5C6B85]">
                    Through these collaborative initiatives, Prarambha
                    Foundation works towards:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {collaborativeApproach.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#FBF6EE] p-6 rounded-2xl border border-[#22304F]/5 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-[#E8A33D]/60 hover:-translate-y-1"
                    >
                      <FaCheckCircle className="text-[#E8A33D] text-2xl flex-shrink-0" />

                      <span className="text-[#22304F] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* COMMITMENT / FOOTER CTA */}
            <section className="relative bg-[#22304F] py-16 lg:py-20 overflow-hidden">
              <MilestoneSeal className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] text-white/5" />

              <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <FaHeart className="text-[#E15B4D] text-2xl" />
                </div>

                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed max-w-4xl mx-auto">
                  We remain committed to strengthening government systems
                  through technical expertise, community participation, and
                  multidisciplinary collaboration to ensure that every child
                  receives the opportunity to learn, grow, and thrive.
                </p>
              </div>
            </section>
          </div>
        )}
      </main>

      <Footer pageData={pageData} />
    </div>
  );
}