"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function AppCalender() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="w-full rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  );
}

export default AppCalender;
