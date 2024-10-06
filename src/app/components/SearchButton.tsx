"use client"; 
import { Button } from "@/components/ui/button"; 
import React from "react";


const SearchButton = ({handleSearch,isDisabled}:{isDisabled:boolean,handleSearch:()=>void}) => {


  return (
    <Button disabled={isDisabled} onClick={handleSearch} className=" px-5 w-[220px] bg-[#003E39]">
     Search
  </Button>
  )
}

export default SearchButton