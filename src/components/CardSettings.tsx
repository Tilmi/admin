import { SwitchDemo } from "./SwitchSettings";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export function CardSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>Manage and secure your account.</CardDescription>
        <Separator />
        <CardTitle className="mt-4">Current Password</CardTitle>
        <Input type="password" placeholder="••••••••" disabled />
      </CardHeader>
      <CardContent>
        <CardTitle>New Password</CardTitle>
        <Input type="password" placeholder="" disabled className="mt-2 mb-1" />
        <CardTitle className="mt-2">Confirm Password</CardTitle>
        <Input type="password" placeholder="" disabled className="mt-2 mb-1" />
        <div className="flex flex-col mt-2">
          <CardTitle className="mb-2">Two factor authentication</CardTitle>
          <SwitchDemo />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
