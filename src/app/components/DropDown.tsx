import { Select,SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { LocateFixed } from "lucide-react";
import airports from "@/data/airports.json"

interface DropdownProps {
  placeholder: string;
  onChange?: (value: string) => void; 

}

export function Dropdown({placeholder, onChange}:DropdownProps) {
  const handleValueChange = (value: string):void => {
    if (onChange) {
      onChange(value); 
    }
  };
    return (
        <>
         <Select  onValueChange={handleValueChange}>
                <SelectTrigger  className="w-full border h-[45px] hover:bg-gray-100 p-2 rounded-md">
                  <SelectValue
                    placeholder={
                        <div className="flex items-center">
                            <LocateFixed className="mr-2  text-gray-400" />
                            {placeholder}
                        </div>
                    }
                />
                </SelectTrigger>
                <SelectContent className="h-[200px]">
                    {airports?.map((airport)=>(
                     <SelectItem key={airport.code} value={airport.code}>{`(${airport.code}) ${airport.city}, ${airport.country} `}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
        </>
    )
}