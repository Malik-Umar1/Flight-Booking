import React, { useEffect, useState } from 'react'
import { Dropdown } from './DropDown'
import { ArrowLeftRight } from 'lucide-react'
import { DatePickerDemo } from './DatePicker'
import SearchButton from './SearchButton'

type SearchFlightProps = {
    handleSearch : ()=>void;
    handleInputChange : (arg1:string,arg2?:string)=>void;
}

const SearchFlights = ({handleSearch,handleInputChange}:SearchFlightProps) => {
const [searchData, setSearchData] = useState({
  from: '',
  to: '',
  departureDate:'',
  returnDate:''
});

const [isValid,setIsValid] = useState(false);

useEffect(()=>{
const {from,to,departureDate,returnDate} = searchData;
setIsValid(!!from && !!to && !!departureDate && !!returnDate);
},[searchData]);

const handleInput = (type:string,value?:string) =>{
  setSearchData((prev)=>({
    ...prev,
    [type] : value || ''
  }));
  handleInputChange(type,value)
};

  return (
    <div>
         <div className="mt-4 space-y-5 ">
          <div className="flex space-x-4 items-center">
      
            <div className="w-44">
             <Dropdown placeholder="Where from?" onChange={(value)=>handleInput('from',value)} />
            </div>

            <div className="rounded-[50%] bg-[#F5F7FA]  h-[35px] flex items-center justify-center w-[35px]"> 
              <ArrowLeftRight size={16} />
            </div>
         
            <div className="w-44">
               <Dropdown placeholder="Where to?" onChange={(value)=>handleInput('to',value)} />
            </div>

            <DatePickerDemo placeholder="Departure" onChange={(value)=>handleInput('departureDate',value)} />
            <DatePickerDemo placeholder="Return" onChange={(value)=>handleInput('returnDate',value)}/>
          </div>
          <div className=" flex justify-end">
          <SearchButton isDisabled={!isValid}  handleSearch={handleSearch} />
          </div>
       
        </div>
    </div>
  )
}

export default SearchFlights