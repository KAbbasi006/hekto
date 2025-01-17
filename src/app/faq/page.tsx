// import BrandLogos from "@/components/brands";
// import Link from "next/link";
// import React from "react";

// const FAQPage = () => {
//     return (
//         <div className="min-h-screen flex flex-col items-center">

//             {/* FAQ Section */}
//             <div className="w-full h-[286px] bg-[#F6F5FF]">
//                 <div className="max-w-7xl mx-auto my-24 text-center sm:text-left md:px-6 lg:px-8">
//                     <h2 className="text-[#101750] text-[26px] md:text-[36px] font-[700]">
//                         FAQ
//                     </h2>
//                     <Link href="/" className="px-2">
//                         Home.
//                     </Link>
//                     <Link href="">Pages.</Link>
//                     <Link href="/faq" className="text-[#FB2E86] text-[16px] font-[500] px-2">
//                         FAQ
//                     </Link>
//                 </div>
//             </div>

//             {/* Content */}
//             <main className="flex flex-col items-center py-12 px-4 w-full max-w-7xl">
//                 {/* General Info & Form */}
//                 <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-8">
//                     {/* General Information */}
//                     <div className="w-full md:w-1/2 mx-0 sm:mx-4 px-4 sm:px-6 md:px-12 mt-8">
//                         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D3178] mb-6 sm:mb-8 md:mb-14">
//                             General Information
//                         </h2>
//                         <div className="space-y-4">
//                             {[1, 2, 3, 4].map((item) => (
//                                 <div key={item}>
//                                     <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[19px] py-4 text-[#1D3178]">
//                                         Eu dictumst cum at sed euismood condimentum?
//                                     </h3>
//                                     <p className="text-[#A1ABCC] text-sm sm:text-base py-3">
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                                         Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Ask a Question Form */}
//                     <div className="w-full md:w-1/2 bg-[#F8F8FD] mx-0 sm:mx-4 px-4 sm:px-6 md:px-10 mt-8">
//                         <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#1D3178] mt-6 sm:mt-8 md:mt-16">
//                             Ask a Question
//                         </h2>
//                         <form className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">
//                             <input
//                                 type="text"
//                                 placeholder="Your Name"
//                                 className="w-full p-2 sm:p-3 border rounded focus:outline-purple-600"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Subject"
//                                 className="w-full p-2 sm:p-3 border rounded focus:outline-purple-600"
//                             />
//                             <textarea
//                                 placeholder="Type Your Message"
//                                 rows={4}
//                                 className="w-full p-2 sm:p-3 border rounded focus:outline-purple-600"
//                             ></textarea>
//                             <button
//                                 type="submit"
//                                 className="w-full sm:w-auto px-3 rounded-lg bg-[#FB2E86] text-white py-2 hover:bg-purple-700"
//                             >
//                                 Send Mail
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </main>
//             <BrandLogos />
//         </div>
//     );
// };

// export default FAQPage;



"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FAQItem } from "@/components/ui/faq-item"
import BrandLogos from "@/components/brands"

const faqs = [
  {
    question: "Eu dictumst cum at sed euismood condimentum?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
  {
    question: "Magna bibendum est fermentum eros.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
  {
    question: "Odio muskana hak eris conseekin scelerton?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
  {
    question: "Elit id blandit sabara boi velit gua mara?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
]

export default function FAQPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div>
      {/* Page Header */}
      <div className=" h-[286px] bg-[#F6F5FF] flex items-center py-16">
        <div className="container md:w-[1170px] mx-auto px-4">
          <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">FAQ</h1>
          <div className="flex justify-center text-[#151875] md:justify-start items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">FAQ</span>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container  mt-12 md:mt-24 md:w-[1170px] mx-auto px-4 py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* General Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#151875] mb-8">
              General Information
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>

          {/* Ask a Question */}
          <div
          className="bg-[#F6F5FF]  rounded-2xl p-6 py-12">
            <h2 className="text-2xl  font-bold text-[#151875] mb-8">
              Ask a Question
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input placeholder="Your Name*" required className="bg-white border rounded-[4px] border-gray-400" />
              <Input placeholder="Subject*" required className="bg-white border rounded-[4px] border-gray-400" />
              <Textarea
                placeholder="Type Your Message*"
                required
                className="min-h-[150px] bg-white border rounded-[4px] border-gray-400"
              />
              <Button
                type="submit"
                className="bg-[#FB2E86] px-12 text-white rounded-[4px] hover:bg-[#FB2E86]/90"
              >
                Send Mail
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <BrandLogos />
    </div>
  )
}