// import Link from 'next/link'
// import Image from 'next/image'


// export default function grids() {
//   const products = [
//     { name: 'Modern Lamp', price: '$30.00', image: '/images/shopGridDefault/gds1.png' },
//     { name: 'Wooden Table', price: '$120.00', image: '/images/shopGridDefault/gds2.png' },
//     { name: 'Cantilever Chair', price: '$42.00', image: '/images/shopGridDefault/gds3.png' },
//     { name: 'Stylish Sofa', price: '$75.00',  image: '/images/shopGridDefault/gds4.png' },
//     { name: 'Modern Lamp', price: '$30.00', image: '/images/shopGridDefault/gds5.png'},
//     { name: 'Cantilever Chair', price: '$42.00', image: '/images/shopGridDefault/gds6.png' },
//     { name: 'Stylish Sofa', price: '$75.00', image: '/images/shopGridDefault/gds7.png' },
//     { name: 'Modern Lamp', price: '$30.00', image: '/images/shopGridDefault/gds8.png' },
//     { name: 'Wooden Table', price: '$120.00', image: '/images/shopGridDefault/gds9.png' },
//     { name: 'Cantilever Chair', price: '$42.00', image: '/images/shopGridDefault/gds10.png' },
//     { name: 'Stylish Sofa', price: '$75.00', image: '/images/shopGridDefault/gds11.png' },
//     { name: 'Wooden Table', price: '$120.00', image: '/images/shopGridDefault/gds4.png' },
//   ];
//   return (
//     <div>

//       <div className="w-full h-[286px] bg-[#F6F5FF]">
//         <div className="max-w-7xl mx-auto  py-24 text text-center sm:text-left md:px-6 lg:px-8">
//           <h2 className="text-[#101750] text-[26px] md:text-[36px] font-[700]">Shop Grid Default</h2>
//           <Link href="/" className="px-2">Home.</Link>
//           <Link href="">Pages.</Link>
//           <Link href="/grid" className="text-[#FB2E86] text-[16px] font-[500] px-2">Shop Grid Default</Link>
//         </div>
//       </div>


//       <div className="max-w-7xl mx-5 md:mx-auto flex flex-wrap items-center justify-around gap-4 my-28 bg-white">
//         <div>
//         <h1 className="text-[22px] font-bold text-[#151875]">
//           Ecommerce Accessories & Fashion Item
//         </h1>
//         <p className='text-[12px] text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</p>
//         </div>
//         <div className="flex flex-wrap items-center gap-4">
//           <div className="flex items-center gap-2">
//             <label htmlFor="perPage" className="text-sm font-medium text-gray-700">
//               Per Page:
//             </label>
//             <input
//               id="perPage"
//               type="number"
//               className="w-16 px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
//               placeholder="10"
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
//               Sort By:
//             </label>
//             <select
//               id="sortBy"
//               className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
//             >
//               <option>Best Match</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//             </select>
//           </div>
//           <div className="flex items-center gap-2">
//             <label htmlFor="view" className="text-sm font-medium text-gray-700">
//               View:
//             </label>
//             <div className="flex gap-1">
//               <button className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200">
//                 <span className="grid grid-cols-2 gap-1 w-4 h-4 bg-gray-200" />
//               </button>
//               <button className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200">
//                 <span className="w-4 h-4 bg-gray-200" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* product */}
//       <div className='flex justify-center items-center pb-20'>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5 mt-10 ">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="w-[270px] h-[360px] shadow-lg text-center group relative transition-transform duration-300 hover:scale-105">

//               <div className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//               <div className="w-[270px] h-[236px] bg-[#F6F7FB] flex items-center justify-center relative z-10">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width="900"
//                   height="900"
//                   className="w-[178px] h-[178px]"
//                 />
//               </div>
//               <div className="relative z-10 transition-colors duration-300">
//                 <h3 className="text-[#FB2E86] text-[18px] font-[lato] font-[700] py-3 group-hover:text-white">
//                   {product.name}
//                 </h3>
//                 <div className="flex justify-center items-center gap-1">
//                   <div className="w-[10px] h-[10px] bg-[#05E6B7] rounded-[10px]"></div>
//                   <div className="w-[10px] h-[10px] bg-[#F701A8] rounded-[10px]"></div>
//                   <div className="w-[10px] h-[10px] bg-[#00009D] rounded-[10px]"></div>
//                 </div>
//                 <p className="text-[#151875] text-[14px] font-[400] group-hover:text-white">
//                   {product.price}
//                 </p>
//               </div>
//               <button className="absolute bottom-28 left-1/2 transform -translate-x-1/2 px-6 py-2  text-white text-[14px] font-bold  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                 View Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   )
// }



"use client"

import * as React from "react"
import Link from "next/link"
import { Grid} from 'lucide-react'
import { Button } from "@/components/ui/button"
// import { ProductCard } from "@/components/ui/product-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import BrandLogos from "@/components/brands"
import { ProductCard } from "@/components/ui/product-card"
// This would typically come from an API or database
const products = [
  {
    id: "1",
    title: "Vel elit euismod",
    price: 26.00,
    originalPrice: 42.00,
    rating: 5,
    image: "/images/gray.png",
    color: true
  },
  {
    id: "2",
    title: "Ultricies condimentum imperdiet",
    price: 26.00,
    originalPrice: 42.00,
    rating: 4,
    image: "/images/soft.png",
    color: true
  },
  {
    id: "3",
    title: "Vitae suspendisse sed",
    price: 26.00,
    originalPrice: 42.00,
    rating: 3,
    image: "/images/gray.png",
    color: true
  },
  {
    id: "4",
    title: "Sed ut perspiciatis",
    price: 26.00,
    originalPrice: 42.00,
    rating: 5,
    image: "/images/sgop-bag.png",
    color: true
  },
  {
    id: "5",
    title: "Fusce pellentesque at",
    price: 26.00,
    originalPrice: 42.00,
    rating: 4,
    image: "/images/smart.png",
    color: true
  },
  {
    id: "6",
    title: "Vestibulum magna laoreet",
    price: 26.00,
    originalPrice: 42.00,
    rating: 5,
    image: "/images/watch-1.png",
    color: true
  },
  {
    id: "7",
    title: "Sollicitudin amet orci",
    price: 26.00,
    originalPrice: 42.00,
    rating: 3,
    image: "/images/red-h-p.png",
    color: true
  },
  {
    id: "8",
    title: "Ultrices mauris sit",
    price: 26.00,
    originalPrice: 42.00,
    rating: 4,
    image: "/images/pink-sofa.png",
    color: true
  },
  {
    id: "9",
    title: "Pellentesque condimentum ac",
    price: 26.00,
    originalPrice: 42.00,
    rating: 5,
    image: "/images/bracelate.png",
    color: true
  },
  {
    id: "10",
    title: "Cras scelerisque velit",
    price: 26.00,
    originalPrice: 42.00,
    rating: 4,
    image: "/images/cam.png",
    color: true
  },
  {
    id: "11",
    title: "Lectus vulputate faucibus",
    price: 26.00,
    originalPrice: 42.00,
    rating: 3,
    image: "/images/shop-h-p.png",
    color: true
  },
  {
    id: "12",
    title: "Purus risus, ut",
    price: 26.00,
    originalPrice: 42.00,
    rating: 5,
    image: "/images/sgop-bag.png",
    color: true
  },
]

export default function ShopPage() {
  const [view, setView] = React.useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = React.useState("featured")
  const [perPage, setPerPage] = React.useState("12")

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container lg:w-[1177px] mx-auto px-4">
          <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">Shop Grid Default</h1>
          <div className="flex justify-center text-[#151875] md:justify-start items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Shop Grid Default</span>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container lg:w-[1177px] mx-auto px-4 py-16">
        <div className="mb-8 md:flex items-center gap-y-4 justify-between">
          <span className="text-[#151875]">
          <h2 className="text-xl font-bold ">
            Ecommerce Acceories & Fashion item
          </h2>
          <p className="text-sm">About 9,620 results (0.62 seconds)</p>
          </span>
          <div className="flex items-center gap-4">
            <div className=" hidden md:flex items-center gap-2">
              <span className="text-sm text-[#151875]">Per Page:</span>
              <Select value={perPage} onValueChange={setPerPage} >
                <SelectTrigger className=" border w-[55px] h-[25px] border-[#E7E6EF]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="12"></SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="36">36</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center md:gap-2">
              <span className="text-sm  text-[#151875]">Sort By:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className=" ml-2 md:ml-0 w-[75px] md:w-[96px] h-[28px] border  border-[#E7E6EF]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured"></SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#151875]">View:</span>
              <div className="flex items-center">
                <Button
                  variant={view === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setView("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4 text-[#151875]" />
                </Button>
                <Button
                  variant={view === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setView("list")}
                  className="rounded-l-none"
                >
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.875 7.625H0.375C0.275544 7.625 0.180161 7.66451 0.109835 7.73483C0.0395088 7.80516 0 7.90054 0 8L0 9.5C0 9.59946 0.0395088 9.69484 0.109835 9.76517C0.180161 9.83549 0.275544 9.875 0.375 9.875H1.875C1.97446 9.875 2.06984 9.83549 2.14016 9.76517C2.21049 9.69484 2.25 9.59946 2.25 9.5V8C2.25 7.90054 2.21049 7.80516 2.14016 7.73483C2.06984 7.66451 1.97446 7.625 1.875 7.625ZM1.875 0.125H0.375C0.275544 0.125 0.180161 0.164509 0.109835 0.234835C0.0395088 0.305161 0 0.400544 0 0.5L0 2C0 2.09946 0.0395088 2.19484 0.109835 2.26516C0.180161 2.33549 0.275544 2.375 0.375 2.375H1.875C1.97446 2.375 2.06984 2.33549 2.14016 2.26516C2.21049 2.19484 2.25 2.09946 2.25 2V0.5C2.25 0.400544 2.21049 0.305161 2.14016 0.234835C2.06984 0.164509 1.97446 0.125 1.875 0.125ZM1.875 3.875H0.375C0.275544 3.875 0.180161 3.91451 0.109835 3.98484C0.0395088 4.05516 0 4.15054 0 4.25L0 5.75C0 5.84946 0.0395088 5.94484 0.109835 6.01517C0.180161 6.08549 0.275544 6.125 0.375 6.125H1.875C1.97446 6.125 2.06984 6.08549 2.14016 6.01517C2.21049 5.94484 2.25 5.84946 2.25 5.75V4.25C2.25 4.15054 2.21049 4.05516 2.14016 3.98484C2.06984 3.91451 1.97446 3.875 1.875 3.875ZM11.625 8H4.125C4.02554 8 3.93016 8.03951 3.85984 8.10983C3.78951 8.18016 3.75 8.27554 3.75 8.375V9.125C3.75 9.22446 3.78951 9.31984 3.85984 9.39017C3.93016 9.46049 4.02554 9.5 4.125 9.5H11.625C11.7245 9.5 11.8198 9.46049 11.8902 9.39017C11.9605 9.31984 12 9.22446 12 9.125V8.375C12 8.27554 11.9605 8.18016 11.8902 8.10983C11.8198 8.03951 11.7245 8 11.625 8ZM11.625 0.5H4.125C4.02554 0.5 3.93016 0.539509 3.85984 0.609835C3.78951 0.680161 3.75 0.775544 3.75 0.875V1.625C3.75 1.72446 3.78951 1.81984 3.85984 1.89016C3.93016 1.96049 4.02554 2 4.125 2H11.625C11.7245 2 11.8198 1.96049 11.8902 1.89016C11.9605 1.81984 12 1.72446 12 1.625V0.875C12 0.775544 11.9605 0.680161 11.8902 0.609835C11.8198 0.539509 11.7245 0.5 11.625 0.5ZM11.625 4.25H4.125C4.02554 4.25 3.93016 4.28951 3.85984 4.35984C3.78951 4.43016 3.75 4.52554 3.75 4.625V5.375C3.75 5.47446 3.78951 5.56984 3.85984 5.64017C3.93016 5.71049 4.02554 5.75 4.125 5.75H11.625C11.7245 5.75 11.8198 5.71049 11.8902 5.64017C11.9605 5.56984 12 5.47446 12 5.375V4.625C12 4.52554 11.9605 4.43016 11.8902 4.35984C11.8198 4.28951 11.7245 4.25 11.625 4.25Z" fill="#151875"/>
</svg>

                </Button>
                <span className=" hidden md:block">
                <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[162px] h-[28px] border  border-[#E7E6EF]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured"></SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
              </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={
            view === "grid"
              ? "grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4"
              : "space-y-6 grid-cols-1"
          }
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          <Button
            
            className="h-8 w-8 rounded-full p-0 text-[#FB2E86]"
          >
            1
          </Button>
          {[2, 3, 4].map((page) => (
            <Button
              key={page}
              
              className="h-8 w-8 rounded-full p-0"
            >
              {page}
            </Button>
          ))}
        </div>

        {/* Brand Logos */}
       <BrandLogos/>
      </div>
    </div>
  )
}