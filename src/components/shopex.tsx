import React from 'react'
import Image from 'next/image'

export default function Shopex() {
  return (
    <div className="py-10 md:px-20 lg:px-28 xl:px-40">
    <h2 className="text-[24px] md:text-[34px] lg:text-[44px] text-center text-[#1A0B5B] font-bold">
        What Shopex Offer!
    </h2>
    <div className='flex justify-around items-center flex-wrap mt-10'>
        <div className='w-[270px] h-[320px] flex justify-center items-center flex-col shadow-sm'>
            <Image
            src='/images/shopex/2.png'
            alt='Product 1'
            width="900"
            height="900"
            className='w-[65px] h-[65px]'
            />
            <div className='text-center'>
                <p className='text-[#151875] text-[22px] font-[500] py-3 px-2'>24/7 Support</p>
                <p className='text-[#1A0B5B4D] text-[16px] font-[lato]  font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
        <div className='w-[270px] h-[320px] flex justify-center items-center flex-col shadow-sm'>
            <Image
            src='/images/shopex/3.png'
            alt='Product 1'
            width="900"
            height="900"
            className='w-[65px] h-[65px]'
            />
            <div className='text-center'>
                <p className='text-[#151875] text-[22px] font-[500] py-3 px-2'>24/7 Support</p>
                <p className='text-[#1A0B5B4D] text-[16px] font-[lato]  font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
        <div className='w-[270px] h-[320px] flex justify-center items-center flex-col shadow-sm'>
            <Image
            src='/images/shopex/4.png'
            alt='Product 1'
            width="900"
            height="900"
            className='w-[65px] h-[65px]'
            />
            <div className='text-center'>
                <p className='text-[#151875] text-[22px] font-[500] py-3 px-2'>24/7 Support</p>
                <p className='text-[#1A0B5B4D] text-[16px] font-[lato]  font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
        <div className='w-[270px] h-[320px] flex justify-center items-center flex-col shadow-sm'>
            <Image
            src='/images/shopex/1.png'
            alt='Product 1'
            width="900"
            height="900"
            className='w-[65px] h-[65px]'
            />
            <div className='text-center'>
                <p className='text-[#151875] text-[22px] font-[500] py-3 px-2'>24/7 Support</p>
                <p className='text-[#1A0B5B4D] text-[16px] font-[lato]  font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
    </div>
    </div>
  )
}


// import { Clock, ShieldCheck, Trophy, Truck } from 'lucide-react'
// import { ServiceCard } from "@/components/ui/service-card"

// export function WhatShopexOffers() {
//   return (
//     <section className="py-16">
//       <div className="container md:w-[1177px] mx-auto px-4">
//         <h2 className="mb-12 text-center text-3xl font-bold text-[#1A0B5B]">
//           What Shopex Offers!
//         </h2>
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           <ServiceCard
//             icon={<Truck className="h-8 w-8" />}
//             title="24/7 Support"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
//           />
//           <ServiceCard
//             icon={<ShieldCheck className="h-8 w-8" />}
//             title="Money Back Guarantee"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
//           />
//           <ServiceCard
//             icon={<Trophy className="h-8 w-8" />}
//             title="Premium Quality"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
//           />
//           <ServiceCard
//             icon={<Clock className="h-8 w-8" />}
//             title="Free Shipping"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
//           />
//         </div>
//       </div>
//     </section>
//   )
// }