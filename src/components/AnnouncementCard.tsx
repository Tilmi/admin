import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { DropdownMenuDemo } from "./Dropdown";
import { Eye, Globe, Pin } from "lucide-react";

export function AnnouncementCard() {
  return (
    <div>
      <Card className="mb-4">
        <div className="grid">
          <CardHeader>
            <div className="flex flex-row gap-4">
              <Image src="/logo.svg" alt="logo" width={55} height={55}></Image>
              <div className="flex flex-col">
                <p className=" tex-sm font-medium mb-1">Pupuk Kujang</p>
                <div className="flex flex-row gap-2">
                  <Badge variant={"secondary"}>Admin</Badge>
                  <CardDescription>July 23, 9.00 AM</CardDescription>
                </div>
              </div>
              <div className="flex flex-row ml-93 gap-2 items-center">
                <Pin strokeWidth={1.5} className="text-muted-foreground" />
                <DropdownMenuDemo />
              </div>
            </div>
          </CardHeader>
          <div className="grid">
            <CardContent>
              <div className="flex flex-row mt-2 items-center">
                <Globe size={35} className="p-2 text-blue-500" />
                <h1 className="text-muted-foreground">General</h1>
              </div>
              <div className="flex flex-col px-2">
                <h1 className="font-medium">New Policy: ID Card</h1>
                <CardDescription>
                  Starting Monday,28 July 2025, all employees are required to
                  tap their ID cards when entering the office for area access
                  and attendance. Please bring your ID card every day. Thankyou
                  for your cooperation.
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row gap-1 ml-155 mt-4">
                <Eye
                  size={20}
                  strokeWidth={1.5}
                  className="text-muted-foreground items-center"
                />
                <CardDescription>10 views</CardDescription>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
      <Card>
        <div className="grid">
          <CardHeader>
            <div className="flex flex-row gap-4">
              <Image src="/logo.svg" alt="logo" width={55} height={55}></Image>
              <div className="flex flex-col">
                <p className=" tex-sm font-medium mb-1">Pupuk Kujang</p>
                <div className="flex flex-row gap-2">
                  <Badge variant={"secondary"}>Admin</Badge>
                  <CardDescription>July 23, 9.00 AM</CardDescription>
                </div>
              </div>
              <div className="flex flex-row ml-93 gap-2 items-center">
                <Pin strokeWidth={1.5} className="text-muted-foreground" />
                <DropdownMenuDemo />
              </div>
            </div>
          </CardHeader>
          <div className="grid">
            <CardContent>
              <div className="flex flex-row mt-2 items-center">
                <Globe size={35} className="p-2 text-blue-500" />
                <h1 className="text-muted-foreground">General</h1>
              </div>
              <div className="flex flex-col px-2">
                <h1 className="font-medium">New Policy: ID Card</h1>
                <CardDescription>
                  Starting Monday,28 July 2025, all employees are required to
                  tap their ID cards when entering the office for area access
                  and attendance. Please bring your ID card every day. Thankyou
                  for your cooperation.
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row gap-1 ml-155 mt-4">
                <Eye
                  size={20}
                  strokeWidth={1.5}
                  className="text-muted-foreground items-center"
                />
                <CardDescription>10 views</CardDescription>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
      <Card className="mt-4">
        <div className="grid">
          <CardHeader>
            <div className="flex flex-row gap-4">
              <Image src="/logo.svg" alt="logo" width={55} height={55}></Image>
              <div className="flex flex-col">
                <p className=" tex-sm font-medium mb-1">Pupuk Kujang</p>
                <div className="flex flex-row gap-2">
                  <Badge variant={"secondary"}>Admin</Badge>
                  <CardDescription>July 23, 9.00 AM</CardDescription>
                </div>
              </div>
              <div className="flex flex-row ml-93 gap-2 items-center">
                <Pin strokeWidth={1.5} className="text-muted-foreground" />
                <DropdownMenuDemo />
              </div>
            </div>
          </CardHeader>
          <div className="grid">
            <CardContent>
              <div className="flex flex-row mt-2 items-center">
                <Globe size={35} className="p-2 text-blue-500" />
                <h1 className="text-muted-foreground">General</h1>
              </div>
              <div className="flex flex-col px-2">
                <h1 className="font-medium">New Policy: ID Card</h1>
                <CardDescription>
                  Starting Monday,28 July 2025, all employees are required to
                  tap their ID cards when entering the office for area access
                  and attendance. Please bring your ID card every day. Thankyou
                  for your cooperation.
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row gap-1 ml-155 mt-4">
                <Eye
                  size={20}
                  strokeWidth={1.5}
                  className="text-muted-foreground items-center"
                />
                <CardDescription>10 views</CardDescription>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
