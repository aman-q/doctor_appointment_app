"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
const Header = () => {
    const Menu=[
        {
            id:1,
            name: "Home",
            path: '/'
        },
        {
            id:2,
            name: "Explore",
            path: '/'
        },
        {
            id:3,
            name: "Contact us",
            path: '/contact-us/'
        },
    ]
    const {user}=useKindeBrowserClient();
    useEffect(()=>{
    },[user])
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
        <div className='flex items-center gap-10'>
            <Image 
                src='/logo.svg'
                alt='logo'
                width={80}
                height={80}
            />

            <ul className='md:flex gap-8 hidden'>
                {Menu.map((item,index)=>(
                    <Link href={item.path}>
                       <li key={item.id} className="cursor-pointer hover:text-primary hover:scale-110 transition-all ease-in-out">{item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        {user? 
            <Popover>
            <PopoverTrigger>
            <Image src={user?.picture} alt="profile-image" width={40} height={40} className="rounded-full"/>
            
            </PopoverTrigger>
            <PopoverContent className="w-44">
                <ul className='flex flex-col gap-2'>
                   
                    <Link href={'/my-booking'} className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>My Booking</Link>
                    <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'><LogoutLink> Log Out </LogoutLink></li>
                </ul>
            </PopoverContent>
          </Popover>
           
        
        // <LogoutLink><Button variant='outline'>Log out</Button></LogoutLink>
        :<LoginLink><Button>Get Started</Button></LoginLink>
        }
        
        
       
    </div>
  )
}

export default Header