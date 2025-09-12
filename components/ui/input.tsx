import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "flex h-10 w-full min-w-0 rounded-lg border-2 border-border/60 bg-background/50 px-4 py-2 text-base",
        "shadow-sm transition-all duration-200 outline-none backdrop-blur-sm",
        "hover:border-border hover:bg-background/80 hover:shadow-md",
        "focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/10 focus:shadow-lg",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        "dark:bg-input/30 dark:border-input/60 dark:hover:border-input dark:focus:border-primary",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
