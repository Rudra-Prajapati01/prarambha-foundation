import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeart,
} from "react-icons/fa"

import logo from "../../assets/logo/logo.png"

function Footer() {
    return (
        <footer className="bg-[#FFF7E8] pt-16 pb-6 border-t border-gray-200">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-10 border-b border-gray-200">

                    {/* ABOUT */}
                    <div>

                        {/* LOGO */}
                        <img
                            src={logo}
                            alt="Prarambha Foundation"
                            className="w-48 mb-5"
                        />

                        <p className="text-gray-600 leading-relaxed text-sm">
                            Supporting children through inclusive education,
                            therapy support, sensory learning, and
                            family-centered care programs.
                        </p>

                        {/* SOCIALS */}
                        <div className="flex items-center gap-3 mt-6">

                            <div className="w-10 h-10 rounded-full bg-[#F3F4F6] hover:bg-[#E63946] hover:text-white transition flex items-center justify-center cursor-pointer text-[#1F2937]">

                                <FaFacebookF />

                            </div>

                            <div className="w-10 h-10 rounded-full bg-[#F3F4F6] hover:bg-[#E63946] hover:text-white transition flex items-center justify-center cursor-pointer text-[#1F2937]">

                                <FaInstagram />

                            </div>

                            <div className="w-10 h-10 rounded-full bg-[#F3F4F6] hover:bg-[#E63946] hover:text-white transition flex items-center justify-center cursor-pointer text-[#1F2937]">

                                <FaLinkedinIn />

                            </div>

                        </div>

                    </div>

                    {/* QUICK LINKS */}
                    <div>

                        <h3 className="text-xl font-bold mb-5 text-[#1F2937]">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-600 text-sm">

                            <li className="hover:text-[#E63946] transition cursor-pointer">
                                Home
                            </li>

                            <li className="hover:text-[#E63946] transition cursor-pointer">
                                About Us
                            </li>

                            <li className="hover:text-[#E63946] transition cursor-pointer">
                                Services
                            </li>

                            <li className="hover:text-[#E63946] transition cursor-pointer">
                                Events
                            </li>

                            <li className="hover:text-[#E63946] transition cursor-pointer">
                                Contact
                            </li>

                        </ul>

                    </div>

                    {/* PROGRAMS */}
                    <div>

                        <h3 className="text-xl font-bold mb-5 text-[#1F2937]">
                            Our Programs
                        </h3>

                        <ul className="space-y-3 text-gray-600 text-sm">

                            <li>Early Intervention</li>

                            <li>Therapy Support</li>

                            <li>Inclusive Education</li>

                            <li>Sensory Learning</li>

                            <li>Family Support</li>

                        </ul>

                    </div>

                    {/* CONTACT */}
                    <div>

                        <h3 className="text-xl font-bold mb-5 text-[#1F2937]">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-gray-600 text-sm">

                            <div className="flex items-start gap-3">

                                <FaPhoneAlt className="text-[#E63946] mt-1" />

                                <p>+91 940 911 8461</p>

                            </div>

                            <div className="flex items-start gap-3">

                                <FaEnvelope className="text-[#E63946] mt-1" />

                                <p>foundationprarambha@gmail.com</p>

                            </div>

                            <div className="flex items-start gap-3">

                                <FaMapMarkerAlt className="text-[#E63946] mt-1" />

                                <p>Ahmedabad, Gujarat, India</p>

                            </div>

                        </div>

                        {/* DONATE BUTTON */}
                        <button className="mt-6 flex items-center gap-2 bg-[#E63946] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg">

                            <FaHeart />

                            Donate Now

                        </button>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © 2026 Prarambha Foundation. All Rights Reserved.
                    </p>

                    <p className="text-gray-500 text-sm text-center md:text-right">
                        Designed with care for every child’s future.
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer