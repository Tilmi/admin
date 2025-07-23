"use client";

import { RadialBar, RadialBarChart, LabelList } from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Employee distribution by position (radial chart)";

const chartData = [
  { position: "Direksi", total: 13, fill: "#2A004E" },
  { position: "SVP", total: 15, fill: "#500073" },
  { position: "VP", total: 24, fill: "#640D5F" },
  { position: "Officer", total: 40, fill: "#D91656" },
  { position: "Staff", total: 80, fill: "#EB5B00" },
  { position: "Internship", total: 18, fill: "#FFB200" },
];

const chartConfig = {
  total: {
    label: "Total Employees",
  },
  direksi: {
    label: "Direksi",
    color: "#2A004E",
  },
  svp: {
    label: "SVP",
    color: "#500073",
  },
  vp: {
    label: "VP",
    color: "#640D5F",
  },
  officer: {
    label: "Officer",
    color: "#D91656",
  },
  staff: {
    label: "Staff",
    color: "#EB5B00",
  },
  internship: {
    label: "Internship",
    color: "#FFB200",
  },
} satisfies ChartConfig;

export function ChartRadialLabel() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Employee Composition</CardTitle>
        <CardDescription>Based on Job Position</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 mt-7">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={120}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="position" />}
            />
            <RadialBar dataKey="total" background>
              <LabelList
                position="insideStart"
                dataKey="position"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-start gap-3 text-sm mt-9">
        {chartData.map((item) => (
          <div key={item.position} className="flex gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.fill }}
            ></span>
            <span className="capitalize">{item.position}</span>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}

export default ChartRadialLabel;
