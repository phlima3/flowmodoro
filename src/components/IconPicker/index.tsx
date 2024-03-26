import React, { useEffect, useRef, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import * as Icons from "lucide-react";
import { useFormContext } from "react-hook-form";
import { FormLabel } from "../ui/form";

interface IconType {
  [key: string]: React.ComponentType<{ size?: number; color?: string }>;
}

interface IconPickerProps {
  setSelectedIcon: (iconName: string | null) => void;
  selectedIcon: string;
  validateIcon: () => boolean;
}

export function IconPicker({
  setSelectedIcon,
  selectedIcon,
  validateIcon,
}: IconPickerProps) {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const iconNames = useMemo(
    () => Object.keys(Icons) as Array<keyof IconType>,
    []
  );

  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { register, formState } = useFormContext();
  const iconRegister = register("icon");

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
    setMenuOpen(false);
  };

  const handleClearInput = () => {
    setSearch("");
    setSelectedIcon(null);
  };

  useEffect(() => {
    const inputRefCurrent = inputRef.current;

    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        inputRefCurrent !== event.target
      ) {
        setMenuOpen(false);
      }
    }

    function handleInputClick() {
      setLoading(true);
      setTimeout(() => {
        setMenuOpen(true);
      }, 200);
    }

    document.addEventListener("mousedown", handleClickOutside);
    if (inputRefCurrent) {
      inputRefCurrent.addEventListener("click", handleInputClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (inputRefCurrent) {
        inputRefCurrent.removeEventListener("click", handleInputClick);
      }
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setLoading(false);
    }
  }, [menuOpen]);

  return (
    <div className="relative w-full rounded-md shadow-md flex items-center justify-center">
      <div className="flex flex-col w-full">
        <FormLabel className="text-white font-semibold text-base">
          Ícone <span className="text-red-500">*</span>
        </FormLabel>
        <div className="flex gap-2 items-center justify-center w-full">
          <Input
            placeholder="Selecione um ícone"
            value={selectedIcon || search}
            className=" text-white placeholder:text-placeholder"
            ref={inputRef}
            onChange={(e) => {
              if (!selectedIcon) {
                setSearch(e.target.value);
                iconRegister.onChange(e);
              }
            }}
          />

          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
          ) : (
            <>
              {selectedIcon && (
                <Icons.X
                  size={24}
                  className="cursor-pointer"
                  color="#FFF"
                  onClick={handleClearInput}
                />
              )}
            </>
          )}
        </div>

        {!validateIcon() && !loading && menuOpen && (
          <span className="text-red-500 text-sm">
            Selecione um ícone para continuar
          </span>
        )}
      </div>

      {menuOpen && (
        <div
          className="flex flex-wrap gap-4 p-4 w-72 bg-white h-48 overflow-y-auto border-2 border-gray-300 rounded-md shadow-md absolute top-[0px] right-0 z-50 custom-scrollbar"
          ref={menuRef}
        >
          {iconNames
            .filter((iconName) =>
              String(iconName).toLowerCase().includes(search.toLowerCase())
            )
            .map((iconName) => {
              const LucideIcon =
                Icons.icons[iconName as keyof typeof Icons.icons];
              if (LucideIcon) {
                return (
                  <button
                    key={iconName}
                    className="cursor-pointer bg-transparent hover:bg-gray-400 transition-all duration-300 ease-in-out"
                    onClick={() => handleIconClick(String(iconName))}
                  >
                    <LucideIcon key={iconName} size={24} color="#000" />
                  </button>
                );
              }
              return null;
            })}
        </div>
      )}
    </div>
  );
}
