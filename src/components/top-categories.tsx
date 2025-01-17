// import React from 'react';
// import Image from 'next/image';

import { ProductCategoryCard } from "@/components/ui/product-category-card"


// export default function TopCat() {
//     // Array of product data
//     const products = [
//         { name: 'Mini LCW Chair', price: '$56.00', image: '/images/top/chair11.png' },
//         { name: 'Mini LCW Chair', price: '$56.00', image: '/images/top/chair4.png' },
//         { name: 'Mini LCW Chair', price: '$56.00', image: '/images/top/chair7.png' },
//         { name: 'Mini LCW Chair', price: '$56.00', image: '/images/top/chair11.png' },
//     ];

//     return (
//         <div>
//             <div className="pt-10 px-10 md:px-20 lg:px-28 xl:px-40">
//                 <h2 className="text-[24px] md:text-[34px] lg:text-[44px] font-[Josefin Sans] text-center text-[#1A0B5B] font-[700]">
//                     Top Categories
//                 </h2>
//                 <div className="flex justify-around items-center flex-wrap gap-5 mt-10 md:mt-20">
//                     {products.map((product, index) => (
//                         <div
//                             key={index}
//                         >
//                             <div className="w-[270px] h-[270px] bg-[#F6F7FB] flex items-center justify-center relative z-10 rounded-full hover:border-b-[10px] hover:border-l-[10px] hover:border-[#32208a8b]  ">
//                                 <Image
//                                     src={product.image}
//                                     alt={product.name}
//                                     width="900"
//                                     height="900"
//                                     className="w-[178px] h-[178px] rounded-full"
//                                 />
//                             </div>
//                             <div className="relative z-10 transition-colors duration-300 text-center">
//                                 <h3 className="text-[#151875] text-[20px]  py-3 group-hover:text-white">
//                                     {product.name}
//                                 </h3>
//                                 <p className="text-[#151875] text-[16px] font-[400] group-hover:text-white">
//                                     {product.price}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

           
//         </div>
//     );
// }



const categories = [
  {
    id: "1",
    title: "Mini LCW Chair",
    price: 56.00,
    image: "/images/chair4.png",
    href: "/product/1",
    isNew: true,
  },
  {
    id: "2",
    title: "",
    price: 56.00,
    image: "/images/chair-3.png",
    href: "/product/1",
  },
  {
    id: "3",
    title: "Mini LCW Chair",
    price: 56.00,
    image: "/images/chair-4.png",
    href: "/product/1",
  },
  {
    id: "4",
    title: "Mini LCW Chair",
    price: 56.00,
    image: "/images/chair2.png",
    href: "/product/1",
  },
]

export default function TopCategories() {
  return (
    <section className="py-24">
      <div className="container md:w-[1177px] mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl  font-bold text-[#1A0B5B]">
          Top Categories
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <ProductCategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}