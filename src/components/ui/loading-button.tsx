
import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { LoadingAnimation } from "@/components/ui/loading-animation";
import { cn } from "@/lib/utils";

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}

export function LoadingButton({
  children,
  isLoading = false,
  loadingText,
  disabled,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      className={cn(className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <LoadingAnimation variant="button" />
          {loadingText || children}
        </span>
      ) : (
        children
      )}
    </Button>
  );
}
