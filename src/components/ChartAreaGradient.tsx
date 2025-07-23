"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Tren jumlah pengumuman yang dibaca per bulan";

const chartData = [
  { month: "January", read: 120 },
  { month: "February", read: 150 },
  { month: "March", read: 180 },
  { month: "April", read: 160 },
  { month: "May", read: 200 },
  { month: "June", read: 220 },
];

const chartConfig = {
  read: {
    label: "Dibaca",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function ChartAreaGradient() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Announcement Reading Trend</CardTitle>
        <CardDescription>
          Data on the number of announcements read from January to June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillRead" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-read)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-read)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="read"
              type="monotone"
              fill="url(#fillRead)"
              stroke="var(--color-read)"
              fillOpacity={0.4}
              strokeWidth={2}
              dot
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ChartAreaGradient;
