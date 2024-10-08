"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type DateProps ={
  onChange?: (val?:string)=>void;
  placeholder?: string;
}

export function DatePickerDemo({placeholder,onChange} :DateProps) {
  const [date, setDate] = React.useState<Date>()
  const handleChange =(val?:Date) =>{
    if(onChange){
      onChange(val?.toISOString())
    }
    setDate(val)
  }
console.log(typeof date)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[170px] justify-start text-left h-[45px]  font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span className="text-black">{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent  className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
