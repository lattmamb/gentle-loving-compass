
import * as React from "react"
import { motion, useMotionValue, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

// Custom type to resolve conflicts between React's drag events and framer-motion's drag events
type CardProps = Omit<MotionProps, "onDrag"> & React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<
  HTMLDivElement,
  CardProps
>(({ className, ...props }, ref) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <motion.div
      ref={ref}
      className={cn(
        "rounded-xl border-none bg-card text-card-foreground neo-card floating-element",
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y: hovered ? -10 : 0,
        z: hovered ? 30 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15
      }}
      style={{
        transformStyle: "preserve-3d"
      }}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    style={{ transformStyle: "preserve-3d" }}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

// Custom type for CardTitle to resolve conflicts with framer-motion
type CardTitleProps = Omit<MotionProps, "onDrag"> & React.HTMLAttributes<HTMLHeadingElement>;

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  CardTitleProps
>(({ className, ...props }, ref) => (
  <motion.h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-gradient-blue",
      className
    )}
    style={{ 
      textShadow: "0 5px 15px rgba(59, 130, 246, 0.3)",
      transformStyle: "preserve-3d",
    }}
    whileHover={{ 
      scale: 1.05, 
      z: 15 
    }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 10
    }}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    style={{ transformStyle: "preserve-3d" }}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn("p-6 pt-0", className)} 
    style={{ transformStyle: "preserve-3d" }} 
    {...props} 
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    style={{ transformStyle: "preserve-3d" }}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
