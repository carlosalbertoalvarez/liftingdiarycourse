"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Dumbbell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MOCK_WORKOUTS = [
  {
    id: 1,
    name: "Morning Push",
    exercises: ["Bench Press", "Overhead Press", "Tricep Pushdown"],
    duration: "45 min",
  },
  {
    id: 2,
    name: "Cardio Session",
    exercises: ["Treadmill", "Jump Rope"],
    duration: "30 min",
  },
];

export default function DashboardPage() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Dashboard
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            View your logged workouts by date.
          </p>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[220px] justify-start gap-2">
              <CalendarIcon className="size-4 text-zinc-500" />
              {format(date, "do MMM yyyy")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => d && setDate(d)}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div className="space-y-3">
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
            Workouts — {format(date, "do MMM yyyy")}
          </h2>

          {MOCK_WORKOUTS.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <Dumbbell className="mb-3 size-8 text-zinc-300 dark:text-zinc-600" />
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  No workouts logged for this date.
                </p>
              </CardContent>
            </Card>
          ) : (
            MOCK_WORKOUTS.map((workout) => (
              <Card key={workout.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{workout.name}</CardTitle>
                    <span className="text-xs text-zinc-400">
                      {workout.duration}
                    </span>
                  </div>
                  <CardDescription>
                    {workout.exercises.join(" · ")}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
