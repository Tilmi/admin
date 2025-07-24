import { Users } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function Card1() {
  return (
    <div>
      <Card>
        <CardHeader className="flex items-center gap-4">
          <Users
            size={40}
            className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 text-blue-500 shadow-lg"
          />
          <div className="flex flex-col">
            <CardTitle>Total Employees</CardTitle>
            <h1 className="text-2xl font-bold mt-1">200</h1>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
