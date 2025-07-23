import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Globe, Pin } from "lucide-react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

export function PinnedCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pinned Announcement</CardTitle>
        <div className="flex flex-row mt-3 gap-1 items-center">
          <Image src="/logo.svg" alt="logo" width={30} height={30}></Image>
          <p className="font-medium">Pupuk Kujang</p>
          <Badge variant={"secondary"} className="ml-auto items-center">
            <Pin />
            Pinned
          </Badge>
        </div>
        <div className="flex flex-row items-center">
          <Globe size={35} className="p-2 text-blue-500" />
          <h1 className="text-muted-foreground">General</h1>
        </div>
        <div className="flex flex-col px-2">
          <h1 className="font-medium text-sm">New Policy: ID Card</h1>
          <CardDescription className="text-sm">
            Starting Monday,28 July 2025, all employees are required to tap
            their ID cards when .....
          </CardDescription>
        </div>
      </CardHeader>
      <Separator />
      <CardHeader>
        <div className="flex flex-row gap-1 items-center">
          <Image src="/logo.svg" alt="logo" width={30} height={30}></Image>
          <p className="font-medium">Pupuk Kujang</p>
          <Badge
            variant={"secondary"}
            className="ml-auto items-center justify-between"
          >
            <Pin />
            Pinned
          </Badge>
        </div>
        <div className="flex flex-row items-center">
          <Globe size={35} className="p-2 text-blue-500" />
          <h1 className="text-muted-foreground">General</h1>
        </div>
        <div className="flex flex-col px-2">
          <h1 className="font-medium text-sm">New Policy: ID Card</h1>
          <CardDescription className="text-sm">
            Starting Monday,28 July 2025, all employees are required to tap
            their ID cards when .....
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
