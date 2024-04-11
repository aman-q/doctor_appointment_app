import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DoctorList = ({doctorList,heading}) => {
  return (
    <div className='mb-10 px-8'>
        <h2 className='font-bold text-xl'>{heading='Popular Doctors'}</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 gap-7 mt-4' >
            {doctorList.length>0? doctorList.map((doctor,index)=>(
                <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary shadow-sm transition-all ease-in-out' key={index}>
                    <Image 
                       src={doctor.attributes?.image?.data?.attributes?.url} 
                       alt="doctorImage"
                       width={500}
                       height={200}
                       className='h-[200px] w-full object-cover rounded-lg'
                    />
                    <div className='mt-3 items-baseline flex flex-col gap-1'>
                        <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'
                        >{doctor.attributes?.categories?.data[0]?.attributes?.Name}</h2>
                        <h2 className='font-bold'>{doctor.attributes.Name}</h2>
                        <h2 className='text-primary text-sm'>{doctor.attributes?.Year_of_Experience}</h2>
                        <h2 className='text-gray-500 text-sm'>{doctor.attributes?.Address}</h2>
                        <Link href={'/details/'+doctor?.id} className="w-full">
                        <h2 className='p-2 px-3 border-[1px] border-primary
                          text-primary rounded-full w-full text-center cursor-pointer 
                          hover:bg-primary hover:text-white transition duration-300 ease-in-out'>
                        Book Now</h2>
                        </Link>
                        
                    </div>


                 </div>   
            ))
             :// Skeloton Loading
              [1,2,3,4,5,6].map((item,index)=>(
                <div className='h-[200px] bg-slate-100 w-full rounded-lg animate-pulse'>
              </div>

              ))
             
          }
        </div>
    </div>
  )
}

export default DoctorList
