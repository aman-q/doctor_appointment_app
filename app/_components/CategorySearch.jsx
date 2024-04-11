"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'


const CategorySearch = () => {
  const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList()
  },[])
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.data.data)
      console.log(resp.data.data)
    })
  }
  return (
    <div className='mb-10 items-center px-5 flex flex-col gap-4'>
      <h2 className='font-bold text-5xl tracking-wide'>Search 
      <span className='text-primary'> Doctor</span></h2>
      <h2 className='text-gray-500 text-2xl'>
        Search Your Doctor and Book Appointment in just one click</h2>

        {/* <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Search.." />
            <Button type="submit">
                <Search className='h-4 w-4 mr-2' />
                Search</Button>
         </div> */}
          {/* display list of category */}
          <div className="grid  grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6">
          {categoryList.length>0 ? categoryList.map((item,index)=>index<6 &&(
            <Link href={'/search/'+item.attributes.Name} key={index} className='flex h-auto w-auto flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-2 hover:scale-110 transition-all ease-in-out cursor-pointer'> 
              <Image src={item.attributes?.Icon?.data.attributes?.url} 
                  alt="icon"
                  width={40}
                  height={40}
                />
                <lable className="text-blue-600 text-sm ">{item?.attributes?.Name}</lable>
            </Link>

          ))
          : 
          [1,2,3,4,5,6].map((item,index)=>(
            <div className='text-blue  m-2 w-[100px] h-[100px] bg-slate-200 animate-pulse rounded-sm' key={index}> </div>
          ))
          
        }
          </div>

          
    </div>
  )
}

export default CategorySearch