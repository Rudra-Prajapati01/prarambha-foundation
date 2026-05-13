import program1 from "../../assets/programs/programs1.png"
import program2 from "../../assets/programs/programs2.png"
import program3 from "../../assets/programs/programs3.png"

function Programs() {
    return (
        <section className="bg-white py-20">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        {/* TAG */}
                        <p className="text-[#E63946] font-semibold uppercase tracking-widest mb-4">
                            Our Core Programs
                        </p>

                        {/* HEADING */}
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F2937] leading-tight mb-6">

                            Supporting Every Child
                            <span className="block text-[#E63946]">
                                With Care & Inclusion
                            </span>

                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">

                            Our programs focus on early intervention, therapy,
                            inclusive education, sensory development, and family
                            support to help children grow with confidence,
                            independence, and dignity.

                        </p>

                        {/* PROGRAM LIST */}
                        <div className="space-y-8">

                            {/* ITEM */}
                            <div className="bg-[#F3F4F6] rounded-2xl p-6 border-l-4 border-[#F7C600]">

                                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                                    Early Intervention & Child Development
                                </h3>

                                <ul className="space-y-2 text-gray-600">

                                    <li>• Autism & ADHD Support</li>

                                    <li>• Developmental Delay Programs</li>

                                    <li>• Learning Disorder Support</li>

                                </ul>

                            </div>

                            {/* ITEM */}
                            <div className="bg-[#F3F4F6] rounded-2xl p-6 border-l-4 border-[#38BDF8]">

                                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                                    Therapy & Developmental Support
                                </h3>

                                <ul className="space-y-2 text-gray-600">

                                    <li>• Speech & Language Therapy</li>

                                    <li>• Occupational Therapy</li>

                                    <li>• Sensory Integration Activities</li>

                                </ul>

                            </div>

                            {/* ITEM */}
                            <div className="bg-[#F3F4F6] rounded-2xl p-6 border-l-4 border-[#E63946]">

                                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                                    Inclusive Education Support
                                </h3>

                                <ul className="space-y-2 text-gray-600">

                                    <li>• Montessori-based Learning</li>

                                    <li>• Individual Learning Plans</li>

                                    <li>• School Readiness Programs</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="relative h-[620px] flex items-center justify-center">

                        {/* IMAGE 1 */}
                        <div className="absolute top-40 left-12 w-[240px] rounded-[30px] overflow-hidden shadow-2xl rotate-[-6deg] hover:rotate-0 transition duration-500 z-10">

                            <img
                                src={program1}
                                alt="Program"
                                className="w-full h-[200px] object-cover"
                            />

                        </div>

                        {/* IMAGE 2 */}
                        <div className="absolute top-[280px] right-1 w-[300px] rounded-[30px] overflow-hidden shadow-2xl rotate-[4deg] hover:rotate-0 transition duration-500 z-20">
                            <img
                                src={program2}
                                alt="Program"
                                className="w-full h-[300px] object-cover"
                            />

                        </div>

                        {/* IMAGE 3 */}
                        <div className="absolute bottom-[-160px] left-28 w-[260px] rounded-[30px] overflow-hidden shadow-2xl rotate-[-4deg] hover:rotate-0 transition duration-500 z-10">

                            <img
                                src={program3}
                                alt="Program"
                                className="w-full h-[220px] object-cover"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Programs