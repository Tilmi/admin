import { BookAlert, FileStack } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export function Card8() {
  return (
    <div>
      <Card>
        <CardHeader className="flex items-center gap-4">
          <BookAlert
            size={40}
            className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2 text-yellow-500 shadow-lg"
          />
          <div className="flex flex-col">
            <CardTitle>Need Action</CardTitle>
            <h1 className="text-2xl font-bold mt-1">1</h1>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
