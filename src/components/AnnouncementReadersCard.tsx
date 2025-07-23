import Image from "next/image";
import { Badge } from "./ui/badge"; // Pastikan kamu memiliki komponen Badge
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function AnnouncementReadersCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Last Read Announcement</CardTitle>
        <CardDescription>People who just read the announcement</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Anggota 1 */}
        <div className="flex flex-rows items-center gap-4">
          <div className="relative w-10 h-10">
            <Image
              className="rounded-full"
              src="/xavier.svg"
              alt="John Doe"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="font-medium">Xavier Doe</p>
              <Badge variant="outline">Internship</Badge>
            </div>
            <p className="text-sm text-muted-foreground">xavier@gmail.com</p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <p className="text-sm text-muted-foreground">
              Last read: 2 hours ago
            </p>
          </div>
        </div>

        {/* Anggota 2 */}
        <div className="flex flex-rows items-center gap-4 mt-5">
          <div className="relative w-10 h-10">
            <Image
              className="rounded-full"
              src="/jhon doe.svg"
              alt="Sarah Mitchell"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="font-medium">Jhon Doe</p>
              <Badge variant="outline">SVP</Badge>
            </div>
            <p className="text-sm text-muted-foreground">jhondoe@gmail.com</p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <p className="text-sm text-muted-foreground">
              Last read: 3 hours ago
            </p>
          </div>
        </div>

        {/* Anggota 3 */}
        <div className="flex flex-rows items-center gap-4 mt-5">
          <div className="relative w-10 h-10">
            <Image
              className="rounded-full"
              src="/jane.svg"
              alt="Kevin Smith"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="font-medium">Marry Jane</p>
              <Badge variant="outline">SVP</Badge>
            </div>
            <p className="text-sm text-muted-foreground">jane@gmail.com</p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <p className="text-sm text-muted-foreground">
              Last read: 5 hours ago
            </p>
          </div>
        </div>

        {/* Anggota 4 */}
        <div className="flex flex-rows items-center gap-4 mt-5">
          <div className="relative w-10 h-10">
            <Image
              className="rounded-full"
              src="/woman.svg"
              alt="Lisa Morgan"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="font-medium">Lisa Morgan</p>
              <Badge variant="outline">VP</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              lisamorgan@gmail.com
            </p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <p className="text-sm text-muted-foreground">
              Last read: 6 hours ago
            </p>
          </div>
        </div>

        {/* Anggota 5 */}
        <div className="flex flex-rows items-center gap-4 mt-5">
          <div className="relative w-10 h-10">
            <Image
              className="rounded-full"
              src="/mathew.svg"
              alt="Richard Moore"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="font-medium">Mathew Moore</p>
              <Badge variant="outline">Officer</Badge>
            </div>
            <p className="text-sm text-muted-foreground">mathew@gmail.com</p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <p className="text-sm text-muted-foreground">
              Last read: 1 day ago
            </p>
          </div>
        </div>

        {/* Anggota 6 */}
        <div className="flex flex-rows items-center gap-4 mt-5">
          <div className="relative w-10 h-10">
            <Image
              className="rounded-full"
              src="/jordan.svg"
              alt="Richard Moore"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="font-medium">jordan Moore</p>
              <Badge variant="outline">Internship</Badge>
            </div>
            <p className="text-sm text-muted-foreground">jordan@gmail.com</p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <p className="text-sm text-muted-foreground">
              Last read: 1 day ago
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default AnnouncementReadersCard;
