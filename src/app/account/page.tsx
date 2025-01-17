// import Link from "next/link";
// import BrandLogos from "@/components/brands";

// export default function login() {

//   return (
//     <div>
//       {/* Header Section */}
//       <div className="w-full h-[286px] bg-[#F6F5FF]">
//         <div className="max-w-7xl mx-auto py-24 text-center sm:text-left md:px-6 lg:px-8">
//           <h2 className="text-[#101750] text-[26px] md:text-[36px] font-[700]">
//             My Account                    </h2>
//           <Link href="/" className="px-2">
//             Home.
//           </Link>
//           <Link href="">Pages.</Link>
//           <Link href="/login" className="text-[#FB2E86] text-[16px] font-[500] px-2">
//             My Account
//           </Link>
//         </div>
//       </div>
//       <div>
//         <div className="py-20 flex items-center justify-center bg-gray-50">
//           <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-center text-black mb-4">Login</h2>
//             <p className="text-gray-500 text-center mb-6">
//               Please login using account detail below.
//             </p>
//             <form>
//               {/* Email Field */}
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Email Address"
//                   className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 />
//               </div>
//               {/* Password Field */}
//               <div className="mb-4">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Password"
//                   className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 />
//               </div>
//               {/* Forgot Password Link */}
//               <div className="mb-6 text-right">
//                 <a
//                   href="#"
//                   className="text-sm text-pink-500 hover:underline"
//                 >
//                   Forgot your password?
//                 </a>
//               </div>
//               {/* Sign In Button */}
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               >
//                 Sign In
//               </button>
//             </form>
//             {/* Bottom Links */}
//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-500">
//                 Dont have an Account?{" "}
//                 <a href="#" className="text-pink-500 hover:underline">
//                   Create account
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <BrandLogos />
//     </div>
//   );
// };



"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import BrandLogos from "@/components/brands"

export default function AccountPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#F6F5FF] h-[289px] flex items-center justify-center md:justiify-start py-16">
        <div className="container   lg:w-[1177px] mx-auto px-4">
          <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">My Account</h1>
          <div className="flex justify-center text-[#151875] md:justify-start items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">My Account</span>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="container  mx-auto px-4 py-16">
        <div className="mx-auto max-w-md">
          <div className="rounded-lg border bg-white p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#151875] mb-4">Login</h2>
            <p className="text-gray-600 mb-6">
              Please login using account detail below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email Address"
                required
                className="bg-white"
              />
              <Input
                type="password"
                placeholder="Password"
                required
                className="bg-white"
              />
              <div className="flex items-center justify-between">
                <Link
                  href="/account/forgot-password"
                  className="text-sm text-gray-600 hover:text-[#FB2E86]"
                >
                  Forgot your password?
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#FB2E86] text-white hover:bg-[#FB2E86]/90"
              >
                Sign In
              </Button>
              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Don&apos;t have an Account?{" "}
                  <Link
                    href="/account/register"
                    className="text-[#FB2E86] hover:underline"
                  >
                    Create account
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <BrandLogos />
    </div>
  )
}