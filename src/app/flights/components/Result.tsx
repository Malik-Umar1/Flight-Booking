"use client";

import { useState, useEffect } from "react";
import { LoadingOverlay } from "@/app/components/LoadingOverlay";
import { useRouter } from "next/navigation";
import FlightCard from "@/app/components/FlightCard";
import SkeletonLayout from "@/app/components/SkeletonLayout";
import EditSearch from "@/app/components/EditSearch";
import flightsData from "@/data/flightsData.json";
import SearchFlights from "@/app/components/SearchFlights";
import { TFlight } from "@/data/types/types";
import SideBar from "@/app/components/SideBar";

export default function Results({
  fromAirport,
  toAirport,
  departureDate,
  returnDate,
}: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isSideSliderOpen, setIsSideSliderOpen] = useState(false);
  const [filteredFlights,setFilteredFlights] = useState<TFlight[]>([])
  const [selectedFlight,setSelectedFlight] = useState<TFlight>()
  const [loadingStep, setLoadingStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState({
    from: fromAirport,
    to: toAirport,
    departureDate: departureDate,
    returnDate : returnDate
  });

  const router = useRouter();
  const handleSearch = () => {
    router.push(
      `/flights?from=${searchQuery.from}&to=${searchQuery.to}&departureDate=${searchQuery.departureDate}&returnDate=${searchQuery.returnDate}`
    );
    handleSearchFlights();
    setIsSliderOpen(false);
  };

  const getFlights = new Promise<TFlight[]>((resolve) => {
    setTimeout(() => {
      setLoadingStep(1);
      resolve(flightsData);  
    }, 7000);
  });

  const handleSelectFlight =(id:string)=>{
  const flight = filteredFlights.find(flight=>flight.id=== id);
  setSelectedFlight(flight)
  setIsSideSliderOpen(true);
  };

  const handleSearchFlights = async () =>{   
    try{
        setIsLoading(true)
        const flights  =  await getFlights
        const filtered = flights.filter((flight)=>
          flight.departure.code === searchQuery.from &&
          flight.arrival.code === searchQuery.to
        );
        setFilteredFlights(filtered)
       console.log(flights)
    }catch(error){
        console.error(error)
    }
    finally{
        setIsLoading(false)
    }
  };

  useEffect(()=>{
      handleSearchFlights();
  },[]);


  useEffect(() => {
    const loadSteps = () => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setLoadingStep(1);
          resolve();
        }, 2000);
      })
        .then(() => {
          return new Promise<void>((resolve) => {
            setTimeout(() => {
              setLoadingStep(2);
              resolve();
            }, 2000);
          });
        })
        .then(() => {
          return new Promise<void>((resolve) => {
            setTimeout(() => {
              setLoadingStep(3);
              resolve();
            }, 2000);
          });
        });
    };
    loadSteps();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
     
    }, 8000);
    return () => clearTimeout(timer);
  }, []);


  const handleSearchClick = () => {
    setIsSliderOpen((prevState) => !prevState);
  
  };


  const handleBackClick = () => {
    router.push('/');
  };


  const handleSideSlider = () => {
    setIsSideSliderOpen((prevState) => !prevState);
  };

  const handleInputChange = (type: string, value?: string) => {
    setSearchQuery((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="h-screen relative">
      <div className="relative z-20">
             <EditSearch
            handleBackClick={handleBackClick}
            isLoading={isLoading}
            handleSearchClick={handleSearchClick}
            fromAirport={fromAirport}
            toAirport={toAirport}
            departureDate={departureDate}
            returnDate={returnDate}
            />
   
       
      </div>

      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 p-10 flex items-center justify-center transition-transform duration-500 ease-in-out ${
          isSliderOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <SearchFlights
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
      </div>

     <SideBar flight={selectedFlight} handleSideSlider={handleSideSlider} isSideSliderOpen={isSideSliderOpen}/>

      {isLoading && (
        <div className="absolute inset-0 z-10">
          <LoadingOverlay loadingStep={loadingStep} />
        </div>
      )}
      {isLoading ? (
        <>
          <div className="p-24 px-40  space-y-6 text-gray-500">
            <SkeletonLayout />
            <SkeletonLayout />
            <SkeletonLayout />
            <SkeletonLayout />
            <SkeletonLayout />
            <SkeletonLayout />
          </div>
        </>
      ) : (
        <div className="p-10 px-40  space-y-6 text-gray-500">
          <span>Showing {filteredFlights.length} result(s)</span>
          <div className="w-full h-screen  ">
            {filteredFlights.length>0?filteredFlights.map((flight,index)=>(
                <FlightCard data={flight} key={index} handleSideSlider={handleSelectFlight} />
            )):(
                <p>No flights found</p>
            )}
            
          </div>
        </div>
      )}
    </div>
  );
}
