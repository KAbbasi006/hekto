// // "use client";

// // import Image from "next/image";
// // import { useState } from "react";

// // export default function ProductPage() {
// //   const [activeTab, setActiveTab] = useState("description");

// //   const tabs = [
// //     { name: "Description", key: "description" },
// //     { name: "Additional Info", key: "info" },
// //     { name: "Reviews", key: "reviews" },
// //     { name: "Video", key: "video" },
// //   ];

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 py-8">
// //       {/* -------- 1st Part: Main Section -------- */}
// //       <div className="grid grid-cols-6 gap-6 items-start bg-white shadow-md rounded-lg p-6 mb-8">
// //         {/* Left Column: Small Images */}
// //         <div className="col-span-1 flex flex-col gap-2">
// //           <Image
// //             src="/images/productDetails/product1.png"
// //             alt="Product Image 1"
// //             width={100}
// //             height={100}
// //             className="rounded-lg w-full  "
// //           />
// //           <Image
// //             src="/images/productDetails/product2.png"
// //             alt="Product Image 2"
// //             width={100}
// //             height={100}
// //             className="rounded-lg w-full"
// //           />
// //           <Image
// //             src="/images/productDetails/product3.png"
// //             alt="Product Image 3"
// //             width={100}
// //             height={100}
// //             className="rounded-lg w-full"
// //           />
// //         </div>

// //         {/* Center Column: Large Image */}
// //         <div className="col-span-2">
// //           <Image
// //             src="/images/productDetails/product4.png"
// //             alt="Main Product"
// //             width={500}
// //             height={500}
// //             className="rounded-lg h-full"
// //           />
// //         </div>

// //         {/* Right Column: Text Content */}
// //         <div className=" col-span-3 flex flex-col gap-4">
// //           <h1 className="text-3xl font-bold text-gray-800">Playwood Arm Chair</h1>
// //           {/* Star Rating */}
// //           <div className="flex items-center gap-2">
// //             <span className="text-yellow-500">★★★★★</span>
// //             <span className="text-gray-600">(4.5)</span>
// //           </div>
// //           {/* Pricing */}
// //           <div className="flex items-center gap-2 text-2xl">
// //             <span className="text-red-500 font-semibold">$180.00</span>
// //             <span className="text-gray-400 line-through">$250.00</span>
// //           </div>
// //           {/* Colors */}
// //           <p className="font-semibold text-gray-700">Colors</p>
// //           {/* Add to Cart */}
// //           <button className="rounded hover:bg-purple-700 transition">
// //             Add to Cart  &#9825;
// //           </button>
// //           {/* Categories */}
// //           <div>
// //             <h3 className="font-semibold text-gray-700 mb-1">Categories</h3>
// //             <p className="text-gray-500">Chairs</p>
// //           </div>
// //           {/* Tags */}
// //           <div>
// //             <h3 className="font-semibold text-gray-700 mb-1">Tags</h3>
// //             <p className="text-gray-500">Interior, Home, Chair</p>
// //           </div>
// //           {/* Share */}
// //           <div>
// //             <h3 className="font-semibold text-gray-700 mb-2">Share</h3>
// //             <div className="flex gap-4">
// //               <a href="#" className="text-blue-600 hover:text-blue-800">
// //                 Facebook
// //               </a>
// //               <a href="#" className="text-pink-500 hover:text-pink-700">
// //                 Instagram
// //               </a>
// //               <a href="#" className="text-blue-400 hover:text-blue-600">
// //                 Twitter
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* -------- 2nd Part: Tabs with Content -------- */}
// //       <div className="bg-purple-50 mt-12 p-6 rounded-lg">
// //         {/* Tab Navigation */}
// //         <div className="flex gap-8 border-b">
// //           {tabs.map((tab) => (
// //             <button
// //               key={tab.key}
// //               className={`pb-2 text-lg font-semibold ${activeTab === tab.key
// //                   ? "border-b-2 border-purple-600 text-purple-600"
// //                   : "text-gray-600"
// //                 }`}
// //               onClick={() => setActiveTab(tab.key)}
// //             >
// //               {tab.name}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Tab Content */}
// //         <div className="mt-6">
// //           {activeTab === "description" && (
// //             <>
// //               <h2 className="text-xl font-bold mb-4">Various Tempors</h2>
// //               <p className="text-gray-600 mb-4">
// //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
// //                 nobis officia aut excepturi quod perspiciatis.
// //               </p>
// //               <h3 className="font-semibold mb-2">More Details</h3>
// //               <ul className="space-y-2 text-gray-600">
// //                 <li>➤ Item one with some description.</li>
// //                 <li>➤ Item two with additional detail.</li>
// //                 <li>➤ Item three providing more information.</li>
// //               </ul>
// //             </>
// //           )}
// //         </div>
// //       </div>

// //       {/* -------- 3rd Part: Related Products -------- */}
// //       <div className="mt-12">
// //         <h2 className="text-2xl font-bold mb-6">Related Products</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //           {/* Product Card 1 */}
// //           <div className="text-center shadow-lg rounded-lg p-4">
// //             <Image
// //               src="/images/productDetails/person1.png"
// //               alt="Fashion"
// //               width={200}
// //               height={200}
// //               className="mx-auto mb-4"
// //             />
// //             <h3 className="font-semibold">Men's Fashion Wear</h3>
// //             <p className="text-yellow-500">★★★★☆</p>
// //             <p className="text-gray-700">$120</p>
// //           </div>
// //           {/* Repeat for 3 more cards */}
// //           <div className="text-center shadow-lg rounded-lg p-4">
// //             <Image
// //               src="/images/productDetails/person2.png"
// //               alt="Women's Fashion"
// //               width={200}
// //               height={200}
// //               className="mx-auto mb-4"
// //             />
// //             <h3 className="font-semibold">Women's Fashion</h3>
// //             <p className="text-yellow-500">★★★★☆</p>
// //             <p className="text-gray-700">$150</p>
// //           </div>
// //           <div className="text-center shadow-lg rounded-lg p-4">
// //             <Image
// //               src="/images/productDetails/person3.png"
// //               alt="Dummy Fashion"
// //               width={200}
// //               height={200}
// //               className="mx-auto mb-4"
// //             />
// //             <h3 className="font-semibold">Dummy Fashion</h3>
// //             <p className="text-yellow-500">★★★★☆</p>
// //             <p className="text-gray-700">$130</p>
// //           </div>
// //           <div className="text-center shadow-lg rounded-lg p-4">
// //             <Image
// //               src="/images/productDetails/person4.png"
// //               alt="Wall Digital Clock"
// //               width={200}
// //               height={200}
// //               className="mx-auto mb-4"
// //             />
// //             <h3 className="font-semibold">Wall Digital Clock</h3>
// //             <p className="text-yellow-500">★★★★★</p>
// //             <p className="text-gray-700">$170</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }














// "use client";

// import Image from "next/image";
// import { useState } from "react";

// export default function ProductPage() {
//   const [activeTab, setActiveTab] = useState("description");

//   const tabs = [
//     { name: "Description", key: "description" },
//     { name: "Additional Info", key: "info" },
//     { name: "Reviews", key: "reviews" },
//     { name: "Video", key: "video" },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* -------- 1st Part: Main Section -------- */}
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-start bg-white shadow-md rounded-lg p-6 mb-8">
//         {/* Left Column: Small Images */}
//         <div className="col-span-1 flex flex-row  md:flex-col gap-2">
//           <Image
//             src="/images/productDetails/product1.png"
//             alt="Product Image 1"
//             width={100}
//             height={100}
//             className="rounded-lg w-24 md:w-full"
//           />
//           <Image
//             src="/images/productDetails/product2.png"
//             alt="Product Image 2"
//             width={100}
//             height={100}
//             className="rounded-lg w-24 md:w-full"
//           />
//           <Image
//             src="/images/productDetails/product3.png"
//             alt="Product Image 3"
//             width={100}
//             height={100}
//             className="rounded-lg w-24 md:w-full"
//           />
//         </div>

//         {/* Center Column: Large Image */}
//         <div className="col-span-4 md:col-span-2">
//           <Image
//             src="/images/productDetails/product4.png"
//             alt="Main Product"
//             width={500}
//             height={500}
//             className="rounded-lg h-auto w-full"
//           />
//         </div>

//         {/* Right Column: Text Content */}
//         <div className="col-span-3 flex flex-col gap-4">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
//             Playwood Arm Chair
//           </h1>
//           {/* Star Rating */}
//           <div className="flex items-center gap-2">
//             <span className="text-yellow-500">★★★★★</span>
//             <span className="text-gray-600">(4.5)</span>
//           </div>
//           {/* Pricing */}
//           <div className="flex items-center gap-2 text-xl md:text-2xl">
//             <span className="text-red-500 font-semibold">$180.00</span>
//             <span className="text-gray-400 line-through">$250.00</span>
//           </div>
//           {/* Colors */}
//           <p className="font-semibold text-gray-700">Colors</p>
//           <button className="rounded hover:bg-purple-700 transition">
//             Add to Cart &#9825;
//           </button>
//           {/* Categories */}
//           <div>
//             <h3 className="font-semibold text-gray-700 mb-1">Categories</h3>
//             <p className="text-gray-500">Chairs</p>
//           </div>
//           {/* Tags */}
//           <div>
//             <h3 className="font-semibold text-gray-700 mb-1">Tags</h3>
//             <p className="text-gray-500">Interior, Home, Chair</p>
//           </div>
//           {/* Share */}
//           <div>
//             <h3 className="font-semibold text-gray-700 mb-2">Share</h3>
//             <div className="flex gap-4">
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 Facebook
//               </a>
//               <a href="#" className="text-pink-500 hover:text-pink-700">
//                 Instagram
//               </a>
//               <a href="#" className="text-blue-400 hover:text-blue-600">
//                 Twitter
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* -------- 2nd Part: Tabs with Content -------- */}
//       <div className="bg-purple-50 mt-12 p-6 rounded-lg">
//         <div className="flex gap-4 flex-wrap border-b">
//           {tabs.map((tab) => (
//             <button
//               key={tab.key}
//               className={`pb-2 text-lg font-semibold ${
//                 activeTab === tab.key
//                   ? "border-b-2 border-purple-600 text-purple-600"
//                   : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab(tab.key)}
//             >
//               {tab.name}
//             </button>
//           ))}
//         </div>

//         <div className="mt-6">
//           {activeTab === "description" && (
//             <>
//               <h2 className="text-lg md:text-xl font-bold mb-4">Various Tempors</h2>
//               <p className="text-gray-600 mb-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
//                 nobis officia aut excepturi quod perspiciatis.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>➤ Item one with some description.</li>
//                 <li>➤ Item two with additional detail.</li>
//                 <li>➤ Item three providing more information.</li>
//               </ul>
//             </>
//           )}
//         </div>
//       </div>

//       {/* -------- 3rd Part: Related Products -------- */}
//       <div className="mt-12">
//         <h2 className="text-xl md:text-2xl font-bold mb-6">Related Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Product Cards */}
//           {[...Array(4)].map((_, index) => (
//             <div
//               key={index}
//               className="text-center shadow-lg rounded-lg p-4 bg-white"
//             >
//               <Image
//                 src={`/images/productDetails/person${index + 1}.png`}
//                 alt="Product"
//                 width={200}
//                 height={200}
//                 className="mx-auto mb-4"
//               />
//               <h3 className="font-semibold">Product Name</h3>
//               <p className="text-yellow-500">★★★★☆</p>
//               <p className="text-gray-700">$120</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }







"use client"

import * as React from "react"
import Link from "next/link"
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ui/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ProductGallery } from "@/components/ui/product-gallery"
import BrandLogos from "@/components/brands"


// This would typically come from an API or database
const product = {
  id: "1",
  title: "Plywood arm chair",
  price: 32.00,
  originalPrice: 40.00,
  rating: 5,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  images: [
    "/images/chair-3.png",
    "/images/chair-4.png",
    "/images/chair-1.png",
    "/images/chair-2.png",
  ],
  colors: ["Black", "Brown", "White"],
  additionalInfo: [
    "Aliquam dis vulputate vulputate integer sagittis.",
    "Facilisis mauris sit amet massa vitae tortor.",
    "Magna sit amet purus gravida quis blandit.",
    "Magna sit amet purus gravida quis blandit.",
  ],
}

const relatedProducts = [
  {
    id: "2",
    title: "Mens Fashion Wear",
    price: 43.00,
    originalPrice: 50.00,
    rating: 5,
    image: "/images/chair1.png",
  },
  {
    id: "3",
    title: "Women's Fashion",
    price: 67.00,
    rating: 4,
    image: "/images/chair4.png",
  },
  {
    id: "4",
    title: "Wolx Dummy Fashion",
    price: 67.00,
    rating: 5,
    image: "/images/chair5.png",
  },
  {
    id: "5",
    title: "Top Wall Digital Clock",
    price: 51.00,
    rating: 4,
    image: "/images/chair2.png",
  },
]

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0])
  const [quantity, setQuantity] = React.useState(1)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Product Details</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Product Details</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <ProductGallery images={product.images} />
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#151875]">{product.title}</h1>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
              <span className="ml-2 text-gray-500">(22)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-[#151875]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-gray-600">{product.description}</p>
            <div>
              <label className="font-bold text-[#151875]">Color</label>
              <div className="mt-2 flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-6 w-6 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-[#FB2E86]"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-8 border border-r-0 hover:bg-gray-50"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="h-10 w-12 border text-center"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-8 border border-l-0 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <Button className="bg-[#FB2E86] text-white rounded-xl hover:bg-[#FB2E86]/90">
                Add To Cart
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-pink-50 hover:text-[#FB2E86]"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-2 border-t pt-6">
              <p>
                <span className="font-bold">Categories:</span> Furniture
              </p>
              <p>
                <span className="font-bold">Tags:</span> Modern, Chair
              </p>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="border-b">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional">Additional Info</TabsTrigger>
              <TabsTrigger value="reviews">Reviews (0)</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-8">
              <div className="prose max-w-none">
                <p>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                  ornare faucibus vel sed et eleifend habitasse amet. Montes,
                  mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                  Velit consectetur neque, elit, aliquet. Non varius proin sed
                  urna, egestas consequat laoreet diam tincidunt. Magna eget
                  faucibus cras justo, tortor sed donec tempus. Imperdiet
                  consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in
                  fringilla vulputate nunc nec. Dui, massa viverr .
                </p>
              </div>
            </TabsContent>
            <TabsContent value="additional" className="mt-8">
              <ul className="list-inside list-disc space-y-2">
                {product.additionalInfo.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              <p>No reviews yet.</p>
            </TabsContent>
            <TabsContent value="video" className="mt-8">
              <p>No video available.</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold text-[#151875]">
            Related Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* Brand Logos */}
        {/* <div className="mt-16 flex items-center justify-center gap-8 grayscale">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src="/placeholder.svg?height=50&width=120"
              alt={`Brand logo ${i + 1}`}
              className="h-12 w-auto opacity-50 hover:opacity-100"
            />
          ))}
        </div> */}
        <BrandLogos/>
      </div>
    </div>
  )
}