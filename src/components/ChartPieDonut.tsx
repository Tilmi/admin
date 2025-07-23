"use client";

import { Pie, PieChart, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { name: "Cuti Bersama", value: 120 },
  { name: "Rapat Divisi", value: 100 },
  { name: "Kebijakan Baru", value: 80 },
  { name: "Town Hall", value: 60 },
  { name: "Reminder Deadline", value: 40 },
];

const total = chartData.reduce((sum, entry) => sum + entry.value, 0);

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"];

const chartConfig = {
  "Cuti Bersama": {
    label: "Cuti Bersama",
    color: COLORS[0],
  },
  "Rapat Divisi": {
    label: "Rapat Divisi",
    color: COLORS[1],
  },
  "Kebijakan Baru": {
    label: "Kebijakan Baru",
    color: COLORS[2],
  },
  "Town Hall": {
    label: "Town Hall",
    color: COLORS[3],
  },
  "Reminder Deadline": {
    label: "Reminder Deadline",
    color: COLORS[4],
  },
};

export function ChartPieDonut() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Top 5 Announcement</CardTitle>
        <CardDescription>Most Read</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-w-[300px] h-[214px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={80}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="flex flex-col gap-2 text-sm w-full max-w-xs">
          {chartData.map((entry, index) => {
            const percentage = ((entry.value / total) * 100).toFixed(2);
            return (
              <div
                key={entry.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span>{entry.name}</span>
                </div>
                <span className="text-muted-foreground">{percentage}%</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default ChartPieDonut;
