import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { DatePicker } from "./ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchAirports } from "@/utils/fetchUtils";
import { Airport } from "@/types";
import { Button } from "./ui/button";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";

interface FlightFormProps {
  isOneWay?: boolean;
  flightType: string;
}

const FlightForm = ({ isOneWay, flightType }: FlightFormProps) => {
  const router = useRouter();

  const [airports, setAirports] = useState<Airport[]>([]);
  const [departureAirport, setDepartureAirport] = useState<string>("");
  const [arrivalAirport, setArrivalAirport] = useState<string | null>("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [departureTime, setDepartureTime] = useState<string>("");
  const [returnTime, setReturnTime] = useState<string>();
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const fetchAirportsData = async () => {
      const airportsData = await fetchAirports();
      setAirports(airportsData);
    };

    fetchAirportsData();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await fetch("/api/flights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin: departureAirport,
          destination: arrivalAirport,
          departureDate,
          returnDate,
          departureTime,
          returnTime,
          age,
          flightType,
        }),
      });
      toast("Flight Booked successfully!");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDepartureDateChange = (newDate: Date | undefined) => {
    setDepartureDate(newDate);
  };

  const handleArrivalDateChange = (newDate: Date | undefined) => {
    setReturnDate(newDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <Label>From</Label>
          <Select onValueChange={(value) => setDepartureAirport(value)}>
            <SelectTrigger className="w-[17.5rem]">
              <SelectValue placeholder="Departure Airport" />
            </SelectTrigger>
            <SelectContent>
              {airports.map((airportItem) => (
                <SelectItem key={airportItem.icao} value={airportItem.name}>
                  {airportItem.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="form-group">
          <Label>To</Label>
          <Select onValueChange={(value) => setArrivalAirport(value)}>
            <SelectTrigger className="w-[17.5rem]">
              <SelectValue placeholder="Arrival Airport" />
            </SelectTrigger>
            <SelectContent>
              {airports.map((airportItem) => (
                <SelectItem key={airportItem.icao} value={airportItem.name}>
                  {airportItem.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <Label>Departure</Label>
          <DatePicker
            title="Set Departure Date"
            onDateChange={handleDepartureDateChange}
          />
        </div>
        <div className="form-group">
          <Label>Return</Label>
          <DatePicker
            title="Set Return Date"
            disabled={isOneWay}
            onDateChange={handleArrivalDateChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <Label>Departure Time</Label>
          <Select onValueChange={(value) => setDepartureTime(value)}>
            <SelectTrigger className="w-[17.5rem]">
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11:00 AM AST">11:00 AM AST</SelectItem>
              <SelectItem value="12:00 NN AST">12:00 NN AST</SelectItem>
              <SelectItem value="1:00 PM AST">1:00 PM AST</SelectItem>
              <SelectItem value="2:00 PM AST">2:00 PM AST</SelectItem>
              <SelectItem value="3:00 PM AST">3:00 PM AST</SelectItem>
              <SelectItem value="4:00 PM AST">4:00 PM AST</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="form-group">
          <Label>Return Time</Label>
          <Select onValueChange={(value) => setReturnTime(value)}>
            <SelectTrigger className="w-[17.5rem]" disabled={isOneWay}>
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11:00 AM AST">11:00 AM AST</SelectItem>
              <SelectItem value="12:00 NN AST">12:00 NN AST</SelectItem>
              <SelectItem value="1:00 PM AST">1:00 PM AST</SelectItem>
              <SelectItem value="2:00 PM AST">2:00 PM AST</SelectItem>
              <SelectItem value="3:00 PM AST">3:00 PM AST</SelectItem>
              <SelectItem value="4:00 PM AST">4:00 PM AST</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <Label>Age</Label>
          <Input
            size={31}
            placeholder="Enter Age"
            type="number"
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>
      </div>
      <Button type="submit" size="lg" className="text-md mt-8">
        Book Flight
      </Button>
    </form>
  );
};

export default FlightForm;
