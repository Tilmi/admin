import { SwitchDemo } from "./SwitchSettings";
import { Button } from "./ui/button";
import {
  Card,
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
        <CardDescription>
          Manage and Secure your account password
        </CardDescription>
        <Separator />
        <CardTitle className="mt-4"> Current Password</CardTitle>
        <Input disabled type="password" placeholder="••••••••" />
        <CardTitle className="mt-2"> New Password</CardTitle>
        <Input disabled type="password" />
        <CardTitle className="mt-2"> Confirm Password</CardTitle>
        <Input disabled type="password" />
        <CardTitle className="mt-2 mb-1"> Two-Factor Authentication</CardTitle>
        <SwitchDemo />
      </CardHeader>
      <CardFooter className="flex justify-end gap-3">
        <Button type="submit" variant={"outline"}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </CardFooter>
    </Card>
  );
}
