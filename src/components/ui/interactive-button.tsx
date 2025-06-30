
import React from "react";
import { cn } from "@/lib/utils";

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blue" | "magenta" | "black" | "facebook";
  children: React.ReactNode;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  variant = "blue",
  children,
  className,
  ...props
}) => {
  const shadowColors = {
    blue: "hover:shadow-[0px_10px_10px_#1e90ff]",
    magenta: "hover:shadow-[0px_10px_10px_#ff00ff]",
    black: "hover:shadow-[0px_10px_10px_#000]",
    facebook: "hover:shadow-[0px_10px_10px_#4267b2]"
  };

  return (
    <div className="flex justify-center items-center">
      <div className={cn(
        "w-auto h-auto flex justify-center items-center transform-gpu transition-all duration-300 rounded-lg mx-2",
        "shadow-[inset_1px_1px_2px_#fff,0_0_5px_rgba(68,68,68,0.13)]",
        "hover:bg-white hover:bg-[position:-100px_100px,-100px_100px]",
        "hover:transform hover:perspective-[180px] hover:rotate-x-[60deg] hover:translate-y-[2px]",
        shadowColors[variant],
        className
      )}>
        <button
          {...props}
          className={cn(
            "cursor-pointer w-full h-full border-none bg-transparent text-lg px-6 py-3 font-medium",
            "transition-all duration-500 ease-[cubic-bezier(0.68,-0.85,0.265,1.55)]",
            "hover:transform hover:translate3d-[0px,20px,30px] hover:perspective-[80px] hover:rotate-x-[-60deg] hover:translate-y-[2px] hover:translate-z-[10px]"
          )}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default InteractiveButton;
