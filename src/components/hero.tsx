import React from 'react';
import Image from 'next/image';

export default function Herosection() {
  return (

    <div className="bg-[#F2F0FF] w-full h-auto flex flex-col lg:flex-row items-center justify-around p-4 lg:p-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <Image
          src="/images/heroS/lamp.png"
          alt='lamp image'
          width={380}
          height={300}
          className="w-[260px] h-[200px] md:w-[300px] md:h-[240px] xl:w-[380px] xl:h-[300px]"
        />
        <div className="text-center lg:text-left ">
          <h4 className="text-[#FB2E86] text-[16px] font-[lato] font-bold">
            Best Furniture For Your Castle...
          </h4>
          <h2 className="text-[24px] md:text-[36px] xl:text-[45px] font-bold \     mt-2">
            New Furniture Collection <br /> Trends in 2020
          </h2>
          <p className="text-[14px] md:text-[16px] font-[lato] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing <br /> in phasellus non in justo.
          </p>
          <button className="w-[140px] md:w-[160px] h-[40px] md:h-[50px] bg-[#FB2E86] text-white rounded-md mt-6">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-12 lg:mt-0">
        {/* Background Circles */}
        <div className="bg-[#ECD2FA59] w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full absolute -top-8 right-5 lg:right-12"></div>
        <div className="bg-[#ECD2FA59] w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full"></div>

        {/* Hero Image */}
        <Image
          src="/images/heroS/armch.png"
          alt="Hero"
          width={900}
          height={900}
          className="absolute top-[25px] md:top-[30px] lg:top-[50px] right-12 lg:right-20 w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full"
        />

        {/* Discount Badge */}
        <div className="bg-[#00C1FE] w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full absolute top-[1px] md:top-[1px] lg:top-[4px] right-[1px] md:right-[1px] xl:right-16 flex items-center justify-center">
          <p className="text-white text-[16px] md:text-[20px] xl:text-[26px] font-bold font-[Josefin Sans] text-center">
            50%
            <br />
            off
          </p>
        </div>
      </div>
    </div>
  );
}
 

// "use client";

// import { useEffect, useState, useRef } from "react";

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);

//   // Array of images (or content) for the carousel
//   const slides = [
//     "/images/promotional.png",
//     "/images/promotional.png",
//     "/images/promotional.png"
//   ];

//   // Handle the auto-scrolling effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   // Scroll to the current slide when index changes
//   useEffect(() => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollTo({
//         left: carouselRef.current.offsetWidth * currentIndex,
//         behavior: "smooth", // Add smooth scrolling behavior
//       });
//     }
//   }, [currentIndex]);

//   // Mouse swipe functionality
//   const [isMouseDown, setIsMouseDown] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const onMouseDown = (e: React.MouseEvent) => {
//     setIsMouseDown(true);
//     setStartX(e.pageX - carouselRef.current!.offsetLeft);
//     setScrollLeft(carouselRef.current!.scrollLeft);
//   };

//   const onMouseMove = (e: React.MouseEvent) => {
//     if (!isMouseDown) return;
//     const x = e.pageX - carouselRef.current!.offsetLeft;
//     const walk = (x - startX) * 2; // Adjust the speed of the scroll
//     carouselRef.current!.scrollLeft = scrollLeft - walk;
//   };

//   const onMouseUp = () => {
//     setIsMouseDown(false);
//   };

//   const onMouseLeave = () => {
//     setIsMouseDown(false);
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         ref={carouselRef}
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{
//           width: "100%",
//            overflowX: "hidden",// Enable horizontal scrolling
//         }}
//         onMouseDown={onMouseDown}
//         onMouseMove={onMouseMove}
//         onMouseUp={onMouseUp}
//         onMouseLeave={onMouseLeave}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="flex-shrink-0 w-full h-full">
//             <img src={slide} alt={`Slide ${index}`} className="w-full h-full" />
//           </div>
//         ))}
//       </div>

//       {/* Pagination buttons */}
//       <span className="absolute bottom-4 md:bottom-8 left-1/2 h-3 items-center transform -translate-x-1/2 p-0 flex gap-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`btn btn-xs ${currentIndex === index ? " text-pink-500  py-0  border rounded-full border-pink-500 h-[11px] justify-center text-center pb-[3.8px]  flex items-center" : " text-pink-500"}`}
//           >
//             ●
//           </button>
//         ))}
//       </span>
//     </div>
//   );
// };

// export default Hero;