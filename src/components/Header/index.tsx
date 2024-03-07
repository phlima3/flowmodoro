import { Info, Moon } from "lucide-react";

export const Header = () => {
  return (
    <div className="py-10 px-32 border-b-2 border-b-stroke w-full justify-between items-center">
      <h1 className="text-off_white font-bold text-2xl">
        Flow<span className="font-extralight">modoro</span>
      </h1>

      <div>
        <button className="p-2 rounded-md bg-primary text-primary-foreground">
          <Info size={24} color="#FAFAFA" />
        </button>
        <button className="p-2 rounded-md bg-primary text-primary-foreground">
          <Moon size={24} color="#FAFAFA" />
        </button>
      </div>
    </div>
  );
};
