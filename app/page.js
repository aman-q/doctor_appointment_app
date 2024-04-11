"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect ,useState } from "react";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";
import GloabalApi from "./_utils/GlobalApi";

export default function Home() {
  const [doctorList ,setDoctorList]=useState([])
  useEffect(()=>{
    getDoctorList();
  },[])
  const getDoctorList=()=>{
    GloabalApi.getDoctorList().then(resp=>{
      console.log(resp.data.data)
      setDoctorList(resp.data.data)
    })
  }
  return (
    <div>
      {/* Hero Section */}
      <Hero/>

      {/* SearchBar and Categories  */}
       <CategorySearch/>

       {/* Doctor List  */}
       <DoctorList doctorList={doctorList}/>
    </div>
  );
}
