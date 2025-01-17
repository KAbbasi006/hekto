// import Link from "next/link";
// import Image from "next/image";
// import Shopex from "@/components/shopex";
// import BrandLogos from "@/components/brands";


// export default function about() {

//     return (
//         <div>
//              <div className="w-full h-[286px] bg-[#F6F5FF]">
//         <div className="max-w-7xl mx-auto  py-24 text-center sm:text-left md:px-6 lg:px-8">
//           <h2 className="text-[#101750] text-[26px] md:text-[36px] font-[700]">About Us</h2>
//           <Link href="/" className="px-2">Home.</Link>
//           <Link href="">Pages.</Link>
//           <Link href="/about" className="text-[#FB2E86] text-[16px] font-[500] px-2">About Us</Link>
//         </div>
//       </div>
//             <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-6 py-12 gap-8">
//                 {/* Image Section */}
//                 <div className="relative">
//                     <Image
//                         src="/images/about/about.png"
//                         alt="Business Meeting"
//                         width="900"
//                         height="900"
//                         className="w-full max-w-md "
//                     />
//                 </div>

//                 {/* Text Section */}
//                 <div className="text-center md:text-left space-y-4 max-w-lg">
//                     <h2 className="text-2xl md:text-3xl font-bold text-black">
//                         Know About Our Ecommerce <br /> Business, History
//                     </h2>
//                     <p className="text-gray-600">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
//                         ultrices tristique aliquam, malesuada diam est. Malesuada sem
//                         tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae
//                         lobortis quis bibendum quam.
//                     </p>
//                     <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
//                         Contact us
//                     </button>
//                 </div>
//             </div>
//             <Shopex />
//             <BrandLogos />
//         </div>
//     );
// };




import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/ui/feature-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";



export default function AboutPage() {
  return (
    <div >
      {/* Page Header */}
      <div className=" h-[286px] bg-[#F6F5FF] flex items-center py-16">
        <div className="container md:w-[1170px] mx-auto px-4">
          <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">About Us</h1>
          <div className="flex justify-center text-[#151875] md:justify-start items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">About Us</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container  md:w-[1170px] mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute mx-4 h-full w-full "></div>
            <img
              src="/images/about.png"
              alt="About Us"
              className="relative w-full rounded-lg"
            />


            



          </div>
          <div className="md:pl-5 py-5">
            <h2 className="text-3xl font-bold text-[#151875] mb-8">
              Know About Our Ecommerce Business, History
            </h2>
            <p className="text-gray-600 text-[15px] mb-8 md:mb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
              ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
              amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
              quis bibendum quam.
            </p>
            <Button className="bg-[#FB2E86] text-white px-8 rounded-[5px] hover:bg-[#FB2E86]/90">
              Contact us
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className=" my-8 pb-16">
        <div className="container md:w-[1170px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#151875] mb-12">
            Our Features
          </h2>
          <div className="grid gap-8 md:grid-cols-4 ">
          <FeatureCard
              image="/images/delvry.png"
              title="Free Delivery"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
           />
            <FeatureCard
               image="/images/cashback.png"
              title="100% Cash Back"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <FeatureCard
              image="/images/guarentee.png"
              title="Quality Product"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <FeatureCard
               image="/images/support.png"
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="  mx-auto bg-gray-100  mb-20 md:mb-36 px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#151875] mb-12">
          Our Client Say!
        </h2>
        <div className="flex justify-center   mx-auto ">
          <div className=" md:w-[680px]">
          <TestimonialCard
            name="Selina Gomez"
            role="Ceo At Webecy Digital"
            image="/images/clients.png"
            testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam."
          />
         </div>
        </div>
      </div>
    </div>
  )
}