import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";

export function PengumumanSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Plus />
          Create
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Announcement</SheetTitle>
          <SheetDescription>
            Enter the announcement information you want to convey.
          </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 px-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="judul">Title</Label>
            <Input id="judul" placeholder="Contoh: Libur Nasional" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="isi">Announcement Content</Label>
            <Textarea
              id="isi"
              placeholder="Masukkan detail pengumuman di sini..."
            />
          </div>

          {/* Optional: Upload file / pilih tanggal */}
          <div className="grid gap-2">
            <Label htmlFor="file">Appendix (optional)</Label>
            <Input type="file" id="file" />
          </div>
        </div>

        <SheetFooter className="flex justify-between mt-4 px-4">
          <Button type="submit">Send</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
