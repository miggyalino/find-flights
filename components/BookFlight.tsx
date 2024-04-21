"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import FlightForm from "./FlightForm";

const BookFlight = () => {
  const [formState, setFormState] = useState("One-way");

  return (
    <Card>
      <CardHeader className="bg-yellow-500 rounded-lg">
        <CardTitle className="flexAround gap-16">
          <div className="">
            <p className="text-3xl">Book your flights</p>
          </div>
          <div>
            <Button
              variant="ghost"
              onClick={() => {
                setFormState("One-way");
              }}
            >
              <p className="text-lg">One-way</p>
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setFormState("Round Trip");
              }}
            >
              <p className="text-lg">Round Trip</p>
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-8">
        {formState === "One-way" && <FlightForm isOneWay={true} />}
        {formState === "Round Trip" && <FlightForm />}
      </CardContent>
      <CardFooter>
        <Button size="lg" className="text-md">
          Book Flight
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookFlight;
