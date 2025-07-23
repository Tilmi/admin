"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Number of Read vs Unread Announcements per Month";

const chartData = [
  { month: "January", read: 7, unread: 3 },
  { month: "February", read: 6, unread: 4 },
  { month: "March", read: 5, unread: 5 },
  { month: "April", read: 4, unread: 6 },
  { month: "May", read: 8, unread: 2 },
  { month: "June", read: 6, unread: 4 },
];

const chartConfig = {
  read: {
    label: "Read",
    color: "#2563eb",
  },
  unread: {
    label: "Unread",
    color: "#10b981",
  },
} satisfies ChartConfig;

export function ChartBarStacked() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Announcement Reading Statistics</CardTitle>
        <CardDescription>Period January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="read"
              stackId="a"
              fill="var(--color-read)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="unread"
              stackId="a"
              fill="var(--color-unread)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Kenaikan 5.2% pengumuman dibaca bulan ini{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Data pembacaan pengumuman selama 6 bulan terakhir
        </div>
      </CardFooter> */}
    </Card>
  );
}
export default ChartBarStacked;
