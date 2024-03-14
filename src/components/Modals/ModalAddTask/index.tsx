"use client";

import { Button } from "@/components/Button";
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
import useModalStore from "@/store/ModalStore";

export function ModalAddTask() {
  const { ModalCreateTask, openModal, closeModal } = useModalStore();

  const handleClose = () => {
    closeModal("ModalCreateTask");
  };
  return (
    <Dialog open={ModalCreateTask} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <Button>Share</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
