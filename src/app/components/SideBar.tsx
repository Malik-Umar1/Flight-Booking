import { TFlight } from "@/data/types/types";
import { formatTime } from "@/utils/TimeFormatter";
import { ArrowLeft, Clock4 } from "lucide-react";
import React from "react";

type SideBarProps ={
  isSideSliderOpen : boolean
  handleSideSlider : ()=>void;
  flight : TFlight | undefined;
}

const SideBar = ({ isSideSliderOpen, handleSideSlider, flight }:SideBarProps) => {
  console.log("sidebardata", flight);
  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full  w-2/5 bg-white shadow-lg z-50 p-8 px-8 border transition-transform duration-500 ease-in-out ${
          isSideSliderOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="rounded-[50%] bg-[#F5F7FA]  h-[35px] flex items-center justify-center w-[35px]">
          <ArrowLeft
            onClick={handleSideSlider}
            className="cursor-pointer"
            size={18}
          />
        </div>
        <div className="py-7 border-b-2">
          <h1 className="text-[20px] text-[#000000]">Flight Details</h1>
        </div>

        <div className="flex mt-5 items-center gap-2">
          <div className="border ml-1 border-2 border-black rounded-full h-[14px] w-[14px]"></div>
          <span className="text-[12px]">
            {formatTime(flight?.departure.time || "No data")}
          </span>
        </div>
        <div className="h-[120px] flex p-2 gap-3">
          <div className="border-l-2 ml-0 border-black w-1 h-full"></div>
          <div className="w-full ">
            <h1 className="text-[14px] text-black h-8 font-semibold w-[240px] ">
              {flight?.departure.code} • {flight?.departure.airport}
            </h1>
            <div className="flex flex-col w-full  items-end justify-end">
              <div className="flex flex-col w-2/5  justify-start items-start">
                <span className="text-[12px]">
                  {flight?.departure.code} • {flight?.airline}
                </span>
                <span className="text-[12px]">
                  Economy • {flight?.flightNumber}
                </span>
                <span className="text-[12px]">
                  Flight time {flight?.duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {flight && flight.stops && flight?.stops?.length > 0 ? (
          <>
            <div className="flex ml-1 items-center gap-2">
              <div className="border border-2 border-black rounded-full h-[14px] w-[14px]"></div>
              <span className="text-[12px]">
                Sat 28 Sept • {formatTime(flight?.departure.time || "No data")}
              </span>
            </div>

            <div className="h-[130px] flex p-2 gap-3">
              <div className="border-l-2 ml-0 border-gray-400 w-1 h-full  border-dashed"></div>
              <div className="w-full ">
                {flight?.stops?.map((stop, index) => (
                  <h1
                    key={index}
                    className="text-[14px] text-black h-8 font-semibold w-[240px] "
                  >
                    {stop.name}
                  </h1>
                ))}

                <div className="p-7 flex  gap-1 px-14 items-center">
                  <Clock4 color="#787B80" size={16} />
                  {flight?.stops?.map((stop, index) => (
                    <span key={index} className="text-[14px]">
                      {" "}
                      Layover {stop.layover}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex ml-1 items-center gap-2">
              <div className="border border-2 border-black rounded-full h-[14px] w-[14px]"></div>
              <span className="text-[12px]">
                Sat 28 Sept • {formatTime(flight?.departure.time || "No data")}
              </span>
            </div>
            <div className="h-[120px] flex p-2 gap-3">
              <div className="border-l-2 ml-0 border-black w-1 h-full"></div>
              <div className="w-full">
                {flight?.stops?.map((stop, index) => (
                  <h1
                    key={index}
                    className="text-[14px] text-black h-8 font-semibold w-[240px] "
                  >
                    {stop.name}
                  </h1>
                ))}
                <div className="flex flex-col w-full  items-end justify-end">
                  <div className="flex flex-col w-2/5  justify-start items-start">
                    <span className="text-[12px]">
                      {flight?.airline} • {flight?.departure.code}
                    </span>
                    <span className="text-[12px]">
                      Economy • {flight?.flightNumber}
                    </span>
                    <span className="text-[12px]">
                      Flight time {flight?.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="flex ml-1 items-center gap-2">
          <div className="border border-2 border-black rounded-full h-[14px] w-[14px]"></div>
          <span className="text-[12px]">
            {" "}
            {formatTime(flight?.arrival.time || "No data")}
          </span>
        </div>
        <div className="w-full">
          <h1 className="text-[14px] text-black h-10 pl-6 font-semibold w-[250px] ">
            {flight?.arrival.code} • {flight?.departure.airport}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
