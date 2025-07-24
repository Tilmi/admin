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

export function DocumentSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>
          <Plus />
          Add Document
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Upload Document</SheetTitle>
          <SheetDescription>
            Fill in the details for the document you want to upload.
          </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-4 px-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="judul">Document Title</Label>
            <Input id="judul" placeholder="Contoh: Project Report" />
          </div>

          {/* Upload file */}
          <div className="grid gap-2">
            <Label htmlFor="file">Upload Document</Label>
            <Input type="file" id="file" />
          </div>
        </div>

        <SheetFooter className="flex justify-between mt-4 px-4">
          <Button type="submit">Upload</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
