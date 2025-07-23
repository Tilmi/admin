import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export function CardProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          This is how others will see you on the site
        </CardDescription>
        <Separator />
        <CardTitle className="mt-4">Username</CardTitle>
        <Input placeholder="pupukkujang" disabled />
        <CardDescription className="px-0">
          This is your public display name. You can only change this once every
          30 days.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle>Email</CardTitle>
        <Input
          type="email"
          placeholder="pupukkujang@gmail.com"
          disabled
          className="mt-2 mb-1"
        />
        {/* <CardDescription className="px-1">
          This is your public email address.
        </CardDescription> */}
        <CardTitle className="mt-4">Phone Number</CardTitle>
        <Input
          type="number"
          placeholder="(0231) 12345678"
          disabled
          className="mt-2 mb-1"
        />
        {/* <CardDescription className="px-1">
          This is your public display phone number.
        </CardDescription> */}
      </CardContent>
    </Card>
  );
}
