"use client"

import { useState, useEffect } from "react";
import { LoadingOverlay } from "../components/LoadingOverlay";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowLeftRight, Clock4, Search, X } from "lucide-react";
import FlightCard from "../components/FlightCard";
import { Dropdown } from "../components/DropDown";
import { DatePickerDemo } from "../components/DatePicker";
import SearchButton from "../components/SearchButton";
import { Button } from "@/components/ui/button";
import SkeletonLayout from "../components/SkeletonLayout";
import EditSearch from "../components/EditSearch";
import flightsData from "@/data/flightsData.json"


export default function Results({fromAirport,toAirport,departureDate,returnDate}:any) {
const [isLoading,setIsLoading] = useState(true);
const [isSliderOpen, setIsSliderOpen] = useState(false);
const [isSideSliderOpen, setIsSideSliderOpen] = useState(false);


const router = useRouter();

useEffect(()=>{
    const timer = setTimeout(()=>{
        setIsLoading(false);
    },8000);

    return ()=> clearTimeout(timer);
},[]);

const handleSearchClick = () => {
      setIsSliderOpen((prevState) => !prevState);
    };

    const handleCancelClick = () =>{
      setIsSliderOpen((prevState) => !prevState);
    };
    const handleBackClick = () => {
      router.back(); 
    };

    const handleSideSlider = () =>{
      setIsSideSliderOpen((prevState) => !prevState);
    }
return(
    <div className="h-screen relative">
  
  <div className="relative z-20">
        <EditSearch handleBackClick={handleBackClick} handleSearchClick={handleSearchClick} fromAirport={fromAirport} toAirport={toAirport}
        departureDate={departureDate} returnDate={returnDate} />
      </div>

      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 p-10 flex items-center justify-center transition-transform duration-500 ease-in-out ${
          isSliderOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >

<div className="mt-4 space-y-5 ">
          <div className="flex space-x-4 items-center">
      
            <div className="w-44">
             <Dropdown  placeholder="Where from?"/>
            </div>

            <div className="rounded-[50%] bg-[#F5F7FA]  h-[35px] flex items-center justify-center w-[35px]"> 
        
              <ArrowLeftRight size={16}/>
            </div>
         
            <div className="w-44">
               <Dropdown placeholder="Where to?"/>
            </div>

            <DatePickerDemo text="Departure"/>
            <DatePickerDemo text="Return"/>
          </div>
          <div className=" flex justify-end gap-5">
          <SearchButton />
          <Button onClick={handleCancelClick} className="bg-transparent text-black border hover:bg-transparent">Cancel</Button>
          </div>
        </div>
       
      </div>

       <div
        className={`fixed top-0 right-0 h-full  w-2/5 bg-white shadow-lg z-50 p-8 px-8 border transition-transform duration-500 ease-in-out ${
          isSideSliderOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
         <div className="rounded-[50%] bg-[#F5F7FA]  h-[35px] flex items-center justify-center w-[35px]"> 
              <ArrowLeft onClick={handleSideSlider} className="cursor-pointer" size={18}/>
            </div>
        <div className="py-7 border-b-2">
          <h1 className="text-[20px] text-[#000000]">Flight Details</h1>
        </div>

        <div className="flex mt-5 items-center gap-2">
          <div className="border ml-1 border-2 border-black rounded-full h-[14px] w-[14px]"></div>
          <span className="text-[12px]">Sat 28 Sept • 2:15</span>
        </div>
        <div className="h-[120px] flex p-2 gap-3">
          <div className="border-l-2 ml-0 border-black w-1 h-full"></div>
          <div className="w-full ">
          <h1 className="text-[14px] text-black h-8 font-semibold w-[240px] ">DXB • Dubai International Airport</h1>
          <div className="flex flex-col w-full  items-end justify-end">
            <div className="flex flex-col w-2/5  justify-start items-start">
            <span className="text-[12px]">Saudi Arabian Airlines • SV553</span>
            <span  className="text-[12px]">Economy • A330</span>
            <span  className="text-[12px]">Flight time 3h 45m</span>
            </div>
           
          </div>
          </div>
        </div>

        <div className="flex ml-1 items-center gap-2">
          <div className="border border-2 border-black rounded-full h-[14px] w-[14px]"></div>
          <span className="text-[12px]">Sat 28 Sept • 2:15</span>
        </div>

        <div className="h-[130px] flex p-2 gap-3">
        <div className="border-l-2 ml-0 border-black w-1 h-full border-dashed"></div>
        <div className="w-full ">
          <h1 className="text-[14px] text-black h-8 font-semibold w-[240px] ">DXB • Dubai International Airport</h1>
          <div className="p-7 flex  gap-1 px-14 items-center">
          <Clock4 color="#787B80" size={16}/>
            <span className="text-[14px]"> Layover 2h 25m</span>        
          </div>
          </div>
        </div>

        <div className="flex ml-1 items-center gap-2">
          <div className="border border-2 border-black rounded-full h-[14px] w-[14px]"></div>
          <span className="text-[12px]">Sat 28 Sept • 2:15</span>
        </div>
        <div className="h-[120px] flex p-2 gap-3">
          <div className="border-l-2 ml-0 border-black w-1 h-full"></div>
          <div className="w-full">
          <h1 className="text-[14px] text-black h-8 font-semibold w-[240px] ">DXB • Dubai International Airport</h1>
          <div className="flex flex-col w-full  items-end justify-end">
            <div className="flex flex-col w-2/5  justify-start items-start">
            <span className="text-[12px]">Saudi Arabian Airlines • SV553</span>
            <span  className="text-[12px]">Economy • A330</span>
            <span  className="text-[12px]">Flight time 3h 45m</span>
            </div>
           
          </div>
          </div>
        </div>

        <div className="flex ml-1 items-center gap-2">
          <div className="border border-2 border-black rounded-full h-[14px] w-[14px]"></div>
          <span className="text-[12px]">Sat 28 Sept • 2:15</span>
        </div>
        <h1 className="text-[14px] text-black h-8 text-end font-semibold w-[240px] ">DXB • Dubai International Airport</h1>
      </div> 
      
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <LoadingOverlay />
        </div>
      )}
    {isLoading ? (
      <>
       <div className="p-24 px-40  space-y-6 text-gray-500">
       <SkeletonLayout/>
       <SkeletonLayout/>
       <SkeletonLayout/>
       <SkeletonLayout/>
       <SkeletonLayout/>
       <SkeletonLayout/>
       </div>
      </>
    ) : (
      <div className="p-10 px-40  space-y-6 text-gray-500">
       <span>Showing 300 of 500 results</span>
        <div className="w-full h-screen  ">
        
         <FlightCard  
         handleSideSlider={handleSideSlider}/>
        </div>
      </div>
     )}
  </div>
);
}

