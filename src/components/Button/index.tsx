import React, { forwardRef } from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  buttonType?: "primary" | "secondary";
  icon?: React.ReactNode;
};

export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className, icon, buttonType = "primary" }, ref) => {
    const buttonClass =
      buttonType === "primary"
        ? "flex items-center justify-center h-12 bg-off_white rounded-md text-button_dark font-semibold size-4 transition-all duration-300 ease-in-out hover:bg-[#E5E5E5] hover:text-button_light"
        : "flex items-center justify-center  h-12 bg-secondary_button rounded-md text-white font-semibold size-4 transition-all duration-300 ease-in-out  hover:text-button_light";

    return (
      <button
        ref={ref}
        className={`${buttonClass} ${className} ${icon && "gap-3"}`}
        onClick={onClick}
      >
        {icon && icon} {children}
      </button>
    );
  }
);

IconButton.displayName = "Button";
