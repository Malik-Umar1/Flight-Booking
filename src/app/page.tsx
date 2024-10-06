 "use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchFlights from "./components/SearchFlights";



export default function Home() {
  const [searchQuery,setSearchQuery] = useState({
    from : "",
    to : "",
    departureDate : "",
    returnDate : "",
  });

  const handleInputChange =(type:string,value?:string) =>{
  
    setSearchQuery((prev)=>({...prev,[type]:value}))

  };
  console.log(searchQuery)

const router = useRouter()
  const handleSearch = () => {
    router.push(`/flights?from=${searchQuery.from}&to=${searchQuery.to}&departureDate=${searchQuery.departureDate}&returnDate=${searchQuery.returnDate}`);
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center relative">
      <h2 className=" text-3xl  tracking-tight">Good afternoon, Brian</h2>

      <div className="absolute top-0 left-[23%] transform -translate-x-1/2 h-[302px] w-px border-l border-dashed border-gray-300"></div>
      <div className="absolute top-0 right-[23%] transform -translate-x-1/2 h-[302px] w-px border-l border-dashed border-gray-300"></div>
      <div className="absolute top-0 left-[39%] transform -translate-x-1/2 h-[302px] w-px border-l border-dashed border-gray-300"></div>
      <div className="absolute top-0 right-[40%] transform -translate-x-1/2 h-[302px] w-px border-l border-dashed border-gray-300"></div>

      <div className="border rounded-lg p-5 p-5 mt-8 relative z-10 ">
        <span className="font-semibold text-xl bg-[#F5F7FA] px-8 py-1 rounded-md border-none">Flights</span>
       <SearchFlights handleSearch={handleSearch} handleInputChange={handleInputChange} />
      </div>


      <span className="text-[red]">Note: Implemented data from json file to fetch dummy flight details so most flights can be seen beteween (Del) & (BOM)</span>
    </div>
  );
}
