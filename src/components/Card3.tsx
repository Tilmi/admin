import { Eye, Megaphone } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function Card3() {
  return (
    <div>
      <Card>
        <CardHeader className="flex items-center gap-4">
          <HoverCard>
            <HoverCardTrigger>
              <Eye
                size={40}
                className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2 text-yellow-500 shadow-lg"
              />
            </HoverCardTrigger>
          </HoverCard>
          <div className="flex flex-col">
            <p>Total Views</p>
            <h1 className="text-2xl font-bold">30</h1>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
