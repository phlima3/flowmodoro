import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import * as Icons from "lucide-react";

interface IconType {
  [key: string]: React.ComponentType<{ size?: number; color?: string }>;
}

export function IconPicker() {
  const [search, setSearch] = useState("");
  const [focoused, setFocoused] = useState(false);
  const iconNames = Object.keys(Icons) as Array<keyof IconType>;

  const LucideIcon = Icons.icons[iconNames[0] as keyof typeof Icons.icons];

  console.log(focoused);
  return (
    <div
      className="
      relative
      w-full
      rounded-md
      shadow-md
      flex
      items-center
      justify-center
    "
    >
      <Input
        placeholder="Search for an icon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={(e) => setFocoused(true)}
      />
      {focoused && (
        <div className="flex flex-wrap gap-4 p-4 w-72 bg-white h-48 overflow-y-auto border-2 border-gray-300 rounded-md shadow-md absolute top-[0px] right-0 z-50 custom-scrollbar">
          {iconNames
            .filter((iconName) =>
              String(iconName).toLowerCase().includes(search.toLowerCase())
            )
            .map((iconName) => {
              const LucideIcon =
                Icons.icons[iconName as keyof typeof Icons.icons];
              if (LucideIcon) {
                return (
                  <LucideIcon
                    key={iconName}
                    size={24}
                    color="#000"
                    className="cursor-pointer bg-transparent hover:opacity-100 transition-all duration-300 ease-in-out
                "
                  />
                );
              }
              return null;
            })}
        </div>
      )}
    </div>
  );
}
