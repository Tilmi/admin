import { FileCheck2, FileStack } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export function Card7() {
  return (
    <div>
      <Card>
        <CardHeader className="flex items-center gap-4">
          <FileStack
            size={40}
            className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2 text-green-500 shadow-lg"
          />
          <div className="flex flex-col">
            <p>Files Pending</p>
            <h1 className="text-2xl font-bold">1</h1>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
