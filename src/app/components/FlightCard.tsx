import React from "react";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/utils/TimeFormatter";
import FlightImage from "./FlightImage";
import { TFlight } from "@/data/types/types";

type FlightCardProps = {
    data : TFlight;
    handleSideSlider : (id:string)=>void

}

const FlightCard = ({ data, handleSideSlider }: any) => {
  console.log("data", data);

  return (
    <div className="w-full border hover:bg-[#f2f2f2] flex items-center px-5 rounded-lg mb-3">
      <div className="w-[80%] border-r space-y-3">
        <div className="flight w-full ">
          <div className="flex  justify-between p-2">
            <div className="flex gap-3 ">
              <div className="img  h-[50px] w-[50px] p-1 rounded-xl border-2">
                <FlightImage/>
              </div>
              <div>
                <span className="text-[13px]">
                  {data.airline} • {data.flightNumber}
                </span>
                <h1 className="text-[16px] text-black">
                  {formatTime(data.departure.time)} -{" "}
                  {formatTime(data.arrival.time)}
                </h1>
              </div>
            </div>

            <div className=" flex gap-10 ">
              <div>
                <span className="text-[14px] ">
                  {data.departure.code} - {data.arrival.code}
                </span>
                <h1 className="text-[16px] text-black">{data.duration}</h1>
              </div>

              <div>
                <span>Stop or No stop</span>
                <h1 className="text-[16px] text-black">
                  {data.stops.length} Stop(s)
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 flex flex-col justify-end">
        <span className="text-[14px]">from</span>
        <h1 className="text-[20px] text-black">
          {data.price.currency} {data.price.amount}
        </h1>

        <Button
          onClick={() => handleSideSlider(data.id)}
          className="px-5 w-[220px] bg-[#003E39]"
        >
          Select
        </Button>
      </div>
    </div>
  );
};

export default FlightCard;
