import { Header } from "@/components/Header";
import { ModalAddTask } from "@/components/Modals/ModalAddTask";
import { Tasks } from "@/components/Tasks";
import { Timer } from "@/components/Timer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-background">
        <div className="flex w-full h-full mt-12 px-32 gap-8">
          <Timer />
          <Tasks />
        </div>
      </main>
      4
      <ModalAddTask />
    </>
  );
}
