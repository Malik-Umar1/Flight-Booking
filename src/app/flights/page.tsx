import Results from "./components/Result";

type FlightsProps ={
searchParams : {
    from : string,
    to : string,
    departureDate : string,
    returnDate : string
}
}

function Flights({searchParams}:FlightsProps){
    const {from,to,departureDate,returnDate}  = searchParams;
    console.log(searchParams)
return (
    <Results fromAirport={from} toAirport={to} departureDate={departureDate} returnDate ={returnDate} />
)
}

export default Flights;