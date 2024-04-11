import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
       <Image
         alt="doctologo"
         src="/doctor.jpg"
         className="absolute inset-0 h-full w-full rounded-3xl object-cover"
         width={800}
         height={800}
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Find & Book <sapn className="text-primary" >Appointment </sapn>  
         with your Favorite <span className="text-primary">Doctor</span> </h2>

        <p className="mt-4 text-gray-600">
        Welcome to ClinicClick, your comprehensive doctor booking website designed 
        to streamline your healthcare experience. At ClinicClick, we're dedicated to
         connecting patients with trusted healthcare professionals quickly and conveniently.
        </p>

       <Button className="mt-10">Explore Now</Button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero