import Image from "next/image";
import { Card, CardHeader } from "./ui/card";

export function CardAnnouncement() {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex flex-rows gap-3">
            <Image src="/support.svg" alt="logo" width={40} height={40}></Image>
            <p className="font-medium">Admin</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
