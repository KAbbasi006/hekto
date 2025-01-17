
// import React from "react";
// import Image from "next/image";

// const productList = [
//   {
//     id: 1,
//     name: "Comfort Handy Craft",
//     price: "$42.00",
//     originalPrice: "$65.00",
//     image: "/images/latest/brownsofa.png",
//     isOnSale: false,
//   },
//   {
//     id: 2,
//     name: "Comfort Handy Craft",
//     price: "$42.00",
//     originalPrice: "$65.00",
//     image: "/images/latest/yellowchair.png",
//     isOnSale: true,
//   },
//   {
//     id: 3,
//     name: "Comfort Handy Craft",
//     price: "$42.00",
//     originalPrice: "$65.00",
//     image: "/images/latest/chair4.png",
//     isOnSale: false,
//   },
//   {
//     id: 4,
//     name: "Comfort Handy Craft",
//     price: "$42.00",
//     originalPrice: "$65.00",
//     image: "/images/latest/whitesofa.png",
//     isOnSale: false,
//   },
//   {
//     id: 5,
//     name: "Comfort Handy Craft",
//     price: "$42.00",
//     originalPrice: "$65.00",
//     image: "/images/latest/chair8.png",
//     isOnSale: false,
//   },
//   {
//     id: 6,
//     name: "Comfort Handy Craft",
//     price: "$42.00",
//     originalPrice: "$65.00",
//     image: "/images/latest/chair.png",
//     isOnSale: false,
//   },
// ];

// export default function LatestProducts() {
//   return (
//     <div className="py-10 md:px-20 lg:px-28 xl:px-40">
//       <h2 className="text-[24px] md:text-[34px] lg:text-[44px]  text-center text-[#1A0B5B] font-bold">
//         Latest Products
//       </h2>
//       <div className="font-[lato] flex-col text-center md:flex justify-between items-center w-[350px] md:w-[527px] m-auto my-5 text-[#151875]">
//         {["New Arrival", "Best Seller", "Featured", "Special Offers"].map(
//           (tab) => (
//             <p
//               key={tab}
//               className="hover:text-[#FB2E86] hover:underline cursor-pointer"
//             >
//               {tab}
//             </p>
//           )
//         )}
//       </div>

//       <div className="flex gap-10 justify-center items-center  flex-wrap ">
//         {productList.map((product) => (
//           <div
//             key={product.id}
//             className="w-[290px] h-[320px] md:w-[320px] lg:w-[365px]"
//           >
//             <div className="relative py-8 bg-[#F7F7F7] flex justify-center items-center rounded-lg overflow-hidden hover:bg-white hover:shadow-lg">
//               {product.isOnSale && (
//                 <div className="absolute top-2 left-2 mx-3 my-6 bg-[#3F509E] text-white text-xs py-2 px-6 transform -rotate-45">
//                   Sale
//                 </div>
//               )}
//               <Image
//                 src={product.image}
//                 alt={`${product.name} Image`}
//                 width={223}
//                 height={229}
//                 className="w-[223px] h-[229px] object-cover"
//               />
//             </div>

//             <div className="flex justify-between items-center mt-3">
//               <h3 className="text-[#151875] text-[16px] font-medium">
//                 {product.name}
//               </h3>
//               <div className="flex items-center gap-2">
//                 <p className="text-[14px]">{product.price}</p>
//                 <p className="text-[12px] text-[#FB2448] line-through">
//                   {product.originalPrice}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client"

import * as React from "react"
import { ProductCard } from "@/components/ui/product-card-home"

const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"]

const latestProducts = [
  {
    id: "1",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair1.png",
   
  },
  {
    id: "2",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair2.png",
  },
  {
    id: "3",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair3.png",
  },
  {
    id: "4",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair4.png",
  },
  {
    id: "5",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair5.png",
  },
  {
    id: "6",
    title: "Comfort Handy Craft",
    price: 42.00,
    image: "/images/chair-4.png",
  },
]

export default function LatestProducts() {
  const [activeCategory, setActiveCategory] = React.useState("New Arrival")

  return (
    <section className="py-16">
      <div className="  md:w-[1177px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1A0B5B]">
          Latest Products
        </h2>
        <div className="mb-8 flex justify-center gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-base ${
                activeCategory === category
                  ? "text-[#FB2E86]"
                  : "text-[#151875]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}