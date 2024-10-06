import { Separator } from '@/components/ui/separator'
import { Search, X } from 'lucide-react'
import React from 'react'
import airports from "@/data/airports.json"
import { DateFormat } from '@/utils/DateFormat'
import LoadingBar from './LoadingBar'

const EditSearch = ({ handleSearchClick, handleBackClick,fromAirport, toAirport,departureDate,returnDate ,isLoading }:any) => {
  console.log("this is from airport", fromAirport)
  const fromAirportName = airports.find(airport => airport.code === fromAirport);
  const toAirportName = airports.find(airport =>airport.code === toAirport )


  console.log("returnDate", returnDate)
  console.log("departureDate", departureDate)
  return (
    <div className='bg-white'>
     <div className="p-10 border flex items-center gap-96 justify-center">
        
        <div className="flex h-12 items-center border p-4  rounded-3xl space-x-4 text-sm">
        <div className="w-[150px] flex  text-ellipsis gap-1" >
         <span className="text-">{fromAirport}</span>
         <h2 className="font-normal truncate  text-gray-400">{fromAirportName?.name || "--"}</h2>
        </div>
         <Separator orientation="vertical" className="h-[30px]" />
         <div className="w-[150px] flex  text-ellipsis gap-1" >
         <span className="text-">{toAirport}</span>
         <h2 className="font-normal truncate  text-gray-400">{toAirportName?.name || "--"} </h2>
           </div>
         <Separator orientation="vertical"  className="h-[30px]" />
         <div className="flex  text-ellipsis gap-1" >
           <span className="text-sm">{DateFormat(departureDate)} - {DateFormat(returnDate)}</span>
            </div>
         <Separator orientation="vertical"  className="h-[30px]" />
         <div>
           <div className="rounded-full bg-[#e5ebeb] flex items-center justify-center p-2">
           <Search className="cursor-pointer" onClick={handleSearchClick} size={17} />
           </div>
 
         </div>
        </div>
 
 <div className=" w-[300px] flex justify-end">
 <div className="border rounded-full p-2">
        <X onClick={handleBackClick} className='cursor-pointer' />
        </div>
 </div>

       </div>
       {isLoading && <LoadingBar/>}
       
      
    </div>
  )
}

export default EditSearch