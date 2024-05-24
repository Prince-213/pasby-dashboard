import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Block</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Block pasby</DialogTitle>
          <DialogDescription>
            Are you sure you want to block your pasby?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              className=" bg-bankblue text-white"
              variant="secondary"
            >
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              Block
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
