"use client";

import { IconButton } from "@/components/Button";
import { IconPicker } from "@/components/IconPicker";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useModalStore from "@/store/ModalStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "O título é obrigatório",
  }),
  icon: z.string().min(1, {
    message: "O ícone é obrigatório",
  }),
});

export function ModalAddTask() {
  const { ModalCreateTask, openModal, closeModal } = useModalStore();
  const [selectedIcon, setSelectedIcon] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      icon: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleClose = () => {
    closeModal("ModalCreateTask");
  };

  return (
    <Dialog open={ModalCreateTask} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader className="flex justify-between items-center flex-row">
          <div className="flex gap-4 items-center">
            <Plus size={24} color="#FAFAFA" />
            <div>
              <DialogTitle className="text-off_white text-base">
                Criar Tarefa
              </DialogTitle>
              <DialogDescription className="text-placeholder text-sm">
                Defina os detalhes da sua tarefa
              </DialogDescription>
            </div>
          </div>
          <X size={24} color="#FAFAFA" onClick={handleClose} />
        </DialogHeader>
        <Separator className="bg-stroke" />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Título <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira o título"
                      {...field}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50 text-off_white"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <IconPicker
              setSelectedIcon={
                setSelectedIcon as (iconName: string | null) => void
              }
              selectedIcon={selectedIcon}
            />
            <DialogFooter className="sm:justify-start">
              {/*  <Button type="submit" variant="primary">
              Adicionar Tarefa
            </Button> */}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
