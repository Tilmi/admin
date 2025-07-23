import { Files } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";

export function Card4() {
  return (
    <div>
      <Card>
        <CardHeader className="flex items-center gap-4">
          <HoverCard>
            <HoverCardTrigger>
              <Files
                size={40}
                className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2 text-green-500 shadow-lg"
              />
            </HoverCardTrigger>
          </HoverCard>
          <div className="flex flex-col">
            <CardTitle>Total Documents</CardTitle>
            <h1 className="text-2xl font-bold mt-1">10</h1>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
