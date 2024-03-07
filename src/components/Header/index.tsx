import { Info, Moon } from "lucide-react";

export const Header = () => {
  return (
    <header className="py-10 px-32 border-b-2 border-b-stroke w-full justify-between items-center flex">
      <h1 className="text-off_white font-bold text-2xl">
        Flow<span className="font-extralight">modoro</span>
      </h1>

      <div className="flex gap-8">
        <button className="rounded-md bg-primary text-primary-foreground">
          <Info size={24} color="#FAFAFA" />
        </button>
        <button className="rounded-md bg-primary text-primary-foreground">
          <Moon size={24} color="#FAFAFA" />
        </button>
      </div>
    </header>
  );
};
