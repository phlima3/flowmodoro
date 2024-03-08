import { Header } from "@/components/Header";
import { Timer } from "@/components/Timer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <div className="flex w-full h-full mt-12 px-32">
        <Timer />
      </div>
    </main>
  );
}
