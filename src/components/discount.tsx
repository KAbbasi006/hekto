// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Discount() {
//   return (
//     <div className='lg:py-24'>
//     <h2 className="text-[24px] md:text-[34px] lg:text-[44px] mb-10 text-center text-[#1A0B5B] font-bold ">
//         Discount Items
//       </h2>
//       <div className=" flex items-center justify-center gap-5 font-[lato] text-[18px] text-[#151875] ">
//         <Link className='hover:text-[#FB2E86] hover:underline' href="/">Wood Chair</Link>
//         <Link className='hover:text-[#FB2E86] hover:underline' href="/">Plastic Chair</Link>
//         <Link className='hover:text-[#FB2E86] hover:underline' href="/">Sofa Colletion</Link>
//       </div>
//     <div className=" w-full h-auto flex flex-col lg:flex-row items-center justify-around p-8 lg:px-32 xl:px-60 lg:p-10 ">
//       <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
//         <div className="text-center lg:text-left">
//           <h2 className="text-[24px] md:text-[36px] xl:text-[40px] font-semibold text-[#1A0B5B] mt-2">
//           20% Discount Of All Products
//           </h2>
//           <h4 className="text-[#FB2E86] text-[20px]  ">
//           Eams Sofa Compact
//           </h4>
//           <p className="text-[14px] md:text-[17px] text-[#B7BACB] font-[lato] mt-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
          
//           <div className='flex justify-between items-center py-4 flex-wrap'>
//             <ul className='grid grid-cols-2 gap-4 text-[#B8B8DC] font-[lato] text-[16px]'>
//                 <li><span className='text-[#7569B2] font-semibold'>&#10003;</span> Material expose like metals</li>
//                 <li><span className='text-[#7569B2] font-semibold'>&#10003;</span> Simple neutral colours.</li>
//                 <li><span className='text-[#7569B2] font-semibold'>&#10003;</span> Clear lines and geomatric figures.</li>
//                 <li><span className='text-[#7569B2] font-semibold'>&#10003;</span> Material expose like metals</li>
//             </ul>
//           </div>
//           <button className="w-[140px] md:w-[160px] h-[40px] md:h-[50px] bg-[#FB2E86] text-white rounded-md mt-6">
//             Shop Now
//           </button>
//         </div>
//       </div>

//       <div className="relative mt-12 lg:mt-0">
//         <div className="bg-[#FFF6FB] w-[250px] h-[250px] md:w-[380px] md:h-[380px] xl:w-[430px] xl:h-[430px] rounded-full"></div>

//         <Image
//           src="/discount.png"
//           alt="Hero"
//           width={900}
//           height={900}
//           className="absolute top-0 md:-top-8 lg:-top-4 right-5 lg:right-12 w-[200px] h-[300px] md:w-[330px] md:h-[450px] xl:w-[600 px] xl:h-[500px] rounded-full"
//         />
//       </div>
//     </div>
//     </div>
//   );
// }




"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const features = [
  "Material expose like metals",
  "Simple neutral colours",
  "Clear lines and geomatric figures",
  "Material expose like metals"
]

export default function Discount() {
  const [activeTab, setActiveTab] = React.useState("wood")

  return (
    <section className="py-16">
      <div className="container md:w-[1177px] mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-[24px] md:text-[34px] lg:text-[44px] mb-10 text-center text-[#1A0B5B] font-bold">Discount Item</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab("wood")}
                  className={`text-sm ${
                    activeTab === "wood" ? "text-[#FB2E86]" : "text-[#151875]"
                  }`}
                >
                  Wood Chair
                </button>
                <span className="text-[#151875]">•</span>
                <button
                  onClick={() => setActiveTab("plastic")}
                  className={`text-sm ${
                    activeTab === "plastic" ? "text-[#FB2E86]" : "text-[#151875]"
                  }`}
                >
                  Plastic Chair
                </button>
                <span className="text-[#151875]">•</span>
                <button
                  onClick={() => setActiveTab("sofa")}
                  className={`text-sm ${
                    activeTab === "sofa" ? "text-[#FB2E86]" : "text-[#151875]"
                  }`}
                >
                  Sofa Collection
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#151875]">
                20% Discount Of All Products
              </h2>
              <p className="text-[#B7BACB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>
              <ul className="grid gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#B7BACB]">
                    <Check className="h-4 w-4 text-[#7E33E0]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="relative  ">
            <div className="absolute inset-0 w-[80%] rounded-full flex justify-center items-center pr-12 bg-[#FFF6FB]" />
            <img
              src="/images/discount.png"
              alt="Discount Chair"
              className="relative z-10  mr-12 md:mr-20  w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}