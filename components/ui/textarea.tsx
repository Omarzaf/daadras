import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "flex field-sizing-content min-h-20 w-full rounded-lg border-2 border-border/60 bg-background/50 px-4 py-3 text-base",
        "shadow-sm transition-all duration-200 outline-none backdrop-blur-sm resize-y",
        "hover:border-border hover:bg-background/80 hover:shadow-md",
        "focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/10 focus:shadow-lg",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        "dark:bg-input/30 dark:border-input/60 dark:hover:border-input dark:focus:border-primary",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
