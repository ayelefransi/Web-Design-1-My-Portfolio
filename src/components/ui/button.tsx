import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-red-600 to-blue-500 text-white hover:from-red-500 hover:to-blue-400 hover:shadow-lg hover:shadow-red-500/30 transform hover:scale-105",
        destructive:
          "bg-gradient-to-r from-red-700 to-red-500 text-white hover:from-red-600 hover:to-red-400 hover:shadow-lg hover:shadow-red-500/30 transform hover:scale-105",
        outline:
          "border border-red-500/30 bg-slate-900/50 backdrop-blur-sm text-red-400 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-blue-500/10 hover:border-red-400/50 hover:text-red-300 hover:shadow-lg hover:shadow-red-500/25",
        secondary:
          "bg-gradient-to-r from-red-800/80 to-blue-700/80 text-white hover:from-red-700/90 hover:to-blue-600/90 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105",
        ghost: "text-red-300 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-blue-500/10 hover:text-red-200 hover:shadow-lg hover:shadow-red-500/20",
        link: "text-red-400 underline-offset-4 hover:underline hover:text-red-300 transition-colors",
        quantum: "bg-gradient-to-r from-red-600 via-blue-500 to-red-600 bg-[length:200%_100%] text-white hover:bg-[position:100%_0%] hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105 animate-[gradient_3s_ease_infinite]",
        neon: "bg-gradient-to-r from-red-500 via-blue-400 to-red-600 text-white hover:from-red-400 hover:via-blue-300 hover:to-red-500 hover:shadow-2xl hover:shadow-red-400/50 transform hover:scale-110 transition-all duration-500",
        glow: "bg-gradient-to-r from-red-600 via-blue-500 to-red-700 text-white hover:from-red-500 hover:via-blue-400 hover:to-red-600 hover:shadow-2xl hover:shadow-red-500/60 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500/20 before:via-blue-500/20 before:to-red-700/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
