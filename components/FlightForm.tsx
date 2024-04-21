import React from "react";
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

interface FlightFormProps {
  isOneWay?: boolean;
}

const FlightForm = ({ isOneWay }: FlightFormProps) => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group">
          <Label>From</Label>
          <Select>
            <SelectTrigger className="w-[17.5rem]">
              <SelectValue placeholder="Departure Airport" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11:00 AM AST">11:00 AM AST</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="form-group">
          <Label>To</Label>
          <Select>
            <SelectTrigger className="w-[17.5rem]">
              <SelectValue placeholder="Arrival Airport" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11:00 AM AST">11:00 AM AST</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <Label>Departure</Label>
          <DatePicker title="Set Departure Date" />
        </div>
        <div className="form-group">
          <Label>Return</Label>
          <DatePicker title="Set Return Date" disabled={isOneWay} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <Label>Departure Time</Label>
          <Select>
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
          <Select>
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
          <Input size={31} placeholder="Enter Age" type="number" />
        </div>
      </div>
    </form>
  );
};

export default FlightForm;
