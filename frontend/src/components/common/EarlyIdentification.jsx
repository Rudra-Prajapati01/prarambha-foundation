import React from "react";
import {
  FaBaby,
  FaPuzzlePiece,
  FaSchool,
  FaPencilAlt,
  FaBrain,
  FaUserGraduate,
} from "react-icons/fa";

export default function EarlyIdentification() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B4D] mb-6">
            Why Early Identification Matters
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed">
            The first 14 years of a child's life are the foundation for learning, communication, behaviour, and overall development. Early support helps children reach their full potential.
          </p>
          <div className="w-24 h-1.5 bg-[#E63946] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-[#F9FAFB] rounded-[32px] p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[#E63946] mb-8 pb-4 border-b border-gray-200">
              Early Years (0–8 Years)
            </h3>
            
            <div className="space-y-8 flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <FaBaby className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1B4D] mb-2">0–3 Years</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-pink-500 mt-1">•</span> Brain develops rapidly.</li>
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-pink-500 mt-1">•</span> Early years build speech, bonding, communication, and basic behaviour.</li>
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-pink-500 mt-1">•</span> Delays are easier to identify and support.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPuzzlePiece className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1B4D] mb-2">3–6 Years</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-blue-500 mt-1">•</span> Language, thinking, attention, and learning skills grow quickly.</li>
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-blue-500 mt-1">•</span> Children prepare for school readiness.</li>
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-blue-500 mt-1">•</span> Early intervention improves long-term outcomes.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <FaSchool className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1B4D] mb-2">6–8 Years</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-green-600 mt-1">•</span> Reading, writing, understanding, and social interaction become stronger.</li>
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-green-600 mt-1">•</span> Learning difficulties become more visible.</li>
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-green-600 mt-1">•</span> Early support builds confidence and academic success.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center font-bold text-[#0B1B4D] text-lg bg-yellow-100 py-3 rounded-xl shadow-sm">
                Early Identification = Better Development
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F9FAFB] rounded-[32px] p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[#E63946] mb-8 pb-4 border-b border-gray-200">
              Middle Childhood & Early Teens (9–14 Years)
            </h3>
            
            <div className="space-y-8 flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPencilAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1B4D] mb-2">9–11 Years</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-purple-600 mt-1">•</span> Academic skills become more advanced.</li>
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-purple-600 mt-1">•</span> Learning, behaviour, and attention challenges become easier to identify.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <FaBrain className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1B4D] mb-2">11–13 Years</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-teal-600 mt-1">•</span> Emotional regulation, confidence, and self-awareness become important.</li>
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-teal-600 mt-1">•</span> ADHD, Autism, Learning Disabilities, and Anxiety may become more noticeable.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <FaUserGraduate className="text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1B4D] mb-2">13–14 Years</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-orange-500 mt-1">•</span> Preparation for higher education and independence begins.</li>
                    <li className="flex items-start gap-2 text-gray-600"><span className="text-orange-500 mt-1">•</span> Timely intervention improves confidence, life skills, and future readiness.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center font-bold text-[#0B1B4D] text-lg bg-yellow-100 py-3 rounded-xl shadow-sm">
                Support Today = Stronger Tomorrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
