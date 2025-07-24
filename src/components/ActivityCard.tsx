import { Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

export function ActivityCard() {
  return (
    <div className="grid">
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center gap-2">
            {/* <Clock /> */}
            <CardTitle>Recent Activity</CardTitle>
          </div>
          <CardDescription>view all activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-rows items-center gap-4 mb-5">
            <div className="relative w-10 h-10">
              <Image
                className="rounded-full"
                src="/logo.svg"
                alt="John Doe"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Added a new announcement
              </p>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <p className="text-sm text-muted-foreground">
                23 Juli 2025, 10.30
              </p>
            </div>
          </div>
          <div className="flex flex-rows items-center gap-4 mb-5">
            <div className="relative w-10 h-10">
              <Image
                className="rounded-full"
                src="/logo.svg"
                alt="John Doe"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Deleted Jhon Doe account
              </p>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <p className="text-sm text-muted-foreground">
                23 Juli 2025, 12.30
              </p>
            </div>
          </div>
          <div className="flex flex-rows items-center gap-4 mb-5">
            <div className="relative w-10 h-10">
              <Image
                className="rounded-full"
                src="/logo.svg"
                alt="John Doe"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Added a new announcement
              </p>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <p className="text-sm text-muted-foreground">
                23 Juli 2025, 15.30
              </p>
            </div>
          </div>
          <div className="flex flex-rows items-center gap-4 mb-5">
            <div className="relative w-10 h-10">
              <Image
                className="rounded-full"
                src="/logo.svg"
                alt="John Doe"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Added a new announcement
              </p>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <p className="text-sm text-muted-foreground">
                23 Juli 2025, 15.30
              </p>
            </div>
          </div>
          <div className="flex flex-rows items-center gap-4 mb-5">
            <div className="relative w-10 h-10">
              <Image
                className="rounded-full"
                src="/logo.svg"
                alt="John Doe"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Added 5 new users data
              </p>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <p className="text-sm text-muted-foreground">
                23 Juli 2025, 15.30
              </p>
            </div>
          </div>
          <div className="flex flex-rows items-center gap-4 mb-3">
            <div className="relative w-10 h-10">
              <Image
                className="rounded-full"
                src="/logo.svg"
                alt="John Doe"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Deleted 3 users data
              </p>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <p className="text-sm text-muted-foreground">
                23 Juli 2025, 15.30
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
