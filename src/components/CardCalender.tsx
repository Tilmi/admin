import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export function CardCalender() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Details Day</CardTitle>
        <CardDescription>Dont miss scheduled the events</CardDescription>
      </CardHeader>
      <Card className="mx-4">
        <CardHeader>
          <CardTitle className="flex justify-between">
            Meetings
            <Badge variant={"secondary"}>09.00-11.00 AM</Badge>
          </CardTitle>
          <CardDescription>Online</CardDescription>
          <CardContent className="px-0 mt-3 flex flex-rows gap-2 items-center">
            <Calendar />
            <CardDescription>Monday, Juli 2025</CardDescription>
          </CardContent>
        </CardHeader>
      </Card>
      <Card className="mx-4">
        <CardHeader>
          <CardTitle className="flex justify-between">
            Meetings
            <Badge variant={"secondary"}>09.00-11.00 AM</Badge>
          </CardTitle>
          <CardDescription>Online</CardDescription>
          <CardContent className="px-0 mt-3 flex flex-rows gap-2 items-center">
            <Calendar />
            <CardDescription>Monday, Juli 2025</CardDescription>
          </CardContent>
        </CardHeader>
      </Card>
      <Card className="mx-4">
        <CardHeader>
          <CardTitle className="flex justify-between">
            Meetings
            <Badge variant={"secondary"}>09.00-11.00 AM</Badge>
          </CardTitle>
          <CardDescription>Online</CardDescription>
          <CardContent className="px-0 mt-3 flex flex-rows gap-2 items-center">
            <Calendar />
            <CardDescription>Monday, Juli 2025</CardDescription>
          </CardContent>
        </CardHeader>
      </Card>
    </Card>
  );
}
