// import BrandLogos from "@/components/brands";
// import Image from "next/image";
// import Link from "next/link";

// const NotFoundPage = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen">

//             <div className="w-full h-[286px] bg-[#F6F5FF]">
//                 <div className="max-w-7xl mx-auto py-24 md:px-6 lg:px-8 text-center sm:text-left">
//                     <h2 className="text-[#101750] text-[26px] md:text-[36px] font-[700]">
//                         404 Not Found
//                     </h2>
//                     <Link href="/" className="px-2">
//                         Home.
//                     </Link>
//                     <Link href="">Pages.</Link>
//                     <Link href="notfound" className="text-[#FB2E86] text-[16px] font-[500] px-2">
//                         404 Not Found
//                     </Link>
//                 </div>
//             </div>
//             {/* Image Section */}
//             <div className="w-full max-w-lg md:max-w-xl lg:max-w-3xl">
//                 <Image
//                     src='/images/notfound/404.png' // Replace with your actual image path
//                     alt="404 Not Found"
//                     width={800} // Default width for large screens
//                     height={800} // Default height for large screens
//                     className="w-full h-auto" // Ensures the image is responsive
//                     priority // Optional: Loads the image faster
//                 />
//             </div>

//             {/* Button Section */}
//             <Link href="/" passHref>
//                 <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg text-sm font-medium hover:bg-pink-600 transition">
//                     Back To Home
//                 </button>
//             </Link>
//             <BrandLogos/>
//         </div>
//     );
// };

// export default NotFoundPage;



import Link from "next/link"
import { Button } from "@/components/ui/button"
import BrandLogos from "@/components/brands"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
       {/* Page Header */}
       <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
          <div className="container md:w-[1177px] mx-auto px-4">
            <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">404 Not Found</h1>
            <div className="flex justify-center text-[#151875] md:justify-start items-center gap-2 text-sm">
              <Link href="/">Home</Link>
              <span>•</span>
              <Link href="/pages">Pages</Link>
              <span>•</span>
              <span className="text-[#FB2E86]">404 Not Found</span>
            </div>
          </div>
        </div>

        {/* 404 Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="md:w-[1177px] mx-auto text-center ">
            <img
              src="/images/notfound/404.png"
              alt="404 Illustration"
              className="mx-auto"
            />
           
            <Button 
              asChild
              className="bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white px-8 rounded"
            >
              <Link href="/">
                Back To Home
              </Link>
            </Button>
          </div>
        </div>

        <BrandLogos />
      </main>
    </div>
  )
}