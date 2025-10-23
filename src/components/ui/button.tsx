
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "liquid-glass-button liquid-primary rounded-xl",
        destructive: "liquid-glass-button rounded-xl bg-gradient-to-b from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500 border-red-500/30",
        outline: "liquid-glass-button rounded-xl text-foreground hover:text-primary",
        secondary: "liquid-glass-button liquid-secondary rounded-xl",
        ghost: "hover:liquid-glass rounded-lg text-foreground/80 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        neo: "neo-button",
        glow: "liquid-glass-button liquid-primary liquid-glow rounded-xl",
        glass: "liquid-glass-card rounded-xl text-foreground",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-13 rounded-xl px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
