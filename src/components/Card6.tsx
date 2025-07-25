import { FileCheck2 } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export function Card6() {
  return (
    <div>
      <Card>
        <CardHeader className="flex items-center gap-4">
          <FileCheck2
            size={40}
            className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 text-blue-500 shadow-lg"
          />
          <div className="flex flex-col">
            <p>Files Shared</p>
            <h1 className="text-2xl font-bold ">8</h1>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
