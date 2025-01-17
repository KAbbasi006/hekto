// import React from 'react';
// import Image from 'next/image';

// export default function FeaturedProducts() {
 
//   const products = [
//     { name: 'Cantilever Chair', code: 'Y523201', price: '$42.00', image: '/images/featured/chair4.png' },
//     { name: 'Cantilever Chair', code: 'Y523204', price: '$120.00', image: '/images/featured/chair10.png' },
//     { name: 'Cantilever Chair', code: 'Y523202', price: '$75.00', image: '/images/featured/chair5.png' },
//     { name: 'Cantilever Chair', code: 'Y523203', price: '$30.00', image: '/images/featured/chair.png' }
//   ];

//   return (
//     <div className="py-10 px-10 md:px-20 lg:px-28 xl:px-40">
//       <h2 className="text-[24px] md:text-[34px] lg:text-[44px] text-center text-[#1A0B5B] font-[700]">
//         Featured Products
//       </h2>
//       <div className="flex justify-around items-center flex-wrap gap-5 mt-10 md:mt-20">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="w-[270px] h-[360px] shadow-lg text-center group relative ">

//             <div className="absolute inset-0 bg-[#2F1AC4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//             <div className="w-[270px] h-[236px] bg-[#F6F7FB] flex items-center justify-center relative z-10">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width="900"
//                 height="900"
//                 className="w-[178px] h-[178px]"
//               />
//             </div>
//             <div className="relative z-10 transition-colors duration-300">
//               <h3 className="text-[#FB2E86] text-[18px] font-[lato] font-[700] py-3 group-hover:text-white">
//                 {product.name}
//               </h3>
//               <div className="flex justify-center items-center gap-1">
//                 <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
//                 <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
//                 <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px]"></div>
//               </div>
//               <p className="text-[#151875] text-[14px] font-[400] py-2 group-hover:text-white">
//                 Code - {product.code}
//               </p>
//               <p className="text-[#151875] text-[14px] font-[400] group-hover:text-white">
//                 {product.price}
//               </p>
//             </div>
//             <button className="absolute bottom-28 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#05E6B7] text-white text-[14px] font-bold  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










import { Heart, Search, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const featuredProducts = [
  {
    id: "1",
    title: "Cantilever chair",
    price: 42.0,
    image: "/images/chair-1.png",
  },
  {
    id: "2",
    title: "Cantilever chair",
    price: 42.0,
    image: "/images/chair-2.png",
  },
  {
    id: "3",
    title: "Cantilever chair",
    price: 42.0,
    image: "/images/chair-3.png",
  },
  {
    id: "4",
    title: "Cantilever chair",
    price: 42.0,
    image: "/images/chair-4.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container md:w-[1177px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1A0B5B]">
          Featured Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 justify-center lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group relative w-[270px] shadow-md overflow-hidden rounded-none border-none"
            >
              <div className="relative h-[280px] w-[270px] flex justify-center items-center overflow-hidden hover:bg-[#EBF4F3] bg-[#F6F7FB]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[200px] w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -left-36 top-3 flex  gap-2 transition-all duration-300 group-hover:left-3">
                  <Button
                    className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                  <Button
                    className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
                    asChild
                  >
                    <Link href={`/product/${product.id}`}>
                      <Search className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="py-4 group-hover:bg-[#151875]  text-center">
                <Link
                  href={`/product/${product.id}`}
                  className="font-heading font-bold group-hover:text-white text-pink-500 hover:underline"
                >
                  {product.title}
                </Link>
                <h3 className="font-heading font-bold group-hover:text-white text-[#151875] ">CODE : Y34579</h3>
                <div className="flex items-center justify-center my-4 gap-1">
                  <span className="bg-[#DE9034] h-[5px] w-[20px] rounded-full"></span>
                  <span className="bg-[#EC42A2] h-[5px] w-[20px] rounded-full"></span>
                  <span className="bg-[#8568FF] h-[5px] w-[20px] rounded-full"></span>
                </div>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <span className="font-bold text-[14px] font-heading group-hover:text-white text-[#151875]">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
