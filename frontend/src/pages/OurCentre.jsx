import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { usePageData } from "../context/PageContext";
import centreImage from "../assets/Story/MyChildhood PreSchool.jpeg";

import {
  FaCheckCircle,
  FaHeart,
  FaHandsHelping,
  FaChevronRight,
} from "react-icons/fa";

export default function OurCentre() {
  const { pageData } = usePageData();

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

  return (
    <div className="font-sans antialiased bg-white overflow-x-hidden min-h-screen flex flex-col text-[#1F2937]">
      <Navbar pageData={pageData} />

      <main className="flex-grow w-full">
        
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold text-[#0B1B4D] leading-[1.2] mb-6 tracking-tight">
              Prarambha Foundation <br className="hidden lg:block" /> 
              <span className="text-[#E63946]">&</span> My Childhood Pre School
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed mb-8 max-w-2xl">
              Empowering Every Child Through Inclusive Education and Early Intervention.
            </p>
            <div className="w-24 h-1.5 bg-[#E63946] rounded-full"></div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Decorative background blob/box for the image */}
              <div className="absolute inset-0 bg-[#FFF7E8] rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={centreImage} 
                alt="My Childhood Pre School" 
                className="w-full h-auto object-cover rounded-3xl shadow-xl border border-gray-50"
              />
            </div>
          </div>
        </section>

        {/* ABOUT PARTNERSHIP */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed mb-6 font-semibold">
            Prarambha Foundation proudly collaborates with My Childhood Pre School, a progressive early childhood education institution committed to nurturing every child's unique potential.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Through this partnership, we work towards creating an inclusive and supportive learning environment for children with developmental, learning, and behavioral challenges. At our Akhbarnagar, Nava Vadaj, Ahmedabad Centre, we currently support more than 30 children through individualized educational and developmental programs designed to meet each child's specific needs.
          </p>
        </section>

        {/* KEY AREAS OF SUPPORT (Card Layout) */}
        <section className="bg-gray-50 py-16 lg:py-24 mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B4D] mb-12 text-center">
              Our Key Areas of Support
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyAreas.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <FaCheckCircle className="text-[#E63946] text-3xl flex-shrink-0" />
                  <span className="text-gray-800 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DAY CARE & LEARNING SUPPORT */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="bg-gradient-to-br from-[#FFF7E8] to-[#FFFBF2] border border-[#fbe5b8] rounded-[32px] p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center shadow-sm">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-8">
              <FaHandsHelping className="text-[#FFD600] text-4xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B4D] mb-6">
              Day Care & Learning Support
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl">
              In addition to educational interventions, Prarambha Foundation also provides a structured Day Care and Development Support Program for children requiring additional attention, supervision, and developmental guidance. The program focuses on enhancing communication, social interaction, daily living skills, learning readiness, and overall child development in a safe and nurturing environment.
            </p>
          </div>
        </section>

        {/* CHILDREN WE SUPPORT (Pill Tags Layout) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B4D] mb-4">Children We Support</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-medium">Our programs are specifically designed for children with:</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {childrenSupport.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-full px-5 py-3 hover:border-[#FFD600] hover:bg-gray-50 transition-colors duration-200"
              >
                <FaChevronRight className="text-[#FFD600] text-sm flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT MY CHILDHOOD PRE SCHOOL */}
        <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B4D] mb-8">About My Childhood Pre School</h2>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <p className="text-xl text-gray-800 leading-relaxed mb-4 font-medium">
                <span className="font-bold text-[#E63946]">My Childhood Pre School</span> is dedicated to providing quality early childhood education through child-centered learning, experiential activities, and holistic development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The school believes in fostering curiosity, creativity, confidence, and strong foundational skills during the most important years of a child's life.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="bg-[#0B1B4D] py-16 lg:py-20 mt-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <FaHeart className="text-[#E63946] text-3xl animate-pulse" />
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed max-w-4xl mx-auto">
              Together, <span className="text-[#FFD600] font-bold">Prarambha Foundation</span> and <span className="text-[#FFD600] font-bold">My Childhood Pre School</span> are committed to ensuring that every child—regardless of ability—receives the opportunity to learn, grow, participate, and thrive in an inclusive educational environment.
            </p>
          </div>
        </section>

      </main>

      <Footer pageData={pageData} />
    </div>
  );
}