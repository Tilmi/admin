import { Files } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export function Card5() {
  return (
    <div>
      <Card>
        <CardHeader className="flex items-center gap-4">
          <Files
            size={40}
            className="rounded-full bg-red-500/30 border-1 border-red-500/50 p-2 text-red-500 shadow-lg"
          />
          <div className="flex flex-col">
            <p>Total Files</p>
            <h1 className="text-2xl font-bold ">10</h1>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
