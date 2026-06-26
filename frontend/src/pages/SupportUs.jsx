import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { usePageData } from "../context/PageContext";
import qrCode from "../assets/QR/QR Code.jpeg";
import { 
  FaBuilding, FaUniversity, FaMapMarkerAlt, FaHashtag, FaCode, 
  FaRegCopy, FaCheck, FaHeart, FaShieldAlt, FaAward, 
  FaFileInvoiceDollar, FaFolderOpen, FaCheckCircle 
} from "react-icons/fa";

export default function SupportUs() {
  const { pageData } = usePageData();
  const [toastMessage, setToastMessage] = useState("");

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${field} copied successfully!`);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const complianceData = [
    { title: "LEGAL REGISTRATION", icon: <FaShieldAlt className="text-[#0B1B4D] text-3xl mb-4 opacity-20" />, items: ["Section 8 Company Registration (MCA)", "Certificate of Incorporation", "PAN Card", "TAN (if applicable)"] },
    { title: "NGO RECOGNITION", icon: <FaAward className="text-[#E63946] text-3xl mb-4 opacity-20" />, items: ["NGO Darpan Registration (NITI Aayog)", "CSR Ready (Eligible to receive CSR funding)"] },
    { title: "TAX & COMPLIANCE", icon: <FaFileInvoiceDollar className="text-[#E63946] text-3xl mb-4 opacity-20" />, items: ["12A Registration", "80G Registration", "Income Tax Compliance"] },
    { title: "FINANCIAL & ADMINISTRATIVE", icon: <FaFolderOpen className="text-[#0B1B4D] text-3xl mb-4 opacity-20" />, items: ["Dedicated Bank Account", "Donation Receipt System"] }
  ];

  return (
    <div className="font-sans antialiased bg-[#FCFAF5] min-h-screen flex flex-col">
      <Navbar pageData={pageData} />

      {toastMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-[#0B1B4D]/95 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3">
          <FaCheck className="text-green-400" />
          <span className="font-medium text-sm whitespace-nowrap">{toastMessage}</span>
        </div>
      )}

      <main className="flex-grow max-w-[1200px] mx-auto px-4 w-full pt-8 pb-16">
        
        <div className="text-center mb-16">
          <h1 className="text-[32px] sm:text-[48px] font-extrabold text-[#0B1B4D] mb-4">Support Prarambha Foundation</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Your contribution helps children build a brighter future.</p>
        </div>

        {/* QR & BANK SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Increased QR container size */}
          <div className="lg:col-span-5 bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="p-4 bg-[#FAFAFA] rounded-[24px] mb-6 border-4 border-[#F3E8D5] w-full flex justify-center">
              {/* Made image significantly larger */}
              <img src={qrCode} alt="QR" className="w-[350px] max-w-full mix-blend-multiply" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1B4D] uppercase tracking-widest">Scan to Donate</h3>
          </div>

          <div className="lg:col-span-7 bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-[#E63946] mb-6">Bank Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"><FaBuilding className="text-[#0B1B4D]" /> <p className="font-bold text-[#0B1B4D]">PRARAMBHA FOUNDATION</p></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"><FaUniversity className="text-[#0B1B4D]" /> <p className="font-bold text-[#0B1B4D] text-sm">AU SMALL FINANCE BANK</p></div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"><FaMapMarkerAlt className="text-[#0B1B4D]" /> <p className="font-bold text-[#0B1B4D] text-sm">ASHRAM ROAD</p></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-between">
                    <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400">Account Number</p>
                        <p className="font-bold text-[#0B1B4D] whitespace-nowrap">4681 3681 4681 3681</p>
                    </div>
                    <button onClick={() => handleCopy("4681 3681 4681 3681", "Account Number")} className="p-2 bg-white rounded-lg shadow-sm"><FaRegCopy /></button>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-between">
                    <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400">IFSC Code</p>
                        <p className="font-bold text-[#0B1B4D] whitespace-nowrap">AUBL0002153</p>
                    </div>
                    <button onClick={() => handleCopy("AUBL0002153", "IFSC Code")} className="p-2 bg-white rounded-lg shadow-sm"><FaRegCopy /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMPLIANCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {complianceData.map((data, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative pt-12">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#0B1B4D] text-white px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap">{data.title}</div>
                    <ul className="space-y-3">{data.items.map((item, j) => <li key={j} className="flex gap-3 text-sm font-medium text-gray-600"><FaCheckCircle className="text-green-500 mt-1" /> {item}</li>)}</ul>
                </div>
            ))}
        </div>

        <div className="text-center p-10 bg-white rounded-[32px] shadow-sm border border-gray-100">
          <FaHeart className="text-[#E63946] text-3xl mx-auto mb-4 animate-pulse" />
          <p className="text-[#0B1B4D] font-semibold text-lg italic">"Thank you for supporting Prarambha Foundation."</p>
        </div>
      </main>

      <Footer pageData={pageData} />
    </div>
  );
}