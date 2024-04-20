"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import OneWayForm from "./OneWayForm";
import RoundTripForm from "./RoundTripForm";
import MultiCityForm from "./MultiCityForm";

const BookFlight = () => {
  const [formState, setFormState] = useState("One-way");

  return (
    <Card>
      <CardHeader className="bg-yellow-500 rounded-lg">
        <CardTitle className="flex items-center gap-16">
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
            <Button
              variant="ghost"
              onClick={() => {
                setFormState("Multi-city");
              }}
            >
              <p className="text-lg">Multi-city</p>
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {formState === "One-way" && <OneWayForm />}
        {formState === "Round Trip" && <RoundTripForm />}
        {formState === "Multi-city" && <MultiCityForm />}
      </CardContent>
      <CardFooter>
        <Button size="lg" className="text-xl">
          Book Flight
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookFlight;
