import React, { useState, useEffect } from "react";
import GifComponent from "./GifComponent";

type OverLayProps = {
  loadingStep : number
}

export function LoadingOverlay({loadingStep}:OverLayProps) {
 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-[350px] h-[380px] rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <GifComponent/>
      <div className="flex items-center-justify-center gap-5  min-w-[280px]">
      <CircleWithTick isCompleted={loadingStep >= 1} />
      <p className={`flex items-center ${loadingStep >= 1 ? "text-black" : "text-[#C9CACC]"}`}>Searching 400+ flights</p>
      </div>
        
       <div className="flex items-center-justify-center gap-5  min-w-[280px]">
       <CircleWithTick isCompleted={loadingStep >= 2} />
       <p className={`flex items-center ${loadingStep >= 2 ? "text-black" : "text-[#C9CACC]"}`}>Attaching company rules</p>
       </div>
        
       <div className="flex items-center-justify-center gap-5  min-w-[280px]">
       <CircleWithTick isCompleted={loadingStep >= 3} />
       <p className={`flex items-center ${loadingStep >= 3 ? "text-black" : "text-[#C9CACC]"}`}>Serving best results</p>
       </div>
        
        
      </div>
    </div>
  );
}

function CircleWithTick({ isCompleted }: { isCompleted: boolean }) {
  return (
    <div className="relative w-12 h-10 flex items-center justify-center">
      {isCompleted ? (
        <div className="w-6 h-6 rounded-full flex items-center justify-center border-[3px] border-[#14532d]">
            
          <svg
            className="w-6 h-4 font-semibold  text-[#14532d]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
      ) : (
        <svg
                    className="animate-spin h-6 w-6 text-gray-600 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
      )}
    </div>
  );
}


