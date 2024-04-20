import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const OneWayForm = () => {
  return (
    <form>
      <div className="flex gap-4">
        <div>
          <Label>From</Label>
          <Input />
        </div>
        <div>
          <Label>To</Label>
          <Input />
        </div>
      </div>
      <div></div>
    </form>
  );
};

export default OneWayForm;
