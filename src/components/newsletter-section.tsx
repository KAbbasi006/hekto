"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <section className="relative overflow-hidden bg-[#F6F5FF] py-32">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="mx-auto mb-8 max-w-2xl text-3xl font-bold text-[#151875]">
          Get Leatest Update By Subscribe Our Newsletter
        </h2>
        <form onSubmit={handleSubmit}>
          <Button type="submit" className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">
            Shop Now
          </Button>
        </form>
      </div>
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/placeholder.svg?height=800&width=1600"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}

{/* <div className='pt-20'>
<Image
    src="/images/top/banner.png"
    alt="footer"
    width="990"
    height="990"
    className='w-full h-[400px] object-fit'
/>
<div className='flex justify-center items-center flex-col relative bottom-[250px] md:w-[574px] h-auto m-auto'>
    <h4 className='text-[#151875] text-center text-[20px] md:text-[35px] font-[700]'>Get Leatest Update By Subscribe 0ur Newslater</h4>
    <button className="w-[140px] md:w-[160px] h-[40px] md:h-[50px] bg-[#FB2E86] text-white rounded-md mt-6">
        Shop Now
    </button>
</div>
</div> */}
